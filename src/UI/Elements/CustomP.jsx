import React from "react";
import PropTypes from "prop-types";
import styleSheet from "./StyleSheets/CustomP.module.css";
// CustomP component
class CustomP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }
  // Lifecycle method to set isMounted state to true when component mounts
  componentDidMount() {
    this.setState({ isMounted: true });
  }
  // Lifecycle method to handle unmounting of component
  componentWillUnmount() {}
  // Render method to render the component
  render() {
    const { children, isMessage, className, ...props } = this.props;
    // Combine class names based on isMessage prop
    const combinedClassName = `${
      isMessage ? styleSheet.message : styleSheet.alert
    } ${className}`;
    return (
      <p className={combinedClassName} {...props}>
        {children}
      </p>
    );
  }
}
// PropTypes for CustomP component
CustomP.propTypes = {
  isMessage: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
};
// Export CustomP component
export default CustomP;
