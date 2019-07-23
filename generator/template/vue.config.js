module.exports = {
  devServer: {
    host: 'test.jd.com',
    port: 8088
  },
  chainWebpack: config => {
    <%_ if (options.theme) { _%>
    // less-loader 排除主题less文件
    config.module.rule('less').exclude.add(/\.theme\.less$/)
    // 添加 style-loader/useable
    config.merge({
      module: {
        rule: [
          {
            test: /\.theme\.less$/,
            use: [
              {
                loader: 'style-loader/useable',
                options: {
                  sourceMap: process.env.NODE_ENV !== 'production',
                  hmr: process.env.NODE_ENV !== 'production'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: process.env.NODE_ENV !== 'production',
                  localIdentName: '[name]__[local]-[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: process.env.NODE_ENV !== 'production'
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: process.env.NODE_ENV !== 'production',
                  javascriptEnabled: true
                }
              }
            ]
          }
        ]
      }
    })
    <%_ } _%>
  }
}
