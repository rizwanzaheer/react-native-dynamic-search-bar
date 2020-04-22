"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_dynamic_vector_icons_1 = tslib_1.__importDefault(require("react-native-dynamic-vector-icons"));
/**
 * ? Local Imports
 */
const SearchIcon_style_1 = tslib_1.__importDefault(require("./SearchIcon.style"));
class SearchIcon extends React.PureComponent {
    render() {
        const { iconName, iconType, iconSize, iconColor, iconComponent, } = this.props;
        return (<react_native_1.View style={[SearchIcon_style_1.default.container]}>
        {iconComponent || (<react_native_dynamic_vector_icons_1.default name={iconName} type={iconType} size={iconSize} color={iconColor}/>)}
      </react_native_1.View>);
    }
}
exports.default = SearchIcon;
SearchIcon.defaultProps = {
    iconName: "search",
    iconType: "Octicons",
    iconSize: 20,
    iconColor: "#807DE7",
};