module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'WebFont',
      externals: {
        react: 'React'
      }
    }
  }
}
