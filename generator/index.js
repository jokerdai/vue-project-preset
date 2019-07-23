module.exports = (api, options, rootOptions) => {
  // 基础引入
  api.extendPackage({
    scripts: {
      "start": "vue-cli-service serve",
      "build-dev": "vue-cli-service build --mode development",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint",
      "style-lint": "stylelint src/**/*.less src/**/*.css src/**/*.vue",
      "test:unit": "vue-cli-service test:unit"
    },
    dependencies: {
      "@scf/ui": "^1.0.1",
      "axios": "^0.18.0",
      "dayjs": "^1.8.14",
      "iview": "^3.4.2",
      "js-cookie": "^2.2.0",
      "js-file-download": "^0.4.4",
      "url-parse": "^1.4.4",
      "vue": "^2.5.17",
      "vue-i18n": "^8.0.0",
      "vue-router": "^3.0.1",
      "vuex": "^3.0.1"
    },
    devDependencies: {
      "@babel/plugin-proposal-optional-chaining": "^7.2.0",
      "@vue/cli-plugin-babel": "^3.3.0",
      "@vue/cli-plugin-eslint": "^3.3.0",
      "@vue/cli-plugin-unit-jest": "^3.3.0",
      "@vue/eslint-config-standard": "^4.0.0",
      "@vue/test-utils": "^1.0.0-beta.20",
      "babel-core": "7.0.0-bridge.0",
      "babel-eslint": "^10.0.1",
      "babel-jest": "^23.6.0",
      "eslint": "^5.8.0",
      "eslint-config-prettier": "^4.3.0",
      "eslint-plugin-prettier": "^3.1.0",
      "eslint-plugin-vue": "^5.0.0",
      "less": "^2.7.3",
      "less-loader": "^4.1.0",
      "mockjs": "^1.0.1-beta3",
      "prettier-eslint-cli": "^4.7.1",
      "stylelint": "^10.1.0",
      "stylelint-config-recess-order": "^2.0.2",
      "stylelint-config-standard": "^18.3.0",
      "stylelint-order": "^3.0.0",
      "vue-template-compiler": "^2.5.21"
    },
  });
  // 是否切换主题
  if (options.theme) {
    api.extendPackage({
      devDependencies: {
        "style-loader": "^0.23.1",
      }
    });
  }
  // 是否引用echarts
  if (options.chart) {
    api.extendPackage({
      dependencies: {
        "echarts": "^4.1.0",
        "v-charts": "^1.17.10",
      }
    });
  }
  // 是否支持国际化
  // if (options.i18n) {
  //   api.extendPackage({
  //     dependencies: {
  //       "vue-i18n": "^8.0.0",
  //     }
  //   });
  // }
  api.render('./template');
}