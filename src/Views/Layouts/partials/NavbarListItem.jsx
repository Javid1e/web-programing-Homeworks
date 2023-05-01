import React from "react";
import PropTypes from "prop-types";
function NavbarListItem(props) {
    const { className, children, ...rest } = props;
    const combinedClassName = `${styleSheet["listItem"]} ${className}`;
    return (
        <li className={combinedClassName} {...rest}>
            {children}
        </li>
    );
}

NavbarListItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
};

export default NavbarListItem;