module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      'dev':'vue-cli-service serve',
      'jdos':'vue-cli-service serve --jdos',
      'serve': 'vue-cli-service serve --test',
    },
    dependencies: {
      "axios": "^0.18.0",
      "iview": "^3.3.3",
    },
    devDependencies: {
      "mockjs": "^1.0.1-beta3",
      "@vue/eslint-config-prettier": "^4.0.1",
      "babel-eslint": "^10.0.1",
      "eslint": "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
    },
  });

  api.render('./template');
}