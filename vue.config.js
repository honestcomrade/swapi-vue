module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/css/resets.scss";`
      }
    }
  }
}