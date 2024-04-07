---
title: 加入我们
nav:
  order: 5
  tooltip: 招生信息
---

# {% include icon.html icon="fa-regular fa-envelope" %}加入我们

{% include section.html %}

## 热忱欢迎志同道合者的加入！

SOLE 招聘具有强自我驱动力、对软件系统研究感兴趣的本科生、硕士研究生、博士研究生、博士后。

{%
  include button.html
  type="email"
  text="bhuang@dase.ecnu.edu.cn"
  link="bhuang@dase.ecnu.edu.cn"
%}
{%
  include button.html
  type="email"
  text="jmguo@dase.ecnu.edu.cn"
  link="jmguo@dase.ecnu.edu.cn"
%}
{%
  include button.html
  type="address"
  tooltip="华东师范大学中北校区数学馆西 101 室"
  link="https://j.map.baidu.com/a9/RN8h"
%}

{% capture col1 %}

### 实验室文化

- 正直诚信、团结互助 
- 积极实践、敢于创新 
- 不畏挑战、追求卓越

{% endcapture %}

{% capture col2 %}

### 素养需求

- 对底层系统的兴趣
- 好奇心 + 求知欲 
- 编程动手实践能力

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/FirstGroupPhoto.jpg"
  caption="2021年：实验室成立"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% comment %}

  {% include section.html dark=true %}

  {% capture col1 %}
  Lorem ipsum dolor sit amet  
  consectetur adipiscing elit  
  sed do eiusmod tempor
  {% endcapture %}

  {% capture col2 %}
  Lorem ipsum dolor sit amet  
  consectetur adipiscing elit  
  sed do eiusmod tempor
  {% endcapture %}

  {% capture col3 %}
  Lorem ipsum dolor sit amet  
  consectetur adipiscing elit  
  sed do eiusmod tempor
  {% endcapture %}

  {% include cols.html col1=col1 col2=col2 col3=col3 %}

{% endcomment %}