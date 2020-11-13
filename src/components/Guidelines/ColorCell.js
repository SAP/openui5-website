import React from "react";
import classnames from "classnames";
import styles from "./tableStyles.module.css";


const getContrastFontColor = (hexcolor) => {
    hexcolor = hexcolor.replace("#", "");
	let r = parseInt(hexcolor.substr(0,2),16);
	let g = parseInt(hexcolor.substr(2,2),16);
	let b = parseInt(hexcolor.substr(4,2),16);
	let yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? 'black' : 'white';
}

const ColorCell = ({ children, ...props }) => {
    if (children && children.length === 2 && typeof children[1] === "string") {
        let backgroundColor = children[1].trim();
        if (backgroundColor.indexOf("#") === 0) {
            let color = getContrastFontColor(backgroundColor);

            return (
                <td className={classnames(styles.ColorCell)} style={{backgroundColor: backgroundColor, color: color}}>
                    {children[0]}
                    <span>{backgroundColor}</span>
                </td>
            );
        }
    }
    return (
        <td
            className={classnames(
                styles.ColorCell,
            )}
            {...props}
        >{children}</td>
    );
};

export default ColorCell;