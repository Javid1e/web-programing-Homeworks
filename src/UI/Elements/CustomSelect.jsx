import React from "react";
import PropTypes from "prop-types";
import CustomOption from "./CustomOption";
import styleSheet from "./StyleSheets/CustomSelect.module.css";
class CustomSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
        };
    }

    componentDidMount() {
        console.log("CustomSelect component mounted.");
        this.setState({ isMounted: true });
    }

    componentWillUnmount() {
        console.log("CustomSelect component will unmount.");
    }

    render() {
        const { className, children, options, ...props } = this.props;
        const combinedClassName = `${ styleSheet["select"]} ${className}`;
        return (
            <select className={combinedClassName} {...props}>
                {options.map((option) => (
                    <CustomOption value={option.value} label={option.label} />
                ))}
                {children}
            </select>
        );
    }
}

CustomSelect.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
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