
const backgroundColor = '#212836'
const foregroundColor = '#96a6c8'
const cursorColor = 'rgba(82,139,255,.5)'
const borderColor = backgroundColor

const colors = {
  black: backgroundColor,
  red: '#e2495c',
  green: '#6ff875',
  yellow: '#dfd282',
  blue: '#5f9dfe',
  magenta: '#ca80f5',
  cyan: '#60f2f7',
  white: '#c0c5ce',
  lightBlack: '#65737e',
  lightRed: '#e2495c',
  lightGreen: '#6ff875',
  lightYellow: '#dfd282',
  lightBlue: '#5f9dfe',
  lightMagenta: '#ca80f5',
  lightCyan: '#60f2f7',
  lightWhite: '#dfe1e8'
}

exports.decorateConfig = config => {
  console.log('Hi mom!')

  return Object.assign({}, config, {
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
  })
}
