addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    // 获取用户请求的路径
    let path = new URL(request.url).pathname
    // 定义不同路径对应的图片引用链接的前缀
    let prefix = {
      '/Webconver-landscape': 'https://github.hqycloud.top/https://raw.githubusercontent.com/hqycloud/image-api/main/Webconver-landscape/',
      '/Webconver-landscape-mobile': 'https://github.hqycloud.top/https://raw.githubusercontent.com/hqycloud/image-api/main/Webconver-landscape-mobile/'
    }
    // 定义不同路径对应的图片数量
    let count = {
      '/Webconver-landscape': 81,
      '/Webconver-landscape-mobile': 63
    }
    // 如果路径不在定义的范围内，返回404错误
    if (!prefix[path] || !count[path]) {
      return new Response('Not Found', {status: 404})
    }
    // 生成一个1到对应路径图片数量之间的随机整数
    let num = Math.floor(Math.random() * count[path]) + 1
    // 拼接图片引用链接
    let url = prefix[path] + num + '.webp'
    // 返回302跳转到图片链接
    return Response.redirect(url, 302)
  }