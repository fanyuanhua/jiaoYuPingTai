module.exports = {

  // modules: [
  //   '@nuxtjs/axios'
  //  ],

  // axios: {
  //   proxy: true, // 表示开启代理
  //   // prefix: '/api', // 表示给请求url加个前缀 /api
  //   credentials: true // 表示跨域请求时是否需要使用凭证
  // },

  // devServer: {
  //   // host: 'localhost',port: 9001 ,
  //   // proxy: 'http://localhost:5000',//不能配置多个代理、不能控制是否走代理（优先匹配前端资源）
  //   proxy: {
  //     '/isBuyCourse': {
  //       target: 'http://localhost:8007',
	// 			// pathRewrite:{'^/atguigu':''},
  //       // ws: true, //用于支持websocket
  //       // changeOrigin: true //用于控制请求头中的host值
  //     }
  //   }
  // },

  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // css: [
  //   "element-ui/lib/theme-chalk/index.css"
  // ],

  plugins: [
    { src: "./plugins/nuxt-swiper-plugin", ssr: false },            //ElementUI插件
  ],
  // build: {
  //   transpile: [/^element-ui/],              //防止elementui打包多次
  // },

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  // plugins: [
  //   // ssr: Boolean (默认为 true) 如果值为 false，该文件只会在客户端被打包引入
  //   { src: '@/plugins/element-ui.js', ssr: true }
  // ],
  

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['element-ui']
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}

