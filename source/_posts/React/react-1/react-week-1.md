---
title: React 处理跨域
date: 2021/2/27 09:00:00
categories:
  - [React, 前端配置跨域]
tags:
  - React
  - Vite.config.js
---

## vite.config.ts

用 vite 初始化 react 项目时会生成 vite.config.ts

```raw
import { defineConfig } from "vite"

export default defineConfig({
  // ...
  server: {
    open: "",
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})

```

### defineConfig：

这个是 vite 的命令助手，带有提示的函数
open 属性 配置 启动项目时浏览器自动跳转的路径
proxy 代理服务器，配置跨域的地方
target 匹配到接口带有/api 前缀的时候，替换的地址
changeOrigin 是否跨域
rewrite 重写匹配到/api 时要改变的接口

### axios 配置：

1. 在开发环境 axios 请求的完整路径 例：
   /api/home （没有 http://localhost）
2. 线上请求的接口 例：
   http://www.baidu.com

:::note default
vite 官网实例https://cn.vitejs.dev/config/#server-proxy
:::
