---
title: git push 同步到阿里云服务器
date: 2021/3/15 09:00:00
categories:
  - [git, 阿里云服务器]
tags:
  - git
  - 阿里云服务器
---

## 首先确保在自己的服务器上安装 git

1. 在服务器端安装 git 的主要目的有 2 个：其一是用于在服务器上新建仓库，其二是作为 git 协议的 deamon 使用。由于 CentOS 的包管理器自带的 git 版本太低，因此我们不使用包管理器自带的 git。当然如果你愿意使用自带版本的 git，你可以直接执行 `yum install git ` 来安装。在此，我仍然希望使用最新版的 git，因此需要自行编译安装。首先，卸载系统自带的 git，并安装一些依赖：
   ` yum remove git`
   ` yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker`
2. 我们创建一个目录用来放置我们下载的源代码。由于我使用的是 root 账户登录，因此执行
   `cd /root`
   `mkdir code`
   创建好目录之后，我们从官网上下载 git 的源代码[下载链接]:(https://mirrors.edge.kernel.org/pub/software/scm/git/) 以及其依赖的 libiconv 库[下载链接]:(http://www.gnu.org/software/libiconv/)。下载好之后，通过 ftp 工具上传到/root/code 目录中。
3. 首先解压并安装 libiconv 库（此处文件名根据你下载的版本不同有所不同）：

`cd /root/code`
`tar zxvf libiconv-1.16.tar.gz`
` cd libiconv-1.16`
`./configure --prefix=/usr/local/libiconv`
`make`
`make install`

然后，编译安装 git：

`cd /root/code`
`tar zxvf git-2.26.1.tar.gz`
`cd git-2.26.1.tar.gz`
`./configure --prefix=/usr/local/git --with-iconv=/usr/local/libiconv`
`make`
`make install`

3. 安装完成之后，我们将安装后 git 可执行文件的连接到/usr/bin： (如果无法链接，请先删除/usr/bin 目录关于 git 的文件)
   ln -s /usr/local/git/bin/git-receive-pack /usr/bin/git-receive-pack
   ln -s /usr/local/git/bin/git /usr/bin/git
   ln -s /usr/local/git/bin/git-shell /usr/bin/git-shell
   ln -s /usr/local/git/bin/git-upload-archive /usr/bin/git-upload-archive
   ln -s /usr/local/git/bin/git-upload-pack /usr/bin/git-upload-pack

4. 接下来，可以查看 git 的版本是否为我们安装完成的版本：
   ` git version`
   `git version 2.26.1`
