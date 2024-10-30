---
title: SOLERs Win Awards in the National Competition
author: Admin
tags:
  - award
---

Good news! SOLERs achieved good results in "Songshan Lake Cup" - the first China Graduate Operating System Open Source Innovation Competition. 

## 喜报！“松山湖杯”第一届中国研究生操作系统开源创新大赛 SOLE 实验室团队获佳绩

{%
  include figure.html
  image="images/news/OsCompetitionAward/HunanHotel.jpg"
  caption="比赛现场：长沙 湖南宾馆"
  width="80%"
%}

10 月 22 日至 24 日，由教育部学位管理与研究生教育司指导、中国学位与研究生教育学会和中国科协青少年科技中心主办、国防科技大学承办的 “松山湖杯”第一届中国研究生操作系统开源创新大赛决赛在长沙落幕。

经激烈角逐，SOLE 实验室两支参赛队伍“zoltraak_队”与“爱吃泡芙队”，分别斩获全国二等奖与全国三等奖，参赛队伍指导教师郭健美教授获“优秀指导教师奖”！

{% capture col1 %}
{%
  include figure.html
  image="images/news/OsCompetitionAward/ZoltraakPresentation.jpg"
  caption="“zoltraak_队”答辩现场（左起：程奂仑，徐静）"
%}
{% endcapture %}
{% capture col2 %}
{%
  include figure.html
  image="images/news/OsCompetitionAward/HperfPresentation.jpg"
  caption="“爱吃泡芙队”答辩现场（左起：刘通宇，廖浩宇，李宁）"
%}
{% endcapture %}
{% include cols.html col1=col1 col2=col2 %}

### 全国二等奖 | 基于ebpf的容器异常检测平台

“zoltraak_队”：程奂仑，徐静，何海林

本项目完成了一个基于eBPF（extened Berkeley Packet Filter）的性能采集框架，并对容器间CPU资源竞争、内存溢出、锁竞争等异常事件进行检测。本项目定义了“context switch out”指标及其采集方法，使用图论方法定位容器间资源竞争。对锁资源的竞争使用阈值方法定位Futex瓶颈进程，对OOM 事件则利用内核信息完成根因诊断。指标采集上，对CPU利用率进行容器级别的拆解，为异常定位提供细致的指标数据。

### 全国三等奖 | 基于龙蜥操作系统的应用性能监测与预测软件

“爱吃泡芙队”：刘通宇，李宁，廖浩宇

软硬件全栈的性能数据监控对数据中心的资源隔离、应用调度与性能预测具有重要意义。本项目实现了一个跨平台的软硬件全栈的性能监测与预测工具 hperf，该工具针对现有工测量的低效行为，通过研究 Linux 内核性能事件的调度机制，提出一种自适应的性能事件分组方法提高性能计数器的复用效率，以实现数据的高效采集。此外，本工具还基于 sar 实现了软件性能数据监控，并基于主流时间序列预测算法实现了性能预测。本工具支持 x86 与 aarch64 主流服务器处理器的性能监控，相较于当前主流工具，在测量效率上约有 50% 的提高，并且测量准确率达到商用工具水平。

{% capture col1 %}
{%
  include figure.html
  image="images/news/OsCompetitionAward/HuanlunAward.jpg"
  caption="“zoltraak_队”获全国二等奖"
%}
{% endcapture %}
{% capture col2 %}
{%
  include figure.html
  image="images/news/OsCompetitionAward/TongyuAward.jpg"
  caption="“爱吃泡芙队”获全国三等奖"
%}
{% endcapture %}
{% include cols.html col1=col1 col2=col2 %}


> 来源：[喜报！“松山湖杯”第一届中国研究生操作系统开源创新大赛数据学院研究生团队获佳绩](https://mp.weixin.qq.com/s?__biz=MzIxODAyMzYzMQ==&mid=2720906320&idx=1&sn=bc29fa95e54f63d49cd3ac87469589ab&chksm=b1e67bb6d3358e3e1dd2014f7d3ab66149321e0d9e52880e5a5d767c2d5f75b1c16a428f8487&mpshare=1&scene=2&srcid=10288p4xAlqCyZyE0cXFuWLV&sharer_shareinfo=ae92d32354021e2fba9d1f08a9e01d6b&sharer_shareinfo_first=4e468218f98f7871810e0d49014205e9#rd)

