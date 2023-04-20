import React from "react";
import PropTypes from "prop-types";
import styleSheet from "./StyleSheets/CustomButton.module.css";
// CustomButton component
class CustomButton extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }
  // lifecycle method to set state when component mounts
  componentDidMount() {
    this.setState({ isMounted: true });
  }
  // lifecycle method to unmount component
  componentWillUnmount() {}
  // render method
  render() {
    // destructure props
    const { children, className, type, ...props } = this.props;
    // create combined class name
    const combinedClassName = `${
      type === "submit" ? styleSheet.ButtonSubmit : styleSheet.ButtonClose
    } ${className}`;
    // return button element with combined class name and props
    return (
      <button className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
}
// prop types for CustomButton component
CustomButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "close"]).isRequired,
  style: PropTypes.object,
};
// default props for CustomButton component
CustomButton.defaultProps = {
  type: "button",
};
// export CustomButton component
export default CustomButton;
