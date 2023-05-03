import React from "react";
import PropTypes from "prop-types";
import CustomOption from "./CustomOption";
import styleSheet from "./StyleSheets/CustomSelect.module.css";
import CustomLabel from "./CustomLabel";
import CustomP from "./CustomP";

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  componentWillUnmount() {}

  render() {
    const {
      id,
      className,
      children,
      label,
      error,
      options,
      errorMessage,
      ...props
    } = this.props;
    const combinedClassName = `${styleSheet.select} ${className}`;
    return (
      <div className={styleSheet.customSelectRoot}>
        <div className={styleSheet.selectContainer}>
          {label && (
            <CustomLabel
              htmlFor={id}
              type={"HeaderLabel"}
              children={label}
              isHeader={true}
            />
          )}
          <select id={id} className={combinedClassName} {...props}>
            {options.map((option) => (
              <CustomOption
                key={option.id}
                value={option.value}
                label={option.label}
              />
            ))}
            {children}
          </select>
        </div>
        {error && (
          <CustomP id={"error"} children={errorMessage} isMessage={false} />
        )}
      </div>
    );
  }
}

CustomSelect.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  error: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  defaultValue: PropTypes.string,
  style: PropTypes.object,
};

export default CustomSelect;
