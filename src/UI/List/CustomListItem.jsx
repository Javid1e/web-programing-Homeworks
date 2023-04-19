import React from "react";
import PropTypes from "prop-types";
import styleSheet from "./StyleSheets/CustomListItem.module.css";
function CustomListItem(props) {
    const { className, children, ...rest } = props;
    const combinedClassName = `${styleSheet["listItem"]} ${className}`;
    return (
        <li className={combinedClassName} {...rest}>
            {children}
        </li>
    );
}

CustomListItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
};

export default CustomListItem;
