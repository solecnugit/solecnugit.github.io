---
title: 动态
nav:
  order: 4
  tooltip: 实验室近期新闻动态
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %}动态

{% include section.html %}

{% include search-box.html %}

{% include tags.html tags=site.tags %}

{% include search-info.html %}

{% include list.html data="posts" component="post-excerpt" %}
