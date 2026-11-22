# 专栏投稿规范 / Column Contribution Guide

> 专栏页面（`/column/`）目前是空的占位页。本文约定今后专栏文章的目录、格式与投稿流程；页面的文章列表渲染待首篇文章定稿后再接入。
>
> The column page (`/column/`) is an empty placeholder for now. This guide fixes the layout, format and workflow for future articles; the listing UI will be wired up once the first article lands.

## 1. 目录结构 / Layout

每篇文章一个目录，放在 `column/posts/` 下：

```
column/
├── README.md                 # 本规范
├── index.html                # 专栏页面（目前为空）
└── posts/
    └── 2026-11-22-my-first-post/        # YYYY-MM-DD-slug
        ├── index.md                     # 正文（默认语言，见 §2）
        ├── index.en.md                  # 可选：英文版
        ├── cover.jpg                    # 可选：封面图（建议 16:9，≤ 500 KB）
        └── assets/                      # 文章内引用的图片、附件
```

- 目录名 `YYYY-MM-DD-slug`：日期为首次发布日期；`slug` 只用小写英文、数字和连字符，如 `kaggle-rsna-knee-solution`。
- 一经发布，目录名（即文章 URL）不再更改。
- 图片放在本文章的 `assets/` 内并使用相对路径引用，不要外链图床；单张 ≤ 500 KB，优先 `.jpg` / `.webp`，示意图可用 `.svg`。

## 2. 文章格式 / Article format

正文使用 Markdown（GitHub Flavored），文件开头必须有 YAML front matter：

```markdown
---
title: 文章标题
title_en: Article title            # 可选，提供英文版标题时填写
date: 2026-11-22                   # 首次发布日期
updated: 2026-12-01                # 可选，最近更新日期
author: 姓名 / 昵称                 # 多人用列表：[A, B]
category: competition              # 见 §3，必须是预设值之一
tags: [kaggle, cv, solution]       # 可选，小写英文，建议 ≤ 5 个
summary: 一两句话的摘要，用于列表页展示（≤ 120 字）。
cover: cover.jpg                   # 可选，相对于本目录
lang: zh                           # zh 或 en，对应本文件的语言
draft: false                       # true 时不在页面中展示
---

正文从这里开始……
```

写作约定：

- 正文不重复写一级标题（`#`），标题来自 `title`；章节从 `##` 开始，最多到 `####`。
- 代码块标注语言（```` ```python ````）；公式使用 `$...$` / `$$...$$`。
- 引用论文、竞赛、数据集、他人代码时给出原始链接，并注明出处。
- 中英双语：`index.md` 为默认语言版本，英文版命名为 `index.en.md`，两个文件的 `date`、`category` 保持一致。不强制双语。

## 3. 分类 / Categories

`category` 取下列值之一（新增分类请先在 PR 中讨论）：

| 值 | 含义 |
| --- | --- |
| `competition` | 竞赛复盘、解题思路、Write-up |
| `research` | 论文阅读、研究笔记、实验记录 |
| `tutorial` | 教程、技术入门、工具使用 |
| `club` | 社团活动记录、讲座总结 |
| `essay` | 随笔、经验分享 |

## 4. 投稿流程 / Workflow

1. 从 `main` 新建分支：`column/<slug>`。
2. 创建 `column/posts/YYYY-MM-DD-slug/`，按 §2 编写 `index.md`（先设 `draft: true`）。
3. 本地检查：front matter 字段齐全、图片相对路径可打开、链接可访问。
4. 提交 Pull Request，标题形如 `column: <文章标题>`，至少一名社团管理员 review。
5. Review 通过后把 `draft` 改为 `false` 并合并，GitHub Pages 自动部署。

## 5. 内容要求 / Content rules

- 原创，或已获得原作者授权；注明所有引用来源。
- 竞赛类文章请遵守赛事规则：不公开受保密协议约束的数据、未到公开时间的方案或私有榜单信息。
- 不包含个人隐私信息（手机号、身份证号、未经同意的他人照片等）和任何密钥、Token。
- 署名使用作者愿意公开的名字或昵称。

## 6. 后续工作 / TODO

- [ ] 确定列表页渲染方式（构建时生成 `posts.json`，或前端读取目录索引）。
- [ ] 文章详情页模板（Markdown 渲染、中英文切换、与站点 `data-lang` 机制对齐）。
- [ ] 为 `tools/` 增加 front matter 校验脚本，并接入 CI。
