module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@vision/vision-vue/src/scss/global/_variables.scss";`,
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
};
