'use strict';
const backgroundColor = '#212836';
const foregroundColor = '#97a7c8';
const cursorColor = 'rgba(72,150,255,0.8)';
const borderColor = backgroundColor;

const black = backgroundColor;
const white = foregroundColor;
const red = '#e76572';
const green = '#6af699';
const yellow = '#fffa9e';
const blue = '#71b1fe';
const magenta = '#d59df6';
const cyan = '#4ff2f8';

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack: black,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: white
};

exports.decorateConfig = config => Object.assign({}, config, {
  foregroundColor,
  backgroundColor,
  borderColor,
  cursorColor,
  colors,
  termCSS: `
    ${config.termCSS || ''}
    .cursor-node {
      mix-blend-mode: difference;
    }
  `,
  css: `
    ${config.css || ''}
    .header_header {
      top: 0;
      right: 0;
      left: 0;
    }
    .tabs_list {
      background-color: #1b212c !important;
      border-bottom-color: rgba(0,0,0,.15) !important;
    }
    .tab_tab.tab_active {
      font-weight: 500;
      background-color: ${backgroundColor};
      border-color: rgba(0,0,0,.27) !important;
    }
    .tab_tab.tab_active::before {
      border-bottom-color: ${backgroundColor};
    }
  `
});
