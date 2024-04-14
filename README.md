
# SOLE WebSite

Visit **[solecnugit.github.io](https://solecnugit.github.io)** 🚀

_Built with [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs)_

## 更新信息的方法

代码仓库的修改权限仅管理员拥有，其他同学若需要修改主页内容，基本流程如下：

1. 代码仓库右上角，点击 `Fork` 按钮，复制一份仓库到自己的 Github 账号下
2. 在自己账号下的仓库进行修改
    - 提示：不必将仓库克隆到本地，可以直接在 Github 的网页上直接编辑并提交更改
3. 修改完成后，提交 Pull Request，将更改合并到本仓库内
    - 提交 PR 后，会自动运行构建脚本，可以预览修改结果
4. 管理员负责审核，PR 审核通过后，修改结果将同步到实验室主页上

### 成员信息

在 `_members` 目录下，为实验室每个人创建了一份 markdown 文件，请在此处修改。

文件开头用两行 `---` 包裹的是 YMAL 格式的配置文件

```
---
name: Tong-yu Liu
image: images/members/photo.svg
role: masterstu
grade: 2021
description: 
links:
  email: tyliu@stu.ecnu.edu.cn
  ocrid: 0000-0002-7795-4553
---
```

若需要更新头像，在 `images/members/` 目录下添加一张图片，文件名与 `name` 保持一致，并相应地修改路径。

> 注意：考虑到加载速度，推荐头像大小控制在 512 * 512 以内。

`role` 属性：老师 `teacher`，博士研究生 `phdstu`，硕士研究生 `masterstu`，本科生 `undergraduatestu`，校友 `alumni`

`grade` 属性：入学年份

`description` 属性：显示在头像下方的描述文字，老师为其职称，学生则留空白

`links` 属性：支持多种链接，包括 email，ocrid，Google Scholar 等，具体参见：https://greene-lab.gitbook.io/lab-website-template-docs/basics/team-members#add-remove-members 

之后的部分，可以用 Markdown 自行编辑，可以添加个人简历、项目经历、发表论文、参与项目等各类信息。

### 发表论文

若需要添加发表的论文，修改 `_data/sources.yaml` 文件的内容

> 重要！！！请务必**不要**修改 `_data/citations.yaml` 文件的内容，该文件是由 `_data/sources.yaml` 文件自动生成的。

该文件内包含多条记录，请仿照已有的记录往后继续添加。

其中论文插图，请放在 `images/publications/` 目录内，文件名是论文缩写，并在配置文件中引用。

### 项目

若需要添加项目，修改 `_data/projects.yaml` 文件的内容

同上，该文件包含多条记录，请仿照已有的记录往后继续添加，项目插图请放在 `images/projects/` 目录内

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

