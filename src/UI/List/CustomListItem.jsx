import React from "react";
import PropTypes from "prop-types";
import styleSheet from "./StyleSheets/CustomListItem.module.css";
function CustomListItem(props) {
  const { className, children } = props;
  const combinedClassName = `${styleSheet["list-item"]} ${className}`;
  return <li className={combinedClassName}>{children}</li>;
}

CustomListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default CustomListItem;
