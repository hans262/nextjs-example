# Next-Example

## 一些问题
```sh
  # build 错误
  # 在服务端组件中使用fetch，获取不到api内容，就会编译错误

  # 支持less功能
  # 默认只支持sass功能，需要安装sass模块

  # https证书
  # 开发阶段不支持，可使用nginx反向代理
  nginx 启动服务
  nginx -s stop 停止服务
  ## 80端口被占用，直接停止服务，再启动服务
  ## 配置文件目录 /usr/local/etc/nginx/nginx.conf
  
```

## 模式
```sh
  # 乐观跟新
  # 先给用户上次的缓存数据，
  # 后台请求新数据，对比老的数据，有差别就更新ui，无差别就不跟新ui
  # 实现beih项目，的无感刷新用户信息
```