# ✧ 答案之书 (Book of Answers) ✧

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC.svg)](https://tailwindcss.com/)

[**English Documentation**](./README.md)

**答案之书 (Book of Answers)** 是一款充满神秘感与仪式感的单页 Web 应用 (SPA)。在这个包裹着暗黑魔法、羊皮纸与暗金纹理视觉美学的应用中，你可以写下心中纠结的疑问，在片刻的“低语”之后，等待冥冥之中的那个答案。

## ✨ 核心功能

- **沉浸式交互体验:** 全局由严谨的状态机驱动（无页面刷新跳转），巧妙串联“提问态 (ASK)”、“过渡态 (TRANSITION，带魔法阵旋转动效)”与“答案展示态 (ANSWER)”。
- **原生双语支持 (i18n):** 支持中/英文无缝切换。从 UI 提示、排版对齐逻辑到多达百余条的占卜答案库，全部完成深度多语言抽离与适配。
- **响应式弹性布局:** 移动端优先的自适应架构。无论是在较小的手机屏幕，还是在桌面端设备，长文本答案与全居中布局均能自动处理以防止溢出，并提供流畅舒适的阅读体验。
- **独特的视觉美学:** 依靠纯 CSS 与原生 SVG 滤镜 (`feTurbulence`) 渲染出的泛黄羊皮纸质感，结合深空背景与暗金色的排版色彩学，营造出强烈的古典神秘学氛围。
- **现代化的自动化部署:** 已内置适配运行在 Node.js 24 最新环境的 GitHub Actions 工作流。代码一旦推送至 GitHub 即可在无察觉中自动编译并挂载到 GitHub Pages。

## 🛠 技术栈

- **前端框架:** React 19 + TypeScript + Vite
- **样式方案:** Tailwind CSS v4 + 纯 CSS 帧动画驱动
- **图标组件:** Lucide React
- **英文字体:** Google Fonts 引入的复古衬线字体 (`Cinzel` & `Playfair Display`)

## 🚀 本地开发指引

### 环境准备

确保你的本地环境中已安装 Node.js（推荐 v18 或以上）和 `npm`。

### 安装与运行

1. 克隆本项目仓库：
   ```bash
   git clone https://github.com/gu0bug0/book-of-answers.git
   cd book-of-answers
   ```

2. 安装相关依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

4. 打开浏览器并访问 `http://localhost:3000` 即可预览效果。

## 📦 部署指引 (GitHub Pages)

本项目根目录下已包含定制的自动化部署流配置文件 (`.github/workflows/deploy.yml`)。要将其免费发布至全网：

1. 将代码主干推送到你在 GitHub 上的 `main` 或 `master` 分支。
2. 访问 GitHub 项目仓库页卡，进入 `Settings > Pages`，在 `Build and deployment` 下方的来源下拉列表里选择 **"GitHub Actions"**。
3. 下一次变更推送时，远端服务器会全自动执行编译并提供一个公开的访问链接。

## 📜 版权声明与联系方式

- **作者:** Guo Qiang (郭强)
- **联系邮箱:** gu0bug@gmail.com
- **版权声明:** © 2026 ALL RIGHTS RESERVED. 未经授权，保留所有受法律保护的相关权利。
