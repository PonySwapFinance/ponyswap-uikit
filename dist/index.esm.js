import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, flexbox, layout } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("image", { width: "32", height: "32", href: "/images/ponyswap/logo.png" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/ponyswap/9.png" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), flexbox, space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled(GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$A, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("image", { width: "96", height: "96", href: "/images/ponyswap/9.png" })));
};
var Container$1 = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked },
        React.createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React.createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$k, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 205 26" }, props),
        React.createElement("image", { width: "205", height: "26", href: isDark ? '/images/ponyswap/LogoTextNewDark.png' : '/images/ponyswap/LogoTextNewWhite.png' })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React.createElement("g", { id: "surface1" },
            React.createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React.createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React.createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\r\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\r\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\r\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\r\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\r\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\r\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\r\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\r\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\r\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\r\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\r\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\r\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\r\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\r\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\r\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\r\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\r\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\r\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\r\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\r\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\r\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\r\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\r\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\r\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\r\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\r\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\r\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\r\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\r\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\r\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\r\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\r\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\r\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\r\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 506.161 506.161" }, props),
        React.createElement("path", { d: "m165.858 329.247c6.161-5.421 6.766-14.807 1.352-20.974l-.818-.939c-2.599-2.953-6.269-4.745-10.195-4.98-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-19.921 17.488-18.142 15.923c-6.143 5.428-6.744 14.799-1.345 20.967l.832.953c5.425 6.158 14.811 6.763 20.981 1.352l13.945-12.237z" }),
        React.createElement("path", { d: "m118.026 369.9c-.413 0-.818 0-1.231-.036-4.876-.301-9.428-2.541-12.643-6.218l-.84-.96c-6.678-7.643-5.931-19.245 1.672-25.969l38.078-33.439c3.675-3.216 8.473-4.847 13.347-4.539 4.876.301 9.428 2.54 12.643 6.218l1.167 1.359c6.366 7.663 5.477 19.001-2.006 25.577l-38.064 33.439c-3.346 2.955-7.659 4.58-12.123 4.568zm37.167-64.032c-2.744.014-5.389 1.026-7.442 2.846l-38.064 33.439c-4.669 4.132-5.123 11.259-1.017 15.951l.84.96c4.128 4.676 11.262 5.131 15.951 1.017l38.057-33.439c4.682-4.122 5.14-11.257 1.025-15.944l-.832-.96c-1.97-2.253-4.76-3.624-7.748-3.806z" }),
        React.createElement("path", { d: "m219.282 366.414c-3.605-.005-7.089 1.305-9.797 3.685l-19.644 17.246c-6.173 5.417-6.786 14.812-1.37 20.985 5.417 6.173 14.812 6.786 20.985 1.37l19.644-17.246c6.173-5.41 6.791-14.8 1.381-20.973-2.827-3.226-6.91-5.073-11.199-5.067z" }),
        React.createElement("path", { d: "m199.667 416.942c-10.173.018-18.434-8.215-18.452-18.388-.009-5.317 2.28-10.38 6.279-13.884l19.651-17.246c7.748-6.414 19.154-5.672 26.004 1.693 6.714 7.651 5.956 19.295-1.693 26.011l-19.644 17.246c-3.357 2.953-7.676 4.577-12.145 4.568zm19.622-46.956c-2.746-.021-5.405.96-7.478 2.76l-19.651 17.246c-4.698 4.126-5.161 11.279-1.035 15.976 4.126 4.698 11.279 5.161 15.976 1.035l19.651-17.225c4.696-4.115 5.166-11.258 1.051-15.953-2.151-2.454-5.258-3.859-8.521-3.854z" }),
        React.createElement("path", { d: "m44.004 93.793-39.942 174.253 31.931 17.943 82.63-134.41z" }),
        React.createElement("path", { d: "m37.231 290.763-37.231-20.917 41.77-182.278 81.549 63.143zm-29.106-24.517 26.63 14.941 79.172-128.776-67.703-52.393z" }),
        React.createElement("path", { d: "m119.648 309.013c6.171-5.42 6.782-14.815 1.366-20.988l-.256-.292c-2.593-2.97-6.267-4.779-10.202-5.023-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-23.856 20.889c-6.171 5.42-6.782 14.815-1.366 20.988 5.309 6.317 14.734 7.133 21.051 1.823.065-.055.13-.11.194-.166l1.807-1.587 18.157-15.937z" }),
        React.createElement("path", { d: "m86.152 337.172c-.455 0-.918 0-1.387-.05-4.97-.383-9.588-2.712-12.849-6.481-6.715-7.647-5.96-19.289 1.686-26.004l23.827-20.91c7.647-6.706 19.28-5.951 25.997 1.686 3.382 3.714 5.112 8.64 4.795 13.653-.301 4.879-2.543 9.435-6.225 12.65l-23.82 20.91c-3.317 2.935-7.595 4.553-12.024 4.546zm23.414-50.912c-2.744.011-5.391 1.023-7.442 2.846l-23.827 20.91c-4.696 4.121-5.161 11.269-1.04 15.964 0 0 .001.001.001.001 2.032 2.366 4.916 3.834 8.025 4.084 2.989.234 5.945-.758 8.189-2.746l23.82-20.91c4.692-4.124 5.157-11.269 1.039-15.965-1.998-2.411-4.895-3.899-8.018-4.119z" }),
        React.createElement("path", { d: "m202.755 350.641c.269-3.938-1.051-7.82-3.664-10.779l-.213-.242c-2.595-2.95-6.26-4.742-10.181-4.98-.327 0-.662 0-.989 0-3.605-.006-7.087 1.307-9.79 3.693l-2.334 2.049-24.105 21.159-6.403 5.592c-6.183 5.595-6.659 15.142-1.065 21.324 2.61 2.885 6.234 4.651 10.115 4.929 3.939.274 7.823-1.046 10.779-3.664l32.82-28.807c2.988-2.611 4.801-6.313 5.03-10.274z" }),
        React.createElement("path", { d: "m155.115 396.936c-.406 0-.804 0-1.209-.036-10.248-.634-18.041-9.456-17.406-19.704.304-4.916 2.547-9.511 6.236-12.775l32.792-28.843c3.681-3.207 8.475-4.837 13.347-4.539 4.869.298 9.417 2.532 12.629 6.204 3.375 3.708 5.101 8.628 4.781 13.632-.308 4.866-2.544 9.408-6.211 12.621l-32.82 28.807c-3.345 2.978-7.663 4.626-12.139 4.633zm22.767-53.937-30.458 26.737c-4.698 4.12-5.175 11.264-1.067 15.972 1.999 2.378 4.877 3.844 7.976 4.063 3.006.213 5.971-.795 8.225-2.796l32.82-28.807c4.695-4.116 5.165-11.258 1.049-15.954-.003-.004-.007-.008-.01-.012-1.993-2.391-4.877-3.861-7.983-4.07h-.754c-2.747 0-5.397 1.013-7.442 2.846z" }),
        React.createElement("path", { d: "m399.398 303.122-115.785-94.348c-44.339 23.543-75.736 11.426-90.748 1.843-7.825-5.106-10.029-15.59-4.923-23.415 1.586-2.431 3.772-4.413 6.346-5.755l38.59-20.497c-.996-.149-1.971-.277-2.846-.363-34.825 5.502-69.995 8.531-105.248 9.064l-67.461 109.722 15.04 11.462 17.68-15.524c12.275-10.776 30.962-9.561 41.738 2.714.001.001.002.003.004.004l.256.292c3.538 4.057 5.891 9.009 6.802 14.315 5.361-3.658 11.795-5.411 18.271-4.98 7.833.488 15.145 4.09 20.305 10.003l.832.953c5.187 5.881 7.808 13.591 7.278 21.415v.043c1.354-.138 2.716-.183 4.077-.135 7.833.489 15.144 4.091 20.305 10.003l-5.315 5.094 5.528-4.852c5.195 5.883 7.821 13.599 7.293 21.429 0 .1-.043.192-.05.292 16.199-1.153 30.265 11.045 31.418 27.244.096 1.352.099 2.709.008 4.061-.365 5.088-2.052 9.993-4.895 14.229l31.724 18.306c6.955 3.944 15.787 1.604 19.878-5.265 3.88-6.556 1.988-15-4.319-19.274l-50.514-35.004c-.043 0-.064-.078-.1-.107l-3.401-2.355c-3.3-2.371-4.053-6.967-1.682-10.267 2.312-3.219 6.759-4.027 10.056-1.828l71.247 49.355c6.572 4.555 15.592 2.92 20.147-3.652.003-.004.006-.008.009-.012 4.471-6.535 2.889-15.445-3.557-20.042l-70.898-50.287c-.043 0-.057-.078-.1-.107-3.312-2.358-4.086-6.954-1.729-10.267s6.954-4.086 10.267-1.729l79.485 56.391c6.952 4.909 16.568 3.253 21.477-3.7 4.752-6.729 3.37-16.006-3.136-21.059l-85.526-61.627c-3.38-2.255-4.292-6.822-2.037-10.202s6.822-4.292 10.202-2.037c.127.085.251.173.373.266l5.848 4.169h.078l79.265 57.11c.149.107.256.242.398.349l1.309.939c.249.172.487.359.711.562l1.423.975c6.625 4.747 15.807 3.478 20.896-2.889 3.043-3.845 4.028-8.929 2.64-13.632-.844-2.914-2.568-5.495-4.934-7.393z" }),
        React.createElement("path", { d: "m282.83 421.24c-3.145.001-6.234-.826-8.957-2.398l-35.026-20.199 2.134-3.13c7.907-11.928 4.646-28.007-7.282-35.914-3.783-2.508-8.159-3.978-12.689-4.263-.883-.043-1.768-.019-2.647.071l-4.774.299.277-4.048c.448-5.749-1.029-11.483-4.198-16.3l-2.668 2.348-4.81-5.236 2.704-2.59c-4.302-3.792-9.744-6.045-15.467-6.403-1.037-.034-2.076-.001-3.109.1l-3.821.285-.477-4.212v-.15c.373-6.782-1.926-13.44-6.403-18.548l-.84-.96c-8.565-9.832-23.125-11.713-33.909-4.383l-4.532 3.045-.953-5.379c-2.417-14.221-15.905-23.789-30.126-21.371-4.756.809-9.196 2.919-12.826 6.096l-19.871 17.445-19.957-15.19 70.158-114.12 1.914-.057c35.061-.535 70.041-3.543 104.679-9l.498-.1.505.043c.939.085 1.978.228 3.052.384l10.672 1.601-48.124 25.556c-6.556 3.387-9.124 11.448-5.737 18.004 1.062 2.055 2.639 3.799 4.577 5.062 14.123 9.014 44.261 20.761 87.148-1.999l2.085-1.11 117.606 95.828c2.92 2.371 5.038 5.582 6.069 9.199 1.718 5.8.508 12.074-3.244 16.819-6.284 7.853-17.615 9.416-25.791 3.557l-3.991-2.981-84.978-61.186c-1.698-1.219-4.063-.831-5.282.867-.004.005-.007.01-.011.016-1.221 1.702-.831 4.071.87 5.292.004.003.008.006.012.009l85.54 61.677c8.293 6.401 9.827 18.312 3.426 26.605-6.195 8.027-17.608 9.761-25.908 3.939l-79.507-56.363c-.825-.585-1.849-.818-2.846-.647-2.069.35-3.462 2.311-3.112 4.38.168.994.725 1.881 1.547 2.465l71.019 50.408c8.024 5.733 9.982 16.833 4.404 24.965-5.664 8.194-16.898 10.245-25.092 4.581-.003-.002-.006-.004-.009-.006l-71.232-49.362c-1.685-1.251-4.064-.899-5.315.786s-.899 4.064.786 5.315c.069.051.139.099.211.146l54.029 37.466c8.216 5.625 10.316 16.845 4.691 25.061-2.423 3.539-6.029 6.098-10.169 7.218-1.603.441-3.259.666-4.923.667zm-34.022-25.08 28.622 16.52c5.336 2.887 12.002.903 14.889-4.433 2.606-4.815 1.268-10.813-3.136-14.065l-40.376-28.018c2.734 5.325 3.964 11.295 3.557 17.267-.288 4.445-1.5 8.78-3.556 12.729zm-7.413-59.357c2.212-.004 4.372.669 6.19 1.928l71.232 49.355c4.961 3.429 11.763 2.19 15.197-2.768 3.375-4.927 2.185-11.649-2.675-15.119l-71.404-50.699c-4.725-3.742-5.522-10.607-1.78-15.332 3.585-4.526 10.074-5.477 14.807-2.17l79.507 56.391c5.368 3.747 12.757 2.432 16.504-2.936 3.597-5.154 2.546-12.219-2.395-16.103l-85.433-61.563c-4.902-3.505-6.034-10.32-2.529-15.222s10.32-6.034 15.222-2.529l5.934 4.205 80.965 58.405c.364.262.711.547 1.039.854l1.003.655c5.068 3.672 12.125 2.734 16.058-2.134 2.336-2.943 3.095-6.839 2.035-10.444-.619-2.234-1.913-4.222-3.707-5.692l-113.985-92.875c-44.958 22.98-77.009 10.331-92.228.605-9.487-6.155-12.188-18.835-6.033-28.322 1.927-2.971 4.592-5.391 7.734-7.024l21.814-11.583c-22.184 3.01-52.471 5.251-87.639 6.403l-64.745 105.366 10.181 7.748 15.503-13.603c13.747-12.071 34.678-10.712 46.749 3.035.003.003.006.007.009.01 2.974 3.364 5.244 7.29 6.674 11.547 5.037-2.448 10.627-3.535 16.214-3.152 8.783.545 16.982 4.583 22.767 11.213l.84.96c4.92 5.576 7.802 12.657 8.175 20.085h.711c7.662.501 14.908 3.664 20.483 8.943l.114-.1 1.928 2.206.206.228 2.241 2.554-.1.1c3.818 5.238 5.999 11.489 6.268 17.965h.434c3.16.206 6.275.863 9.249 1.949-1.368-5.858 2.273-11.716 8.131-13.084.833-.194 1.686-.29 2.541-.285z" }),
        React.createElement("path", { d: "m462.149 91.146-74.605 57.786 69.013 112.249c.454.235.881.519 1.274.847 1.183 1.219 1.898 2.816 2.021 4.511l10.338 16.812 31.902-17.95z" }),
        React.createElement("path", { d: "m468.922 288.124-12.557-20.433-.078-.825c-.046-.871-.399-1.698-.996-2.334l-1.366-.811-.42-.711-70.685-114.939 81.563-63.15 41.777 182.278zm-5.691-22.81 8.153 13.255 26.63-14.941-38.085-166.263-67.696 52.421 66.878 108.777c.441.264.849.579 1.217.939 1.56 1.583 2.583 3.616 2.924 5.813z" }),
        React.createElement("path", { d: "m368.385 168.86c-14.472 5.958-30.597 6.544-45.463 1.651l-39.166-12.714c-5.413-1.716-11.287-1.204-16.321 1.423l-13.276 7.051c-.142.071-.263.157-.413.221l-52.606 27.947c-.749.359-1.237 1.105-1.266 1.935-.058.751.307 1.473.946 1.871 15.474 9.875 41.977 17.075 79.919-4.696 2.644-1.513 5.946-1.245 8.31.676l119.584 97.471c1.665 1.369 3.169 2.923 4.482 4.632l29.569-29.59-63.015-102.494z" }),
        React.createElement("path", { d: "m412.809 301.649-2.476-3.138c-1.144-1.498-2.457-2.859-3.913-4.055l-119.612-97.443c-1.219-.974-2.908-1.112-4.269-.349-39.494 22.682-67.262 15.026-83.605 4.61-1.72-1.084-2.711-3.022-2.583-5.051.086-2.09 1.298-3.969 3.166-4.909l66.273-35.196c5.882-3.082 12.752-3.686 19.082-1.679l39.152 12.693c14.062 4.633 29.317 4.083 43.008-1.551l14.108-5.777 66.067 107.432zm-128.428-112.612c2.514-.005 4.953.854 6.908 2.433l119.591 97.471c.842.679 1.643 1.409 2.398 2.184l24.901-24.901-59.956-97.55-8.481 3.472c-15.258 6.281-32.259 6.896-47.932 1.736l-39.131-12.707c-4.506-1.415-9.39-.98-13.575 1.21l-64.267 34.151c14.891 8.651 39.387 13.923 74.156-6.047 1.641-.944 3.498-1.444 5.388-1.452z" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React.createElement("path", { d: "m629.609375 303.507812-81.988281-40.820312-180.261719 89.753906c-14.582031 7.261719-30.957031 11.101563-47.359375 11.101563s-32.777344-3.839844-47.359375-11.101563l-180.261719-89.753906-81.988281 40.820312c-6.367187 3.171876-10.390625 9.671876-10.390625 16.785157 0 7.117187 4.023438 13.613281 10.390625 16.785156l278.964844 138.898437c9.59375 4.78125 20.117187 7.167969 30.644531 7.167969 10.523438 0 21.050781-2.386719 30.644531-7.160156l278.964844-138.90625c6.367187-3.171875 10.390625-9.667969 10.390625-16.785156 0-7.113281-4.023438-13.613281-10.390625-16.785157zm0 0" }),
        React.createElement("path", { d: "m629.609375 460.65625-81.988281-40.824219-180.261719 89.757813c-14.582031 7.261718-30.957031 11.09375-47.359375 11.09375s-32.777344-3.832032-47.359375-11.09375l-180.261719-89.757813-81.988281 40.824219c-6.367187 3.167969-10.390625 9.671875-10.390625 16.78125 0 7.113281 4.023438 13.613281 10.390625 16.789062l278.964844 138.898438c9.59375 4.777344 20.117187 7.167969 30.644531 7.167969 10.523438-.003907 21.050781-2.390625 30.644531-7.167969l278.964844-138.898438c6.367187-3.175781 10.390625-9.675781 10.390625-16.789062s-4.023438-13.613281-10.390625-16.78125zm0 0" }),
        React.createElement("path", { d: "m10.390625 179.972656 278.964844 138.902344c9.59375 4.773438 20.117187 7.167969 30.644531 7.167969s21.050781-2.394531 30.644531-7.167969l278.964844-138.902344c6.367187-3.167968 10.390625-9.671875 10.390625-16.78125 0-7.117187-4.023438-13.621094-10.390625-16.789062l-278.964844-138.90625c-19.191406-9.550782-42.097656-9.550782-61.289062 0l-278.964844 138.90625c-6.367187 3.167968-10.390625 9.671875-10.390625 16.789062 0 7.109375 4.023438 13.613282 10.390625 16.78125zm0 0" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React.createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\r\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React.createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React.createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\r\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\r\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\r\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\r\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\r\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\r\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\r\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\r\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\r\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\r\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\r\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\r\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\r\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\r\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\r\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\r\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\r\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\r\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\r\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\r\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\r\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\r\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\r\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\r\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\r\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\r\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\r\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\r\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\r\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React.createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\r\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\r\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\r\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-8 0 464 464" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m154.632812 336.320312c-2.738281 4.984376-2.703124 10.839844.085938 15.679688 2.792969 4.839844 7.847656 7.800781 13.539062 7.910156l2.191407.050782c-6.5625-7.3125-11.664063-15.945313-14.808594-25.480469zm0 0" }),
            React.createElement("path", { d: "m154.71875 272c-2.789062 4.832031-2.824219 10.695312-.085938 15.679688l1.007813 1.839843c3.144531-9.535156 8.246094-18.160156 14.808594-25.480469l-2.191407.050782c-5.691406.117187-10.753906 3.078125-13.539062 7.910156zm0 0" }),
            React.createElement("path", { d: "m176.089844 367.742188c.117187 5.691406 3.078125 10.753906 7.910156 13.539062 4.816406 2.78125 10.679688 2.824219 15.679688.085938l1.839843-1.007813c-9.535156-3.144531-18.160156-8.246094-25.480469-14.808594zm0 0" }),
            React.createElement("path", { d: "m176 395.144531c-1.601562-.929687-3.039062-2.039062-4.433594-3.199219l-19.566406 64.054688 24-16 16 24 15.015625-61.03125c-2.191406-1.394531-4.273437-2.96875-6.085937-4.878906-8.296876 2.460937-17.242188 1.484375-24.929688-2.945313zm0 0" }),
            React.createElement("path", { d: "m277.550781 359.960938 2.191407-.050782c5.691406-.117187 10.753906-3.078125 13.539062-7.910156 2.78125-4.832031 2.824219-10.695312.085938-15.679688l-1.007813-1.839843c-3.152344 9.542969-8.246094 18.167969-14.808594 25.480469zm0 0" }),
            React.createElement("path", { d: "m209.320312 382.488281 1.054688 1.742188c2.945312 4.867187 8.039062 7.777343 13.625 7.777343s10.679688-2.902343 13.625-7.777343l1.054688-1.742188c-4.742188.984375-9.648438 1.511719-14.679688 1.511719s-9.9375-.527344-14.679688-1.511719zm0 0" }),
            React.createElement("path", { d: "m272 395.144531c-7.695312 4.429688-16.632812 5.40625-24.929688 2.945313-1.8125 1.917968-3.894531 3.484375-6.085937 4.878906l15.015625 61.03125 16-24 24 16-19.566406-64.054688c-1.394532 1.160157-2.832032 2.269532-4.433594 3.199219zm0 0" }),
            React.createElement("path", { d: "m271.910156 256.265625c-.117187-5.691406-3.078125-10.753906-7.910156-13.539063-4.824219-2.78125-10.6875-2.824218-15.679688-.085937l-1.839843 1.007813c9.535156 3.144531 18.160156 8.246093 25.480469 14.808593zm0 0" }),
            React.createElement("path", { d: "m224 368c30.871094 0 56-25.128906 56-56s-25.128906-56-56-56-56 25.128906-56 56 25.128906 56 56 56zm0-48c-13.230469 0-24-10.769531-24-24 0-10.414062 6.710938-19.214844 16-22.527344v-9.472656h16v9.472656c9.289062 3.3125 16 12.113282 16 22.527344h-16c0-4.414062-3.585938-8-8-8s-8 3.585938-8 8 3.585938 8 8 8c13.230469 0 24 10.769531 24 24 0 10.414062-6.710938 19.214844-16 22.527344v9.472656h-16v-9.472656c-9.289062-3.3125-16-12.113282-16-22.527344h16c0 4.414062 3.585938 8 8 8s8-3.585938 8-8-3.585938-8-8-8zm0 0" }),
            React.createElement("path", { d: "m199.679688 242.632812c-4.992188-2.722656-10.855469-2.6875-15.679688.085938-4.832031 2.792969-7.800781 7.847656-7.910156 13.539062l-.050782 2.191407c7.3125-6.5625 15.945313-11.664063 25.480469-14.808594zm0 0" }),
            React.createElement("path", { d: "m248.320312 381.367188c5 2.746093 10.863282 2.695312 15.679688-.085938 4.832031-2.792969 7.800781-7.847656 7.910156-13.539062l.050782-2.191407c-7.3125 6.5625-15.945313 11.664063-25.480469 14.808594zm0 0" }),
            React.createElement("path", { d: "m152 312c0-5.03125.527344-9.9375 1.511719-14.679688l-1.742188 1.054688c-4.867187 2.945312-7.769531 8.039062-7.769531 13.625s2.902344 10.679688 7.777344 13.625l1.742187 1.054688c-.992187-4.734376-1.519531-9.648438-1.519531-14.679688zm0 0" }),
            React.createElement("path", { d: "m296.222656 298.375-1.742187-1.054688c.992187 4.742188 1.519531 9.648438 1.519531 14.679688s-.527344 9.9375-1.511719 14.679688l1.742188-1.054688c4.867187-2.945312 7.769531-8.03125 7.769531-13.625s-2.902344-10.679688-7.777344-13.625zm0 0" }),
            React.createElement("path", { d: "m293.28125 272c-2.792969-4.832031-7.847656-7.800781-13.539062-7.910156l-2.191407-.050782c6.5625 7.3125 11.664063 15.945313 14.808594 25.480469l1.007813-1.839843c2.738281-4.984376 2.703124-10.839844-.085938-15.679688zm0 0" }),
            React.createElement("path", { d: "m238.679688 241.519531-1.054688-1.742187c-2.945312-4.867188-8.039062-7.777344-13.625-7.777344s-10.679688 2.902344-13.625 7.777344l-1.054688 1.742187c4.742188-.984375 9.648438-1.511719 14.679688-1.511719s9.9375.519532 14.679688 1.511719zm0 0" }),
            React.createElement("path", { d: "m32 32v31.191406c15.648438-3.191406 28-15.542968 31.191406-31.191406zm0 0" }),
            React.createElement("path", { d: "m32 320h31.191406c-3.191406-15.648438-15.542968-28-31.191406-31.191406zm0 0" }),
            React.createElement("path", { d: "m416 32h-31.191406c3.191406 15.648438 15.542968 28 31.191406 31.191406zm0 0" }),
            React.createElement("path", { d: "m416 320v-31.191406c-15.648438 3.191406-28 15.542968-31.191406 31.191406zm0 0" }),
            React.createElement("path", { d: "m320 312c0 2.761719-.464844 5.414062-1.136719 8h49.777344c3.527344-24.472656 22.886719-43.832031 47.359375-47.359375v-193.28125c-24.472656-3.527344-43.832031-22.886719-47.359375-47.359375h-289.28125c-3.527344 24.472656-22.886719 43.832031-47.359375 47.359375v193.28125c24.472656 3.527344 43.832031 22.886719 47.359375 47.359375h49.777344c-.671875-2.585938-1.136719-5.238281-1.136719-8 0-8.863281 3.617188-17.113281 9.910156-23.070312-2.476562-8.3125-1.484375-17.25 2.945313-24.929688 4.441406-7.679688 11.679687-13.007812 20.121093-15.023438 2.015626-8.441406 7.34375-15.679687 15.023438-20.121093 7.6875-4.429688 16.632812-5.414063 24.929688-2.945313 5.957031-6.292968 14.199218-9.910156 23.070312-9.910156s17.113281 3.617188 23.070312 9.910156c8.296876-2.46875 17.234376-1.484375 24.929688 2.945313 7.679688 4.441406 13.007812 11.679687 15.023438 20.121093 8.441406 2.015626 15.679687 7.34375 20.121093 15.023438 4.429688 7.679688 5.421875 16.617188 2.945313 24.929688 6.292968 5.964843 9.910156 14.207031 9.910156 23.070312zm0-176h-88v-16h88zm-160-88h128v48h-128zm-32 72h88v16h-88zm88 80h-88v-16h88zm72 0h-56v-16h56zm-160-32v-16h192v16zm176 32v-16h16v16zm0 0" }),
            React.createElement("path", { d: "m0 0v352h137.734375c-1.359375-5.246094-1.398437-10.71875 0-16h-121.734375v-320h416v320h-121.734375c1.40625 5.28125 1.359375 10.753906 0 16h137.734375v-352zm0 0" }),
            React.createElement("path", { d: "m176 64h96v16h-96zm0 0" }))));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 207.918 207.918" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M59.655,180.863c-0.926,1.604-2.606,2.5-4.334,2.5c-0.849,0-1.708-0.217-2.496-0.671\r\n\tC22.606,165.237,3.833,132.739,3.834,97.879c0-20.076,6.034-39.288,17.232-55.5l-6.344-6.267c-1.372-1.355-1.842-3.379-1.208-5.2\r\n\tc0.634-1.822,2.26-3.116,4.177-3.326l21.274-2.333c1.499-0.168,2.988,0.354,4.059,1.413c1.071,1.058,1.608,2.543,1.462,4.041\r\n\tl-2.074,21.301c-0.187,1.92-1.461,3.561-3.275,4.217c-0.555,0.201-1.13,0.299-1.7,0.299c-1.294,0-2.563-0.502-3.515-1.443\r\n\tl-5.612-5.544c-9.411,14.238-14.476,30.926-14.476,48.343c0,31.3,16.856,60.48,43.993,76.153\r\n\tC60.218,175.414,61.037,178.472,59.655,180.863z M194.591,92.675c-2.761,0-5,2.238-5,5l0,0.204\r\n\tc0,48.457-39.422,87.879-87.879,87.879c-1.773,0-3.543-0.056-5.308-0.161l1.911-7.653c0.467-1.871-0.184-3.845-1.672-5.07\r\n\tc-1.49-1.228-3.551-1.486-5.297-0.67l-19.385,9.068c-1.364,0.639-2.368,1.857-2.732,3.318s-0.052,3.008,0.852,4.212l12.848,17.117\r\n\tc0.956,1.273,2.445,1.999,3.999,1.999c0.329,0,0.662-0.032,0.992-0.1c1.891-0.382,3.393-1.817,3.86-3.689l2.169-8.688\r\n\tc2.579,0.203,5.169,0.317,7.766,0.317c53.971,0,97.879-43.908,97.879-97.915l0-0.168C199.591,94.913,197.352,92.675,194.591,92.675z\r\n\t M202.255,51.683c-1.491-1.223-3.552-1.48-5.299-0.658l-7.485,3.52C173.208,21.73,139.285,0,101.712,0\r\n\tC84.453,0.001,67.485,4.556,52.64,13.173c-2.388,1.387-3.2,4.446-1.814,6.834c1.386,2.388,4.444,3.203,6.834,1.814\r\n\tC70.982,14.089,86.215,10.001,101.713,10c33.671,0,64.077,19.434,78.71,48.8l-7.89,3.711c-1.746,0.82-2.863,2.572-2.872,4.501\r\n\tc-0.009,1.929,1.092,3.691,2.83,4.528l19.281,9.288c0.686,0.33,1.428,0.495,2.17,0.495c0.727,0,1.454-0.158,2.128-0.476\r\n\tc1.363-0.641,2.364-1.861,2.726-3.323l5.142-20.774C204.401,54.878,203.746,52.906,202.255,51.683z M70.811,138.821\r\n\tc-2.761,0-5-2.238-5-5s2.239-5,5-5h25.902v-26.94h-7.435c-12.939,0-23.467-10.527-23.467-23.467\r\n\tc0-12.946,10.527-23.474,23.467-23.474h7.435v-5.746c0-2.762,2.239-5,5-5s5,2.238,5,5v5.746h25.902c2.761,0,5,2.238,5,5\r\n\ts-2.239,5-5,5h-25.902v26.94h7.431c12.942,0,23.471,10.529,23.471,23.471s-10.529,23.47-23.471,23.47h-7.431v7.741\r\n\tc0,2.762-2.239,5-5,5s-5-2.238-5-5v-7.741H70.811z M89.278,91.881h7.435V64.94h-7.435c-7.426,0-13.467,6.041-13.467,13.467\r\n\tC75.811,85.84,81.852,91.881,89.278,91.881z M106.713,128.821h7.431c7.428,0,13.471-6.043,13.471-13.47\r\n\tc0-7.428-6.043-13.471-13.471-13.471h-7.431V128.821z" }))));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 56 56" }, props),
        React.createElement("g", null,
            React.createElement("path", { id: "Shape", d: "m54.89 19.33c-1.65-3.16-4.39-5.33-7.89-5.33 1.9387753 4.8214002 2.9563558 9.9635739 3 15.16.1921013 6.0688357-2.3831761 11.8963206-7 15.84 5.82.28 10.9-2.58 12.85-8.55 1.83-5.66 1.45-12.53-.96-17.12z" }),
            React.createElement("path", { id: "Shape", d: "m18.16 44.81c3.2315917 2.0831812 6.9951556 3.1907245 10.84 3.19 3.83925-.0374554 7.5924307-1.1419431 10.84-3.19 5.22-3.34 8.16-8.69 8.16-15.64 0-11.67-7.36-29.17-19-29.17-11.1 0-18.22 15.8-18.92 27-.48 7.47 1.67 13.7 8.08 17.81zm6.36-41.71c1.3871963-.71080538 2.9213462-1.08749398 4.48-1.1.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-1.2497589.01216582-2.4792834.31697831-3.59.89-.4916536.2469243-1.0904244.05031299-1.34-.44-.1210697-.23840257-.1416226-.51536113-.0570687-.76902291.0845539-.25366177.2671714-.46289687.5070687-.58097709zm4.36 25.9c-2.88-.37-6.88-.87-6.88-5.5 0-3.22 2.93-5.1 6-5.44v-2.06c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2.05c4.27.37 5.81 3.07 5.88 3.19.1786328.3126074.1769222.696768-.0044873 1.0077722-.1814095.3110043-.5149577.5016032-.875.5-.3600423-.0016031-.6918799-.1951648-.8705127-.5077722-.06-.13-1.35-2.24-5.13-2.24-2.08 0-5 1.09-5 3.5 0 2.73 1.85 3.1 5.12 3.51 2.88.36 6.88.86 6.88 5.49 0 2.5-1.6 5.11-6 5.5v2c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2c-4-.2-5.54-1.59-5.71-1.76-.3921222-.3921222-.3921222-1.0278778 0-1.42s1.0278778-.3921222 1.42 0c1.54 1.33 10.29 2.6 10.29-2.32 0-2.73-1.85-3.1-5.12-3.5zm-12.28-17.48c1.0099054-1.85917744 2.2422964-3.58855444 3.67-5.15.3783151-.40316784 1.0118321-.42331501 1.415-.04499997.4031678.37831504.423315 1.0118321.045 1.41499997-1.3167051 1.43547667-2.4518907 3.0274234-3.38 4.74-.2761424.4832492-.8917508.6511424-1.375.375s-.6511424-.8917508-.375-1.375z" }),
            React.createElement("path", { id: "Shape", d: "m15 45c-8.88-7.41-8.36-20.14-4-31-3.55 0-6.26 2.19-7.89 5.33-2.41 4.59-2.79 11.46-1 17.09 2.02 6.08 7.13 8.82 12.89 8.58z" }),
            React.createElement("path", { id: "Shape", d: "m51.37 50.82 5.18-.49c-2.69-2-2.54-1.91-2.62-2-.3695814-.3660786-.5548165-.8790296-.5043991-1.3967767.0504173-.5177471.3311345-.9853244.7643991-1.2732233l.33-.18-2.79-.63c-3.3740505 1.9352367-7.3317613 2.5918972-11.15 1.85-7.0998733 4.3760158-16.0601267 4.3760158-23.16 0-3.823751.72837-7.78190651.0763551-11.17-1.84l-2.77.63.25.13c.459298.2749348.76648497.7459757.8328805 1.2771399.06639553.5311643-.11539102 1.0633268-.4928805 1.4428601-.08.08 0 0-2.62 2l5.15.49c.64038677.0713049 1.18894097.490663 1.42571345 1.0899279.23677249.5992649.12299447 1.2803137-.29571345 1.7700721l-.56.86 6.55-2.17c.9183874-.2960905 1.9231368-.1323536 2.7.44l2.51 1.88c.1137149.0896251.2677225.108876.4.05 6.09-2.89 5.67-2.75 6.15-2.75.4614024.000194.9038362.1836422 1.23.51.13.13 0 0 2.29 3.4 2.27-3.39 2.16-3.26 2.29-3.4.5872385-.5903148 1.5116873-.6785576 2.2-.21l5.18 2.44c.1322775.058876.2862851.0396251.4-.05l2.51-1.88c.7768632-.5723536 1.7816126-.7360905 2.7-.44l6.55 2.17-.56-.86c-.4172055-.4855792-.5340677-1.1610366-.3042517-1.7585583.2298161-.5975217.7691853-1.0205824 1.4042517-1.1014417z" }),
            React.createElement("path", { id: "Shape", d: "m46.71 5.71 1-1c.2536586-.25365856.3527236-.62337399.2598781-.96987806-.0928455-.34650406-.363496-.61715454-.71-.71000002-.3465041-.09284548-.7162195.00621949-.9698781.25987808l-1 1c-.3921221.39212218-.3921221 1.02787781 0 1.41999996.3921222.39212216 1.0278778.39212218 1.42.00000004z" }),
            React.createElement("path", { id: "Shape", d: "m48.32 9 3-1c.3394023-.11432499.5920313-.40103461.6627241-.75212813s-.0512905-.71323147-.32-.95-.6433218-.31219686-.9827241-.19787187l-3 1c-.3394023.11432498-.5920313.40103461-.6627241.75212813-.0706929.35109352.0512905.71323148.32.95000001s.6433218.31219685.9827241.19787186z" }),
            React.createElement("path", { id: "Shape", d: "m12.71 4.29-1-1c-.2536586-.25365857-.623374-.35272352-.969878-.25987804-.3465041.09284548-.6171546.36349595-.71.71-.09284552.34650405.0062194.71621947.259878.96987804l1 1c.3921222.39212215 1.0278778.39212214 1.42-.00000002.3921221-.39212217.3921222-1.0278778 0-1.41999998z" }),
            React.createElement("path", { id: "Shape", d: "m6.05 6.68c-.10156011.25804893-.09140308.54668422.02804477.7969559.11944785.25027169.33745932.43970373.60195523.5230441 3.14 1 3.04 1 3.32 1 .4927375.00386501.9148502-.35178371.9946449-.83803264.0797947-.48624892-.2065147-.95815151-.6746449-1.11196736l-3-1c-.25193645-.08555066-.52757913-.06717426-.76592958.05106258-.23835046.11823684-.41975528.32658479-.50407042.57893742z" }))));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 752 862" }, props),
        React.createElement("image", { overflow: "visible", width: "752", height: "862", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvAAAANeCAYAAAB0xzpQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAK\r\n\t\tT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AU\r\n\t\tkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXX\r\n\t\tPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgAB\r\n\t\teNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAt\r\n\t\tAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3\r\n\t\tAMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dX\r\n\t\tLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+\r\n\t\t5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk\r\n\t\t5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd\r\n\t\t0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA\r\n\t\t4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzA\r\n\t\tBhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/ph\r\n\t\tCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5\r\n\t\th1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+\r\n\t\tQ8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhM\r\n\t\tWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQ\r\n\t\tAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+Io\r\n\t\tUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdp\r\n\t\tr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZ\r\n\t\tD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61Mb\r\n\t\tU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY\r\n\t\t/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllir\r\n\t\tSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79u\r\n\t\tp+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6Vh\r\n\t\tlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1\r\n\t\tmz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lO\r\n\t\tk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7Ry\r\n\t\tFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3I\r\n\t\tveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+B\r\n\t\tZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/\r\n\t\t0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5p\r\n\t\tDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5q\r\n\t\tPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIs\r\n\t\tOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5\r\n\t\thCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQ\r\n\t\trAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9\r\n\t\trGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1d\r\n\t\tT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aX\r\n\t\tDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7\r\n\t\tvPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3S\r\n\t\tPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKa\r\n\t\tRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO\r\n\t\t32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21\r\n\t\te2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfV\r\n\t\tP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i\r\n\t\t/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8\r\n\t\tIH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADq\r\n\t\tYAAAOpgAABdvkl/FRgAAZYlJREFUeNrs3Xu8VWWB//HPAQ7IEUHwAiiihpL3G6XEr0yzi1aWOZll\r\n\t\tdq+xRmuSSmsmy8opaxqyy3SbpnK6TnYvL5llTQVa4SVvRJoKqFwUEAEB4ZzfH2shBzics/fZa629\r\n\t\tnuf5vF8vX5aanfVdz977u5/zrOfp6OnpoT+zFyxGkhSMjn7+Xo/xSFL9zZg8od+/P8yIJKl0w/I/\r\n\t\tRgA7ASOBnYFdgLHAuPzvjQFGA13A+Pyf3fwu3gXsvs2/d2L+z7RqI7Cw13/vBhYBq4EVwHLgcWBJ\r\n\t\t/ufVwKPAhvzP64F1wFrgifzP6/L/vMnbL0nFf6hIkpozJC/co/MCvmdericCewNPyf+YkpfzED4L\r\n\t\t9t/mr00p8N+/Cvh7/iVhIbAAuBdYDCzNvySsyb8cWPglyQIvSU3pIJshHwvsBewHHJD/cSRwKMXM\r\n\t\teqdkNHBU/kcj5gN/Bm4H/grcTzb7v5Jsdr/bSCVZ4CUpvfe+MWSz5QcAB+fl8v+RzaKrvabmf+zI\r\n\t\tKuC3wGzgNuAestn8x3AGX5IFXpKC1gXsQbac5QjgOOB5bL+WXGEZDZya/7GtpcD1wA1ks/j3AA+T\r\n\t\trceXJAu8JNXovWw3snXbx+Yl/bnAcKNJzp7AmfkfvS0BrgR+A/yFbB3+StyZR5IFXpJKNwKYBBwN\r\n\t\tPItsFnZ/Y9EAxgNvzP/o7Xrgh2TLce4mW54jSRZ4SRqkIWQzqoeRzaifBexjLCrQifkfm60DfgL8\r\n\t\tHPgj2Uz9OmOSZIGXpL6NBA4Cng2cAcwwElVsJ7ZfgnMP8DXgamAe2U44ktQ2HZ7EKqmNRpA9YHoy\r\n\t\tcC7F7j0ulWUJcHle6P9CdtCVJBVmoJNYLfCSqrQz2XKYU4A3k23jKMVQ6D8H/Ihs3/qNRiLJAi8p\r\n\t\tVEPIDkM6AXgXjR/kI4Xst8BXgF/m5V6SCi3wroGXVLRdgKcDrwde5fuMEvTs/A/I9qX/LM7OSyrQ\r\n\t\tECOQ1KIOYDLwz2zZhu9XwGss7xJ7Ah8Bbic7TOrrwHSg02gkWeAlVV3apwDnkx1hfz9wGT6EKg3k\r\n\t\tdcAcYAPwU7LlZSOMRZIFXlJZ7xdTgA+QzbLfDcwim2GU1LxTyQ6SWpeX+VOA0cYiyQIvqdX3iCPJ\r\n\t\tdthYn5f2DwGjjEYqvMxfBTwKXAEc42e0JAu8pGaMJ1se8xhwC9ke7a5nl6rxcmAu8DjwcVyaJskC\r\n\t\tL2kHuoDTyXbKWEy2PKbLWKS2GQ5cQPabr/uAs3GJjSQLvJS8TrLt7q4D1gA/AKYai1Q7+wLfIFti\r\n\t\t8yNgGtnD5JIs8JISMY7sYdR1wG+Ak4xECsZpwJ+BlcA5wEgjkSzwkuJ9vU8H/gA8QvYwqu8BUrhG\r\n\t\tA18E1pLNzrtWXrLAS4pEF9ks3WNk+0/PMBIpOmeTrZW/lWw7yqFGIlngJYWlg2z7x5+TrW3/Ij6Q\r\n\t\tKqXgCLLtKFcCb8ctXyULvKQgXtMnAPeQbf/4IiORkjQK+AzZb96+QLY1rCQLvKQa6STbAnIZ2cmO\r\n\t\t+xuJpNxbybaG/S6uk5cs8JLabiTZ+vbVZFtAjjMSSTtwJtk6+R9b5CULvKTqjSbbBnIt2fr24UYi\r\n\t\tqUEvzYv874CjjEOywEsqv7h/m+wwlw8Zh6QWPBO4GbgJeIpxSBZ4ScV7HbACeJVRSCrQ0WQPvv+7\r\n\t\tvUCywEsqRgfZbhJf9zUrqUTvJnsIvtMoJAu8pNZ8mWw/Z0kq2/HAr8kmDiRZ4CUNwunAm41BUoWe\r\n\t\tCVxkDJIFXlLzuoArjEFSG3wImGgMkgVeUnMu8DUqqY3+wwgkC7ykxg0DPmgMktroVcAoY5As8JIa\r\n\t\tc5gRSKqBpxmBZIGX1JiTjUBSDbzECCQLvKTGHGEEkmrA3wZKFnhJDTrYCCTVwCFGIFngJTXmUSOQ\r\n\t\tVANLjUCywEtqzD1GIKkG5huBZIGX1Jg/GIGkGrjeCCQLvKTGXGcEkmrgF0YgWeAlNWYhsNoYJLXR\r\n\t\tWmCBMUgWeEmN6QE+ZAyS2ujDQLcxSBZ4SY37HyOQ1EZfNwLJAi+pOUuBG41BUhvcDiwxBskCL6k5\r\n\t\to3A/eEntsQbYzRgkC7ykgQ0F3go8CDwGPN9IJLXBccDDwGLgPGCYkUgWeElbOwz4ObAR+AIw0Ugk\r\n\t\t1cB44LPAE8DNwClGIlngpZSNItvlYQ1wG/AiI5FUY0cBVwHrge8BexmJZIGXUtABvBS4m2yJzEVA\r\n\t\tl7FICshw4AzgAWAZcCHQaSySBV6KzS5kJxpuBH4MTDESSRHYHbgU2AD8BhhrJJIFXgrdJODLwCqy\r\n\t\tB1J9zUmK1bOB5WSTFdPJfuMoyQIvBWEocALwV2Ah8BYjkZSQ5wNz8jJ/DjDSSCQLvFRXuwPvB9YB\r\n\t\t1wNTjURSwnYFvgisBf4blw5KFnipJjqAg8nWtS8DPoL7JUvStt5I9vD+HWRbUQ41EskCL1VtOHA6\r\n\t\t8BBwJ9nOMpKk/h1CthXlSrLlNTsZiWSBl8o2lmzHhfXAD8gOOZEkNWcU2fKax4F/971UssBLZRgP\r\n\t\t/BfZQ1kXGockFebdwGLg12SHRUmywEstmQL8NP9webNxSFJpTgRuJjuZ+gTchlKywEtNOgq4geyh\r\n\t\tq1ONQ5IqcxjZTl4LyZ41sqtIFnip39fDCcB8slmg44xEktpmb7JnjZYAZ+DONZIFXuqjuC8gm/U5\r\n\t\t0EgkqTZ2B77Hlp1rOo1EFhcpXcOA1wKP5cV9byORpNravHPNw8CZOCMvC7yUlKFk6yqXAZcDXUYi\r\n\t\tScEYDXwXZ+RlgZeSGe+nk83e/IDsmG9JUph6z8ifYaeRBV6Kb5yfSjbjbnGXpLiMJlsj/xDwXNx+\r\n\t\tUhZ4KXjTgb+T7eU+zjgkKVp7Ar8E/pa/90sWeCkwU4CbgDnAvsYhSUm9/88B/gwcbByywEv1txdw\r\n\t\tJdkBTEcbhyQlaxpwJ3A1MME4ZIGX6mdnsoeZHgBeaBySpNzJZOvjPwmMNA5Z4KX2GwqczZbtxCRJ\r\n\t\t6su7gFX5Z4X9RxZ4qU2mAwuBb5AdyiRJUn+Gkf229iHgFNyxRhZ4qTL7ATeQPaQ00TgkSU3aE7gK\r\n\t\tmA1MNg5Z4KXyjAS+ANwLHGcckqQWTQfuJ1sfP8I4ZIGXinUKsBx4q1FIkgr2rvwz5nRcViMLvNSy\r\n\t\t8WTLZa4CdjIOSVJJushO676JbC95yQIvNWkE8GlgMS6XkSRV5yiys0RcViMLvNSE55P9KvMdRiFJ\r\n\t\tapN3AQ8DzzEKWeClHRtDdorqL8h+lSlJUjuNAn4FXAeMNQ5Z4KUtOsgOY1qOp6hKkurnJLLZ+HPw\r\n\t\tIVdZ4CXGA38iO4zJ8ShJqnNn+iJwCzDJOGSBV4qGAh8ke0h1mnFIkgJxBNkp4O+2R8kCr5RMAu4C\r\n\t\tLjYKSVKg/h34O3CwUcgCr9jH24VkMxcHGockKXD7AncC59upZIFXjDbPul9qFJKkyMwCbgP2MgpZ\r\n\t\t4BXLGHs32az7VOOQJEXqEOAB4B9xpxpZ4BWw3YGbydYJSpKUgi8BNwK7GYUs8ArNKcBDZE/rS5KU\r\n\t\tkqcDS4HTjUIWeIVgBPBd4CpgmHFIkhLuWD8AfgTsZByywKuuDgYWAWcahSRJAJxGtjb+KKOQBV51\r\n\t\tG0cfIdtKa3fjkCRpK+PIngk7Hx9wlQVeNTAG+CPwfqOQJKlfs4A5+WenZIFXWxwFPAhMMwpJkhpy\r\n\t\tHNkDricYhSzwqnrcfJjs14FdxiFJUlOGA9cDH8QlNbLAqwKbl8xcZBSSJLXkYmA2MMooZIFXWY4F\r\n\t\tFuOSGUmSijKdbJeaQ4xCFngVqYPsyfkbcS9bSZKKNhq4A3ibUcgCryIMJzuEYpZRSJJUqs/nn7md\r\n\t\tRiELvAZrT2A+8FKjkCSpEqcB9wLjjUIWeDVr85q8fY1CkqRK7Q0syD+LJQu8BtRBtq3VHGCYcUiS\r\n\t\t1BbD88/itxqFLPDqzzCytXcXG4UkSbXwBeDbOKkmC7z6sAtwK653lySpbl4F3AbsahSywGuzA4EH\r\n\t\tcQ9aSZLq6iDgfmCKUcgCrxPIdprxFDhJkuptNHA3cLpRWOCVpg7g/cD1RiFJUlB+gA+3WuCV5H2/\r\n\t\tHPiIUUiSFKQvAF+0y1nglYZO4BrgNUYhSVLQzgGuJdtyUhZ4RWoU8BfgeUYhSVIUTgJuJ1sfLwu8\r\n\t\tIrMX2dPrBxmFJElRORC4F5hoFBZ4xePIvLyPMwpJkqI0DrgPJ+os8IrCKcAteIKbJEmxGw7cAUw3\r\n\t\tCgu8wnU2cJUxSJKUVLebg3vFW+AVpH8GvmEMkiQl6Qdku9TIAq9AfBi4zBgkSUraF8kObZQFXjXW\r\n\t\tAfwncJFRSJIkskMbP513BFngVcN7+S3gn4xCkiT18g7gm5b4eLgzSTzl/YfAS41CkiT14SxgaP7n\r\n\t\tbuMIv/gp/Hv4Y8u7JEkawJnAT+1/Fni111DgWuBUo5AkSQ14EfCzvEPIAq+KDQN+CZxkFJIkqQkv\r\n\t\tBH5uibfAq/ry/ivgRKOQJEmDcDLwG3we0gKvSnQCvweONwpJktSCZwLXWeIt8CrXsPzb8nFGIUmS\r\n\t\tCvBs4BpcTmOBVymG5t+SZxiFJEkq0EnAVfZCC7yKv08/yb8lS5IkFe35wP/iYU8WeBWig+z0tBcZ\r\n\t\thSRJKtHLyU51t8Rb4NVief8a8CqjkCRJFXgV8AVLvAVeg/dp4HXGIEmSKnQO8AljsMCref8OvN0Y\r\n\t\tJElSG7wb+IAxWODVuHfmLxxJkqR2+RBwrjFY4DWwlwGfMgZJklQDn8ONNGrHk7fq5Xjgh8bQVjN7\r\n\t\t/edlwN3AImB5/teeIDsNdyegC5gEHADskf/9WUYoSX2alv95Rf7++jjQDfRs888NBUbm76tje/31\r\n\t\tuUbYNj8HnuY9qI+Onp6efv+B2QsWm1I1DgbuNIa2lvZ5wG+BtYN9PQF7AydY6CVpq8K+ANjU4r9v\r\n\t\tD2Afy3zbdANTgXuMonwzJk/o9+87A18PE4CbjKEtxX0Z2W891hbw7+shm63/Zv7fJ/X6exZ5SakV\r\n\t\t91sLKO29Lcv/AHgK2ey8Rb46Q4C/APsCDxtHe1ng228McBfZkgxVV9znAdeRLYkpyyKy5xm68g+d\r\n\t\tPSzykiIv7iuAeyv4/7o3/2NPsll5i3w1uvISfwDFTHzJAh+k4cDNwK5GUVlxX0Z2ylxPhf+/a8lm\r\n\t\t5cf1+msWeUkxFXcofsa9EZtn5Z2Rr87EvLscDmwwjvZwDXz7DCGbAT7RKCop7gCXs+Vh1HY6BTjI\r\n\t\tEi8pkvK+kC1LW9raaYCj8/9skS/fL4EXUO2EWDJcA19fn7e8V1bc5wA31Ojnuhq4Mf/PlnhJIZf3\r\n\t\tdsy670gP2fNkI9jyWwGLfHmeB3wWOM8oqmeBb4+3kh1TrHLL+7y8LNfRcuCyXv/dIi8ppOIO9d18\r\n\t\tYX3+s+2R/6yW+PKcC9wCfMUoquUSmuo9l+zXTiqvuEN9lss04nxLvCTLezk9B5fVVOEZ1Os33cEb\r\n\t\taAmNJ7FW6wDLe+nlfR7Zzi/LA/q5P7XNlw9JsrwXY/OymoW9fn4V7w/AZGOojktoqrMr2VPbKqe4\r\n\t\tQ1iz7n2V+PO9lZJqLtQzSzbvVuPa+HIMyTPdF7eXrCxwVfNFaQ4wyihKKe8hzrr35TKchZdUT9OI\r\n\t\t48DBm4D5OBtfht3JZuKHGkU1xVLl+zbZtoEqtrhD2LPu2+oBrsj/s+vhJdWpvN8a0fWszou8s/HF\r\n\t\tOwr4BnCWUZTLGfjyvRM4wxgKL+/LiGPWfVuLyH6j4Ey8pLqU94XUZ6vIIrk2vhyvAi40Bgt8yJ7F\r\n\t\tlgcUVVx5v4LsZNNYXe1tllQjyyK/tlst8YW7FHi6MZTHJTTlmQD82hgKLe7LgG+RxqlvLqWR1G6x\r\n\t\tLZ3ZkU1ks/FPAcbikpqi/B7YG3jYKIrnDHw5hgN/9AtSoeV9DtmseypHNi/ytkuqSblNxb34gGvR\r\n\t\tXegGoNMoimfBLF4H8HNgH6MopLgDfIk0t6VyFl5Su6Qy+74tH3At1hTg68CrjaJYzsAX7wLgecZQ\r\n\t\tSHnf/KBqqnvKOgsvqZ02JXztNwErcDa+CGcBbzMGC3ydTSd7cEOtl/fNS2ZSd40RSGqDO4zAJTUF\r\n\t\t+jxwhDEUxyU0xRkDXG8MLRd3iGtv91Zt3lLSZTSSqjINWG8MgEtqijQHmAisMorWOQNfXI7XAzsZ\r\n\t\tRcvlPca93VvRYwSS1HYuqWldF/A7u6cFvk4+ChxtDC2V93m4Z/6OuIxGUpVcPtO3e/Hgp1YdAVxs\r\n\t\tDBb4OngenjjWanm/Bg8v6s/deDKrpGq4fKZ/y/IvOJb4wbsIOM4YWuMa+NbsAVxlDIMu7pDuFpHN\r\n\t\teMIIJKk21uO6+Fb9BhiP6+EHzRn4wRsK/MEvQS2V95S3iJQkhe2m/M/OxjdvJ7LfvHcYhQW+apcC\r\n\t\tBxrDoMr75v3d1bhlRiCpAiuMoOkS78OtgzODbDmNLPCVeQbwbmMYVHmfh/u7D8bdRiCpAk4WNM/9\r\n\t\t4gfvQ8BRxmCBr8LOwLXGMKjy7sOqg/eoEUiqwONGMCir8eHWwfoDMMoYLPBl6gB+5kAbVHm/HLjL\r\n\t\tKAbtMSOQpFpbD9xsiW9aF/BjXA9vgS/ROcCJxtB0ef8cHs4kSSHoNoKW9LBlhxqLfONOAl5tDBb4\r\n\t\tMuwDfMEYmiruM4HLcBtESbIXpMUdapr3DbKtJeULtTCdwBxjaKq8b95ppsc4CrGLEUiqgFsjF1vi\r\n\t\t3aGmOdfZTS3wRfoksLcxNFXe3WmmWGOMQFIFOo2gUPda4ptyGJ5ub4EvyDTgHcbQcHl3m8hyHGAE\r\n\t\tkiqwhxGUUuIXWuIb9lFgqjFY4FsxHLeMbLa8u02kH6qSwjXWCEqxzBLflN/hb4Ms8C34AjDOGBoq\r\n\t\t73Ms75Ik9VviPfCpMXsCnzEGC/xgzADeaAwNl/cbjKI0XUYgSVHwwKfGvRWYbgwW+GaMAK40hobK\r\n\t\t+zWW99LtC8wyBkkVmJt/Bqo86y3xDfuF49EC34yvALsaw4Dl/Qo8XbUKJxuBpAodagSVlPhbLfED\r\n\t\tGg183hgs8I04ETjbGAYs75cDi4yidB4tLUlx2mSJb8gbgSONwQLfn52AnxrDgOX9CmC5UVTiIFw+\r\n\t\tI6laLqOxxNfNdbgrjQW+H5cBo4xhwPLuzHt1XD4jqR1cRmOJr5PdgY8ZgwW+L0cC5xiD5b1GJhmB\r\n\t\tpDZyCZ8lvk7eBRxoDBb43obhHuaW9/o5A5fPSGqPucDRxmCJr5lfAUONwQK/2YXARGOwvNfIwUYg\r\n\t\tqQYsS5b4OtkHeJ8xWOAh22P7EmOwvNfMyTj7Lqm95uLuH5b4+vkILjFNvsB3AD/3tbDD8n6N5b0t\r\n\t\tTjECSTWyhxG0pcR72NOOXUniz2ikXuDfCBzm66DP8j4HD2lqh0m4daSk+phLtmzBpTTV88TWHTsC\r\n\t\teKkFPk2jgS/7Gthheb/BKCrXiQ+uSqpniXcpTftK/EJLfJ++A4y0wKfnK/gbiL7K+zzLe9ucZ3mX\r\n\t\tVOMSf4wxtMUyS3yfdkr5MzPVAnsU2Uynti/vbqfZHucbgaQAWOLbV+JXWOK381ZgigU+nWv+sWN+\r\n\t\tu/K+zPLe9vLu7LukOptriW+rey3xfbqaBB9oTbHAv5ls60htKe8A3zSKynVY3iVZ4tVkiccSv5UD\r\n\t\tgVekdtHDErve0cAXHOvb+ZQRVG4c8DqLu6SAS/w0sv3KNxlJpW7yC9R2vkm2LfiaVC44tRn4L+OD\r\n\t\tq73NBC4zhsqdYnmXFEmRPxL3iW9XiXcWfothJDZBm1KZPRI40zG+VXn/EtBjFJUZR7Zkxn3eJcVU\r\n\t\t4vchmxF2r3hLfDu9Jv98TeYbSypfVH7i2N6qvF8BrDWKSnTmXx73sLhLirTEk5fJFWxZp63y3Zrn\r\n\t\tPtcoIO82R5DA5GQqBf7l+OBq7/J+DbDIKCpxCs64S0qvyC8k291M5doEzLfEP+kw4HnAtbFfaApL\r\n\t\taIYDX3NMP1ne5wF3GUXpJuFyGUnpFnmX1VRnNR701Nv/ksAEdQoz8O8DuhzP7vVekQ7g1bhcRpIl\r\n\t\tnl6l8iYjKdUyYBTOxAPsSnbA0+cs8OEaC1zs6/pJ7vVeroOBky3uktRnkb8DWG8kpbk37z2CTwP/\r\n\t\tA6yK9QJjX0LzOccw4HaRVTjb8i5J/Rb5Q3H/8rK5M82Wfvup2C8wVgcBZzmGmQlcjttFluVgsrXu\r\n\t\tLpmRpIFL/Ny8xI8wjtLcbIkH4I3A5FgvLtYlNB3Adxy7zATmAMuNohRnW9wlaVBF3i0ny9NDtlzJ\r\n\t\t9fDwPWB6jBcW6wz8ScBRlnfmATf4Xla4Lpx1l6RWS/xYstn4DuMo3HrcmQbguFgLfIwz8ENw9n1m\r\n\t\t/md3nCnedOAZFndJKqTEk5fM+WTbIao47kyT+T7ZUpru2MpubM4Advd1G/fDG21ytuVdkkop8lOB\r\n\t\t/Y2icC5Rgr2BF8Z2UbEV+GHAVxIfqDOBL/l6LdQ4XDIjSWWXeJfUlMOHWuEbRHaoWGxLaN5E9uui\r\n\t\tlMv7HGCt71eFcW93SaquxIN7xheth2yJUspLaXYlW6Hx3VguKKYZ+BHAZxIv78vwodUinWJ5l6S2\r\n\t\tFPlDyX7rqWKsJtv1J+WZ+P8GOi3w9XM+MDzxF6gnrRbnbLKzBCzvktSeEr8ProsvUurr4bvI9oaP\r\n\t\tQkdPT//n+8xesDiE69iZ7LjcIYkOyplkp84+4ftTyzqB8/L/bHmXpPbaPGN8k1EU5hjSXUqzERgN\r\n\t\tPF73H3TG5An9/v1YCu/FiZf3KyzvhZiUl/dZlndJqoXep7cONY5C3EG6S2mGAe+I4UJiKL27Au9O\r\n\t\tuLzPAxb5ftSy6WQPuFjcJameRf5I0t6ooiipH/J0aQzjaEgkNyJlHtbUulNwf3dJCqHET8WHW4uw\r\n\t\tLPHrf78Fvr3GAeckOvg2r3tXa3xYVZLCKvE+3FqMm0h3Fv5CshUcFvg2uTjh8j4H1723ysOZJCnM\r\n\t\tEr/50Ce1JuX18O+zwLfHrsDbEy3v7vfemo68vGN5l6RgSzyW+JatJ9394S8g25HGAl+xDyT8gnO/\r\n\t\t98HrBN6JO81IUgwlfq4lvmUp7w//Tgt8tXZhywxqSmYCl/teM2hdbNkmUpIUT5E/huy3qxqcm0lz\r\n\t\tFv5DeTewwFfkXxMt7/OA5b7PDMrmB54t75IUZ4k/GveKH6we0t1a8m0W+GqMInt6OEVuGTk4k4DX\r\n\t\tWd4lKfoSf6QlftBS3VryE8BOFvjyXZDg4HLLyNbKuwc0SZIlXgNLcWvJIcDrQ/uhO3p6evr9B2Yv\r\n\t\tWFynn7cLWJNgeZ+Du84MxsHAyZZ31UA3sAFYDTxKthRuff6fVwCPA4vz97dHgSXAuvyfezT/zyv7\r\n\t\t+PeuIfvV97Y2bvPfh/X1/g/s3MdfHwuMAMaQLT0bCeyZ//edgYlks1Vj8782Iv/nxubv0cOJ45BA\r\n\t\thW0acCuwySiaNorswKy5CV3zhvy6a7M994zJE/r9+8MCC/gfE30xWd6bN8nyrgre8FcCS4FFwD35\r\n\t\tH/OB+/K/viov6u22cQd/fWWDf20wRpBt0TYe2A94KtnhOwcCe+VfCnbNC79UtLmW+EFbneA1DwfO\r\n\t\tIqCNQkKage/MB1VKb/abl854YFPz5d1lM2rVOuAB4K/AXcAtwO15OX+Uvme+NYjPIbKZ/P2BQ4Gj\r\n\t\t8j8fCOxNgGtTVSvTyA4rWm8UTTuGtGbhV5P9JnFjHX6YmGbgT0uwvHvaquVd5eoGHso/4G8k+23X\r\n\t\tLflfs6BXo4ds1v/m/I9v9lHwJ5LtMDIdODYv+BNxqY4G5kz84M3Ps0ulxI8CTgV+FMIPG0qB7yDN\r\n\t\thzhdOmN5V3FWkc2mzwGuAf4EPGwsQRT8B/M/rtzm740EjgBOAJ5FNnu/t5FpByX+Zr+YNyXFpTT/\r\n\t\tCfw4hHESyhKa44HfJjSAXDrTvHG4VaS2WAn8kWwm5SpggZEkZTLZTNpLgaeTrbWXLPGDk9pSmuPy\r\n\t\tz4+2GmgJTSgF/i7goITKu7vONKcLD2lK2UbgNuAnZDMnt5EtjZE2G0I2U39aXuqPwOU3KZf4m4yh\r\n\t\tKantSnMj2XK9Whf4EJbQHJZQed/M8t64Tst7koX9duD7wDdwdl0D6yZ7tuEW4OL8r+0BvJJs54mn\r\n\t\tEd6ubBqcuZb4pqW2lOY4sp2z7qvzDxnCDMRlCQ2amcCXfK9oWAdwnuU9CbcD55M9uNhJ9kDjv1ne\r\n\t\t1YJlwGeBZ+Rjaq/8Pfh2o0mixB9jDE1J7YCnj9T9B6x7gZ8EnJRQeZ8HrPV9omHvtLxHay3ZA4sv\r\n\t\tzN+nDs+/zC82GpXkIeBT+Vgbkhe8r1DcvviyxIduYUIl/mxq/uxM3Qv8+xN7cVzt+0NTLy7F5R7g\r\n\t\tAmA3shM/X5y/JnzgTFXrIXvY8S1k+0LvDrwXuNdoorO/ETRsWWLXe16df7g6P8Q6knRmo2cCV5Cd\r\n\t\t5qjGyvseOPsegwfIljF8muzgJKnuOoEzgQvJntFS2KYBK/xy1rChwJGk8UBrN9kmGW05BGygh1jr\r\n\t\tPAP/6sS+1VreG3OK5T1495OtZ9+JbJncxy3vCsgTZIdNHQ6MIJuln28swZpL9luWPYyiIZvyLzwp\r\n\t\tGAKcXucfrq4/178nMkBmAt/yPaEhB5PtSGR5D89K4H154dmPbD27R5srdBvI1sk/Nf9CehHZgWEK\r\n\t\tr8TvQ7ZdogZ2L+mshf9cXbtyXQv8M0jj4I3Ne767xndgk4CTLe9B6QZ+Sfag2Fjg0rzwSDFaD1wC\r\n\t\tjAGeQrYs0vMIwirxU8l2N9PA5idS4scBx1rgG/ephF4E7vk+sE7gDMt7MO4h2197GPB8socBpZTc\r\n\t\tC7wifw2cheurQyrxRxtDQ1LaG76WK0LqWOAnkR19HTv3fG+ce72H4Zdk+7QfAPwv/mZJ6gG+QzYj\r\n\t\tvxvOyodS4t1esjE3k8Ys/DOB8Rb4gb03kYHvnu+NOd8Iam0D8AlgONlsu/u0S31bTjYrPzz/nPPB\r\n\t\t7XqzxDf2BTWVB1rfZoHv30jg3AQGwkzgGl/7Azol/7Oz7/XzAPASsodSLyTbmUPSwDaR7bw0kuy5\r\n\t\tnvuNpHY2b5HoHvEDS+WB1n8lWxJngd+BVyRS3n1wdWDuOFNPfyFbDjAJ+JlxSC35BdmuTAfkry3V\r\n\t\tq8SPJZukUP9SeKB1GPA8C3zfOoBPJjLYfXC1f12440zd3JIXjSPxgTypaPfkr619/HyoXYk/1BgG\r\n\t\tlMoDrbXqJHUq8IeRHVcds80nrqp/51jea+N2sl8jH42/6pfKtohsG+W9gN8aR21KvOvhB3Yr8c/C\r\n\t\tH0Q2kWWB38a/JvQGrR3zodV6uIFsR5nDgfuMQ6rUQ8AJ+WvQGfl6cD18/zYlcp0XWuC3tjNwZuQ3\r\n\t\t3W0jB+ZDq+23hOxXxs/AHWWkdlucvxan4G/A2mnzevg9jKJfNxH/LPxbyR5At8DnTk9gYC/DbSP7\r\n\t\tMwkfWm2n1cCpwATgTuOQauXvZL+6P5G0DtCpW4nfBxhqFP1KYVvJ0yzwmQ6yLbViNhP4lq/rfseA\r\n\t\tJ622RzfwL8AuwM+NQ6q13+Sv1XcAG42jLSX+SGPoVwrbSn4q7y3JF/ipZOv8Yi7v83DbyP680/Le\r\n\t\tFl8lO1TmY0YhBeWzZL/G/5pRtKXE+1Br/xZGXuLHk239mnyBf18Cg/lqX887dIoRVO6B/Evzm0jn\r\n\t\twSMpNhuBN5Lt3ubWrtVzPfyOLUvgGt+eeoHfCXhdxDd486FN6pvr3qvVTXaE+yR8QFWKxSNkh6u9\r\n\t\tJn+Nq3yuhx9Y7Ic7nQt0plzgX5LAIHYLsL657r1atwCjiP95EylV3yTb0c3946sr8a6H37HYH7Ye\r\n\t\tAhyfcoH/RMQ3dyZwja/hHXq15b0Sa4EZZAcxPW4cUtTWke0fPx13PauqxLs//I7dQdyz8JekWuD3\r\n\t\tAfaNfPDe5eu3T9Nx/WAVriCbdXcZl5SWG8l2q/mxUZRubP4+q+2tT6DL7JZigX9DxDd1Zl6etL1O\r\n\t\tsoNJnH0vz0bgOcArcPcjKVXdwMvy99sNxlGauWS76alvsc/CvzK1Aj+EGh1HW5JFvm77dJ7lvVS3\r\n\t\tk80GXW8Uksiew9qF7DkYlVfi3Vqyb7HPwl9Cm/aEb1eBPwLoivRmOvu+Y9ONoFTnA4cn8IYpqTkb\r\n\t\tyJ6Dcaeacrk0tG+3Eu8s/K7AwSkV+HdFPlidfd9eFy6dKcsSsr2gLzMKSf34JjCO7CwIFWvz1pLa\r\n\t\tXuznjbSl07ajwI8Azo70Jjr7vmPnWN5L8Q1gAtle0JI0kEfJzoL4jlGUUuJdStO3mGfh35h32+gL\r\n\t\t/AmRD1Jn37fnaavlOBN4rTFIGoSz8vcQFc+lNNuLfRa+8m7bjgL/oUhv3kzgcl+j2+nC01aLthbY\r\n\t\tG/ieUUhqwffIln24Z3xxXEqzYzcT7yz8B2Iv8OOA4yIenMt9fW7HpTPFmgeMAR40CkkFWASMxl1q\r\n\t\tii7xLqXZXszbGs+g4vMAqi7wp0d641z73jd3nSnWV8iedt9oFJIKtIlsl5qPGEWhPOBpezGvhX9e\r\n\t\tzAX+wxEPSte+b80Dm4rTDZwEvMUoJJXoA8ALjKEQHvC04y+LMb9+oizwewETI7xhM4FrfE1u50zL\r\n\t\teyE2kj1D8GujkFSBa4ED8Dd9RZV4l9JsL9bTWY8CxsZY4P8h4sF4l6/HrRyMT+EXYS0wHvibUUiq\r\n\t\t0D1kZ0usNopCDDWCrcR82OCLYyzw/xrhjZoJzPG1uJ2Tcfa9VUvyb/I+GC2pHR7FQ5+KMBc40hi2\r\n\t\tM584Z+Er22mxqgI/iWwmMUY3+Drcinu+t+4WsuVmG4xCUhs9QbYl4p+MomX+Vnprsf52Z39gz5gK\r\n\t\t/BmR3qh5vga34p7vrfs+2W4QPUYhqQZ6gGOBnxjFoLk3fN8WRnpdlSwZr6rAvzfCG+TDq9tzz/fW\r\n\t\tfDziL7uSwnYa8BljaKnE+0Dr1pYR5zKai2Ip8JOp6NcJFZuHs6S9HWwELflEpF90JcXjn4n3NPWq\r\n\t\t+EDr1mKchZ9ItnQ8+AL/ighvjrPv2/PB1cG7BLjQGCQF4GI88GmwfKB1e7HOwp8ZeoHvAN4X6YBz\r\n\t\t9n0LH1wdvA9R0a/bJKkgH8CZ+Fb4QGv8Sv+NetkFfl+ybahiMhO4yrH5pE58cHWwPkg2myVJobkY\r\n\t\teL8xNM0HWrd3M/HNwu9Oybsvll3gXx7pYHNv7i08cXXw384/bAySAvZvwL8Yw6BK/P7G8KRYVzS8\r\n\t\tMOQC/+7IboZr37c2Dn8VONjXxceNQVIEPmaJH5SxRrCVO4hvFv6CUAv8nsR5eNNdvs6e9DqcfW/W\r\n\t\tf+R/SFJMJf4/jaEpbiu5tfURXtNBwJgQC/wLIrwZHty0xSQjaNqVxPdbKUkCOA+41hia5raSW8S4\r\n\t\tpeQJIRb4mZHdhJnAdb6+nnQGzr434y/Ai41BUsReQPZAohrjtpJbi3FLydIm7coq8KOAoyIcXE/4\r\n\t\t+gI8tKlZD0X6epCkbU0DHjCGpowwgmg9ExgZUoH/f5HdgJnA5Y7DJ3loU+NWkW2n6rkBklLQQ7bD\r\n\t\tyiqjaMhc4FBjeNKtxDcLf1xIBf7tEQ4qt47MTDeChm0A9sbf3EhKyxP5e98Go2jYKCMAYFOE1/RP\r\n\t\toRT4TuBFEQU/E5jja+pJz8DZ90Z0A5OB1UYhKUGryWbiu41iQHOBqcbwpPmRXc8ZeTeufYGP8YGM\r\n\t\tG3w9Ac6+N+MEYIkxSErYg8CJxtAwZ+G3fPmLbRnN4SEU+DdEFvoyX0tPcva9MZcAvzMGSeL/8OyL\r\n\t\tRjgLH7ez6l7gO4A3RxT4TOAqxx3g7Hszb8IXGYMkPend+XujBuYsfOZm4pqFPyfvyLUt8JOB4ZEN\r\n\t\tIh9ezTj7PrCVwLHGIEnbORZ3phmIs/BbxLZz2yhgfJ0L/PMiC9yTVzPOvg+sG3gKPrAlSTt6j9zP\r\n\t\t98iGy57iO5m10OdBii7w50YUtCevbuHse2MvzBXGIEk7tIL4zokpmrPwW8R2Mus/17XAjyS+0ybd\r\n\t\tv9vZ90Z8hOxBLUlS/24APmYMA3IWPj7HUeCpu0UW+Ji2j5wJXONYA5x9H8gtwAeMQZIa9i/AX4xh\r\n\t\th5yF3+IO4pqFP6yOBf5VkQ2au3zdcLAR9GsDJR2RLEmRezqw0Rj6NcIIWB/Z9ZxRtwIf2/aR7v2e\r\n\t\tORln3/tzAh4VLkmDsQF4ljHs0FzgUGMA4nq+7G0UtJ1kUQV+ItAVSbju/Z6ZZAT9+howxxgkadBu\r\n\t\tAL5pDP3qMALuI55lNKOBPetU4GM7Ktm937Nf8zj73reHgTcZgyS17LV+5u7QXOBoY4huT/hn16nA\r\n\t\t/2NEwbr3ezy/TSnLIRG+oUhSu8rZIcagAcS0J3whW64XUeCHA8dHEupM4Le+TjgdZ9935G34jIQk\r\n\t\tFWkJ8A5j6NNcYH9jiGpP+OPz7tz2An9QZINkbeIvkg5gD98r+nQL8EVjkKTCfRa3ltyRsUYQnZa3\r\n\t\tCS2iwD8/okB9KNGdZ3ZkI3CsMUhSadxasm9zcWIN4lpG84I6FPi3RBLmzPxFkrqDjKBPZ+LJvJJU\r\n\t\tpg1kD7Vqe/sYQVTLaFreer3VAj+SuE4LS72geXBT3+YBPzQGSSrdd3AziR3xYKd4HATs1M4CH9Ns\r\n\t\trW8YLp/ZEU9blaTqTDeC7XiwUyamZTRPbWeBf2EkIc4Erkv8ReHWkX17H7DKGCSpMo8CHzIG9SGm\r\n\t\tZTQtPUPaaoGP6TCb1JfPuHXk9h4GLjUGSarcxfl7sLZwS8m4nNOuAt8V0UBKffmMW0f27elGIElt\r\n\t\t8zQj2I5bSsazjGYK2bOklRf4WNZiuXwme5bB2fetfQ24zxgkqW3uB75tDNtJ/WHWmJbRDPpZ0lYK\r\n\t\t/IsiGgypL5852ffDrayjgC2eJEkte03+nqyMD7Pav1ou8LEUnNSXz4zz9dPnl9NuY5CktusGTjOG\r\n\t\t7XQkfv2xLKMZ9FlKgy3wo4C9IwhuJvDbxF8EL8TlM73dC/zaGCSpNn4B3GMMT5oL7Jd4BrEso9mf\r\n\t\tQe4CONgCH9Ovb9Ym/g3eh1e3dqIRSFLtnGQEW/Fh1ngM6hDNwRb450b0DS5lPry6tWvIHpqSJNXL\r\n\t\t/cD1xrCV1B9mXRHJdQxq4nCwBf6VEQQ2E/hN4oPfh1e36CbbC1+SVE8vNoIn+TArLCCOZTRnVVXg\r\n\t\tO4HDIrn5ixIe+J2+/23lU8DjxiBJtbUW+E9jUG5TJNdxNDCsigI/yTEThWm4fGazDcAFxiBJtfeO\r\n\t\t/D1b2Sz8KGOIwl5VFPhjIwlrTuKD5Rm+Xp70Jtw2UpJC0A2cawxPmpr49c+P5DqaXgo0mAL/0giC\r\n\t\tmpl/c01VF9psOfBNY5CkYHwFeNgYBKwmjnXwp1ZR4F8WyU1P+fTV03H5zGbPNwJJir/wRGoubgcd\r\n\t\tgzPKLvBjgZ0iCCr101d9sWfuJ+3fxEhSqG4AHjAGAPZJ/Ppj2E5yFDC6zAJ/cAQhzQRuTHig+xDy\r\n\t\tFv9gBJIUrDOM4EkdCV/7fcSxjOagMgt8LAc4LU94oJ+Ay2cAHsLZd0kK2RychSf/LNsv4evvieQ6\r\n\t\tmjrQqdkC/ypfJ8Fz+UzGQ5skKXxnGQGQLXFW2M4uq8B30uT0fk1dk/DgGOfrA4AlZOsnJUlh+z9g\r\n\t\tqTEAaS+juSOCaziMJg50aqbA7x1BODOBuxMe4C/E5TMALzcCSYrGK40g+WU064ljHfzEMgr8EZHc\r\n\t\t5JS3j3T5TLZ38O+NQZKicT3OwoPLaGJwWBkF/gRzDZrLZzKvMAJJis5rjEAReFYZBf60CIJJef37\r\n\t\tcbh8ZjnZTI0kKS7X4umsqR/qFMM6+Ia3t260wA8D9g88lJlkB/ek6iDkbgWSFK/XG0HShzrFsA5+\r\n\t\tKjC0yAI/IZKbuzbRQd3lexprgV8YgyRF68qEP+cVj4Z+i9JogT/YPIP2bFw+c7HDQJKi97HErz/1\r\n\t\tZTQxeGqRBf5ZEQSS8vr31JfPdPsFRpKSKfDdiWeQ8jKaGNbBzyiywL808DBSXv+e8sEOm10BbDIG\r\n\t\tSYreJuCnxpCsGNbBv6SoAj+UOPaAT3Vd3N44+3yu72mSlIw3J379c2nwQUjV0vRG+nkjBX43swza\r\n\t\tGYlf/+3AIw4DSUrGI8D8xDM40mEQtAEP5WqkwD81giCucSwk681GIEnJeZMRJCuGL28HFFHgpwce\r\n\t\tQsrr31PfPnIVcKPvZZKUnN8Dq40hSasJfx38sUUU+OdFcDNTXf9+BGmvf7/Q9zFJStYHEr72ucAo\r\n\t\th0CwntNSgZ+9YDFke4grTM9I+Nq7gS87BCQpWZ8m7S0lpzoEgvX8vIMPrsADI4HhgYcwL9Gbn/r2\r\n\t\tkd/CvYAlKWXdZNsIKz0LA//5u4ARrRT4PSO4iamugU59+8j3+v4lScl7d8LXnvJ2kg9HcA27t1Lg\r\n\t\tpwR+8TOBFYkO3hMSftNaCjzo55YkJW8RsDzh65+c6HX3EP6DrE9ppcAfE8lNTNEeCb9hfdTPLElS\r\n\t\t7tKEr32stz9YR7ZS4E8I/OKXJXrTU1///nlf95Kk3GVGoAD1u4lMR09P3xPU+dOvawh7L/FDgLsS\r\n\t\tvOmTCP8BjsG6gbR335Ekbe8m4OhEr30YsCnB6x4FPBbwz78KGDNj8oQ+/2Z/M/AjAi/vKR/gdHjC\r\n\t\tb9IX+DklSdrGexK+9lTXwYd+oNNo+tkJsr8CH8MONKke4HRQote9Afidn1OSpG38CtiY6LW7Dj5c\r\n\t\tuw2mwE8xtyClvP79f7z9kqQd+I4RKDD7D6bAH2VuwX7TTnX/93/19kuSdiDVJZZzSXdyL/StxI8c\r\n\t\tTIF/VuAXPSfRwXpcote9hGz/d0mS+rI44c+J3RO97tB3I3xWUwU+34Hm+MAv+i+JDtZU179f4meT\r\n\t\tJGkAH0v0uvdJ9LrXBP7zH99UgSc7ejfkb2szgcd9n0rKl41AkjSALxhBUkI/kXXv2QsWD2mmwI+K\r\n\t\t5KalZlyiL9B7yHagkSSpP+tJd4vpDm9/kLqaKfB7mleQppLmA6yf9tZLkhr02QSveS6ws7c+SLs3\r\n\t\tU+D3DfxiU32ANdUTSL/i61uS1KDPJ3rdUxO97tBPpp/cTIE/OPCLXeT7UzIewOcdJEmNexx4yBiS\r\n\t\tsTzwn/+gZgp8yAv+Z5JtKZiaVNe2fc73JklSk75oBMnYFHivPbqZAh/6FpJPJDhAUz3AyQIvSWrW\r\n\t\tpxK85pQPdArZjIYK/OwFizvo5+hW1VaKa9uWAqu99ZKkJj0GPJzgdfsga3iOyLt5/wWeHWxXE5Bl\r\n\t\tid7gFB9gdT9fSdJg/VeC1zzV2x6kEY0U+N0Cv8i7vc/J+KwRSJIG6T+MIBnzA//5xzVS4EM/bjfF\r\n\t\tHWhSXNO2HHjE9yRJ0iA9AqwyhiSEvlvd3o0U+AMCvsBUd6BJ8QHWr/l+JElq0dcTu95UH2QNfSea\r\n\t\tKY0U+NDXR6W4A02Ka9pcPiNJalWKJ3n7IGt4DmikwB9uTsFJ7QHWjcD93nZJUov+nn+mpMQHWcNz\r\n\t\tWCMF/hhzUs3NNgJJUkH+aASquaP7LfD5PpN7B3yB87zHSfAEPUmSnylqxoqAf/apsxcs3nGBB4YH\r\n\t\tfnPuS3BAdiV4zT/2fUiSVJArjCAJDwb+83f2V+B3CfziUtyBZhxp7UCznPC3g5Ik1cc6YGVC1zsX\r\n\t\tGJrgfd4Q+M8/qr8CH/IhTjPJjkZOzaTErveHftZIkgr2k8Sud2SC97iHsLeSHNtfgZ8Y+M1JcQvJ\r\n\t\tAxK73i/5OSNJKtjnE7vePbzlwRnfX4Hf13x8EdbcXG+5JKlgf0rsesd6y4Mzub8C796gqrM7yX4F\r\n\t\tJklSkXpwJzvV24H9FfhDA76wZQnezM7Ervfrvn4lSSX5qhFEL+StJA/pr8CHfIjT3QkOxF1Iawea\r\n\t\tr/neI0kqyeUJXetcoCPBexzyZO/RfRb4fIP4fQK+sEUJDsTxCV3rBuBhP18kSSVZSralZCqGJ3iP\r\n\t\tQ96GeqvDnHrPwA8L/KYsT3AgTkvoWn/nZ4skqWR/SOha90rw/m4K+GcfQq/9+3sX+BEBX9RM0jzc\r\n\t\tJ6UdaL7r54okqWTfS+haU92JJuTJz+F9FfhRgd8QdyeJ24+MQJLkZ40S1tVXgR9tLqqpjcAjxiBJ\r\n\t\tKtmy/DNHqqNd+irwu5lLUFLaQvI2b7ckqSK3G4FqalxfBd5jdcMr8KlsIXmFt1uSVJFUltGkupVk\r\n\t\tyHvB795XgQ/5aeQUT08bl9C1/q+fJ5KkiqS0acKQBO/v6oB/9ol93bhJAV/QfQkOwEkJXevf/TyR\r\n\t\tJFVkfkLXOjLB+xvyroX79FXgpwR8QY8lOAAPSOQ6H/KzRJJUsaWJXGeKy6dDLvD791XgQy6EKR7i\r\n\t\tlMqL7g9IklStOYlcZ4p7wYd8mNOUvgr8UwO+oCd8r4nWz41AkuRnjwoU6mFOB21V4GcvWNxBuPvA\r\n\t\tz8Q9W2P2SyOQJFXsF0agGho/e8HiLQUeGBr4BaV2CmtK2z496OtVklSxhUagmhrau8B3mkdQRpLG\r\n\t\tHvA+wCpJapclCVzjXG9zcIb1LvDDzSMoqewBP8dbLUlqkxsSuc6h3uqgDO9d4EeaR1B2SeQ6r/NW\r\n\t\tS5La5LeJXKcdMCw79S7wXQFfyLIEb95+iVzn73ydSpLa5HoLfLRWBPyzd/Uu8CHP6N6d4MDbLZHr\r\n\t\t/KufH5KkNrkzkescleC9DXnyd+dYCvyjCQ68FA5x2oD7+0uS2vs5lMI21Ske5hRyvxjdu8DvGvCF\r\n\t\tPOZ7TJTuNwJJUpu5nWScQv5iNqZ3gQ95V5O1jsMo3WgEkqQ2c5vFOHUH/LOPi6XAr3McRum3RiBJ\r\n\t\tarPfGEGUQj4AdLfeBX7PgC8ktXXSqZzC6gy8JKndbjAC1cyevQv8hEAvYiZpPGDS2zDSOIX1bl+j\r\n\t\tkqQ2S2E3tFSXCU2LocCHPAPfk9iA60zkOh/3c0OS1GarjUA1M6F3gR9rHsEYl8A1Lvc2S5JqYlUC\r\n\t\t19jhbQ7Grr0L/DjzUI24haQkqS7uS+Aah3ibg7HVNpLOwIdjUgLXeLO3WZJUE39J4BqHeZuDsZsF\r\n\t\tXnX1JyOQJNXEHxO4xk5vczDGAgyZvWAxwHDzCOvGRc4ZeElSXaSwS8tIb3MwRs1esJghhP3gwrIE\r\n\t\tb9xuCVyjW0hKkurinhRKYYL3dUXIP3zoBf6RBAfcHr6oJEmqTAqThS6lDqy/DwGGmoNqZCPQbQyS\r\n\t\tpJro9nMpSiHv8R98gXemNj6rjECS5GeTFG+BV3wWGYEkqWYWG0F0Qj7xfegQwt466FHHX3R8gFWS\r\n\t\tVDf3GEF0ngj4Zx8WeoF/zPEXnTuMQJJUM3cZQXQ2Bvyzd4a+hGat4y86841AklQz84xANTLUNfCq\r\n\t\tm3uNQJLkZ5NKFvLOQkOGkO0FH6p1iQ22jgSu0YdYJUl1s9AIotMTeoF3Bj4cw4BZkV/jUm+zJKlm\r\n\t\tlkR+fXO9xUEZGvoM/BPew+g8bgSSpJpx0wzViTPwgemM/Po86U6SVEc9fkapbgU+5Bn4jd7DqLir\r\n\t\tkCSprtYZgWrCXWhUKyuMQJJUUx4eKQu8BmWnyK/vYW+xJKmmYp9k6vAWByPoJTQzE7xhXRZ4SZL8\r\n\t\tjFIhpoVc4IcFHHyPYy8qy4xAkmSBb08p9BYHY5hLaFQnS4xAklRTDxmB6vJlK/RdaOSboyRJVfCg\r\n\t\tQdXFMMu7LPCSJA3swdhLobc4GN1D8GCCkOwS+fUt9hZLkmrKZZ6qVYHfZA6qCR9ilSTVlZNMqoue\r\n\t\tIbiTi+rDQzIkSXW10ghUE5ucgVedrDYCSVJNrTEC1US3M/Cqk3VGIEmqqbVGoJro8SFW1cl6I5Ak\r\n\t\t1dTjRqCa2GSBD8uYyK9vo7dYklRTTxiBasIZeNVrQBqBJKmm7EuqzVi0wIcl5l1aHIeSJEkWeFng\r\n\t\tJUnys0pRcR941Ybr3yVJflZJDXyRdB941WYwGoEkyc8qqbEC71PVqgNnNSRJFnhpYE9Y4OWboiRJ\r\n\t\tjdnotakO92qINywoj/nGIUlS2zjZJAu81IvPYkiSal+cjEB1KfAWJ9XBBiOQJNVczMuO/e1CODZZ\r\n\t\t4MOy1gIvSVLbOAOvWnzZCr3Ad3gP/eYvSZIFXoMwN+QCH2pxmuW4kyRJUmK6PYk1LOuMQJIklcA+\r\n\t\tGNC9ssBLkiRJFvjKDEvshnnoliRJUrq6AYbMmDwBwt3dpNP7KEmSpESsnDF5AkPy//KIeQTBp98l\r\n\t\tSVLRpiV4zaHuZPgw8GSBXxzoReyU4ICb6fuMJElSkhbHUOBT4wPHkiS1zxAj8F622dLeP/zDgV5E\r\n\t\tl+MvGsOMQJJUc8ONQHUq8MvMQ74pSpLULzfPiEeoE4eP9C7wywO9iF0cf76QJEmqiJNNfhmrVYFf\r\n\t\t4X1Umw01AklSzTnZpHZb0bvArwz0IsZ4H31TlCSpIj7EGo+Rgf7cK2Mo8GMdf74pSpJUESeb1G6r\r\n\t\tepemx8xDvilKktQvJ5viMSrQn3t174G4JtCLOMjx55uiJEl+VrUkxWchQ13FsSaGAp+iWLf8dAZe\r\n\t\tkqT2WG0EYRb4x80jGI9Eel3OwEuSJPVvXe/StNY8ghHrr7ks8JIkP6faw4nccKztPRjXmUcwHjUC\r\n\t\tSZIqF/N5JU94e4OxvneB32AewYh5xyBn4SVJdRXzs1obvb1h3avNhanbPIIR83InH2SVJNXV8Iiv\r\n\t\tzR4YTnnvebLAz5g8AWCpuQQh5uVOI7y9kiQLfOV6vL1BWJh39q2WLPw90IvpSOzmxbxObSdfm5Kk\r\n\t\tmnKSSe32ZFfvXeDvD/BCZpHesouNwMxIr20XX5uSpJrqivS6piV6P+cG+DMv6qvALwz0BnQmNuBi\r\n\t\t/jXXbn4+SJJqag8jUJst6KvAPxjoxbjsIh7jjUCS5GeUShbqlqAP9VXgFwd6MV2Ow2jsaQSSJAu8\r\n\t\tShbq8uslfRX4ZYFejOum4zHRCCRJfkapZKEuv17eV4FfEejFjHEcRsPZDUlSXflb4niMDPTnXhFT\r\n\t\tgT8gwYG3LNLr8s1RklRXsT7EuiLBezkqpgL/qC+oYDxigZckyc+oAqxO8F6ODfTnXtVXgV/ja9Nv\r\n\t\ty76gJEnq07hIr+txb21496p3gd9gLsFYZIGXJKlSsT5zZ4EPx4a+Cnw3sM5sgrA20utyRyFJkp9R\r\n\t\t1er21gZhFb0O83yywM+YPAFgnvkE4bFIr8s9/SVJdRXrwZE93tog3Jl39a0LfO6v5hOEjcDMCK9r\r\n\t\tuLdWklRTwyK8pmne1mBs1dG3LfB/C/SiOhO7ibF+Wx7i61OS5GeUtJ27+xuM9wd4QbMSLPC+QUqS\r\n\t\tVB17RlzmBvgzL+ivLD0Q6I3YybEYDdfBS5LqZmcjiMbQQH/uB/or8EsCvajxjsdouBONJKluRhtB\r\n\t\tNEJ9lmFZfwU+1BM+xyQ4AJdFel27+94iSfKzqRIrEryXoX4ZW95fgV8V6EUdkOAAfCTS69rPzwlJ\r\n\t\tUs08JdLrWpbgvRwV6M/9WH8FfnWgF7VHggPwvkivK8UvY5KkepsS6XU9keC9DPXU9zX9Ffgn8ESu\r\n\t\tUCyJ9Los8JIkC3w1Nnhrg7Ax/6PvAp+f8HS3OQVhXaTXtZ+3VpLkZ1MlPIU1DFudwrpdgc/NNacg\r\n\t\tPE6cp7FO8tZKkmpmnwivyVNYw3Hztn+hrwJ/pzn5rbmN3BJUklQ37pCmdrqrkQL/t0AvzlPS4jDG\r\n\t\tCCRJNeM+8PEIcaXJPY0U+AUBXtgsC3w0PFVXklQ3w40gCh2B/twLGynwoe5uMs5xGY2hRiBJqolY\r\n\t\tJwhTPMQp1C9iSxop8MsDvbgUH36cF+l17ernhSSpJmKdIEzxEKdQv4ytaKTArwn04sYmOBDvi/S6\r\n\t\t9vLzQpJUE3tHel0pHuIU6sGfaxop8KEe5nRQggPxsUiv6ylIklQP+0V6XSke4hTiZG832xzi1GeB\r\n\t\tzzeKn+frNQixnsZqgZck1UWMp7BOw0OcQrHdIU59Fvjcn8wrCBuJ8zCnA7y1kiQLvMQf+/qLOyrw\r\n\t\tt5hXEGL99ryft1aSVBP+VljtdEszBf6vgV6ke8HHYbIRSJJqYm8jUBvNa6bA3xfgBXqYUzz2NAJJ\r\n\t\tUk3sHuE1rUj0XoZ4CuvCZgr80kBvTIqHOcX4wPGufl5IkuwWpVmd4H0M9ZDIpc0U+FWBXmSKhznd\r\n\t\tF+E1DSfc444lSfHoAIZFeF3LE7yXIwP9uVc1U+CfIMz9QVPcvSTWrSTH+LkhSWqzWA+J7E7wXoZ4\r\n\t\tiNM6+tgDfocFPt9v8mZvThAeI86tJPf3c0OS1GbuAe+XsXb6Y197wO+wwOdu9HUbhFiPQj7UWytJ\r\n\t\tarPDjUBttMNzmfor8H8xN7XRkUYgSbLAK2F/GUyB/1ugF+tWknE42AgkSW12iBGoje4eTIFfFOCF\r\n\t\tproX/LIIr+lAX7eSpDaLcQ18invAdxDmHvAPDKbAh1oKU9wL/u4Ir2mCnxuSpDYbH+E1PZjgfRwS\r\n\t\t6M/98GAuaE2gF5viXvDzI7ym0X5uSJLabFSE17QhwfsY6h7wa5su8DMmT+gG7gnwYlPcCz7WrSR9\r\n\t\tnkGS1C4jIrymVLeQDHGb8TtnTJ7Q03SBz13vTQpCrFtJ7uXnhySpTSYZQTRC3AP+N/39zYEK/J+8\r\n\t\t52qjpxqBJKlNDjICtdGfWynwd5qf2sj9dyVJfgYpRXe1UuDvD/SiU1w7PS/Ca/I0VkmSBb44C72t\r\n\t\twVjQSoF/OMALnkWc2z4N5L4Ir8nDnCRJ7RLjMs5VCd7HUPeAX95KgX8c6A7wondJcIAuifCa9vXz\r\n\t\tQ5LUJvtEeE0pbiG5c4A/80Zg3aAL/IzJEwj0W8u0BAdojFtJprijkCSpHmI7GNItJMPxx7yDD67A\r\n\t\t537vzQpCjFtJDiPc09MkSWF//gwzhiiEuIXk7wb6BxopR3O992oj9+GVJFXNJZxqp5uKKPBuJRmO\r\n\t\tZRFe01HeVklSxY6O8JpWeFuD8dciCnyoWw6luJXk3RFe03Rfx5IkP3tatszbGowFRRT4EL+xpbqV\r\n\t\t5PwIr2mar2NJUsWeFuE1rUnwPg4lzKXgjxZR4DcR5ix8iltJxrgTjXvBS5KqNjWy60l1B5qRAf7M\r\n\t\t99LAFu6N7vDxi0AHa2pi3Ilmop8jkqSKuY2x97FdrmrkH2q0wLuVpNrFrSQlSVUailtIxiLELSTn\r\n\t\tFFng73AMqI32NgJJUkXcQlLtdHuRBf6+QEPoSPDGz4nwmo7y9SxJqsgxEV7TfG9rMBp67rTRAr8y\r\n\t\twABmEebDC61aFOE1uZWkJKkqx0V4TSnuQNNBmDvQNNS5Gy3wGwlzJ5oUfw22hPh2onkakiRVY1qE\r\n\t\t15PiDjTDA/yZG9qBppkCD/DLAIPYL8EBG+NONE/180SSVJGDjCAKowP8ma9u9B9spsD/wReh2sSt\r\n\t\tJCVJVXEXuzjsE+DP3PBzjM0U+FsdC8GI7bjk4biVpCSpfDFuIbnC2xqM28oo8PeaazDujvCa9vK2\r\n\t\tSpJKtk+E17TM2xqM+8so8CsDDaMrwQEQ43ZRR/m6liSV7OgIr2m1tzUYj5ZR4LuBmwMLYhYwLsEB\r\n\t\tsIL4dqJ5tq9rSVLJTojseqYleh+HEt4WkjfQxG5Bza4r/nmAN/HwBAdujNtFuRe8JKlszzCCKIQ4\r\n\t\teXtlM/9wswU+xFM+3YkmDocYgSSpZG5bHIeod6AZTIG/0zERjHl+m5YkqSmjI7uehd7SYPy1zAK/\r\n\t\tONBQOhIcCLdFeE27+fqWJJVkfITXtNzbGoylZRb49QEOhlnAyAQHwhLie5B1mq9vSVJJjo3wM3NT\r\n\t\tovcytAdYlwIbyizwAFcFeCP3TXDwPhHhNZ3g54skqSTudhaHEQH+zE1vEjOYAv/rQL+FKnwzjECS\r\n\t\tVJL/ZwRRCPHgx99UUeBvCjCYPRIdxLGdvnao70uSpJLEtmvdikTv49gAf+Zbqijw9/kaD8bcyK5n\r\n\t\td2+pJKkku0Z2PQ96S4NxfxUFfhWwMcBwOhMdELE9yLqrr3NJUsFimyCaRrbxiOpvI/BYFQW+B7gu\r\n\t\tsHBmAbskOCjWRnhNR/talyQV7FgjiEIH4a0+uDrv1qUXeBjE07I1MN5xHQV3CZAk+dmivuwc4M98\r\n\t\t5WD+R4Mt8DcEGFCqO9HE9iDr8b4/SZIKFtsuZ6k+wBripiU3Vlng7/GmBuPuyK7HnWgkSUU7JLLr\r\n\t\tWZbofQxxB5q/V1ngHyXMB1lTND+y63EnGklS0cZFdj1rvKVBGNQDrK0U+B7CPNCpK8HB8Vhk1zOE\r\n\t\tNB9IliRZ3pvpaaq/qwd7r4a08H/608BCmgXsm+i3u9i2kvRkXUlSUZ7mZ2QURhDeDjRXDfZ/2EqB\r\n\t\t90FWv4W3y8l+3kiSCnKKEURhrwB/5kF36VYKvA+yql1OMAJJkp8p6iWZB1hbLfA+yKp2cScaSVJR\r\n\t\tDjICtcGgH2BttcD3ANcGGFinYyZ4o1ocu5IkAQwFdjIGtcGVtLDMudUS9KPAwppFeieydkR6XQf6\r\n\t\t2pcktcjf6MbzRSy0B1hb6tCtFvg5Ad7kwxMb1MPyLy6xeZ7vV5IkP0u2MzfB+xjiVqA3tvI/brXA\r\n\t\t3xtgYKmtdYt1z/Tn+7kjSWrRcyO9ro7E7uM+Af7M97WzwK8Flvr6r7WpkV7X07y1kqQWHRPpde3s\r\n\t\tra21pcC6dhZ4gO8HGFxKD7I+I9LrmujrX5LUoj0jva6p3tpa+3ar/4IiCvzVgYU2CzjAsROF3YxA\r\n\t\tkjRI440gCiGewNryLo5FFPhbArzZqZzI2hX59T3T9y1J0iAdbwRRCHEnoVvrUOAfCjC4VE5kfTZx\r\n\t\t7kCz2cm+b0mS/AzZzlw8fb7OltShwG8izC2LJiUwQGLfcccZeEmSnyF92yeBezg0wJ/5xrw7t73A\r\n\t\tA1wRWHizgDMiH9TjEnjh+pCOJGmwnmIEwTuS8CaRC+nMRRX43wZ642PejeaFxL18BmB4/ockSc0Y\r\n\t\tQXbQYczmEu82mSH7XZ0K/F0BBjgLODPSwdFFOmvfjvC9QJLUpKONIHj7E+YS7kI6c1EF/lFgdYAh\r\n\t\t7kGcO7WcTvyz75u9wPcwSZKfHX2amxfdGI0N8GdeBTxWpwIP8J0Ag5yVl92YjCOtJ8/diUaS1KxT\r\n\t\tErrWsUBHZNd0DGHOvn+zqH9RkQX+p4EOgj2AgyMa1K8jndl3gKP8HJIkNenwhK51LnEtGRoR8M/+\r\n\t\t86L+RcMKHiAh2lx25wE9gQ/qlGYUNhuVj+ONfh5JkhrsPl0JXvcewLIIruPQgDvnTUX9i4qcgV8C\r\n\t\tdAdc4t8Z+ICeRLbve0qz75sd5eeRJKlBT0vwmueS7Qs/IvDrCHXpDHlHLuwL1JCCf7DrAh8Yoc5g\r\n\t\td5Hta59ieQd4sZ9HkqQGnZbodc8lm70OVegP415NgRPdQwr+4f434GBnkc1gTw/s5+4Azkm4vIMP\r\n\t\tskqSGvf8hK891L3hR5E9jDs34Oy/V+S/rOgC//vAB/Ys4BkBlfgOsqU/KZd3yE5ikySpEYcmfv2h\r\n\t\tlfhRZCevzw0899l1LvD3RTCwN5f4ui+n6bS8P2kn4j5VV5JUjBF4gndIJT6W8g5wf50L/Aay3Vxi\r\n\t\tKPEHAWfX9OebBJxned/K041AkjSAGUawXYkfWtOfb/+IyvudwBN1LvAA/xPJwJ5FtuXS+dRrdvcU\r\n\t\t0n5gdUdeYgSSJD8rmi7xR1K/AyCPIfw176V24zIK/C8jGtiz8j/Oo/3r4rvyLxOpbhU5kOcbgSTJ\r\n\t\tz4pBlfh98tLc7hNbR7Flq8i5EWV8bdH/wo6env7PLpq9YPFgiuaaCAf4zPzPVwCLKvz/7QBenX87\r\n\t\ttrjv2AbC399WklSuJyj2EMvYTAMWUv2BT0PZsiHF3Ahz7QIeb+Z/MGPyhH7/fhmDeC3ZQv19Iwt/\r\n\t\t2/JcdpHvBM60uDdsODCy2ReIJCkZO1veBzS3V5FfAdxrcW/ZwjK6SVkD+WvAxZHeiG3L9Dzgt/kX\r\n\t\tlyIczJZ9zS3uzZkOXG8MkqQ+HG8EgyryAHcA6wv89+9Btmwn5uK+2ZfL+JeWVeCvjrjA91XkNy+v\r\n\t\tWZYPxPsbLPSdwC7AcWRr27G4t+Q0C7wkaQd8gLX1Ig/ZjPLDQE8T/54RwF5kD6amUNp7uyakAn9H\r\n\t\tYgN828I9s4X/rQbvOUYgSdqBk4yg5SLf27QW//epuCukAr8GeAiYmOjNspS3x0FGIEnagSlGUHqp\r\n\t\t19YeoKSNXYaU+EP/t/dNFRtGtiRJkqTexpXceaS+fKWsf3GZg/lK75va4LlGIEnaxguMQG1wdYgF\r\n\t\t/g7vm9rgTCOQJG3jFUagNiitC5dZ4B8jWwcvVelEI5AkbeOZRqCKLQFWh1jgIdsPXqrSnrT/KGhJ\r\n\t\tUn0MAXY3BlXsv8oe1GX6ifdPbXCwEUiSckcYgdrgpyEX+Nu9f2qD041AkpT7ByNQG5Tagcsu8GuB\r\n\t\t+d5DVew0I5Ak5TyBVVX7G/B4yAUeSl4DJPXhcCOQJOUOMQJV7Atl/x9UUeCv9j6qYsOBUcYgScnb\r\n\t\tlfJOnZd25BcxFPi/eR/VBh7oJEnyACe1Q+ndt4oCvwG40XupinlohyTp5Uagit0APBFDgQf4ivdT\r\n\t\tFXuOEUhS8o43AlXsy1X8n1RV4H/t/VTFxuOBTpKUsg6yw/2kKl0fU4G/3/upNniqEUhSsg4zAlWs\r\n\t\tG1gQU4HfBPzM+6qKeXiHJKXLQ/1UtZ/lJT6aAg/wNe+rKvZSI5AkPwOkiny1qv+jKgv8772vqtjR\r\n\t\tRiBJyfJQP1XtDzEW+GXAcu+tKjSM7BAPSVJadsMDnFStlcAjMRZ4cDtJVe/FRiBJyXH5jKr2+Sr/\r\n\t\tz6ou8N/3/qpirzYCSUrOK41AFfthzAX+Nu+vKvZMI5Ck5Pw/I1DFbo+5wK8DbvYeq0KjgBHGIEnJ\r\n\t\t2AnoMgZVaC6wPuYCDxWvEZKA5xqBJCXjBUagiv1n1f+H7Sjwv/Q+q2Kug5ekdJxtBKrYr1Io8AuB\r\n\t\tjd5rVegkI5CkZDzHCFShjcCiFAp8N/At77cqtGebxrokqVpDgXHGoAp9I++20Rd4gK97v1WxY41A\r\n\t\tkqL3DCNQCp22XQX+T95vVcw1kZLke71UtD+nVODXkG25I1XFE1klyfd6qUi3AGtTKvAAn/G+q0L7\r\n\t\tAh3GIEnR6gD2NgZV6D/a9X/czgJ/rfddFXuqEUhStA4zAlWsbVujt7PALwZWeu9VoVcagSRF61VG\r\n\t\toAotB5akWOABPuv9V4X+wQgkKVovMwKl0mHbXeC/5/1XhQ4xAkmK1lQjUIWuSLnA30UbNr9XsoYA\r\n\t\t+xuDJEXnQDywT9X6a8oFfhPwQ8eAKvQaI5Ak39ulFlwBbEy5wAN82XGgCp1pBJIUnTOMQBX6Urt/\r\n\t\tgDoU+BscB6rQQUYgSdFx/buqdKMFHh4DbncsqMIxf6AxSFI0norr31WdecBqC3zm044HVejVRiBJ\r\n\t\t0XitEahCn6zDD1GXAn+N40EV8rAPSYqH69+VXGetS4F/gBr8OkLJOMAIJCkaU4xAFVkLPGiB36IH\r\n\t\t+KLjQhWO+6cagyQF7xBc/67qfDbvrBb4Xr7tuFCFXmcEkuR7udSE79blB6lTgXcnGlXp5UYgScH7\r\n\t\tByNQhe6wwG/vCeAqx4YqciDQYQySFDTXv6sqV+Zd1QLfhy84PlShQ4xAkoJ1uBEo1Y5atwL/e8eH\r\n\t\tKvR6I5CkYLn+XVX6gwV+x1YCdzpGVJGXGYEkBet0I1BF5ucd1QLfj0sdJ6rIFFwHL0kh6gD2NwZV\r\n\t\t5JK6/UB1LPBXO05UoacZgSQF5zgjUIVqt8lKHQv8w8A9jhVV5C1GIEnBeZMRqCL3A49Y4BvzCceL\r\n\t\tKvJSI5Ck4JxmBKrIJXX8oepa4H/qeFFF9gQ6jUGSgtEJ7G4MqsjPLPCNWww84JhRRV5gBJIUjBca\r\n\t\tgSqyJP/DAt+EjztuVJE3G4EkBcNnl1SVS+r6g9W5wP/IcaOKPM8IJCkYJxqBUu+idS7wi4Cljh1V\r\n\t\toAsYYwySVHtj8vdsqWwPU+Pl3ENqHt4sx48qcqYRSFLtnWUEqkitd0Sse4H/X8ePKvIGI5Ck2nud\r\n\t\tEagiV1jgB+9+YKVjSBXwRFZJqr9pRqAKrMo7qAV+kHqAyxxHqsAwYLIxSFJt7Ze/V0tlm5V3UAt8\r\n\t\tC77tOFJFXm8EklRbbzIC2T3DKfB3A2sdS6rAq41AkmrrVUagCqwD7rHAt64H+KzjSRWYCnQYgyTV\r\n\t\tTgcwxRhUgU8D3Rb4YvyP40kV8QEpSaqf44xAds7wCvw8YINjShU4xwgkqXb+yQhUgY1557TAF6Qb\r\n\t\t+JLjShU43QgkqXZeagSqwBcIYPlMSAUe4L8dV6rAOGCkMUhSbXQBo41Bds0wC/ztZL/akMr2CiOQ\r\n\t\tpNpw9xlVYWPeNS3wBduEu9GoGm81AkmqjbcYgSrw2bxrWuBL8GXHlypwrBFIUm083Qhkxwy7wP8V\r\n\t\tWOUYUwWviwONQZLa7uAAu4rCszbvmBb4kvQAlzrOVIG3GYEktZ1LGlWFj+Yd0wJfom85zlSBVxqB\r\n\t\tJLXdmUagCnwjtB84xAK/AFjiWFPJJgKdxiBJbdMJjDcGlWxp3i0t8BW42PGmCpxsBJLUNi82Atkp\r\n\t\t4yrwP3C8qQIe3S1J7eOzSLJTRlbglwF3OuZUsucYgSS1zbONQCW7h2wJjQW+Qh923Klkw4EJxiBJ\r\n\t\tldsrfw+WynRRqD94yAX+asedKvBmI5Ckynn6quySkRb4VcDvHXsq2euNQJIq9wYjUMluBFZa4Nvj\r\n\t\to44/lWwKMNQYJKkyQ4F9jUEl+0jIP3zoBf43jj9V4PlGIEmVeZERqAK/tsC3z+PAjx2DKtk7jECS\r\n\t\tKnOeEahkV+Ud0gLfRp90HKpkzzUCSarMiUagkn089AuIocD/Eeh2LKpEw3A9piRVYUr+niuV6QYL\r\n\t\tfPs9AXzVsaiSeSqrJJXvXCNQyS4HNljg6+FzjkeV7DVGIEmle7URqGSfieEiYinwtwHrHJMq0UQ8\r\n\t\tFVCSyjQC2NMYVKINwK0W+ProJoIHElR7pxuBJJXmFUagkn0S2GSBr5f/dlyqZK7NlCTfYxWuL8dy\r\n\t\tITEV+IXA3xybKtEMI5Ck0jzdCFRyT7zfAl9PFzk+VfLr5RBjkKTCHRlhJ1G9vC+2QhKTnzs+VbK3\r\n\t\tG4EkFc4Tr1W2n1jg62tNbDdIteNDVpJUvJcbgUp0FbDaAl9vH3OcqkTjgNHGIEmFGeP7qkr2kdgu\r\n\t\tKMYC/yfcE17leqMRSFJh3moEKtHGvBta4GvOPeFVtrcZgSQV5hwjUIkuJZK932Mv8OCe8CrXVNwt\r\n\t\tQZKKMBTY3xhUov+K8aJiLSELgfmOWZXoRUYgSS17qRGo5D64wAIfFveEV5nONwJJ8r1UtXZBrBcW\r\n\t\tc4G/0nGrEj3bCCSpZZ5wrTJFez5QzAV+DfBDx65KfO0cZgySNGhH4fNEKs+1RLb3eyoFHtyNRuXy\r\n\t\tV7+SNHjvMgKV6IMxX1zsBf7PuCe8yuOprJI0eKcZgUoS5d7vKRX4brL9P6UyjAJ2MwZJatru+Xuo\r\n\t\tVIaPEeHe7ykVeHBPeJXLQ50kqXnnGYFK9F+xX2AKBX4R7gmv8rzZCCTJ907VxsL8Dwt8BN7veFZJ\r\n\t\t9gU6jUGSGtYJ7G0MKsl7UrjIVAr8zxzPKtGZRiBJDTvLCFSin1rg47EO+KpjWiVxKzRJatxMI1BJ\r\n\t\tvgY8boGPi3vCqyxH4WEkktRo7zjCGGTXs8A3aj7wgGNbJXmhEUjSgE41ApVkCQltWpLarOG7Hd8q\r\n\t\tyYVGIEkDusAIVJLzgR4LfJx+7PhWSWYAHcYgSTvUAUw3BpXkJyldbGoFfh1wuWNcJb2WnmEMkrRD\r\n\t\tz8LnhVSObwBrLfBxu9RxrpK81wgkaYdcaqiyfCy1C06xwP8VH2ZVOU4xAknaoecbgUqwBJhngY9f\r\n\t\tj7MAKskw4BBjkKTtHJG/R0pFezcJPbyacoEH+KHjXSVxGY0kbc+JM5XlRyledKoF/nGyBx6kop1h\r\n\t\tBJK0ndONQCW4AlhjgU/Lxxz3KsFOwGRjkKQn7Ze/N0pFuzjVC0+5wM/Dh1lVDg8Mk6Qt3mMEKsFS\r\n\t\t4C4LfHp6cL2yyvEaI5CkJ51tBCrpi2FPqhef+oEKP3L8qwS7ArsZgySxGzDaGFSCH6R88akX+DXA\r\n\t\tt30NqATnGYEk8U4jUAm+T6IPr1rgt/g3I1AJzjECSeItRqASfCj1ACzw2QMQDxmDCjYR6DIGSQnr\r\n\t\tAsYbgwq2FLjDAq8e4HxjUAmceZKUsrcZgUrwThJ+eNUCv7UfA93GoIK93QgkJexcI1AJ3IDEAv+k\r\n\t\t9cCnjEEFmwJ0GoOkBHUC+xuDCnYZsM4YLPC9zTICleBMI5CUoLOMQCX4DyOwwG/rQWC2Mahg7zIC\r\n\t\tSQmaaQQq2M3AImOwwPflAiNQwY7ydSYpwW5xhDGoYO8wAgv8jswBVhqDCvZCI5CUkFONQAVbjask\r\n\t\tLPD96Abeawwq2PuMQJLvedKgXYC7BW6lo6en/600Zy9YnFomo4DHHBoq2FDffCQlYAjwBE4Qqlij\r\n\t\tU+tmMyZPGPCFpq2tBi43BhXMZTSSUnCq3UIF+w5OrFrgG3SJEahg7zcCSQm4yAhUsA8agQW+UXcD\r\n\t\tdxqDCnScrzdJCXSKacagAt0L/M0YLPDNcA9bFe0lRiApYqcbgQp2nhFY4Jv1K2CDMahALqORFLN/\r\n\t\tMQIVaCNwrTFY4AczcC42BhVoGtluNJIUY5842hhUoIvzLiYLfNO+bAQqmL9ilhSjVxiBCvZFI7DA\r\n\t\tD9YjwFXGoAJ5wIkk39uk/v0y72CywA+aa/pUpKNxGY2kuAwFjjAGFegCI7DAt+ovwP3GoAL5q2ZJ\r\n\t\tMXmVEahADwC3GoMFvlU9uI2RivVeI5AUEZfPqEhvy7uXLPAtuxpYawwqyBHAMGOQFIGhwCHGoIJs\r\n\t\tyDuXLPCF2IRr4VWsVxqBpAicbQQq0Htx60gLfMG+YgQqkL9ylhRL4ZLsWhb42loDfMkYVJBDgE5j\r\n\t\tkBSwYcBBxqCCXA48ZgwW+DJcYgQqkL96lhSy1xuBCnSREVjgy7II+K0xqCD+6llSyNyrW0X5E7DQ\r\n\t\tGCzwZXqXEaggU4HhxiApQJ3AgcaggpxrBBb4st3kt0QV6PVGIClAbzICFWQp8GdjsMCXrQd4hzGo\r\n\t\tIO82Akm+dylh5+LBTRb4ivyc7LABqVUH4jIaSWEZDkwxBhVgI/ATY7DAVzng/tUYVJC3GYGkgLhe\r\n\t\tWUW5CHjCGJrX0dPT/28tZi9YbEp9Gw08agwqwAPAJGOQFIgHgYnGoALsapfq24zJE/r9+87AD94q\r\n\t\t4KvGoALsDYwxBkkBGGN5V0G+bXkfPAt8az5kBCrIhUYgKQD/YgQqyPuNwALfLguAG41BBXBNqaQQ\r\n\t\tvNUIVICbgXuNwQJv8VLoRuM6eEn1Njl/r5Ja5eYNFvi2mwv8zRhUgA8agaQau8QIVIAHgD8agwW+\r\n\t\tDv7JCFSA1xqBpBo70whUgLfgwU0W+Jr4NbDcGNSi4cCRxiCpho7BQ+fUulXAtcZgga+LbuA8Y1AB\r\n\t\tPmIEkmro34xABXg7sMkYWjfMCPq0O7BTk/+bO8hOaDVTteJUst/oPMcoJNXEr4ETjUEt6gZuo/kN\r\n\t\tG9YDy4zPAr8jQ4BnA7OAo4xDbXQiMAHwGGRJ7Tbe8q4Ce9ZNg/zf3gLMBH6bfxEwTCMAYDpwH9ks\r\n\t\tg+VddfAaI5BUAz5crzo4Ku9oDwGnAB0W+LSNAX4HzAH28fWhGjnfCCT5XiRtZU/gKuD/SPxMgpQL\r\n\t\t/HOBpcAzfT2ohiaSHZoiSe0yOX8vkurmmWTr4k+ywKfln4Ff4pZYqrc3GIEk34OkPg0HrgMutMCn\r\n\t\t4XPAZY57BeAdRiDJ9yCpX5cCn7HAx+3DwLmOdQViHHCgMUhqgwPz9yApBG8HPm6Bj9ObgIsc4wrM\r\n\t\tm41AUps+M6WQXAC8LpWL7ejp6en3H5i9IIqtqA8A/ubYVoDWAqOAHqOQVKHH8vceKcTOd0/oFzFj\r\n\t\t8oR+/34KM/CdwB8czwpUF3CoMUiq0KGWdwXsDyRwUGkKBf59ZPuGSqF6qxFIqtDbjEABGw+8J/aL\r\n\t\tjH0JzR5ke71LIdsA7ITLaCRV0AuAdbjNssK3B/BwqD986ktoPuL4VQSGA8cYg6QKHGN5VySi3pUm\r\n\t\t5gI/BjjH8atIzDQCSb7XSA17IzDaAh+esx27isgrSffkZEnVdYJXGIMicpYFPjzu+a7YXqszjEFS\r\n\t\tiWaQwO4dSsoHLPBh2YvsKWTJL6WS5HuM0jQx/8MCH4jjHLOK0HNxdkxSOYbm7zFSbI61wIfjdMer\r\n\t\tIn29nmAMkkpwIj5nozi9zAIfjpc4XhWpS41AUgk+YQSK1Est8GEYSsTbBil503CPZknF6gSONAZF\r\n\t\tatcY+26MBb7LsarI+RsmSUU6FZfPKG7RdcMYX7DOTip2nzQCSQWaZQSKXKcF3muS2m1fYKQxSCrA\r\n\t\tiPw9RYrZUMtu/fU4TpWAc41AUgHOMwIlILpuGGOBX+s4VQL+1QgkFeD9RqAERNcNYyzwGxynSsCu\r\n\t\twC7GIKkFo/L3Eil20XXDGAv8RmCJY1UJuMwIJLXgM0agBDwAbLLAh+HHjlcl4GwjkNSCVxuBEhBl\r\n\t\tJ4y1wF/jeFUChuPuEZIGZx/cdllp+KUFPhy/c7wqEd80AkmD8F0jUCKi7ISxFvhHgPsds0rADCOQ\r\n\t\tNAjTjUAJWAgst8CH5QOOWyVgCPACY5DUhOfioYdKQ7RbLsf8Av6e41aJ8FAnSc3w8Cal4goLfHjW\r\n\t\tAZ9y7CoBz8LZNEmN6QCebQxKwGV5F7TAB+gSx68SsCtwsjFIasApeHiT0vCRmC8u9gK/HPhPx7AS\r\n\t\t8O9GIKkBHzMCJeArRPrwaioFHuCDjmMl4BBgqjFI6sdU4AhjUALeF/sFplDgHwE+71hWAj5sBJJ8\r\n\t\tj1Divgk8HPtFdvT09PT7D8xesDiG69wDWOqYVuS6gTHAaqOQtI0u4DF84F3x2xNYFvpFzJg8od+/\r\n\t\tn8oLeRnwNce0IjcEeLsxSOrDP1velYBvx1DeG5HKDDzAeGCxY1uRW002C99tFJJ6fbl/BHefUfwm\r\n\t\tAEtiuBBn4LdYAlzu2FbkRgGnGoOkXk61vCsB34mlvDf6rTwl73V8KwGfMAJJvXzUCJSAmSldbGoF\r\n\t\tfjHwDce4IjeVbFtJSTrY9wMl4AoSWyad4gMtzsIrBR8xAkl4IrnS8M7ULjjFAv9g/k1NitnpZA+z\r\n\t\tSkrXLsBpxqDI/STvdhb4BMx0vCsB7zQCKWnn49aRit95KV50qi/sRcD3HfOK3AXAUGOQkjQEeI8x\r\n\t\tKHI/yzudBT4h73LcK3JdwMuMQUrS6WTbykoxOy/VC0+5wC8AfuzYV+QuNQIpSf9mBIrclXmXs8An\r\n\t\t6J2Of0VuCnC4MUhJOYxsO1kpZuelfPGpF/j7gat8DShyzsRJafHgJsXuV8B9Fni/wUkxOxXYzRik\r\n\t\tJIwGXmQMitw/ph6ABR7uBa4xBkXOrVOlNLzHz3ZF7nrg76mH0NHT09PvPzB7QRIn004B7vY1oYit\r\n\t\tIzvUZaNRSNEaAjyKu88obgem0NlmTJ4w4ItdcA9wrTEoYjsBLzcGKWpnWN4Vud/ihKsFfhtvNwJF\r\n\t\tzi0lpbj5wLpi949GYIHf1vz8m50Uq32Bo41BitJRZMtBpVjdkHc1WeC3c44RKHJuLyfFydl3xe4N\r\n\t\tRmCB35G/Av9nDIrYycDuxiBFZRzwQmNQxG4E5hmDBb4/bzMCRe49RiBF5QIjUOTeaAQW+IHcCcw2\r\n\t\tBkXsnUCnMUhRGIqbMChuf8q7mSzwA3ItvGI2HHilMUhReBXQZQyK2JuMwALfqNvzb3xSrHzgTYrD\r\n\t\th41AEbsFuM0YLPDNeIsRKGL7AE83Bilo04D9jUERe70RWOCbdStwszEoYh8zAilobgurmN2SdzFZ\r\n\t\t4JvmU8+K2UnAaGOQgjQKeL4xyA5mgVff3/6chVfMXmEEUpDOMgJF7Hb7lwW+Va6FV8zcE14K07uM\r\n\t\tQBFz9t0C37K5uP+o4jWV7FfxksIxOn/tSjGaD/zZGCzwRXiDEShiRxiB5GtWqonXAj3GYIEvwh9x\r\n\t\tFl7xeo4RSEE5yQgUqb/lnUsW+MJ4EphiNd0IpKAcawSK1Otw9t0CX7AbgHnGoAjtYwRSUPYzAkXo\r\n\t\tnrxryQJfOGfhFaO9jEDyNSu1mbPvFvjSzMm/IUox2dUIpKB4AJticy8w2xgs8GXpwR1pFJ/VRiAF\r\n\t\tZa0RKDKvx9l3C3zJfp9/U5RiscYIpKA8ZgSKyELgd8ZggS+bs/CKzSNGIAVlmREoIq59t8BX5v+A\r\n\t\t+41BkXDPXSksc41AkXgA+I0xWOCr0gO80RgUiRuNQPI1K7WBs+8W+Mpdn39zlEL3JyOQLPBSxR4C\r\n\t\tfm0MFviquRZeMdgI3GYMUlD+kr92pZC9HmffLfBtcl3+DVIK1dVAtzFIQekGfmEMCtjSvEPJAt8W\r\n\t\tzsIrdF80AsnXrlSxN+DkkQW+za4FlhiDArQSuMYYpCBdmb+GpdA87GePBb4OeoA3G4MC9FGcAZFC\r\n\t\t/uz5hDEoQG/0s6d1HT09/T8/MHvBYlNqIEfgb8AUo1Ag1gLjgPVGIQVrJ7KD2LqMQoG4B5hqgR/Y\r\n\t\tjMkT+v37zsAXowd4mTEoIOdZ3qXgrQPeYQwKyMss78WwwBfnNuD7xqAA3AN83RikKHw1f01Ldfd9\r\n\t\t3LbYAl9TrwOWG4NqbCNwPO69K8WiJ39Nuy+86mw58FpjsMDX1VpgmjGoxl4NPGgMUlQeBF5jDKqx\r\n\t\t6cDjxmCBr7P7gDOMQTX0H8D3jEGK0neBTxmDaugMso0+ZIGvve9b4lUzXwHebQxS1GYCnzcG1chr\r\n\t\t8flAC3yAJd6daVQHnwXeYgxSEs61xKsmTgO+YQwW+BD9GDgGWGUUaoNu4PW4zZyUYol/DW7Xp/ZY\r\n\t\tlXefnxiFBT5kNwMTgKuMQhW6FzgYuNwopCR9M38PuN8oVKFr8s5zs1FY4GPwOPAi4HnAUuNQibqB\r\n\t\t9wMHAPONQ0rafOApwEU4G69yLc07zim424wFPkLXAROBVwArjUMF2gB8HBgD/Jsf1pJ6fam/BBgN\r\n\t\tfCx/r5CKspJs046JeceRBT7qN9MrgHHAIWQPG1m2NFi/B16Zfzi/F1htJJL6sAb4l/y94lXAbCNR\r\n\t\tCz3m82RLtMaRbdphj6lYR09P/wcyzl6w2JTKNxQYDxwFPDf/81OAfY1GuZXAI8Bfgd/kxf1WssPD\r\n\t\tJGkwuoAjgWcCJwBPBXYDdjUa5e4H/g7cQjbDfguwBNhkNOWaMXmCBT70L1k1+Rl6vBVtu2fObEiq\r\n\t\tWtG/ofczJLzPXO9ZjQv8/x8AZGXFj3C6wF0AAAAASUVORK5CYII=", transform: "matrix(0.9999 0 0 0.9999 -70 -35)" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 464 478" }, props),
        React.createElement("image", { overflow: "visible", width: "464", height: "478", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdAAAAHeCAYAAAArV1pwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAK\r\n\t\t\tT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AU\r\n\t\t\tkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXX\r\n\t\t\tPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgAB\r\n\t\t\teNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAt\r\n\t\t\tAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3\r\n\t\t\tAMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dX\r\n\t\t\tLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+\r\n\t\t\t5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk\r\n\t\t\t5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd\r\n\t\t\t0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA\r\n\t\t\t4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzA\r\n\t\t\tBhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/ph\r\n\t\t\tCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5\r\n\t\t\th1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+\r\n\t\t\tQ8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhM\r\n\t\t\tWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQ\r\n\t\t\tAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+Io\r\n\t\t\tUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdp\r\n\t\t\tr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZ\r\n\t\t\tD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61Mb\r\n\t\t\tU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY\r\n\t\t\t/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllir\r\n\t\t\tSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79u\r\n\t\t\tp+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6Vh\r\n\t\t\tlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1\r\n\t\t\tmz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lO\r\n\t\t\tk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7Ry\r\n\t\t\tFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3I\r\n\t\t\tveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+B\r\n\t\t\tZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/\r\n\t\t\t0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5p\r\n\t\t\tDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5q\r\n\t\t\tPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIs\r\n\t\t\tOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5\r\n\t\t\thCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQ\r\n\t\t\trAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9\r\n\t\t\trGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1d\r\n\t\t\tT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aX\r\n\t\t\tDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7\r\n\t\t\tvPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3S\r\n\t\t\tPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKa\r\n\t\t\tRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO\r\n\t\t\t32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21\r\n\t\t\te2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfV\r\n\t\t\tP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i\r\n\t\t\t/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8\r\n\t\t\tIH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADq\r\n\t\t\tYAAAOpgAABdvkl/FRgAAPj9JREFUeNrs3XecXVXV//HPTCYhCTGEEMjQEvhRVESKgISIAiJFOghS\r\n\t\t\tDFKlCQ+9ihB6kV4kINIMIEWKSBELoNIEJCISBCMQCAkthBCSkDLz+2OdSyZDJnPvzF77nrPP9/16\r\n\t\t\t5fU8SNj37H3KumfftfdqaG1tZWGeGD8JEYmqERgALAa0Ah8CHwMtGhqReIYPae70RhWR+msA1gJu\r\n\t\t\tAOYCHwD/A14DpgCzgV8CX8v+rojk4JuuiNRPL2AnYBLwPLDXQu7VfYHngMnAgUBvDZ+IAqhI2QwG\r\n\t\t\tzgNmAL8Blqrhvx0AjMr+218BK2k4RRRARVK/34YBT2ZvnMcFuAdHAP/N3l431j0togAqkpK+WaB7\r\n\t\t\tLwuewxw+Yy3gESzh6EjgCxp2EQVQkaJaDpum/QSbah0Y4TP7AxcBU7PP/LJOg4gCqEhR7qlhwLPA\r\n\t\t\tm9g0bb2MAF4C/gV8F+ih0yOiACqSN32xzNiPsWnadXJ0bKsDDwDTgVMivQmLKICKyEKtBPwam6Yd\r\n\t\t\tlQXSvOoFnIatMb0FTe+KKICKRNYDy3j9D5YBu2sB+7A7Nr07HluH2qTTKqIAKuKlP5bhOg3LeF01\r\n\t\t\tgT4tj61DnYElPA3WaRZRABUJoQGb6rwb+AjLcE1xB6AmLOFpEvB7LBFKWwaKKICK1Kwnlrk6Dpvq\r\n\t\t\t3KFEfd8cS4R6E8vkXUSXg4gCqEhnBmKZqjOxzNUVSzwWy2JrSadj07vL6fIQUQAVaasyTfs7LEP1\r\n\t\t\tNN0bn3tOHJe9kf4ZTe+KKIBK6bWthPISsLWGpFObYNO7qggjCqAaAimh7lRCETOAeRVhrkLTu6IA\r\n\t\t\tKpKsSsHqxwlXCUXMQdj0rirCiAKoSEIqlVDezx7wwzUkbtZCFWFEAVSk8OpRCUWMKsKIAqhIAa/n\r\n\t\t\tYcDfqX8lFDGqCCMKoCI51r4SynoaktypVISZik3vakZAFEBF6mhVilMJReZ92bkIW297M7CKhkQU\r\n\t\t\tQEXiaFsJ5T8UsxJKZ6Zgma19sW30vge8m2A/9wBeQRVhRAFUxFWKlVDaewzYAJvevBpbYzkLuAto\r\n\t\t\tBlbDpkFTo4owogAqElhli73fkHYllFFZENkYeApoXcDfaQXGYrslLQGcCrQkNg7tK8KshbYMFAVQ\r\n\t\t\tkZpUKqG8imVw7pRgHycCe2ZfCA4G3qrhv50MnJ79t1sBryU4Pptj63ZVEUYUQEWqMJB507QPACsl\r\n\t\t\t2Mc/YNO0ywKjgU+70dZs4MFsnFYD7klwvCoVYaahijCiACoyn/aVUC7CNnlPyRzgfOx3zM3peJq2\r\n\t\t\tqyrTuzsCiwFHYeXYUlKZ3lVFGFEAldIrQyWUN7EM2j7A8cA7ET5zKnAx0A+rnPJqguOqijCiACql\r\n\t\t\tVIZKKA8AawNDsAzaOXU4hrnAo1i28srAHQmO8wBUEUYUQCVxZaiEMgfLjF0ie5sek6NjGwd8H1gU\r\n\t\t\tW186PcFrrFIR5h+oIowogEoCKpVQ3iXdSigvYZmwfbDM2Mk5Ptbp2PrSL2CJTM8leD7WRhVhRAFU\r\n\t\t\tCqx9JZRBCfZxNJb5+hUsE3ZOgY69BUtkWhdbfzoqwfOjijCiACqFupZSr4QyDctwXQJbwzk2gT69\r\n\t\t\tha1DXTTr0+QEz5sqwogCqORSZZr2A9KthPICNk07AMtwTTHITM/eqpfEpnefSrCPlYowU1BFGFEA\r\n\t\t\tlTpaDriGedO0AxLs42gsg3VNbJp2bgnOa2V6dwNs3er5pLdlYD/mVYS5BU3vigKoRNC2EsqbwI8S\r\n\t\t\t7ONU5lVC2RPLYC2rd7D1q31ItyLM7tj07uuoIowogIqDMlRCeR5boL848yqhiGlbEWZt4C8J9nEo\r\n\t\t\tqggjCqAS0EqUpxLK17CNB1p02jvUiq1v3QhVhBFRAJXPqVRC+W/2J8VKKO9g07N9qL0Sipj2FWHe\r\n\t\t\tSLCPqggjCqBSlTJUQvkTlhyzNJYgNFOnvdsqFWFWxNbF3ptgH1URRhRA5XMqlVB+S/qVUJYHvkP4\r\n\t\t\tSihiKhVhdsCmd4/CfjtNiSrCiAKofFYJZSKWgbhtgn2cgE3T9sMySTVNG89k5lWE2Yq0K8JMxKZ3\r\n\t\t\tVRFGAVQSNxA4hXmVUFLMNHwIyxRdju4XrJbuqUzvVirC3JlgHwdj07uqCKMAKgmqVEL5KzZNexpp\r\n\t\t\tV0L5LvmqhCJmHLALqggjCqBSAH2YvxLKhgn28Q3mFazOeyUUMW0rwmwCvJxgH1URRgFUCqpSCWU6\r\n\t\t\t6VZCuQXL+FyB+hWslu5pwdbdfhlL8Lo6wT62rwizkk67Aqjk8zwOwzJMy1AJ5QekUQlFzFvY9Gel\r\n\t\t\tIsyUBPs4AltX/U9UEUYBVHKhfSWU9RPsYxkqoYipVIRZAluv+3SCfVwDVYRRAJW6WhmbEkq5Esoo\r\n\t\t\tbH/SMlVCqVgEm4pfM/uzHOXaBadSEWZYdg2kWPC7bUWYX2X3tCiAipMmYAusEsqr2ZtnaqYA+2Zv\r\n\t\t\t1gcD40t4fv+M7ZD0JpZNPCb7/2dm/24LylUxZHx2LfTNro0pCfZxRHZPj8W2D9T0rgKoBNIXOBD4\r\n\t\t\tGFvjmHIllCWA6ylXJZRKpZvK+d1kIX93k+zvlLFiyIzs2hiIZbn+LcE+fgnbwH4mtl5b07sKoNJF\r\n\t\t\tKwF3YNO0o1AllJRUtlC8m65VumlbMeRhyrWlXKUizDdJuyLMadj07oPYOm5RAJVOtK+EsnOCfZyC\r\n\t\t\tZVyWsRJK5fyOw7ZQ3CFAm5thCWQTKF/FkEpFmErB73cS7OOW2AzNW6gijAKoLFAZKqE8gmVWDsTW\r\n\t\t\t/M0s2fk9JevzA1jlktCWxpJRZlK+LeUqBb+XxtYH35dgH1URRgFU2ihbJZRvU65KKJXzez/xt1Cs\r\n\t\t\tbCn3KOWb3h0LbEc5KsL8EVWEUQAtmV7YNN5rqBJKqud3J+z3yZewNaz1shE2vTsFS0TrU6Lz0L4i\r\n\t\t\tzLgE+7gpqgijAFoSbSuhPICtb0vNw1iG5PKUrxLKYGxqrVLpZqkcHVt/LGGrsr1jmbaUq1SEWTn7\r\n\t\t\tc1ei154qwiiAJqcslVDOB5qxNYpjKM80bWULxcezN87jCnB+K1vKPU/5tpQbhyUbLYZN76b4O7wq\r\n\t\t\twiiAFl4ZKqG8ybxKKMeTZgZkRypbKL6HTaENL2Af1mL+LeX6l+j8TWXe9O4mwCsJ9rF9RZh+eiwr\r\n\t\t\tgOZdZRov5Uoot2KZjkMoXyWUSqWbyhaKKSx0r2wp91HWpy+X6HzOxRKtvoj97PCLBPtYqQjzMaoI\r\n\t\t\towCa0zGsVEKpTOOlZhbzClbvQbkqoVTO77OkW+mmYgSW+PRvbHq3TFsGvgUcQNoFv1URRgE0N9pP\r\n\t\t\t46VYCeVFLIOxL+UrWN12C8UngXVK1PfVsOndGZRvS7m2Bb83AJ5JsI+qCKMAWjfLYRmNKU3jtTc6\r\n\t\t\te4h+lfJVQlkJuJ15Wyj2LfG13nZLufsp15ZylYowX8emd89PsI9tK8LcTLmm7xVAI4/TxtjU5ZvZ\r\n\t\t\tm0lqpmKZif2xNZxlmqbtkZ3fV7Aprl10yX/OVlhC3HhsnWvZpnePZ17B7/cT7OMe2PT96yU8vwqg\r\n\t\t\tTtpO4z2CVUtIzRgsE3FxLDPx4xKd30ollGnZ+V1Fl3ynlsfWuZaxIkyl4PdSWJbrEwn2cWib86uK\r\n\t\t\tMAqgXfIF4ArSnsYbjS0sXxtVQtEOLrVTRRj4Brb++XzSrghzAzBAl7wCaDV2waYzf5xg397FEp/6\r\n\t\t\tYFNR40p0Xntl53YC4SqhiGlbEWYX0tvTeWHeYd70bmXtd2r2wtaT7qxLXQF0YU7HEkhS8wiwbvZt\r\n\t\t\t+WbKVQmlGTgXm5K6HavYIT6WzsZ4RjbmzSXq+8zs3mrO7rVHEuzjHcBIXeYKoAuyO/DThPrTwvyV\r\n\t\t\tUJ6jXJVQ1gIewzbaPl7XevTnyvHZ2D9LubaUa83utW+TZkWYU4FddYlnD5rW1oU/U58YP6ksbykT\r\n\t\t\tE+nLBOD/gN+RXimnzvTBphAvJM1doIrsfeDo7C1mRsn63gvYBrgMq+uZyjMz+e07hw9p1htoFS5L\r\n\t\t\toA9/wBZ+L49tsVem4FnZQnEacKOCZy4Nys5NGSvCVAp+L4+tr74ngT6N0iWtAFr5JrVLgW/Mk7Cp\r\n\t\t\tos0pV8HqRmyT/mcpTiWUWk0n7S3lns3OYZmmd8cCO2b37EkF/qK7A+X6jVsBtANFzLatVEJZFDiH\r\n\t\t\t8m2xV9lC8a+kucVepRD3YqS9pdw62Tn8iPJtKTc5u3f7UtyKMIcogJZbZS1bUTyArdssayWUqyjH\r\n\t\t\tFopfwbZQnEP5tpQrc0WYlYHbCnTsJ1LyHYvKHkA3If9r1tpWQtkaW8BdpuuzbSWUgxLs4zQsU3Mx\r\n\t\t\tOt9Csf2WcinOPJS5Isw4YDeKUxGmCcuwVgAtqfNyfGyVabxFUSWUFKdpx2TndwC2heLUGv7bypZy\r\n\t\t\tS2LTuyluKaeKMMWYvr9QAbSclsWmQ/NmQdN4ZVGGSihtt1DsbqWbyvRuWbaUexBVhMmbNYBlFEDL\r\n\t\t\t57AcHUst03ip6YlN1aVcCWUKNiXXF78tFCtbyvXBEsxS3FJuS6wizFvYVG+ZtgzM8/T9oWUNImXd\r\n\t\t\tSKEnNk1S799XXgBOwDbjnluya68/sB+25VuqD8LHsvP7NPGXFzVg1YMuwKaKUzQHSz66iBIs6l/A\r\n\t\t\ty8/Xsen/YTl4U+4NzE5tkLWRwoJ9p87BszKNtyblKlhdqYRyD/MqoaQYPEdhU24bU7+1uZU1h1tj\r\n\t\t\tCWinkub0bqUizB8pV0WYyvTuBtR/+r4R27pQb6AleQP9F7B65M+cmt3sN1G+rcx6Zl9arsLqDaZo\r\n\t\t\tYnZ+7wA+zfl5uBJYMdHz8A5wDHAn5SqaAPO2DLwKq1ka08skuPxIb6Cft3zk4PlY9i1xAJZZV6bg\r\n\t\t\tORDLoJyJZVSmGDwrWygum80sfJrjY52dzXisRDpbyrU3GFtLOiMLJMuV6H6rbBnYzLws5li+VLKx\r\n\t\t\tLm0APTzS5+RhGq8usxrMq4TyAZZBmdp1NgebMmummFsott1SbjEsgS3Ft7WDsPXD/6B8FWHqMX1/\r\n\t\t\tOCVTtincntmDwutGmgrsD9xLOSuhfB/7XTPVNXvjsofE70lveVETsAVwKelu9D45+7JQqVlaJr2A\r\n\t\t\t7YFrsQQ+D8klE2kKd35bOPf5UOw3sDJWQpkO3JBo8KxsobgycD9prs2dk/VtZYq3pVy1BmbXaFkr\r\n\t\t\twtyB7/K9RmxGRm+gib6B/hv7bcDLoqRZPWNBN0peUug9HzhnAVdQrl2g2qqsW72INDe1gPItJVsU\r\n\t\t\tW3fu5RVsX1+9gSZmqHPwvK0EwbNtJZQnEw2eZd5Csb0ibSnXVWtkMwxTKEdFmE+wZDcvq2LFLkqh\r\n\t\t\tTAH0KOf2RyY8dsthSVFlq4QipmwVYW4m7YowZzu3f2RZboyyTOH2wpIGvL4wvAMsTVqZto3At7Cl\r\n\t\t\tAF9K9Pqfhi2z+SW1beYuNhuxE5Z0lOpb2xvZF+/fJvaFqgHLTl7W8TN6k+8lXVXRFK75rnNfj0wo\r\n\t\t\teFYqoXwCPJJo8BxD1yuhiClDRZihwG9IryJMK7avrqct9AaazhvoWOdAkELy0ErYvrQ7J3y9j8am\r\n\t\t\t2schHgZnb2zHJPzl/CGskPSYgvejj/Mz61Xs91C9gRbcis7B8/oCB8/2lVBSDJ5T8K+EIqaMFWEW\r\n\t\t\tKWg/ZgA3Ora/CrBC6hd8GQLoMc7tn1vAMRmITTtPwzIQV0nwvFe2UBxI+bZQrLd6bikXy7JYQt00\r\n\t\t\tbB10Ebex804mOib1Cz31KdxFsrdDry8Kb1KclO1KeavzgG0TvqZHYes331Icy92XtkOxbeVS/eL+\r\n\t\t\tJ+Bk6lO+rqtex3eP6kInE5V9Cndr5z4W4RtWL2ya9jVsjWOKwXMiNj3bGzhYwTOXJmPrantjCVyv\r\n\t\t\tJdjHTbH10ROx6d3eBThm72SirVK+qFMPoN7r1e7L+Tf+U7CpS1VCkbxQRZh8ude5/YsVQItpJXz3\r\n\t\t\tuvwF+ftdrVIJ5a+oEorkmyrC5MNMbIN5L0NJeM/hlAOo99TEeTnqax9syuhdLENwwwTP55tYZmef\r\n\t\t\t7Ny+oxiUjKnZm0o/YBMsKzw1a2Prqj/EEvi+kKNj836WHasAWiy9gR85tv8G+VgO0bYSyq+AQQme\r\n\t\t\ty0ollCFYZqe22EvXXOBRbDPyVCvC9Me2DJxKfirC/Bff36QPzL74KoAWxHbO7R9V53M2DJu6nAQc\r\n\t\t\tl+D5m4Vlay6BJYKNUWwpnXHAbtgmJQeRZqGGEVnw+heW6Nejjsfi/RzZJsWLNNVlLK+TXmp2I7bR\r\n\t\t\twS+xqa4UvQgckb2FlKG0lFSvB/Yb4iXA6on2cRqwH3AntoF/TIvg+xv0GxRwY4UyLmNZxTl4jqpD\r\n\t\t\t8FwGW5pxW6LB8zpsx6ivYmvpFDylvbnZtfHV7Fq5LsE+9svu8fFYklxMn2bPNi9DSXDDlhQD6AnO\r\n\t\t\t7f8scn/WzL69LZ3YeZqK/TbSL/vW/bpihFTp9eya6ZddQ6kVA1gWS5pbI/Lnej/bTkjtQkxtCrc3\r\n\t\t\tvktLYk9DDAImYJshpGIMcBLwsN40JeCLwNeBC4HhCfVrThZMY+4p/F98E5v6UqBtNcs2hbuDc/tH\r\n\t\t\txPxyAzybUPC8DCvGvDa2kF7BU0KpFPz+RnaNXZZIv5qwMnENET/Te3e17fUGmtO+kFaR2K2A+wt+\r\n\t\t\tfU3Bpm1uQpu5S1y9sMzPq4ClCt6XLYHfRxy3GY4vVxOzZ3QhNj8p0xvoqs7B87KIwbMBK5NWVI8B\r\n\t\t\t66FKKFI/bSvCrJddk0V1U8S30FnAFY7tL00CdUJTDKAnO7d/UcS+rFHQb82jsCm0jbHpZ22xJ/XW\r\n\t\t\tml2LG2Prik8l/hKR7lqKuAlF3vvX/kQBNF8qW9l5eRVLIIplZIHGXpVQpCiKXBHmrIif9TrwsmP7\r\n\t\t\te2LJRAqgObGzc/sxdx7qj38yVAiqhCJFVcSKMFtnz4ZYvHcm2kkBNB8a8N0MuQVbchHLHjkea1VC\r\n\t\t\tkZQUrSLM7hE/6yF8p7ovIG52sQJoB76M7yYDF2M/rMf6MnBGDsdYlVAkdUWoCHNuxKAzG7jUsf3B\r\n\t\t\t2bNbAbTOvH+QvjRiX9YmXxVVVAlFyibPFWEGYPV+Y7nEuf2RCqD1tSi+U56vZG9fseThglIlFBGT\r\n\t\t\tx4owZ0b8rPHAS47t75KNrQJonXzfuf0jIn+73LaOY/kSlpm4KJapOFnPTxHIAufVWBHsDYBn6ngs\r\n\t\t\tW2XPili8i2HvXOQLo8gBtAH7TcBLC/DHiP3Zs07jOBrLRPwKlpmoaVqRjp8JT2H77i6PJdTVw4iI\r\n\t\t\tn/UH52dCoZOJihxAV8d3s4GfYT+kxzoPMadmpmEZh4tlgXusno0iNXkLS6hbNLuHYs7YnBPx2T0b\r\n\t\t\t301kBmVf3hVAI/NOHro8Yl/WJc4arzHMmwK6mPTKQInENh2bxVkSm959IsJn9gPWidhH72fhqQqg\r\n\t\t\tcfUDdnVs/wWsjFgs3m+fV6JKKCKe2leEudL582LuTPRW9kz0snP2TFcAjWQ35/aPidiXgcBmju0/\r\n\t\t\tBRyKttgTiRlwDgX+5vgZmwGLR+yTdzLRrkU80UUMoA3YbwCe3yQfjdifvZzbP1rPM5G6OKHgz462\r\n\t\t\t/oxvMtH5FDCZqIgBdA18Nxs4m7jJQ6c7tj8TeFrPMZG6eBLftaNnRXyGV7bx9DKQuBVnShtARzq3\r\n\t\t\t//OIfVkf37n/n6LfO0XqpcX5edUXW1ITS0q/65YygHpXKhmDleeKxXvf2yIX5RZJwXXO7Z8XsS9v\r\n\t\t\tA885th+74kzpAqh3pZKYvxcOAjZ1bP8x4AM9v0Tq6gNsMwIv38K23YzleOf2dy/SyS1SAPWuVDIH\r\n\t\t\t+EvE/uxX8AtdRKpzinP7+0bsy6P4VqeKWXGmVAHUu1LJmcTbxq7R+aaaRn336xSRef6O76YlpwM9\r\n\t\t\tIvVlLr6rIAYQt+JMaQLoSOf2R0Xsy3AsAcDLyfgWwxWR6rXgu9tOb2BYxP54PyvPLMqJLUoAHYBv\r\n\t\t\tpZJniFsk+hzn9m/SM0skV250bv+CiH2ZhG3Q4mUrbJ9uBdBAvKsPHBuxL0sCGzq2/yfgQz2vRHLl\r\n\t\t\tQ+Bhx/aHZc+WWE4s+DO/NAHUO3loFvB4xP4c4Ny+kodE8sm7AMb+EfvyV/yTiXIfn4oQQNfFt4Ds\r\n\t\t\t6cRLHuqBb/LQVOB5PadEcuk5YIpj+yOBpkh9mev8YtMP+FreT2hTAS467x+Ur4nYl28CvRzbPwEl\r\n\t\t\tD3VHH+ALzueoyGYBHwMzNBRd0ool+F3h1H4vrBrMY5H6c41zED0f+HaeT2hDa2vrQv/CE+Mn1fP4\r\n\t\t\tFse3UO3TxM1ee9L58wYAH+k5VZNlsHV0R2L7cUrnJmP1ZK/DdqeR6i3m/Bb6DHG393scW1XgGQOm\r\n\t\t\t1OtkDR/SvNB/n/cp3B86tx+zbFmzc/C8X8Gz5rfNX2J1X89Q8KzJwGzMJgC/wJZRSHU+Au51bH89\r\n\t\t\tYHDE/nhXnNkzzyezMefH5l2p5MmI/TnIuf2fILW8db5O3B1cUrV/NpbLaCiqNrLgz5r2b6CeFWfO\r\n\t\t\tznOcynMAXQ/fjYVHEq9SSQ98074n41sxPiVLAOOApTQUwQwGXiPuMooi+yfwvmP7JxMvv6UF/2Si\r\n\t\t\tdRVAa+ddqeSXEfuyMb6JKcdjCQqycE1YJqSmHMPrhf3+1qSh6FQrvjNGTdgm87Fc69z+uQqgtRkI\r\n\t\t\tbObY/l+cvwG2511y6DY9k6pyKDBUw+BmKHCwhqEqtzq3f2HEvrwPPOLY/ibkNEchrwF0H+f2T4jY\r\n\t\t\tl2WAdRzbvxNbWiAL1zvyQ6WsLgEW0TB06mPnL75rEfd36ZOd299LAbT6Y/JOHvp75LceT6fpWVSV\r\n\t\t\t4RSv/m0RNQIbaBiqcpZz+z+O2Jen8E0mOjOP928eHyjr41+pJFbyUBO+++y+D/xbz6Gq7K0h0Fjn\r\n\t\t\tzIvAu47tnwD0jNQX74ozfYm7vrWwAdQ7eej6iH3ZFN+kimNQ8lC1vqUh0FjnTCu+Pyc1Yr8fxuL9\r\n\t\t\tbD0vbycwbwF0UBZ0vDyG785G7Xlnj92pZ1DVlDwUz4oagqrd7tx+zN/9PwD+4PzFbAkF0I7t59x+\r\n\t\t\tzEoly+FbWf0O4BM9f6rSoCHQmOfUJ8Atju2vnj2LYjnFuf1cbX7SmLNj8Rz8adg6tVgOd27/VEQk\r\n\t\t\tBd7JRIdF7MvfsapQXk7HNqZRAG1nOP7JQ7EqlfQEjnBs/x3gZT13RJIwFttX2MsxxKsw5J1M1Ju4\r\n\t\t\tBUAKE0DPcW7/poh92QLf5KEjUfKQSCpa8f15qRHfjWnau9G5/QsUQOe3JLChY/uPAB9G7I93tti9\r\n\t\t\tiEhK7nJu/6KIffkQeNix/WHkZN/lvATQA5zbPy5iX4YCqzm2fz2+C5ZFJL4Zzm9uqwJDIvbHe2ei\r\n\t\t\t/RVATQ/nwZ4G/CNif45ybv9cRCRFZzu3f2TEvjyLbyHskeSgcEEeAuiG+FbHOIF4yUO98N26703g\r\n\t\t\tFT1nRJL0CvCGY/tHEG+f4lbgp87P2uEKoP7fukZH7Mt3ncf0aD1jRJLm/XPTFhH74v3srXsyUb0D\r\n\t\t\t6GDnbxEPAB9F7I/39Orv9HwRSdpvEwo6U4D7HNtfL4shpQ2gBzm3f3LEvvw/4EuO7V+NJRqISLpm\r\n\t\t\tAr9wbH8V4m61ONK5/QPLGkB7ACc5f/sZE7E/xzq3/zM9W3Jplew+KuKflXX6csl7GdwxEfvyPFY1\r\n\t\t\tystPqWMyUT0D6Eb47o5xAvE2G1gE36U4bwDj9FzJ7RtDa0H/fKrTl0vjnO/3Q/BN3GzLO5moCfhm\r\n\t\t\tGQPo+c7t3xqxL9s6j+UReqaIlIr3jNZWEftyi3P7F9XrJNUrgC4NrOPY/v34bmgc+8vAg3qeiJTK\r\n\t\t\t/fguv4sZdKYC9zi2vxbQXKYAeohz+z+J2JeV8f1R/nI01SZSNrOAqxzbHwqsFLE/IwseU3ITQJvw\r\n\t\t\tXes0GXghYn+8a4xehIiUkfeSk5j1kV/AN5noROqQTFSPALoJvslDxxEveag3vnsyvgq8rueISCm9\r\n\t\t\tjm/Zwh8BfSL1pTULcp4vZhuXIYB6p2jfFrEv2zu3fxQiUmbeOxNtG7Ev3s/mC1MPoMsCazu2fye2\r\n\t\t\teXwKXwZa8C0JJCL59xC+yUQxdyb62DmIrgEsk3IAPcy5/dMi9uWL2A/xXi7GEglEpLxmA5c6tr88\r\n\t\t\tVuoslrOc2z805smJGUB74rsZ+vvAvyP2xzvT91JEROAS5/ZPitiXF4F3Hds/Pos1yQXQ7+CbJXUM\r\n\t\t\t8ZKH+gB7Orb/Mla6TERkfBZ4vOwF9I3Ul1ZslzjPmPbtFAOo92YDd0bsy/ec2z9CzwwRacM7mWjH\r\n\t\t\tiH25veBv7NED6PLA6o7t3wF8EqkvDfiWLWsB/qznhYi08UdgjmP7F2bPthg+wXd7vy8By6UUQA93\r\n\t\t\tbn9kxAv5y1g2sZfzsMQBEZGK2fgu0xiMbznG9ryTiQ6P0YkYAbQncKRj++8AYyOeeO/koSv0rBCR\r\n\t\t\tBbjcuf2YqxjGAhMd2z8K3w17ogXQLZw/J2by0KLAHo7tvwC8reeEiCzABKy+ppddsmdcDK34biXY\r\n\t\t\tCGyWQgD13nnorogX8Ped29fOQyKyMN7JRDtH7It34qf7PuLeAXQosJpj+78Cpkc62d7JQ3OAx/R8\r\n\t\t\tEJGFeBTfDVYuIF4y0QxgtGP7qwJDihxAvd+ozop44a4OLOXclzl6PohIJ1+0PWf1BgFfidgf72e4\r\n\t\t\tZ/6NawDthe+2ShOBVyKeaO/koVF6NohIFX7u3P6pEfvyH+y3XS9HAIsUMYB+17n9o4iXPPQFYFfH\r\n\t\t\t9p8BJum5ICJVmAQ85dj+zkC/SH1pBY51/owtihhAz3UelHsjXrC7Ord/rJ4JIlKDE53b3zViX+52\r\n\t\t\tbt+t4oxXAF0R30W512E/QMfQAJzj2P4s4HE9D0SkBn/FN5nofOIlE80ErndsfxVghSIF0GOcB/zc\r\n\t\t\tiBfqmtgP615OR8lDIlKbucAZju0PxOprxuL9THeJSR4BdBHgIMeBeBN4NeKJHenc/jV6FohIDp8d\r\n\t\t\tMVc5vAK85tj+j3FIJvIIoFvj+9vq0RFP6mLA9o7tPwW8p+eAiHTBu8DfHNvfGugfsT8nOLe/VREC\r\n\t\t\tqHfZsvsintA9nNs/Rs8AEekG72SiPSL2xTsx9OK8B9CVsj9ersZ+cI6hATjbsf2Z+Kaii0j6nsB3\r\n\t\t\tN7bziFe161PgF47tDw0dn0IPzPHOA/yziBfm14ABju2fgiUCiIh0VQuWiOilP7BWxP54750edMlg\r\n\t\t\tyADaG/iRY8ffAMZFPJHeu3Fcp3tfRAL4pXP7MZOJxjk/5w8E+uQxgG7nPLBHRjyJA4BtHdt/DPhA\r\n\t\t\t972IBPA+8CfH9rfEdzauPe+KM9vkMYB6r+N5IOIJ3NO5/RN0z4tIQCc7tz8iYl/ux6amvVyYtwC6\r\n\t\t\tKrb7kJcrsR+YY2gEznRsfxrwd93vIhLQ34Gpju2fQ9xkIs/iGstjuxPlJoB6v1FdEPFCXA/ftU8/\r\n\t\t\tdf52JSLl04Lvpi/9gHUj9sf7mR8kZoUIoL2BfRw7+irwesQTd4Zz+zfqXheRAj5bYm6h+hrwsmP7\r\n\t\t\t+xIgmShEAN3ReSBj7jw0ENjMsf1HgA91n4uIg8nAw47tb5I9I2PxXhbZ7V3muhtAG/Bfm/lwxBO2\r\n\t\t\tj3P7x+keFxFH3slEe0Xsy0P4/tx1Ed2sONPdAPpFYFnHDl5M3OQhzwXJ04B/6P4WEUfPAlMc2z+T\r\n\t\t\teMlEs4DLHNtfGkuArVsA/YnzAF4S8cJbH+jr2P4JKHlIRHy1YomKXvoCX4/Yn4ud2+9WDOtOAO2D\r\n\t\t\t79qgV4DxEU+Ud/LQaN3bIhKB97PmvIh9GQ+85Nj+nt15cepOAN3ZeeBi7jw0CNjUsf0HgI90X4tI\r\n\t\t\tBFPwrWzyreyZGYt37shOsQNog/O3kBbgDxFP0P55niYQEanRac7t7xexLw8Dcxzbv4AuJhN1NYB+\r\n\t\t\tGfsB1rNDsyOdnEZ8fzOYDPxT97OIRDQG2yPXy0igR6S+zMY3H2ZwFtOiBVDvN6rLI15o38A3eeh4\r\n\t\t\t7Id9EZFYWp2f072BDSL251Ln9kfGCqCL4lul/EXgrYgnxnt3jdt0L4tIHdzq3H7MLVbfyt6qveyS\r\n\t\t\txTb3APp954GKufPQUsBwx/bvAj7WfSwidfCx8xf49YElI/bHe8/1mhNjm2r8+w3Ob2wt2HZ3sRyQ\r\n\t\t\tx2kB+cySwFBgOWwz667q7XiMhwH/Kuj4ru7Y9n7AzG7899Oyt443gPd0K3TZ2cCuzs/QWAW3/4Ql\r\n\t\t\tEzU5tX8BcBM1/OTW0Nq68L/7xPhJbf/xq8ALzic7VsZqD2A60Mup/clYqrd+/6z9vIzAsrwHazgE\r\n\t\t\tmJi9fdwMzNVw1PzSMwmbbfMwC5v6nBOpP2cDJzq2/1XsZ0QAhg9pXuhfrnUK1zu4XRnxwvqmY/AE\r\n\t\t\tOErBs2brYpmDNyh4ShtLY5VG3gXW1nDUpBXfqc9ewIYR+3OFc/un1vKXawmgX3CeCngBeDviiTjH\r\n\t\t\tuf07de/WZD/gGWCAhkI6MBDbT3ofDUVNbndu//yIfXkbeN6x/Z2p4eeiWgLors4Dc1TEk9AMDHNs\r\n\t\t\t/w7gE923VdsGuFbDIFW6DviuhqFqnwC3OLa/XvZMjcV7Z6KqY121AbTB+Y1tDvBYxBNwiHP7I3XP\r\n\t\t\t1vRl5j4Ng9ToATTNXwvvRJ+DIvblUey3V8836qp2Jqo2gK6B796HZxHvR+gmfAu1vgOM1f1aNb15\r\n\t\t\tSlfdoCGo2lgsGcvLT/DLjl3QC5fnVrIDs5gXLIB6v1GNinghbYxv8tDRKHmoWssBW2sYpIu2xLce\r\n\t\t\tcUpa8Z36bAI2itifn+fhjb2aANof2MHxQMdgadaxeP/gfbfu1artoCGQbtpOQ1C13zi3f1HEvkwC\r\n\t\t\tnnNsf+ss9nU7gO7hPBAxy5Ytg28a/I3Y2lKpzoEaAummgzQEVZsB/Mqx/TWyZ2wsxzq3v3tnf2Gh\r\n\t\t\tGyk8MX5SA7b2yuv3z9QW4X4RKwQu1ZlL92rSirQQrypICr4IvOz8jE1lM5wpwMDhQ5pbu/oGuja+\r\n\t\t\tyUNnRAyePZ2/sUwEXtX9WdPFr+Ap3dWoAFqT/wATHNs/IXvWxvoC7pldPABYq7OLb2FGOg/ANREv\r\n\t\t\tnO/gmyV2BEoeqvXiF9G1FJ9nwY5G4NsR+3K1c/tnttvOdj4dTuE+MX7SAOBDxwN7Gt/NDNr7F76b\r\n\t\t\tZ/fFfmOQ6v0PWFHDIN0wDlhZw1CT3s7PqpfpYoHqLnoc36paA4YPaf6o1jfQEc6dPjbiAC/vHDx/\r\n\t\t\toeDZJddpCKSbfqkhqNlMfNdffwlbohbLic7tj6jpDTRLHpqM376kM7H9BmNNvVyA77TFytk3YanN\r\n\t\t\tqthvMiJdpcS9rj+zPHM2Loj4ktSI1T7t69T+NGCx4UOaW6p9A10X3029T4sYPHviu1TmDQXPLnsF\r\n\t\t\t3yrzkraXUOJeV/3X+bl1FL4b1rTVApzp2H4/4GsdRe72b584HwzE3b5tC3yzPY/UvdgtP9AQSBft\r\n\t\t\tjBL3usNzZ6JGYLOIffGOKecvKJloQYFlcWBzxwN5Cqv5GMt5zu0/oPuw228RR2gYpEYnoD2nu+v+\r\n\t\t\t7O3NS8ydid4D/ubY/iZZbOw0gO7l3NGjIw7qCsBqju1fCXyq+7DbLiXufshSbD+P8MW4DD51vu9W\r\n\t\t\tBYZG/lLl6Yft/4f5koieGD+pEfiIGgqK1qgli+KxMlYvBn7s2P6KwOu6D4PZB2XmysLtBdykYQj6\r\n\t\t\tkvGa80tGrJ+5+mBLL71+svtcMlH7ADoMeFLXVFVezb5hSVgDgAuBfTUU0sa1WFbnFA1FcGOxpSfS\r\n\t\t\tuWHDhzQ//bkAmv1A+jBxf/gtsu1QIWhPvYA1sz8ro7JVZTMByxT9Z/ZnlobE9Vl2r4ahKo8BGw8f\r\n\t\t\t0vy5ALoEcZN7iq43+v1TRNL4sjoD7U1drSWGD2meTLsB20fjUrWLFTxFJBGzgMs0DFX7LFY2tLa2\r\n\t\t\tVpKHPHdySM1QYLyGQUQSMQTbFEY6NxPoN3xI89zKG+gwBc+qvaLgKSKJGY+tyZbO9Qa+DtDw+BsT\r\n\t\t\twX4Y/ZbGpSpbo80TRCQ9W2GbK0jn/gJs1PD4GxMHAh9oPKrSkn37mK2hEJHE9MSmJ5VMVJ0lGoFv\r\n\t\t\taByq9jMFTxFJ1GysiopUZ4PY1cOL7nINgYgkTNm41du0EVhJ41CVF7DF3SIiqZoAPK9hqMr/ayRe\r\n\t\t\tXc6iO0ZDICIlcLyGoCpzG1FJoGrMAR7RMIhICTyCtk6sxkuNel2vyoNZEBURKcMLw+81DJ16vhH4\r\n\t\t\ts8ahU8q8FRE986StRxuxNaBjNBYiIiLVvX0Ckxuzsiw/0HiIiIhUZbfhQ5o/23HiJaxgrYiIiHRs\r\n\t\t\tFLYnugXQ7C30QOBpjY2IiMgCPQ8cWimo/dmeh8OHNLdg2/rdojESERGZz13A14cPaf5s74T5Ng3O\r\n\t\t\t/sUIYBdgmsZLRERKbhqwE7Dz8CHN8y1n/Nyu+8OHNLcOH9J8JzAQK2/zkMZPRERK5oEsBg4cPqT5\r\n\t\t\t7uFDmlvb/4Wmjv7L4UOaZwMPPjF+0oNAA9ALK7rdkOMOHwCco/MuIpJLJwLX5Pj4WoHp2E5MrZXf\r\n\t\t\tOjvSVEOjn2Z/8uy/uj5FRHL9jJ6cSmdUOFVEREQBVERERAFUREREAVREREQBVERERAFUREREFEBF\r\n\t\t\tREQUQEVERBRARUREFEBFREQUQEVEREQBVERERAFUREREAVREREQBVERERAFUREREFEBFREQUQEVE\r\n\t\t\tRBRARUREFEBFREQUQEVEREQBVERERAFUREREAVREREQBVERERAFUREREFEBFREQUQEVERBRARURE\r\n\t\t\tFEBFREQUQEVEREQBVERERAFUREREAVREREQBVERERAFUREREFEBFREQUQEVERBRARUREFEBFREQU\r\n\t\t\tQEVEREQBVERERAFUREREAVREREQBVERERAFUREREFEBFREQUQEVERBRARUREFEBFRETKoElDIFV+\r\n\t\t\t0VocGAD00nBIwmYBU4APgRYNhyiASletBhwN/FDXipTMHOAm4AJgrIZDOnqzEGlvMeBh4N/Avgqe\r\n\t\t\tUtKXi32Bl4AHgf4aElEAlc58CXgb2ExDIQLAlsAEYFUNhSiASkeWzd46+2ooRObTD5vKHaKhEAVQ\r\n\t\t\taW8R4AVdEyILfV4+l90rInpYymdOBAZqGEQWahBwrIZBFEClYlHgVA2DSFXOQD9ziAKoZDbSEIjU\r\n\t\t\tZEMNgSiACsA+GgKRmuyrIRAFUAH4hoZApCbDNQSiACoAS2sIRGqyvIZAFEClQUMgontHFEBFREQU\r\n\t\t\tQEVERBRARUREFEBFREQUQEVEREQBVERERAFUREREAVREREQBVERERAFUREREFEAlz1bHtkArw59B\r\n\t\t\tORjvpUo03l/V7SUKoJKy+0p03Y3OwTHcWpKxbgB+o9tLFEAlZSsCu5egnxsAW+bgODYFhpVgvH8A\r\n\t\t\trKrbSxRAJXU3AIsm3L8ewN05e+tvSni8+wK/1G0lCqBSBk3AVQn37/+AwTk6nkHAoQmP96VAL91W\r\n\t\t\togAqZbEnaU65LQ5clMPjuph8JDWFtiqwv24nUQCVsrmb9IoSX5vjY7susbFuAO7QbSQKoFJGqwE7\r\n\t\t\tJtSfdYGdcnx82wLrJDTe3wPW0G0kCqBSVrcCfRK5l+4qwHHehyU5FV1v4Fe6fUQBVMqsF/n8zbBW\r\n\t\t\tBwLLF+A4lwZ+lMB4n5cFUREFUCm1g4AVCnz8/YErCnS8VwIDCjzeK2KZziIKoCLAvRQ3oejagt1L\r\n\t\t\tjcD1BR1r7TgkCqAi7awBbF3A414T2KWAx70DxUzA2QZYW7eLKICKzO8OivW7VmP25lxUDxTsGbAI\r\n\t\t\t8GvdJqIAKvJ5vYEzCnS8ewNDCzzeywJ7Feh4T8G27RNRABVZgGOA5QpwnIsCVycw3tcC/QpwnMsB\r\n\t\t\tJ+n2EAVQkYW7swDHeDlpbNDeWJAvArfqthAFUJHOrQ98J8fHtxqwT0LjvQfw5Rwf32bAhrotRAFU\r\n\t\t\tpDp3k88KGw3kq1RZKHktdN4TuF23gyiAilSvHzAyp29rKVaRWQnYNYfHdRLF3vRBFEBF6uJE8lVX\r\n\t\t\tsy/pVTRp6ybyVei8OadfokQUQKUQbsvRsVxC2oWbm7Bt/vIU0EUUQEW6aCPgWzk4jlVIYxP2zuwF\r\n\t\t\trJyT876ZLn9RAJWyuidQO3dT3yUjDQH7ck8Bxrve+xI3Ea403D26DUUBVIroaOBvAdoZCBxZx358\r\n\t\t\tD1u60l0TscozXg4A3gzQTr0LnR+dnfPuehrbmENEAVQKZxawW6C2zgeWrEMfFiFc4ebtgI8dj/WT\r\n\t\t\tLNiHUK9C5wOBcwO1tRPwqW5DUQCVopoAnBmorZvrcPznEmaD+/uBZyMc7zOEmf7sBVxQh/EO9WXl\r\n\t\t\tfOBt3X6iACpFdzowNUA7mwHDIh73CsARgdraO+Jxh0p2OoS4hc6HAVsFaGca8FPddqIAKimYjW1A\r\n\t\t\tEMJ9xEkoaiBcIstRwPsRx3sy4X77i5VQ1INwCT+7Yj8fiCiAShIeAJ4L0M4gfBNxKkIVbn4f23g+\r\n\t\t\ttkuAdwO0E6vQ+SGE2TTjBeBB3W6iACopaQV2DtTW5cDijscasnDz9sCcOoz3XCyJJgTvQueLZQE/\r\n\t\t\thO2ya01EAVSS8jpwcaC2bnQ8zlCFm/8EPFHH8X4ceChAO96Fzq8N9Cz6OfCGbjNRAJVUnQhMD9DO\r\n\t\t\ttoSZYm0vZOHm3XMw3iMCteNV6PxrhJmZmImtHxVRAJVkfRrwoe5RgivU3rsnAe/lYLw/AE4O1NZd\r\n\t\t\tgY+tMWCbu2dBVEQBVJJ2DzAmQDvLEraw9ebA8ADtTAZ+lqPxPo8wWcDrEXZ/2n2BoQHaeRHLFhZR\r\n\t\t\tAJXktQK7BGrrGiwJpbt6YskyIXyP+iQOdWROwPG+izAVab4AXB3omHZAiUOiACol8l/CLO9oBK4K\r\n\t\t\t0M5PgP4B2nkKeDSH4/0o8JcA7YQqdH55oOfP1cA43U6iACplczxhFrzvDnylG/99M3BqoD7tmOPx\r\n\t\t\tDrUv8YnZmHXV6ljZtBBv1kocEgVQKaUZgR6k0L2EolCJQ+cBk3I83hOB0wK1dXcX/7sG4DeBjmEE\r\n\t\t\ttoG+iAKolNJtwMsB2lmRrm0XuDFhCnZPw9aP5t1ZhNmXeBhW9LorQW/VAJ8/jnC/WYsogEohtRJu\r\n\t\t\tx5zrgUVr+PtNAR/CO1GM/VdnEzahqJZ9ifsC1wX67G2AFt0+ogAqZTc2C37d1URtCUXHY3vrdtcz\r\n\t\t\twB8LNN4PE2aHpIHAsTX8/UsJUwhgNGFmLUQUQCUJhxFm6ceeVDdFuATh6pTuRPGWUYRKKDqb6gqd\r\n\t\t\trwrsH+Dz5gAH63YRBVCReT4J9IAFS3DprATX6ECfdSHwVgHH+80s+IVwayf/voFwU+X7Yb83iyiA\r\n\t\t\tirRxE/BqgHZWwzYz6MhwYMsAnzOTcNvk1cPphNmXeFNgg4X8+52xsmjd9VrALz4iCqCSlJAlz24G\r\n\t\t\t+izgf+9B15dgtPd9ir3/6qeE2/D+tyz4983e2RejELZHiUOiACrSoRcIsy6zF3DRAv73I4ClArT/\r\n\t\t\tIvC7BMb7PuD5AO0Mwn7Hbu88wtQSvQf4l24PUQAVWbgDAr1pHASs0OafBwIXBDrGVAo3h3zrv4j5\r\n\t\t\ts5pXBP4vQLsthC0aIKIAKsmaCvw4UFv3Mi+h6BeB2hyF/R6Xiv8BlwVq64bs/4bccegQYIpuC1EA\r\n\t\t\tFanONVimaHetAWyNleIKsWHDLOCoBMf7eML8nrs1sC620UGIgucTgWt1O0geNWkIJKdasI3Znw3Q\r\n\t\t\t1m3Ax4GOawS2h29qZgI/BG4P0NbvsHJlIWwLzNXtIHoDFanNc9h2cd3VFxgcoJ1XgTsTHu87gZcC\r\n\t\t\ttDM4G/Puui+7BkQUQEW6YF/ys3RhG9Iu3NxKvsqx7aXLXxRARbruI/JR8/FXwCslGO9XyMdvjkcA\r\n\t\t\tH+ryFwVQke65HHinjp9ftv1XD6e+lWXeB67UZS8KoCLdN5f6Ti3uTbkKN0/H9pytl20JU1hARAFU\r\n\t\t\tBHgSeKgOn/sanW+WnqKbqc+U9Z+Ap3S5iwKoSFgj6vCZZS3cHLLQeS1212UuCqAi4X0AnBjx824l\r\n\t\t\tzLKOovo3cGPEzzsBeE+XuSiAivi4AEsy8daCCjeDbRAf4w18MlZbVUQBVMTJHMJtfr4wB2BLaMru\r\n\t\t\tY+DACJ+zI0ocEgVQEXePZX+8TACu1zB/5jrgDcf2nwL+omEWBVCROHZzbLusiUMdqexL7Pn2KaIA\r\n\t\t\tKhLJJGCkQ7v3AmM0vJ/zPHCHQ7vnZOdSRAFUJKKzCV8ncm8Na4f2D/xmPs3pS5CIAqhIJ2YD3w/Y\r\n\t\t\t3qGocPPCTMW2+QtlR+q7ZaCIAqiUWs+ctqXx1niLAqhIrh/mIbfZuxgYpGHt0OLARQHbux3opWEV\r\n\t\t\tBVCR+H4K9A/c5nUa1g6FLnPWDzhDwyoKoCJxLZsF0NC2BdbR8H7OuvjsjXscsIyGVxRAReL5tWPb\r\n\t\t\t9wE9NMTzPSfucmz/Lg2xKICKxLEpsKFj+0tjSzbEHAAs79j++sC3NcyiACriqydwZ4TP+TkwQMNN\r\n\t\t\tf+DKCJ9zN0ooEgVQEVcnRQpsjWg/XLDEoRjPif7AqRpuUQAV8TGYuDvX7ACsUeLxXhPYJfKXo8G6\r\n\t\t\tzEUBVCS8m+rwmQ+U9D5pxKZVY7tVl7kogIqE9S1g8zp87rLAniUc772AFevwuZsA39TlLgqgImE0\r\n\t\t\t4VMJpFrXYov+y2JR4Jo6fv492TkXUQAV6aajgaXqHMCvKtF4X17nADYQOFKXvSiAinTPEsC5OTiO\r\n\t\t\tEcCXSzDeqwH75OA4zgeW1OUvCqAiXTc6R8dyX+L3TAP1SRzqiBKKRAFUpIuGAVsGaGcaMCFAOysB\r\n\t\t\tuyY83rsBqwZoZ0I25t21aXYNiCiAitSgB5ZMEsLOwHaB2roJS7JJTR/ghkBtbUu4Quf3oYQiUQAV\r\n\t\t\tqclhhFlU/xzwMPAPwmwB2ITVDU3Nzwizld69wPPAg8BTAdobBPxYt4MogIpUZzHgwkBt7QS0Zv//\r\n\t\t\tfkBLgDZ/BKyc0HivEjBItU1A2i1Qm5dgxbxFFEBFOnFdoGvzSmB8m3+eChwR6BjvxZJuiq4BuD3g\r\n\t\t\trMGHbf75jYBv6zfqthAFUJGFC1W4eSZwTAdBNURC0WrYXrlFtyOwVoB23mHBa2VPBKYHaF+FzkUB\r\n\t\t\tVKST6zFUceXdsiDaXguWVBTCr7Hkm6JaBPhVoLa2B+Yu4H//FPhBoM9QoXNRABXpQKjCzS8Cv13I\r\n\t\t\tv38K2yS+u3oBFxR4vM8F+gZo5w/A0wv59/cCYwJ8jgqdiwKoyAKELNy8A/MShzoSaoP4Q4ChBRzv\r\n\t\t\tFQj3e/Aenfz71oBv/Sp0LgqgIu1cE+h6vBoYV8XfmwwcF+jYf0uxEooaCLOkB+BY4P0q/t44bI/d\r\n\t\t\tEM8sFToXBVCRzJqE2eFnDrbxfLUuAt4N8LlrAN8t0HhvRZiEnMnYEpNqHQ/MCjTDsIZuG1EAlbJr\r\n\t\t\tIFypshHAJzX8/bmEm1q8DUvKybuewC2B2to++9JSrRlYndEQ7tHzSxRApez2xhbyd9e4Lgbiv2I7\r\n\t\t\tFXVXP+DMAoz3Kdjvzd31CPC3Ln7ReCXA569IOQudiwKoCBC2cPM2dH2XoVDLLI4Bls3xeC8HnByo\r\n\t\t\tra7uMtRKuPWzZSt0LgqgIp8JVbh5NPByN/7794FTA/XpNzke71DlwX5K9347HkuYRKAmLGlMRAFU\r\n\t\t\tSiVU4eY5wMEB2jkHmBKgnfWxMlx58x1gwwDtTMWKXXfXYdT2+2lH9qAchc5FAVQECFu4eX/C1J6c\r\n\t\t\tDXwv0DHdQ5jKJqH0JFyi1g6EyaT9BNs4I4TUC52LAqjIfG8NIQo3v0a4regA/gz8JUA7/YCRORrv\r\n\t\t\tkwiz+cBTWPJQKDcArwZoJ/VC56IAKgLY1nHXBXwbagl8fLsHaudEwtQz7a7mgMH8e4GPrRXYJVBb\r\n\t\t\tqRY6FwVQkc9cQpjpzXuAFxyO723gjEBt3ZaD8b4pUDvnZ2MT2j8JM73cRLitIEUUQCV3VsGKUXdX\r\n\t\t\tC2ESkDpyBpYs010bAd+q43hvBGwWoJ1pWOatl/0DzSTsRVqFzkUBVAQIW7j5x4TJmO3IbLq+zrG9\r\n\t\t\tuwmzVKcrb2ShxntnwiQOdWQqcGigtlIpdC4KoCKf+R5hCjdPBH4R4XgfBJ4I0M5AatufN5RjgKUC\r\n\t\t\ttPMMYXZq6szVwJsB2lkNKxIuogAqSQhZuHk7Fly42UOohKJzgSUjjvcS2LrWUG+frRGOuYVwSUq3\r\n\t\t\tUuxC56IAKjJfAOkdoJ37gWcjHvd44OKAD/VYRgdq58psDGJ5BrgrQDtFL3QuCqAigG36fUSgtvau\r\n\t\t\tw/GfCEwP0M6mwLAIxzsM2DJAOzOxaeDYfhSonUOwouEiCqBSSH0ItzfsUVRXuDm0T7GNH0K4jzAb\r\n\t\t\tGnSkP7a8J4RdsyAa2+SAgftebN2xiAKoFM4VwNoB2nkXuKyO/fgtYdacDiJc9ZkFuZYwmze8kAX7\r\n\t\t\termEcIXOL9dtKAqgUkSbB2pnR+IlDi1IK7BToLa2djzOrQOOd2sdx3tuwPHeXLehKIBKWT1CmOUk\r\n\t\t\t3TWuJG8zVwP/y8FxPE6c5TMiCqCSrN1ydCzHUZ/fBWOZBRyZo+PZQ5e/KICKdM3JhPktLJSZ2HZx\r\n\t\t\tqRoBzMjR8XyA7xaCIgqgkqRQhZtDuwN4OcHxfhW4M4fHdR6+2zaKKIBKcrbH9qTNm1asjFpqtqG+\r\n\t\t\tiUMdmU24hCIRBVBJ3lPAozk+vv8QrqZpHowGXsnx8T1CmELnIgqgkrwivHEcBsxJYKznAAcX4Dh3\r\n\t\t\t120hCqAiC3ceVnEl76YD+yYw3vtg9T7zLmShcxEFUEnONOCUAh1v3qc+O/MacEuBjjdUoXMRBVBJ\r\n\t\t\tjnfh5tBaCVeCqx62xcqIFUXIQuciCqCSjOco5s4zLwI3FvC4bwX+XcDjfhBLMhNRABXJ7EQ+l1FU\r\n\t\t\t47CCvcm1UIzEoY7sqttFFEBFTOzCzaF9DBxYoOM9APiowOMdstC5iAKoFFa9CjeHdh3wRgGOcwJw\r\n\t\t\tfQLjHarQuYgCqBTWbqSxQXsLVgYs77ahWNPNHfkU+IFuH1EAlbJ6EStWnYrnyed+shX3AmMSGu/U\r\n\t\t\t+iMKoCJV24HiJg51ZL8cv+Htk9hYt2JLn0QUQKVUrsaKVKdmKnB4Do/rUODDBMe7LIXORQFUBLD9\r\n\t\t\tV49OuH8/x5J18mIiMCrh8T6eYm3AIQqgIl02Avgk4f61kK8dinYA5iY83jNIu9C5KICKADbldkcJ\r\n\t\t\t+vk0cH8OjuMPwN9LMN63kWahc1EAFflMKssoqvHDHBzDHiUZ61ZUeFsia9IQVKXI28zlzVgNQVTv\r\n\t\t\taQjctGgI9AYqIiIiCqAiIiIKoCIiIgqgIiIiCqAiIiIKoCIiIqIAKiIiogAqIiKiACoiIqIAKiIi\r\n\t\t\togCahhk6pSIiekYrgNZuoq5PEZHcmpBSZ1ILoG/r+hQR0UuOAmjt3gGm6BoVEcmdqcC7CqD51Qqc\r\n\t\t\tr+tURCR3ziaxspApZuFeDMzRtSoikhtzgMtS61SKAXQmsLeuVxGR3BhBgqskUl0HejNwua5ZEZG6\r\n\t\t\tuxq4LcWOpbyRwuEkOGUgIlIgFwMHp9q5lANoaxZEt8ayv0REJI6pwJbAUSSWOFSWAFrxALAEsCvw\r\n\t\t\tnK5rERE3zwHfz565v0+9s00lOalzgNuzP4sA/YEBJeq/iIjn83VK9tb5aZk6/v8HAAuhR/0UgM2A\r\n\t\t\tAAAAAElFTkSuQmCC", transform: "matrix(0.9999 0 0 0.9999 74 157)" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 448 320" }, props),
        React.createElement("image", { overflow: "visible", width: "448", height: "320", xlinkHref: "data:image/png;base64,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\r\n\t\t\tmdxBKpp6uX0hSaqICcBbPbdBHGZ/SJIq4gh47z7AGcD+9okkqc3tC7y2YAACXAb80L6RJLWp8cAV\r\n\t\t\tPf9n4Uow3wIOtY8kSW3m29kPiwtAgPNJuzY/Yn9Jklrcw8CY7Nsf/QUgpJvj1wE2J+3x5b5ekqRW\r\n\t\t\t0QX8FNgMWBd4oLcH9bUdUjcwJfv5KrAksBRp9+cI6wETHaea7Aw8WcDr7gScZffXZCPg7QJe95vA\r\n\t\t\tN+z+fk0Hdizotc8BdnAI+nUD2erMBrxOurVvZi1f3GrdD7Ara/RN4LmgX/YVx7tmt5F23W62YXZ9\r\n\t\t\tze6hmN21pxiANfkb8FBBr/1XA7AmDzZ7jNwOSZJUSQagJMkAlCTJAJQkyQCUJMkAlCTJAJQkyQCU\r\n\t\t\tJMkAlCTJAJQkyQCUJMkAlCTJAJQkyQCUJMkAlCTJAJQkyQCUJMkAlCTJAJQkyQCUJMkAlCQZgJIk\r\n\t\t\tGYCSJBmAkiQZgJIkGYCSJBmAkiQZgJIkGYCSJBmAkiQZgJIkGYCSJBmAkiQZgJIkGYCSJBmAkiQZ\r\n\t\t\tgJIkGYCSJBmAkiQZgJIkGYCSJANQkiQDUJIkA1CSJANQkiQDUJIkA1CSJANQkiQDUJIkA1CSJANQ\r\n\t\t\tkiQDUJIkA1CSJANQkiQDUJIkA1CSJANQkiQDUJIkA1CSJANQkiQDUJJkAEqSZABKkmQASpJkAEqS\r\n\t\t\tZABKkmQASpJkAEqSZABKkmQASpJkAEqSZABKkmQASpJkAEqSZABKkmQASpJkAEqSZABKkmQASpJk\r\n\t\t\tAEqSZABKkgxASZIMQEmSDEBJkgxASZIMQEmSDEBJkgxASZIMQEmSDEBJkgxASZIMQEmSDEBJkgxA\r\n\t\t\tSZIMQEmSDEBJkurUWcO/rw/sDWwGfBIYYbc13et2Qel12QWlNgbothtK7YjspxFvAPcBk4Ers/89\r\n\t\t\tb6ABOBjYB7gYGOK4SJJawAhgy+zn6Cz8jgbO6S0IezsFuhLwHDDB8JMktbBO4CxgepZtfQbgxsAz\r\n\t\t\twAr2mySpTayQZdtGiwvAjwB34MIYSVL76QDuBFZeOAAHA/fQ/6IYSZJaOQSnZZn3bgAehKc9JUnt\r\n\t\t\tbxSwX08AdgI/tk8kSRVxATC4g3R/jKs9JUlVMQRYrwP4on0hSaqY3TuAsfaDJKlixnaQyptJklQl\r\n\t\t\t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\r\n\t\t\tmukAAAAASUVORK5CYII=", transform: "matrix(0.9999 0 0 0.9999 82 236)" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$I,
    GroupsIcon: Icon$J,
    HamburgerIcon: Icon$K,
    HamburgerCloseIcon: Icon$L,
    HomeIcon: Icon$M,
    IfoIcon: Icon$N,
    InfoIcon: Icon$O,
    LanguageIcon: Icon$P,
    LogoIcon: Logo,
    MoonIcon: Icon$Q,
    MoreIcon: Icon$R,
    NftIcon: Icon$S,
    PoolIcon: Icon$T,
    SunIcon: Icon$U,
    TelegramIcon: Icon$V,
    TicketIcon: Icon$W,
    TradeIcon: Icon$X,
    TwitterIcon: Icon$Y,
    RedditIcon: Icon$Z,
    AuditIcon: Icon$_,
    GooseIcon: Icon$$,
    HandshakeIcon: Icon$10,
    LayerIcon: Icon$11,
    RoadmapIcon: Icon$12,
    BondsIcon: Icon$13,
    VaultsIcon: Icon$14,
    EggHouseIcon: Icon$15,
    ShoeIcon: Icon$16,
    StableIcon: Icon$17,
    RanchIcon: Icon$18
});

var MenuButton = styled(Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled(Link$1)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$q, { className: "mobile-icon" }),
        React.createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$L, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$K, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: "Github",
                href: "https://github.com/ponyswapfinance/",
            },
            {
                label: "Docs",
                href: "https://goosedefi.gitbook.io/goose-finance/",
            },
            {
                label: "Blog",
                href: "https://goosefinance.medium.com/",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/goosedefi",
            },
            // {
            //   label: "Bahasa Indonesia",
            //   href: "https://t.me/PancakeSwapIndonesia",
            // },
            {
                label: "中文",
                href: "https://t.me/goosefinancechinese",
            },
            // {
            //   label: "Tiếng Việt",
            //   href: "https://t.me/PancakeSwapVN",
            // },
            {
                label: "Italiano",
                href: "https://t.me/goosefinanceitalian",
            },
            {
                label: "русский",
                href: "https://t.me/goosefinancerussian",
            },
            {
                label: "Türkiye",
                href: "https://t.me/GooseFinanceTurkey",
            },
            // {
            //   label: "Português",
            //   href: "https://t.me/PancakeSwapPortuguese",
            // },
            {
                label: "Español",
                href: "https://t.me/goosefinancespanish",
            },
            {
                label: "日本語",
                href: "https://t.me/goosefinancejapanese",
            },
            {
                label: "Français",
                href: "https://t.me/goosefinancefrench",
            },
            {
                label: "Announcements",
                href: "https://t.me/goosefinanceann",
            },
            {
                label: "Price Bot",
                href: "https://t.me/BinanceRocketEGG",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/ponyswapfinance",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
Icons$1.MoonIcon; Icons$1.SunIcon; Icons$1.LanguageIcon;
var Container$4 = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  //background-color: ", ";\n  // border-top: solid 2px rgba(133, 133, 133, 0.1);\n  background-color: rgba(0,0,0,0.0) !important;\n  border-top: none !important;\n  position: absolute;\n  bottom: 64px;\n  left: 0;\n  width: 100%;\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  //background-color: ", ";\n  // border-top: solid 2px rgba(133, 133, 133, 0.1);\n  background-color: rgba(0,0,0,0.0) !important;\n  border-top: none !important;\n  position: absolute;\n  bottom: 64px;\n  left: 0;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd; _a.currentLang; _a.langs; _a.setLang; var priceLink = _a.priceLink;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$l, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            cakePriceUsd ? (React.createElement(PriceLink, { href: priceLink, target: "_blank" },
                React.createElement(Icon$v, { width: "24px", mr: "8px" }),
                React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
            React.createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "8px" : 0;
                if (social.items) {
                    return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  // padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  // border-right: ", ";\n  border-right: 4px solid rgba(0, 0, 0, 0.25);\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n\n  background-color: rgba(0,0,0,0.25) !important;\n  border: none !important;\n\n  top: 64px;\n"], ["\n  position: fixed;\n  // padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  // border-right: ", ";\n  border-right: 4px solid rgba(0, 0, 0, 0.25);\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n\n  background-color: rgba(0,0,0,0.25) !important;\n  border: none !important;\n\n  top: 64px;\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$19,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$1c,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$1a,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$1b,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$1d,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1e,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

styled(Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss }, connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); })));
};
var templateObject_1$E;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { className: "pns-button connected-button", size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { className: "pns-button connect-button", size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$1f = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$1f, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  // top: ", ";\n  top: 0;\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  // border-bottom: solid 2px rgba(133, 133, 133, 0.11);\n  border-bottom: none;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n\n  background-color: rgba(0,0,0,0.25);\n"], ["\n  position: fixed;\n  // top: ", ";\n  top: 0;\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  // border-bottom: solid 2px rgba(133, 133, 133, 0.11);\n  border-bottom: none;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n\n  background-color: rgba(0,0,0,0.25);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#549cac",
    primaryBright: "#549cac",
    primaryDark: "#549cac",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "#452A7A", textDisabled: "#BDC2C4", textSubtle: "#8f80ba", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#C5E1E7", textDisabled: "#666171", textSubtle: "#c9c4d4", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Breadcrumbs, Icon$c as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$e as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, Icon$n as CopyIcon, CopyToClipboard, Dropdown, Icon$1 as ErrorIcon, Flex, Icon$w as GooseRoundIcon, Heading, Icon$o as HelpIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Menu, Icon$s as MinusIcon, Modal, ModalProvider, Icon$t as OpenNewIcon, Icon$v as PancakeRoundIcon, Icon$u as PancakesIcon, Icon$x as PrizeIcon, Progress, Icon$A as ProgressBunny, Radio, Icon$y as RemoveIcon, ResetCSS, Icon$E as SearchIcon, Skeleton, Spinner, Svg, Icon$F as SwapVertIcon, Icon$G as SyncAltIcon, Tag, Text, Icon$C as Ticket, Icon$D as TicketRound, ToastContainer, Toggle, Icon$z as VerifiedIcon, Icon$H as WarningIcon, Icon$B as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
