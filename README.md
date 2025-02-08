# 喵玉殿新版论坛

开发文档： <https://root.nsdn.club/nya-develop-document/>（FIXME: 链接已失效，需要更新）。

## 技术栈

| 技术栈               | 功能            |
| -------------------- | --------------- |
| vite                 | 项目工具        |
| vue3                 | JS 框架         |
| TypeScript           | 编程语言        |
| vue-router           | 路由            |
| pinia                | store           |
| axios                | HTML 请求       |
| Naive UI（暂未使用） | UI 框架         |
| tiptap               | 富文本编缉器    |
| marked               | Markdown 编缉器 |
| crypto-js            | hash 预处理工具 |

## 启动项目

\* 如果安装依赖或启动服务失败，可能是因为 node 版本过低，创建时的 node 版本为 v18

### 安装依赖

```shell
pnpm install
```

### 启动本地开发服务

```shell
pnpm run dev
```

## 目录结构

```shell
src
├─assets
│  ├─css
│  └─img
│      └─icon
├─components
│  └─button
├─config
├─constant
│  └─enums
├─context
├─data
├─features
│  ├─authorization
│  │  ├─components
│  │  ├─hooks
│  │  ├─services
│  │  └─types
│  └─plate
│      ├─components
│      ├─hooks
│      ├─services
│      └─types
├─hooks
├─layouts
├─lib
│  ├─http
│  ├─router
│  └─store
├─utils
└─views
    ├─computer
    └─phone
```

| 目录         | 描述                     | 备注                                                     |
| ------------ | ------------------------ | -------------------------------------------------------- |
| assets       | 放置样式、图片等静态文件 |                                                          |
| components   | 放置共通组件             | 可以按组件的种类创建子目录；添加新内容时需要更新开发文档 |
| config       | 放置设置文件             |                                                          |
| constant     | 放置常量文件，包括枚举   |                                                          |
| context      | 放置上下文文件           |                                                          |
| data         | 放置静态数据             |                                                          |
| **features** | 放置功能模块             | 核心目录；如果有不明白的地方务必询问冰龍                 |
| hooks        | 放置全局勾子             |                                                          |
| layouts      | 放置布局组件             |                                                          |
| lib          | 放置第三方库             |                                                          |
| utils        | 放置工具函数             | 添加新内容时需要更新开发文档                             |
| views        | 放置画面本体组件         | 目前的想法是桌面端移动端分别做一套                       |
