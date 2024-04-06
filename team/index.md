---
title: 成员
nav:
  order: 3
  tooltip: 实验室成员信息 
---

# {% include icon.html icon="fa-solid fa-users" %}成员

<!-- 会显示团队成员列表，成员信息登记在 _members 内 -->

{% include section.html %}

### 导师

{% include list.html data="members" component="portrait" filters="role: teacher, name: 黄波" %}
{% include list.html data="members" component="portrait" filters="role: teacher, name: 郭健美" %}

### 博士研究生

{% include list.html data="members" component="portrait" filters="role: phdstu" style="small" %}

### 硕士研究生

{% include list.html data="members" component="portrait" filters="role: masterstu" style="small" %}

### 本科生

{% include list.html data="members" component="portrait" filters="role: undergraduatestu" style="small" %}

### 校友

{% include list.html data="members" component="portrait" filters="role: alumni" style="small" %}

{% include section.html %}

{% comment %}

{% include section.html background="images/background.jpg" dark=true %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}

{% endcomment %}
