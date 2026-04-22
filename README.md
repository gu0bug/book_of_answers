# 📖 The Book of Answers (答案之书)

English documentation is followed by the Chinese version. | 中文文档在英文文档下方。

🇬🇧 English
Overview
The Book of Answers is a mystical, immersive Single Page Application (SPA) built with React. Designed with a dark fantasy and occult aesthetic, it simulates the experience of consulting an ancient, cosmic artifact for guidance.

By utilizing a strict state-machine architecture, the application delivers a seamless, zero-routing interactive experience from asking a question to receiving a cosmic revelation.

Key Features
State-Machine Driven: Eliminates page routing. Smooth transitions between ASK, TRANSITION, and ANSWER states using React conditional rendering.

Occult & Vintage Aesthetic: Features high-fidelity CSS styling including parchment textures, glowing gold accents (#d4af37), and deep space backgrounds.

Immersive Animations: Custom CSS @keyframes power a rotating magical circle, breathing stardust effects, and slow-fade typography transitions.

Responsive Typography: Integrates Google Fonts (Cinzel for headings, Playfair Display for serif readability) with precise tracking and small-caps design.

Architecture (State Machine)
ASK (Input State): Users input their query onto a virtual parchment scroll. Button is disabled until valid input is detected.

TRANSITION (Loading State): Interactive controls are locked. A 3000ms rotating magic circle animation builds psychological anticipation.

ANSWER (Result State): Displays a randomly selected answer from a predefined data layer, echoing the user's original question for context.

Getting Started
Bash
# Clone the repository
git clone https://github.com/yourusername/book-of-answers.git

# Navigate to the directory
cd book-of-answers

# Install dependencies
npm install

# Start the development server
npm run dev

🇨🇳 中文
项目概述
答案之书 (The Book of Answers) 是一款基于 React 构建的沉浸式单页应用 (SPA)。项目采用暗黑魔法与复古神秘学视觉设计，模拟了向远古宇宙圣物寻求指引的交互体验。

应用底层采用严格的状态机架构，彻底抛弃传统页面路由跳转，实现了从“提出问题”到“获得启示”的零割裂、极致平滑交互。

核心特性
状态机驱动交互：通过 React 状态流转精确控制 ASK（提问）、TRANSITION（过渡）、ANSWER（结果）三个视图，消除页面刷新与跳转开销。

高定视觉系统：纯 CSS 实现的复古羊皮纸质感 (Parchment)、发光金特效 (#d4af37) 与深邃星空背景的完美融合。

沉浸式动效编排：自定义 @keyframes 驱动的金色魔法阵双向旋转、呼吸态光晕及文本缓动淡入 (Fade-up)，建立强烈的仪式感。

西文排版规范：严格的衬线字体组合 (Google Fonts: Cinzel 与 Playfair Display)，配合大写间距 (Tracking) 还原古典文献气质。

核心状态机 (State Machine) 设计
ASK 态 (输入采集)：用户在虚拟卷轴输入困惑。实施输入防错，仅检测到有效字符时激活探索按钮。

TRANSITION 态 (算力挂起)：全局切断物理交互权限。强制执行 3000ms 的魔法阵流转动效，拉长等待时间以构建心理预期。

ANSWER 态 (结果闭环)：以上下文回显的形式展示随机抽取的命运指引，并提供归零重置链路。

本地部署
Bash
# 克隆项目到本地
git clone https://github.com/yourusername/book-of-answers.git

# 进入项目目录
cd book-of-answers

# 安装项目依赖
npm install

# 启动本地开发服务器
npm run dev
