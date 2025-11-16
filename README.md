
# SOLE WebSite

Visit **[www.solelab.tech](http://www.solelab.tech)** 🚀

_Built with [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs)_

## 更新信息的方法

代码仓库的修改权限仅管理员拥有，其他同学若需要修改主页内容，基本流程如下：

1. 代码仓库右上角，点击 `Fork` 按钮，复制一份仓库到自己的 Github 账号下
2. 在自己账号下的仓库进行修改
    - 提示：不必将仓库克隆到本地，可以直接在 Github 的网页上直接编辑并提交更改
3. 修改完成后，提交 Pull Request，将更改合并到本仓库内
    - 提交 PR 后，会自动运行构建脚本，可以预览修改结果
4. 管理员负责审核，PR 审核通过后，修改结果将同步到实验室主页上

> [!NOTE]
> 我们有做缓存，PR 合并后大概需要等待 2 小时，访问 solelab.tech 才能看到更改

### 成员信息

在 `_members` 目录下，为实验室每个人创建了一份 markdown 文件，请在此处修改。

文件开头用两行 `---` 包裹的是 YMAL 格式的配置文件

```
---
name: Tong-yu Liu
image: images/members/tongyu-liu.jpg
role: masterstu
grade: 2021
description: 
links:
  email: tyliu@stu.ecnu.edu.cn
  orcid: 0000-0002-7795-4553
  github: GraysonLiu23
---
```

若需要更新头像，在 `images/members/` 目录下添加一张图片，文件名与 `name` 保持一致，并相应地修改路径。

> [!TIP]
> 考虑到加载速度，推荐头像分辨率控制在 512 * 512 以内，大小在 40 KiB 以内。此外，由于每个人的头像是圆形的，最好使用宽高比为 1:1 的图片。

`role` 属性：老师 `teacher`，博士研究生 `phdstu`，硕士研究生 `masterstu`，本科生 `undergraduatestu`，校友 `alumni`

`grade` 属性：入学年份（此项不会显示在网页上，仅作为排序关键字）

`description` 属性：显示在头像下方的描述文字，老师为其职称，学生则留空白

> [!NOTE]
> 已经毕业的校友，description 为现在所在的单位

`links` 属性：支持多种链接，包括 email，orcid，github 等，具体参见：https://greene-lab.gitbook.io/lab-website-template-docs/basics/team-members#add-remove-members ，建议添加 email，orcid，github 这三项，其格式参照上方示例。

之后的部分，可以用 Markdown 自行编辑，可以添加个人简历、项目经历、发表论文、参与项目等各类信息。

> [!TIP]
> 考虑到排版问题，建议个人简介作为 Markdown 的第一个部分，与照片/链接左右排版，接着插入一个 `{% include section.html %}` 另起一个部分，这个部分会占用整个页面宽度，可以参考 _members/tongyu-liu.md。

### 发表论文

若需要添加发表的论文，修改 `_data/sources.yaml` 文件的内容

> [!CAUTION]
> 请务必**不要**修改 `_data/citations.yaml` 文件的内容，该文件是由 `_data/sources.yaml` 文件自动生成的。

> [!TIP]
> 这个文件是按照 YAML 格式编写的，写完之后记得检查一下，比如某一属性的值是一个字符串但里面包含 ":"，这个字符串应该整个用双引号括起来。如果不确定 YAML 是否能被正确解析，可以使用在线 YAML 检测器。 

该文件内包含多条记录，请仿照已有的记录往后继续添加。

其中论文插图，请放在 `images/publications/` 目录内，文件名是论文缩写，并在配置文件中引用。

> [!TIP]
> 请控制论文插图的大小，建议 40 KiB 以内

### 项目

若需要添加项目，修改 `_data/projects.yaml` 文件的内容

同上，该文件包含多条记录，请仿照已有的记录往后继续添加，项目插图请放在 `images/projects/` 目录内

相关字段说明：

```
- title: hperf
  subtitle: A cross-platform microarchitectural performance measurement tool
  group: featured
  image: images/projects/hperf.png
  link: https://github.com/solecnugit/hperf.git
  # description: Efficient measuerment to provide reliable data for workload characterization and bottleneck identification. 
```

`subtitle` 属性：项目副标题，会以斜体显示在项目标题下方，请用一句话描述该项目

> 注意：项目副标题请控制单词数量，尽量在 15 个单词以内，保证能够在 4 行内显示，可能需要手动在单词中插入“-”进行断行。

`group` 属性：`featured` 和 `normal` 二选一，分别会列在 featured 与 more 栏目下，如果已经有公开的开源仓库，应当设置为 `featured`

`description` 属性：项目描述，通常不需要，会以正体显示在项目副标题下面

`link` 属性：代码仓库链接

> [!IMPORTANT]
> 公开的开源代码仓库应当是在 Github 的 solecnugit 组织下的代码仓库，在登记前请完成代码仓库所有权的转移

### 实验室新闻

包括论文被录用，实验室团建，外出参会演讲等动态。

若需要添加一条新闻，请在 `_posts/` 目录内新建一个 Markdown 文件，其中文件名需要遵循一定格式：

`YYYY-MM-DD-Title.md`

前面的 `YYYY-MM-DD` 是新闻的发生日期，该日期会显示在新闻列表中，`Title` 则可以自行拟定。

在该文件中，开头需要包含 YMAL 格式的配置信息，用两行 `---` 包裹

```
---
title: Paper Accepted by ACM TACO
author: Admin
tags:
  - paper
---
```

`title` 属性：新闻标题

`author` 属性：文案作者

`tags` 属性：可以包含多个，可选项包括
- `paper`：论文被录用
- `conference`：外出参会，作报告
- `event`：实验室团建、聚餐

目前主要包括这三类，后续可根据实际情况，自定义新的标签

之后就是以 Markdown 编写的新闻稿，可以插入图片，图片请放在 `iamges/news/` 目录下，文件名能关联到新闻。

