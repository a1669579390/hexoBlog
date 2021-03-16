---
title: 云服务器安装deno
date: 2021/3/16 09:00:00
categories:
  - [deno, 阿里云服务器]
tags:
  - deno
  - 阿里云服务器
---

### Deno 官网安装方式

`curl -fsSL https://deno.land/x/install/install.sh | sh`

### 下载成功后，就会得到如下提示，然后需要我们去编写 /root/.bash_profile

`vim /root/.bash_profile`

1. 根据提示配置 deno 环境变量
2. 保存退出编辑后，需要对该文件更新一下，通过以下命令
   `source /root/.bash_profile`

`#由于Linux系统的glibc版本太低， deno: /lib64/libc.so.6: version GLIBC_2.18' not found (required by deno) 而软件编译时使用了较高版本的 glibc 引起的 `
