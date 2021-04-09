import React from "react";
import PropTypes from "prop-types";
import generateHref from "./generator"

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

const CalendarButton = ({ event, type, className, children }) => {
    return (
        <>
            {
                type === 'google' || type === 'office365'
                    ? (
                        <a
                            className={className}
                            target="_blank"
                            rel="noreferrer"
                            href={generateHref(type, event)}
                        >{children}</a>
                    )
                    : null
            }
            {
                type === 'ics' && isIE()
                    ? <a className={className} onClick={() => onClickDownloadIE(event)}>{children}</a>
                    : null
            }
            {
                type === 'ics' && !isIE()
                    ? (
                        <a
                            className={className}
                            target="_blank"
                            rel="noreferrer"
                            href={generateHref(type, event)}
                            download={type === 'ics' ? `${event.title.replace(" ", "_")}.ics` : ''}
                        >{children}</a>
                    )
                    : null
            }
        </>
    );
};

CalendarButton.propTypes = {
    event: PropTypes.object.isRequired,
    type: PropTypes.oneOf(["google", "office365", "ics"]).isRequired,
}

export default CalendarButton;
