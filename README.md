# 喵玉殿论坛客户端

## 开发前需要安装的工具

- [**Node.js**](https://nodejs.org/en/download): JavaScript 开发环境。
- [**pnpm**](https://pnpm.io/installation): Node.js 的包管理工具。

二者的版本请见 [package.json](./package.json)。

## 代码获取方式

```bash
git clone https://github.com/NSDN/nya-client.git
```

## 参与开发请看

参与开发请务必查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 文件。

## 启动客户端开发服务器的方式

1. 安装依赖（仅执行一次即可）：

   ```bash
   pnpm install
   ```

2. 启动开发服务器：

   ```bash
   pnpm run dev
   ```

## 依赖库

版本请查看 [package.json](./package.json) 文件。

| 名称                                               | 功能                    |
| -------------------------------------------------- | ----------------------- |
| [TypeScript](https://www.typescriptlang.org/)      | JavaScript 类型扩张语言 |
| [Vite](https://vite.dev/)                          | JavaScript 编译工具     |
| [Vue](https://vuejs.org/)                          | JavaScript 框架         |
| [Naive UI](https://www.naiveui.com/en-US/os-theme) | Vue 用 UI 部品          |
| [Vue Router](https://router.vuejs.org/)            | Vue 路由工具            |
| [Pinia](https://pinia.vuejs.org/)                  | Vue 状态管理工具        |
| [Axios](https://axios-http.com/)                   | HTTP 客户端库           |

## ディレクトリ構造

**仅为目录结构的参考，并非完全一致。**

```bash
src/
├── features/               # 按功能模块化，高内聚
│   ├── attendance/         # 打卡模块
│   │   ├── apis/           # 打卡模块的 API 封装
│   │   ├── components/     # 打卡专用组件
│   │   ├── composables/    # 打卡专用的组合函数（业务逻辑）
│   │   ├── stores/         # Pinia 模块状态（仅状态，无业务逻辑）
│   │   ├── views/          # 打卡页面视图
│   │   └── index.ts        # 对外统一导出接口
│   │
│   ├── leave/              # 请假申请模块
│   ├── printing/           # 打印模块
│   └── ... 其他功能模块
│
├── shared/                 # 公共模块，低耦合
│   ├── components/         # 通用组件（如：Modal、Button）
│   ├── composables/        # 通用组合函数（hooks）
│   ├── utils/              # 工具函数
│   ├── constants/          # 常量
│   ├── types/              # 通用类型定义
│   └── services/           # 通用服务（如：axios 封装）
│
├── router/                 # Vue Router 配置
│   └── index.ts
│
├── store/                  # 全局状态管理（使用 Pinia）
│   └── index.ts
│
├── App.vue                 # 根组件
└── main.ts                 # 入口文件
```
