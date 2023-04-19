import React from "react";
import PropTypes from "prop-types";
import styleSheet from "./StyleSheets/CustomList.module.css";
class CustomList extends React.Component {
    render() {
        const { data, renderItem, className, ...props } = this.props;
        const combinedClassName = `${styleSheet["customList"]} ${className}`;
        return (
            <ul className={combinedClassName} {...props}>
                {data.map((item, index) => {
                    return (
                        <CustomListItem key={index}>
                            {renderItem(item)}
                        </CustomListItem>
                    );
                })}
            </ul>
        );
    }
}

CustomList.propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};


export default CustomList;
