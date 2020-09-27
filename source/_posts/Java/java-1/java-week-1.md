---
title: Java 入门知识
date: 2020/9/27 09:00:00
categories:
  - [Java, 后端语言]
tags:
  - Java
  - Java初级知识
---

## 我的第一个 Java 程序

新建一个 HelloWorld.java(文件名需与类名一致), 代码如下：

```raw
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

### cmd 运行以下命令：

1. javac HelloWorld.java
2. java HelloWorld

### 执行命令简述：

上面我们使用了两个命令，javac 后面跟的是以 .java 为后缀名的文件，该命令用于将 java 源文件编译为 class 字节码文件，运行该命令，会首先检查语法是否有错，无错则编译成功，生成一个 .class 后缀名的文件。
运行 java 命令时，后面跟的是 java 文件的类名，需注意这里的不需要写后缀名。
控制台输出 `Hello World` 表示运行成功

:::note default
IDE 工具推荐
:::

{% links %}

- site: IntelliJ IDEA
  owner: IntelliJ IDEA
  url: https://www.jetbrains.com/idea/
  desc: https://www.jetbrains.com/idea/
  image: https://cdn.jsdelivr.net/gh/a1669579390/ImagesHosting/imgs/large/20200927101615.png
  color: "#54a8e9d6"

- site: IntelliJ IDEA 永久激活方法
  owner: IntelliJ IDEA 永久激活方法
  url: https://www.jb51.net/article/195962.htm
  desc: 破解方法按照链接里面的即可
  image: https://cdn.jsdelivr.net/gh/a1669579390/ImagesHosting/imgs/large/20200927101615.png
  color: "#54a8e9d6"
  {% endlinks %}
