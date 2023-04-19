import React from "react";
import PropTypes from "prop-types";
import styleSheet from "./StyleSheets/CustomOption.module.css";
class CustomOption extends React.Component {
    render() {

        const { value, label,className } = this.props;
        const combinedClassName = `${ styleSheet["customOption"]} ${className}`;
        return <option className={combinedClassName} value={value}>{label}</option>;
    }
}

CustomOption.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default CustomOption;