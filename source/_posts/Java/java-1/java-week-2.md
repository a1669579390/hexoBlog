---
title: Java 基本语法
cover: https://cdn.jsdelivr.net/gh/a1669579390/ImagesHosting/imgs/large/20200922152716.jpg
date: 2020/9/27 10:00:00
categories:
  - [Java, 后端语言]
tags:
  - Java
  - Java初级知识
---

## Java 程序简介

一个 Java 程序可以认为是一系列对象的集合，这些对象可以调用彼此的方法来协同工作。下面简单介绍下类，对象，方法和变量的概念。

- 对象：对象是类的一个实例，有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
- 类：类是一个模板，它描述一类对象的行为和状态。
- 方法：方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。
- 实例变量：每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。

## Java 基本语法

编写 Java 程序时，应注意以下几点：

- 大小写敏感：Java 是大小写敏感的，这就意味着标识符 `Hello` 与 `hello` 是不同的。
- 类名：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 `MyFirstJavaClass` 。
- 方法名：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。例如 `calcData`。 -源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记 Java 是大小写敏感的），文件名的后缀为 .java。（如果文件名和类名不相同则会导致编译错误）。
- 主方法入口：所有的 Java 程序由 `public static void main(String[] args)` 方法开始执行。

## Java 标识符

Java 所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。

关于 Java 标识符，有以下几点需要注意：

- 所有的标识符都应该以字母（A-Z 或者 a-z）,美元符（\$）、或者下划线（\_）开始。
- 首字符之后可以是字母（A-Z 或者 a-z）,美元符（\$）、下划线（\_）或数字的任何字符组合。
- 关键字不能用作标识符。
- 标识符是大小写敏感的。
- 合法标识符举例：age、\$salary、\_value、\_\_1_value。
- 非法标识符举例：123abc、-salary

## Java 关键字

下面列出了 Java 关键字。这些保留字不能用于常量、变量、和任何标识符的名称。

<table >
  <tr >
	  <th>类别</th>
	  <th>关键字</th>
	  <th>说明</th>  
	</tr>
	<tr>
	    <td rowspan="4">访问控制</td>
	    <td>private</td>
	    <td>私有的</td>
	</tr>
	<tr>
	    <td>protected</td>
	    <td>受保护的</td>
	</tr>
	<tr>
	    <td>public</td>
	    <td>公共的</td>
	</tr>
	<tr>
	    <td>default</td>
	    <td>默认</td>
	</tr>
	<tr>
  <td rowspan="14">类、方法和变量修饰符</td>
	    <td>abstract</td>
	    <td>声明抽象</td>
	</tr>
	<tr>
	    <td>class</td>
	    <td>类</td>
	</tr>
	<tr>
	    <td>extends</td>
	    <td>扩充,继承</td>
	</tr>
	<tr>
	    <td>final</td>
	    <td>最终值,不可改变的</td>
	</tr>
	<tr>
	    <td >implements</td>
	    <td>实现（接口）</td>
	</tr>
	<tr>
	    <td >name</td>
	    <td>用户自定义</td>
	</tr>
	<tr>
	    <td >interface</td>
	    <td >接口</td>
	</tr>
	<tr>
	    <td >native</td>
	    <td >本地，原生方法（非 Java 实现）</td>
	</tr>
	<tr>
	    <td >new</td>
	    <td >	新,创建</td>
	</tr>
	<tr>
	    <td >static</td>
	    <td >静态</td>
	</tr>
  	<tr>
	    <td >strictfp</td>
	    <td >严格,精准</td>
	</tr>
    <tr>
	    <td >synchronized</td>
	    <td >线程,同步</td>
	</tr>
  	<tr>
	    <td >transient</td>
	    <td >短暂</td>
	</tr>
    <tr>
	    <td >volatile</td>
	    <td >易失</td>
	</tr>
      <tr>
	    <td rowspan="12">程序控制语句</td>
	    <td >break</td>
	    <td >跳出循环</td>
	</tr>
      <tr>
	    <td >case</td>
	    <td >定义一个值以供 switch 选择</td>
	</tr>
    <tr>
	    <td >continue</td>
	    <td >继续</td>
	</tr>
    <tr>
	    <td >default</td>
	    <td >默认</td>
	</tr>
    <tr>
	    <td >do</td>
	    <td >运行</td>
	</tr>
    <tr>
	    <td >else</td>
	    <td >否则</td>
	</tr>
    <tr>
	    <td >for</td>
	    <td >循环</td>
	</tr>
    <tr>
	    <td >if</td>
	    <td >如果</td>
	</tr>
    <tr>
	    <td >instanceof</td>
	    <td >实例</td>
	</tr>
      <tr>
	    <td >return</td>
	    <td >返回</td>
	</tr>
  <tr>
  <td>switch</td>
<td>根据值选择执行</td>
</tr>
<tr>
<td>while</td>
<td>循环</td>
</tr>
<tr>
<td rowspan="6" align="center">错误处理</td>
<td>assert</td>
<td>断言表达式是否为真</td>
</tr>
<tr>
<td>catch</td>
<td>捕捉异常</td>
</tr>
<tr>
<td>finally</td>
<td>有没有异常都执行</td>
</tr>
<tr>
<td>throw</td>
<td>抛出一个异常对象</td>
</tr>
<tr>
<td>throws</td>
<td>声明一个异常可能被抛出</td>
</tr>
<tr>
<td>try</td>
<td>捕获异常</td>
</tr>
<tr>
<td rowspan="2" align="center">包相关</td>
<td>import</td>
<td>引入</td>
</tr>
<tr>
<td>package</td>
<td>包</td>
</tr>
<tr>
<td rowspan="8" align="center">基本类型</td>
<td>boolean</td>
<td>布尔型</td>
</tr>
<tr>
<td>byte</td>
<td>字节型</td>
</tr>
<tr>
<td>char</td>
<td>字符型</td>
</tr>
<tr>
<td>double</td>
<td>双精度浮点</td>
</tr>
<tr>
<td>float</td>
<td>单精度浮点</td>
</tr>
<tr>
<td>int</td>
<td>整型</td>
</tr>
<tr>
<td>long</td>
<td>长整型</td>
</tr>
<tr>
<td>short</td>
<td>短整型</td>
</tr>

<tr>
<td rowspan="3" align="center">变量引用</td>
<td>super</td>
<td>父类,超类</td>
</tr>
<tr>
<td>this</td>
<td>本类</td>
</tr>
<tr>
<td>void</td>
<td>无返回值</td>
</tr>
<tr>
<td rowspan="3" align="center">保留关键字</td>
<td>goto</td>
<td>是关键字，但不能使用</td>
</tr>
<tr>
<td>const</td>
<td>是关键字，但不能使用</td>
</tr>
<tr>
<td>null</td>
<td>空</td>
</tr>
</table>

## Java 注释

类似于 C/C++、Java 也支持单行以及多行注释。注释中的字符将被 Java 编译器忽略。

```raw
public class HelloWorld {
   /* 这是第一个Java程序
    *它将打印Hello World
    * 这是一个多行注释的示例
    */
    public static void main(String[] args){
       // 这是单行注释的示例
       /* 这个也是单行注释的示例 */
       System.out.println("Hello World");
    }
}
```
