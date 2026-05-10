# SENSE Institute Website

[SENSE Institute](https://www.senseinstitute.org) 是一个由年轻学者和从业者主导的非营利研究机构，通过循证研究、教育项目和开放合作，推动社会影响力的创新。

## 技术栈

- **框架**: [Astro](https://astro.build) v6.1.8
- **语言**: TypeScript
- **部署环境**: Windows

## 项目结构

```
passionulab/
├── public/
│   ├── images/          # 网站图片资源
│   └── survey/         # 调查问卷HTML文件
├── src/
│   ├── components/     # Astro 组件
│   │   ├── Hero.astro
│   │   ├── SectionHeading.astro
│   │   ├── SiteFooter.astro
│   │   └── SiteHeader.astro
│   ├── data/
│   │   └── site.ts     # 网站数据配置
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/          # 页面路由
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── labs.astro
│   │   ├── insights.astro
│   │   ├── programs.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式启动
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 核心内容

### 使命与愿景

SENSE Institute 是注册于美国的 501(c)(3) 非营利组织，使命基于四大支柱：

- **正义 (Justice)** - 推动社会公平与包容
- **可持续性 (Sustainability)** - 应对环境与气候挑战
- **韧性 (Resilience)** - 增强社区适应能力
- **福祉 (Well-being)** - 提升公共健康与生活质量

### 研究实验室

1. **社会与环境数据科学实验室** (Social & Environmental Data Science Lab)
   - 研究方向：城市数据科学、GeoAI、空间建模、气候建模
   - 负责人：Houpu Li (UC Santa Barbara 博士研究生)

2. **智能代理与系统实验室** (Intelligent Agents & Systems Lab)
   - 研究方向：AI代理系统、大语言模型应用、可扩展AI系统设计
   - 负责人：Zefan Wang

### 项目领域

- 城市数据分析和人类流动性研究
- 气候韧性与预警系统
- AI驱动的决策支持系统
- 食品成分智能分析平台
- K-12个性化学习平台

### 调查项目

- **LLM与日常生活调查**: 追踪AI技术对日常生活的影响（10年纵向研究）
- **食品安全调查**: 探索公众对包装食品成分的理解

## 团队构成

团队成员来自全球多所知名机构，包括 UC Santa Barbara、Harvard University、Tsinghua University、Shenzhen University 等。

## 联系方式

- 合作与咨询: info@senseinstitute.org
- 支持我们的工作: yanyao@senseinstitute.org

## 许可证

本项目为私有项目。
