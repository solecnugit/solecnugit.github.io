---
title: Software System Optimization
permalink: /sso.html
---

# 软件系统优化

{% capture content %}
{% include figure.html image="images/courses/SSOPreface.jpg" width="300px" %}
{% endcapture %}
{% include float.html content=content %}

本书详细介绍了软件系统优化的原理、技术和常用方法，强调系统优化应具备从单点到全局的“系统观”，提出了“数据驱动的系统优化”方法，围绕“软件+硬件+数据”三个方面展开讲解。本书共 18 章，分为五个部分。第一部分包括第 1 章和第 2 章，从一个性能优化案例引入，概述了软件系统优化的方法论。第二部分包括第 3~6 章，介绍了性能工程的基础知识。第三部分包括第 7~10 章，介绍计算机体系结构优化的相关知识。第四部分包括第 11~16 章，介绍编译优化的相关知识。第五部分包括第 17 章和第 18 章，针对新兴场景下的系统优化技术展开专题讨论。

本书内容全面，体系完整，适合作为高校计算机及相关专业高年级本科生、研究生的教材，也可作为从事系统优化工作的技术人员的参考书。

{% include float.html clear=true %}

{% include section.html %}

## 购买链接

本书由机械工业出版社出版，欢迎通过[淘宝](https://e.tb.cn/h.h255TnIvV6Cq6qx?tk=7RdRVu8tU3k)，[京东](https://3.cn/2-jlXdMd)等网上平台选购。

## 教材配套资料

#### 教材示例代码

见 [软件系统优化配套代码仓库@Github](https://github.com/solecnugit/sso_code)

#### 教学计划与课程资料

包含 PDF 版本的理论教学课件、上机作业与实践项目。

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:#e0e0e0;border-style:solid;border-width:1px;font-size:14px;
  overflow:hidden;padding:5px 5px;word-break:normal;}
.tg th{border-color:#e0e0e0;border-style:solid;border-width:1px;font-size:14px;
  font-weight:normal;overflow:hidden;padding:5px 5px;word-break:normal;}
.tg .tg-pb0m{border-color:#e0e0e0;text-align:center;vertical-align:center}
.tg .tg-za14{border-color:#e0e0e0;text-align:center;vertical-align:center}
.tg .tg-7zrl{text-align:center;vertical-align:center}
</style>
<table class="tg"><thead>
  <tr>
    <th class="tg-pb0m" rowspan="2">周</th>
    <th class="tg-pb0m" colspan="2">理论课</th>
    <th class="tg-pb0m" colspan="2">实践课</th>
  </tr>
  <tr>
    <th class="tg-pb0m">模块</th>
    <th class="tg-pb0m">主题</th>
    <th class="tg-pb0m">上机作业（2 周 / 个）</th>
    <th class="tg-pb0m">实践项目（4 周 / 个）</th>
  </tr></thead>
<tbody>
  <tr>
    <td class="tg-za14">1</td>
    <td class="tg-za14" rowspan="2">绪论 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch1.Ch2.Intro.pdf">[PDF]</a></td>
    <td class="tg-za14">矩阵乘法优化案例</td>
    <td class="tg-za14"></td>
    <td class="tg-za14"></td>
  </tr>
  <tr>
    <td class="tg-za14">2</td>
    <td class="tg-za14">方法论概述</td>
    <td class="tg-za14"></td>
    <td class="tg-za14"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">3</td>
    <td class="tg-7zrl" rowspan="4">性能工程基础</td>
    <td class="tg-7zrl">性能测量 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch3.Measurement.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A1 初试环境和工具 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/practice/A1.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">4</td>
    <td class="tg-7zrl">基准评测 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch4.Benchmark.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A2 SPECjvm2008 基准测试 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/practice/A2.pdf">[PDF]</a></td>
    <td class="tg-7zrl">P1 矩阵乘法自动调优器 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/practice/P1.pdf">[PDF]</a></td>
  </tr>
  <tr>
    <td class="tg-7zrl">5</td>
    <td class="tg-7zrl">配置优化 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch5.Configure.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A1 提交</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">6</td>
    <td class="tg-7zrl">性能评价 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch6.Evaluation.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A2 提交<br>A1 反馈和检查</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">7</td>
    <td class="tg-7zrl" rowspan="4">计算机体系结构优化</td>
    <td class="tg-7zrl">处理器优化 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch7.Processor.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A2 反馈和检查</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">8</td>
    <td class="tg-7zrl">存储器优化 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch8.Memory.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">P1 提交</td>
  </tr>
  <tr>
    <td class="tg-7zrl">9</td>
    <td class="tg-7zrl">微体系结构性能分析 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch9.Microarchitecture.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">P2 剖析合并排序 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/practice/P2.pdf">[PDF]</a><br>P1 反馈和检查</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10</td>
    <td class="tg-7zrl">异构计算与编程 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch10.Heterogeneous.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A3 oneAPI 异构编程 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/practice/A3.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">11</td>
    <td class="tg-7zrl" rowspan="6">编译优化</td>
    <td class="tg-7zrl">源程序级别的常见优化方法 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch11.Bentley.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">12</td>
    <td class="tg-7zrl">编译器概述 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch12.Compiler.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A4 GCC 与 Clang/LLVM 优化比较 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/practice/A4.pdf">[PDF]</a><br>A3 提交</td>
    <td class="tg-7zrl">P3 交叉编译与跨平台应用仿真 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/practice/P3.pdf">[PDF]</a></td>
  </tr>
  <tr>
    <td class="tg-7zrl">13</td>
    <td class="tg-7zrl">目标指令集架构及汇编语言 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch13.Assembly.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A3 反馈和检查</td>
    <td class="tg-7zrl">P2 提交</td>
  </tr>
  <tr>
    <td class="tg-7zrl">14</td>
    <td class="tg-7zrl">C 程序的汇编代码生成 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch14.LLVMIR.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A4 提交</td>
    <td class="tg-7zrl">P2 反馈和检查</td>
  </tr>
  <tr>
    <td class="tg-7zrl">15</td>
    <td class="tg-7zrl">编译器的优化能力 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch15.Optimization.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A5 向量化 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/practice/A5.pdf">[PDF]</a><br>A4 反馈和检查</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">16</td>
    <td class="tg-7zrl">程序插桩及优化机会识别 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch16.Instrumentation.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">P3 提交</td>
  </tr>
  <tr>
    <td class="tg-7zrl">17</td>
    <td class="tg-7zrl" rowspan="2">专题讨论</td>
    <td class="tg-7zrl">数据中心的性能优化 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch17.Datacenter.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A5 提交</td>
    <td class="tg-7zrl">P3 反馈和检查</td>
  </tr>
  <tr>
    <td class="tg-7zrl">18</td>
    <td class="tg-7zrl">深度学习框架的优化 <a href="https://raw.githubusercontent.com/solecnugit/solecnugit.github.io/main/assets/theory/Ch18.DLFramework.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A5 反馈和检查</td>
    <td class="tg-7zrl"></td>
  </tr>
</tbody></table>

{% include section.html %}

## 勘误

| 页码  | 位置 | 原文 | 更正 |
| :---- | :---- | :---- | :---- |
| 3 | 代码 1.1，第 13 行 | `C[i][j] += A[i][k] * B[k][i]` | `C[i][j] += A[i][k] * B[k][j]` |
| 3 | 代码 1.1，第 16 行 | `print("% .2f" % (end - start))` | `print("%.2f" % (end - start))` |
| 31 | 代码 3.3，第 1 行 | `#include <sys/time .h>` | `#include <sys/time.h>` |
| 39 | 下方代码块，第 3 行 | `$ $./count_primes_parallel <start> <end>` | 删去第一个 `$` |



> 后续教材的勘误信息将会在此页面发布

{% capture content %}如果您有任何意见、建议或者评论，欢迎通过邮箱 solecnu@gmail.com 进行反馈。{% endcapture %}
{% include alert.html type="info" content=content %}

