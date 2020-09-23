---
title: Angular基础知识
date: 2020/15/42 15:43:10
categories:
  - [web前端, Angular]
tags:
  - Angular
mermaid: true
---

# Angular 教程

## Angular 相关的学习网站

{% links %}

- site: Angular 官网
  owner: Angular 官网
  url: https://angular.cn/
  desc: https://angular.cn/
  image: https://cdn.jsdelivr.net/gh/a1669579390/ImagesHosting/imgs/large/20200923155331.svg
  color: "#54a8e9d6"

- site: Ant Design UI 组件库
  owner: Ant Design UI 组件库
  url: https://ng.ant.design/docs/introduce/zh
  desc: https://ng.ant.design/docs/introduce/zh
  image: https://cdn.jsdelivr.net/gh/a1669579390/ImagesHosting/imgs/large/20200923160123.svg
  color: "#54a8e9d6"
  {% endlinks %}

## Angular 简介

一款非常优秀的前端高级 JS 框架 由 Misko Hevery 等人创建 2009 年被 Google 公式收购，用于其多款产品 有一个全职的开发团队继续开发和维护这个库 有了这一类框架就可以轻松构建 SPA 应用程序 通过指令扩展了 HTML，通过表达式绑定数据到 HTML。

## angular 的优点

1. Angular 最大程度的减少了页面上的 DOM 操作；
2. 让 JavaScript 中专注业务逻辑的代码；
3. 通过简单的指令结合页面结构与逻辑数据；
4. 通过自定义指令实现组件化编程；
5. 代码结构更合理；维护成本更低；
6. Angular 解放了传统 JavaScript 中频繁的 DOM 操作。

## MVC 体系结构详解

模型 - 视图 - 控制器或 MVC，MVC 是普遍的叫法，是一种软件设计模式，用于开发 Web 应用程序。

模型- 视图 - 控制器模式是由以下三部分组成：

- 视图（View）：用户界面。
- 控制器（Controller）：业务逻辑。
- 模型（Model）：数据保存。
  MVC 是受欢迎的，因为它隔离了应用逻辑从用户界面层和支持的关注点分离。这里的控制器接收用于该应用程序的所有请求，制备视图所需要的任何数据。视图，使用制备的控制器，产生一个最终像样的响应的数据。 MVC 抽象可以用图形表示如下。

## `MVC`图示

![MVC示例图](https://cdn.jsdelivr.net/gh/a1669579390/ImagesHosting/imgs/large/20200923174958.png)

1. View 传送指令到 Controller
2. Controller 完成业务逻辑后，要求 Model 改变状态
3. Model 将新的数据发送到 View，用户得到反馈
