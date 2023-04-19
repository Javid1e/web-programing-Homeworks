import React from "react";
import PropTypes from "prop-types";
import styleSheet from "./StyleSheets/CustomImage.module.css";

class CustomImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
        };
    }

    componentDidMount() {
        console.log("CustomImage component mounted.");
        this.setState({ isMounted: true });
    }

    componentWillUnmount() {
        console.log("CustomImage component will unmount.");
    }

    render() {
        const { src, alt, className,size, ...props } = this.props;
        const combinedClassName =`${ size === 'big' ? styleSheet["ImageBig"] : styleSheet['ImageSmall']} ${className}`;
        return <img src={src} alt={alt} className={combinedClassName} {...props} />;
    }
}

CustomImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size:PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default CustomImage;
