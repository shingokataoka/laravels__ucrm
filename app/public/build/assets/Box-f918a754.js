import{s as i,f as h,_ as B,a as p,g as N,T as C}from"./DefaultThemeProvider-60793f61.js";import{r as T,j as _}from"./app-05e31e95.js";import{b as g,d as j,C as E}from"./ButtonBase-4b7997c0.js";import{e as P}from"./Typography-e3e33fd5.js";const I=["className","component"];function M(n={}){const{themeId:o,defaultTheme:m,defaultClassName:t="MuiBox-root",generateClassName:a}=n,c=g("div",{shouldForwardProp:e=>e!=="theme"&&e!=="sx"&&e!=="as"})(i);return T.forwardRef(function(x,d){const s=h(m),r=P(x),{className:l,component:u="div"}=r,f=B(r,I);return _.jsx(c,p({as:u,ref:d,className:j(l,a?a(t):t),theme:o&&s[o]||s},f))})}const R=N(),S=M({themeId:C,defaultTheme:R,defaultClassName:"MuiBox-root",generateClassName:E.generate}),D=S;export{D as B};