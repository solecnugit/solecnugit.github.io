---
title: Team
nav:
  order: 2
  tooltip: About our team members
---

# {% include icon.html icon="fa-solid fa-users" %}Team

SOLE is made up of a highly engaged and collaborative team of researchers interested in system optimization.
The team includes advisors, PhD students, master students and undergraduate students. 
We foster an environment where team members are treated equally, and where we respect and admire our differences.

<!-- 会显示团队成员列表，成员信息登记在 _members 内 -->

{% include section.html %}

### Advisors

{% include portrait-with-link.html lookup="bo-huang" link="https://faculty.ecnu.edu.cn/_s37/hb2/main.psp" style="small" %}
{% include portrait-with-link.html lookup="jianmei-guo" link="https://faculty.ecnu.edu.cn/_s37/gjm/main.psp" style="small" %}
{% include portrait-with-link.html lookup="shu-xu" link="https://faculty.ecnu.edu.cn/_s37/xs2/main.psp" style="small" %}

### PhD Students

{% include list.html data="members" component="portrait" filters="role: phdstu" style="small" %}

### Master Students

{% include list.html data="members" component="portrait" filters="role: masterstu" style="small" %}

### Undergraduate Students

{% include list.html data="members" component="portrait" filters="role: undergraduatestu" style="small" %}

### Alumni

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
