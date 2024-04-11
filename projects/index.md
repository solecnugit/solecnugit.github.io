---
title: projects
nav:
  order: 3
  tooltip: Open source tools, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %}项目

实验室与众多互联网大厂，芯片与系统公司展开产学研合作项目，并建立联合实验室。
依托这些项目，开展与产业界紧密关联的研究，并取得研究成果，包括开源工具、国家专利等。

{%
  include figure.html
  image="../images/Cooperations.jpg"
  caption="项目合作单位"
  width="70%"
%}

{% comment %}

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  {% include tags.html tags="publication, resource, website" %}

  {% include search-info.html %}

  {% include section.html %}

{% endcomment %}

## Featured

{% include list.html component="card" data="projects" filters="group: featured" %}


{% include section.html %}

## More

{% include list.html component="card" data="projects" filters="group: " style="small" %}
