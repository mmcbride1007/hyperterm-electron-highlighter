
const backgroundColor = '#212836'
const foregroundColor = '#96a6c8'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = [
  backgroundColor,
  '#e2495c', // red
  '#6ff875', // green
  '#dfd282', // yellow
  '#5f9dfe', // blue
  '#ca80f5', // pink
  '#60f2f7', // cyan
  '#c0c5ce', // light gray
  '#65737e', // medium gray
  '#e2495c', // red
  '#6ff875', // green
  '#dfd282', // yellow
  '#5f9dfe', // blue
  '#ca80f5', // pink
  '#60f2f7', // cyan
  '#dfe1e8', // white
  foregroundColor
]

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
        background-color: #191d29 !important;
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
