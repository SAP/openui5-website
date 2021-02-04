import React from "react";
import PropTypes from "prop-types";
import generateHref from "./generator";


const isIE = () => {
    if (typeof window !== 'undefined') {
        return /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(window.navigator.userAgent)
    }
    return false;
};

const onClickDownloadIE = (session) => {
    let ieCanDownload = ('msSaveOrOpenBlob' in window.navigator);
    if (isIE && ieCanDownload) {
      let blob = new Blob([generateHref("ics", session)], { type: 'text/calendar' });
      window.navigator.msSaveOrOpenBlob(blob, session.title.replace(" ", "_"));
    }
}

const CalendarButton = ({ session, type, className, children }) => {
    const isIcs = ["outlook", "ical"].includes(type);
    return (
        <>
            {
                type === 'google' || type === 'office365'
                    ? (
                        <a
                            className={className}
                            target="_blank"
                            href={generateHref(type, session)}
                        >{children}</a>
                    )
                    : null
            }
            {
                isIcs && isIE()
                    ? <a className={className} onClick={() => onClickDownloadIE(session)}>{children}</a>
                    : null
            }
            {
                isIcs && !isIE()
                    ? (
                        <a
                            className={className}
                            target="_blank"
                            href={generateHref(type, session)}
                            download={type === 'ics' ? `${session.title.replace(" ", "_")}.ics` : ''}
                        >{children}</a>
                    )
                    : null
            }
        </>
    );
};

CalendarButton.defaultProps = {
    session: {},
};

CalendarButton.propTypes = {
    // session: PropTypes.object.isRequired,
    type: PropTypes.oneOf(["google", "office365", "outlook", "ical"]).isRequired,
};



export default CalendarButton;