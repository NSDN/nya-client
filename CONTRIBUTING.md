# Contributing

## 开发方针

- 待办事项列在 [todolist.md](./docs/todolist.md) 里

## 分支策略

基于[**Trunk-Based**](https://www.atlassian.com/ja/continuous-delivery/continuous-integration/trunk-based-development)。

- 创建基于 `main` 分支的短生命周期的开发分支进行开发。
- 开发完成后通过 **Pull Request** 的方式将开发分支合并入 `main` 分支。

## 开发规范、式样、资料

- **版本管理（必看！）**：[SemVer](https://semver.org/)。
- **Commit 规范（必看！）**：[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)。
- **Changelog 规范（必看！）**：[Keep a Changelog](https://keepachangelog.com/zh-CN/) 。
- **代码规范**：
  - HTML/CSS: [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)。
  - TypeScript (JavaScript): [JavaScript Standard Style](https://standardjs.com/rules-en)。
  - Vue: [Style Guid](https://cn.vuejs.org/style-guide/)。

## 执行流程

在画面层调用 `composable`：

```txt
LoginPage.vue -> useLogin()
```

在 `composable` 层书写业务逻辑，在 `store` 层管理状态：

```txt
uselogin():
    -> 调用 login API
    -> employeeStore.setToken()
    -> employeeStore.setEmployeeInfo()
```
