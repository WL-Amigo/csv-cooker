import path from 'path';

export default {
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        'font-family': '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
        'layout-body-background': 'white',
        'layout-header-background': 'white',
        'layout-footer-padding': 'none'
      },
      javascriptEnabled: true
    }
  },
  alias: {
    '/@/': path.resolve(__dirname, './src')
  }
}