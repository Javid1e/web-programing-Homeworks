import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./StyleSheets/CustomInput.module.css";
import CustomP from "./CustomP";
import CustomLabel from "./CustomLabel";

const CustomInput = ({
  id,
  min,
    max,
  label,
  error,
  type,
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
    readOnly,
  className,
  isDefault,
}) => {
  const inputStyles = error
    ? `${styles.customInput} ${styles.error}`
    : styles.customInput;
  return (
    <div className={styles.customInput}>
      {label && <CustomLabel htmlFor={id} type={"HeaderLabel"} children={label} isHeader={true}/>}
      <input
        id={id}
        min={min}
        max={max}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={inputStyles}
        readOnly={readOnly}
      />
      {error && (
        <CustomP isMessage={false} children={"پر کردن این فیلد الزامی است."}/>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  id: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
  error: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  className: PropTypes.string,
  isDefault: PropTypes.bool,
  readOnly:PropTypes.bool
};

CustomInput.defaultProps = {
  type: "text",
  className: "",
  isDefault: false,
};

export default CustomInput;
