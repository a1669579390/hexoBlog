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

### 接下来我们还需要下载 libstdc++.so.6.0.26

[下载链接]: (http://www.vuln.cn/wp-content/uploads/2019/08/libstdc.so_.6.0.26.zip)

1. 将下载解压好的文件复制到/usr/lib64（注意是最里面的文件不是整个文件夹）
2. 切换工作目录至/usr/lib64：
   `cd /usr/lib64`
3. 删除原来软连接：
   `rm -rf libstdc++.so.6`
4. 将默认库的软连接指向最新动态库：
   `例：ln -s libstdc++.so.6.0.26 libstdc++.so.6`
5. 默认动态库升级完成。重新运行以下命令检查动态库：
   `strings /usr/lib64/libstdc++.so.6 | grep GLIBC`

### END
