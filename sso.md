---
title: Software System Optimization
permalink: /sso.html
---

# 软件系统优化

<center>作者：郭健美，黄波，刘通宇，林晓东，赵鹏</center>

{% include section.html %}

## 教材配套资料

### 教材示例代码

见 [软件系统优化配套代码仓库@Github](https://github.com/solecnugit/sso_code)

### 教学计划与课程资料

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
    <td class="tg-za14" rowspan="2">绪论 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
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
    <td class="tg-7zrl">性能测量 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A1 初试环境和工具</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">4</td>
    <td class="tg-7zrl">基准评测 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A2 SPECjvm2008 基准测试 </td>
    <td class="tg-7zrl">P1 矩阵乘法自动调优器</td>
  </tr>
  <tr>
    <td class="tg-7zrl">5</td>
    <td class="tg-7zrl">配置优化 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A1 提交</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">6</td>
    <td class="tg-7zrl">性能评价 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A2 提交<br>A1 反馈和检查</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">7</td>
    <td class="tg-7zrl" rowspan="4">计算机体系结构优化</td>
    <td class="tg-7zrl">处理器优化 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A2 反馈和检查</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">8</td>
    <td class="tg-7zrl">存储器优化 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">P1 提交</td>
  </tr>
  <tr>
    <td class="tg-7zrl">9</td>
    <td class="tg-7zrl">微体系结构性能分析 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">P2 剖析合并排序<br>P1 反馈和检查</td>
  </tr>
  <tr>
    <td class="tg-7zrl">10</td>
    <td class="tg-7zrl">异构计算与编程 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A3 oneAPI 异构编程</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">11</td>
    <td class="tg-7zrl" rowspan="6">编译优化</td>
    <td class="tg-7zrl">源程序级别的常见优化方法 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">12</td>
    <td class="tg-7zrl">编译器概述 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A4 GCC 与 Clang/LLVM 优化比较<br>A3 提交</td>
    <td class="tg-7zrl">P3 交叉编译与跨平台应用仿真</td>
  </tr>
  <tr>
    <td class="tg-7zrl">13</td>
    <td class="tg-7zrl">目标指令集架构及汇编语言 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A3 反馈和检查</td>
    <td class="tg-7zrl">P2 提交</td>
  </tr>
  <tr>
    <td class="tg-7zrl">14</td>
    <td class="tg-7zrl">C 程序的汇编代码生成 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A4 提交</td>
    <td class="tg-7zrl">P2 反馈和检查</td>
  </tr>
  <tr>
    <td class="tg-7zrl">15</td>
    <td class="tg-7zrl">编译器的优化能力 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A5 向量化<br>A4 反馈和检查</td>
    <td class="tg-7zrl"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">16</td>
    <td class="tg-7zrl">程序插桩及优化机会识别 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">P3 提交</td>
  </tr>
  <tr>
    <td class="tg-7zrl">17</td>
    <td class="tg-7zrl" rowspan="2">专题讨论</td>
    <td class="tg-7zrl">数据中心的性能优化 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A5 提交</td>
    <td class="tg-7zrl">P3 反馈和检查</td>
  </tr>
  <tr>
    <td class="tg-7zrl">18</td>
    <td class="tg-7zrl">深度学习框架的优化 <a href="https://github.com/dasebigdata/dasebigdata.github.io/raw/master/assets/source/Chapter-1.pdf">[PDF]</a></td>
    <td class="tg-7zrl">A5 反馈和检查</td>
    <td class="tg-7zrl"></td>
  </tr>
</tbody></table>
