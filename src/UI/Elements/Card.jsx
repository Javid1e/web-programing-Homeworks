import React from "react";
import PropTypes from "prop-types";
import styleSheet from "./StyleSheets/Card.module.css";
const Card = ({ className, isDefault, children }) => {
  const combinedClassName = `${
    isDefault ? styleSheet["defaultCard"] : styleSheet["childCard"]
  } ${className}`;
  return <div className={combinedClassName}>{children}</div>;
};

Card.propTypes = {
  className: PropTypes.string,
  isDefault: PropTypes.bool,
  children: PropTypes.node,
};

Card.defaultProps = {
  isDefault: false,
};

export default Card;
