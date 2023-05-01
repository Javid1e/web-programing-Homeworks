import React from "react";
import PropTypes from "prop-types";
import styleSheet from "./StyleSheets/CustomLabel.module.css";
// CustomLabel component
class CustomLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }
  // Set isMounted to true when component is mounted
  componentDidMount() {
    this.setState({ isMounted: true });
  }
  // Unmount component
  componentWillUnmount() {}
  render() {
    const { className, type, isHeader,htmlFor, children, ...props } = this.props;
    const combinedClassName = `${
      isHeader ? styleSheet["headerLabel"] : styleSheet["alertLabel"]
    } ${className}`;
    return (
      <label className={combinedClassName} {...props}>
        {children}
      </label>
    );
  }
}
// Proptypes for CustomLabel component
CustomLabel.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["HeaderLabel", "AlertLabel"]).isRequired,
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  style: PropTypes.object,
  isHeader:PropTypes.bool
};
// Export CustomLabel component
export default CustomLabel;
