// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 运行时配置
  runtimeConfig: {
    // 写在一级目录的 是 在服务端获取的
    appKey: "loveYou",
    public: {
      // 写在 public 里面的是服务端和客户端都能获取的
      baseUrl: "https://", // 变量回打包到客户端代码里面
    },
  },

  // 定义应用配置  运行时
  appConfig: {
    title: 'erkelost',
    theme: 'dark',
    themeColor: {
      primary: '#fbaabf'
    }
  },
  // 配置 seo
  app: {
    head: {}
  }

});
