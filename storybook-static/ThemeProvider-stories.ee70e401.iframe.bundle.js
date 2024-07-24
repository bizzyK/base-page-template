"use strict";(self.webpackChunkbase_page_template=self.webpackChunkbase_page_template||[]).push([[761],{"./node_modules/@mui/material/CssBaseline/CssBaseline.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,qy:()=>html,rf:()=>body});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/GlobalStyles/GlobalStyles.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const html=(theme,enableColorScheme)=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.A)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},enableColorScheme&&!theme.vars&&{colorScheme:theme.palette.mode}),body=theme=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.A)({color:(theme.vars||theme).palette.text.primary},theme.typography.body1,{backgroundColor:(theme.vars||theme).palette.background.default,"@media print":{backgroundColor:(theme.vars||theme).palette.common.white}});const __WEBPACK_DEFAULT_EXPORT__=function CssBaseline(inProps){const props=(0,_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_3__.b)({props:inProps,name:"MuiCssBaseline"}),{children,enableColorScheme=!1}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.A,{styles:theme=>((theme,enableColorScheme=!1)=>{var _theme$components;const colorSchemeStyles={};enableColorScheme&&theme.colorSchemes&&Object.entries(theme.colorSchemes).forEach((([key,scheme])=>{var _scheme$palette;colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/,"")]={colorScheme:null==(_scheme$palette=scheme.palette)?void 0:_scheme$palette.mode}}));let defaultStyles=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.A)({html:html(theme,enableColorScheme),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:theme.typography.fontWeightBold},body:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.A)({margin:0},body(theme),{"&::backdrop":{backgroundColor:(theme.vars||theme).palette.background.default}})},colorSchemeStyles);const themeOverrides=null==(_theme$components=theme.components)||null==(_theme$components=_theme$components.MuiCssBaseline)?void 0:_theme$components.styleOverrides;return themeOverrides&&(defaultStyles=[defaultStyles,themeOverrides]),defaultStyles})(theme,enableColorScheme)}),children]})}},"./node_modules/@mui/material/GlobalStyles/GlobalStyles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>material_GlobalStyles_GlobalStyles});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),GlobalStyles=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js")),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const esm_GlobalStyles_GlobalStyles=function GlobalStyles_GlobalStyles({styles,themeId,defaultTheme={}}){const upperTheme=(0,useTheme.A)(defaultTheme),globalStyles="function"==typeof styles?styles(themeId&&upperTheme[themeId]||upperTheme):styles;return(0,jsx_runtime.jsx)(GlobalStyles.A,{styles:globalStyles})};var defaultTheme=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const material_GlobalStyles_GlobalStyles=function GlobalStyles_GlobalStyles_GlobalStyles(props){return(0,jsx_runtime.jsx)(esm_GlobalStyles_GlobalStyles,(0,esm_extends.A)({},props,{defaultTheme:defaultTheme.A,themeId:identifier.A}))}},"./node_modules/@mui/material/styles/ThemeProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ThemeProvider});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_system__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js")),_identifier__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["theme"];function ThemeProvider(_ref){let{theme:themeInput}=_ref,props=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);const scopedTheme=themeInput[_identifier__WEBPACK_IMPORTED_MODULE_3__.A];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.A,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.A)({},props,{themeId:scopedTheme?_identifier__WEBPACK_IMPORTED_MODULE_3__.A:void 0,theme:scopedTheme||themeInput}))}},"./node_modules/@mui/private-theming/useTheme/ThemeContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createContext(null)},"./node_modules/@mui/private-theming/useTheme/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useTheme});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_ThemeContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/private-theming/useTheme/ThemeContext.js");function useTheme(){return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.A)}},"./node_modules/@mui/system/esm/RtlProvider/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,I:()=>useRtl});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["value"],RtlContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext();const useRtl=()=>{const value=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RtlContext);return null!=value&&value},__WEBPACK_DEFAULT_EXPORT__=function RtlProvider(_ref){let{value}=_ref,props=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RtlContext.Provider,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.A)({value:null==value||value},props))}},"./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>esm_ThemeProvider_ThemeProvider});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),useTheme=__webpack_require__("./node_modules/@mui/private-theming/useTheme/useTheme.js"),ThemeContext=__webpack_require__("./node_modules/@mui/private-theming/useTheme/ThemeContext.js");const nested="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const ThemeProvider_ThemeProvider=function ThemeProvider(props){const{children,theme:localTheme}=props,outerTheme=(0,useTheme.A)(),theme=react.useMemo((()=>{const output=null===outerTheme?localTheme:function mergeOuterLocalTheme(outerTheme,localTheme){if("function"==typeof localTheme)return localTheme(outerTheme);return(0,esm_extends.A)({},outerTheme,localTheme)}(outerTheme,localTheme);return null!=output&&(output[nested]=null!==outerTheme),output}),[localTheme,outerTheme]);return(0,jsx_runtime.jsx)(ThemeContext.A.Provider,{value:theme,children})};var emotion_element_5486c51c_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js"),useThemeWithoutDefault=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js"),RtlProvider=__webpack_require__("./node_modules/@mui/system/esm/RtlProvider/index.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js");const EMPTY_THEME={};function useThemeScoping(themeId,upperTheme,localTheme,isPrivate=!1){return react.useMemo((()=>{const resolvedTheme=themeId&&upperTheme[themeId]||upperTheme;if("function"==typeof localTheme){const mergedTheme=localTheme(resolvedTheme),result=themeId?(0,esm_extends.A)({},upperTheme,{[themeId]:mergedTheme}):mergedTheme;return isPrivate?()=>result:result}return themeId?(0,esm_extends.A)({},upperTheme,{[themeId]:localTheme}):(0,esm_extends.A)({},upperTheme,localTheme)}),[themeId,upperTheme,localTheme,isPrivate])}const esm_ThemeProvider_ThemeProvider=function ThemeProvider_ThemeProvider_ThemeProvider(props){const{children,theme:localTheme,themeId}=props,upperTheme=(0,useThemeWithoutDefault.A)(EMPTY_THEME),upperPrivateTheme=(0,useTheme.A)()||EMPTY_THEME,engineTheme=useThemeScoping(themeId,upperTheme,localTheme),privateTheme=useThemeScoping(themeId,upperPrivateTheme,localTheme,!0),rtlValue="rtl"===engineTheme.direction;return(0,jsx_runtime.jsx)(ThemeProvider_ThemeProvider,{theme:privateTheme,children:(0,jsx_runtime.jsx)(emotion_element_5486c51c_browser_esm.T.Provider,{value:engineTheme,children:(0,jsx_runtime.jsx)(RtlProvider.A,{value:rtlValue,children:(0,jsx_runtime.jsx)(DefaultPropsProvider.A,{value:null==engineTheme?void 0:engineTheme.components,children})})})})}},"./stories/ThemeProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ThemeProvider_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js");const theme=(0,createTheme.A)({typography:{fontFamily:"Roboto, IBM Plex Mono, Arial"}});function themeprovider_ThemeProvider({children}){return React.createElement(ThemeProvider.A,{theme},React.createElement(CssBaseline.Ay,null),children)}try{themeprovider.displayName="themeprovider",themeprovider.__docgenInfo={description:"",displayName:"themeprovider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["portal/src/components/themeprovider/themeprovider.tsx#themeprovider"]={docgenInfo:themeprovider.__docgenInfo,name:"themeprovider",path:"portal/src/components/themeprovider/themeprovider.tsx#themeprovider"})}catch(__react_docgen_typescript_loader_error){}const ThemeProvider_stories={title:"Components/ThemeProvider",component:themeprovider_ThemeProvider},Default=(args=>react.createElement(themeprovider_ThemeProvider,args)).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ThemeProvider {...args} />",...Default.parameters?.docs?.source}}}}}]);