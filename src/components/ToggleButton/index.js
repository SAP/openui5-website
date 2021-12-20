import React from "react";
import PropTypes from "prop-types";
import cx from "classnames"


import styleModule from "./styles.module.css"


const ToggleButton = ({ buttons, selectedKey, verticalAlign=false, onClick, classNames }) => {
    const selectedButtonIndex = buttons.findIndex(button => button.key === selectedKey);

    return (
        <div className={cx(styleModule.ToggleButtons, classNames || '')}>
            {
                buttons.map(button =>
                    <div
                        key={button.key}
                        onClick={()=>onClick(button.key)}
                        className={cx(
                            styleModule.Button,
                            button.key === selectedKey ? styleModule.selected : null,
                            verticalAlign ? styleModule.verticalAlign : null
                        )}>
                        { button.title }
                        { button.subtitle
                            ? <div className={styleModule.subtitle}>{button.subtitle}</div>
                            : null
                        }
                    </div>
                )
            }
            <div
                className={styleModule.Selection}
                style={{
                    left: `${selectedButtonIndex * 50}%`
                }}
            />
        </div>
    );
};

ToggleButton.propTypes = {
    buttons: PropTypes.array,
    selectedKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    verticalAlign: PropTypes.bool,
    onClick: PropTypes.func
}


export default ToggleButton;