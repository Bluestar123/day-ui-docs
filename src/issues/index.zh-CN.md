---
map:
  path: /components/issues
---

# 常见问题

### windows 安装依赖包报错

> 删除 `"@ls-lint/ls-lint": "^1.9.2"` 后执行 `yarn` 或者 `npm i` 下载

### 刚下载完项目 vscode 警告：**Delete `␍`eslint(prettier/prettier)**

- [解决方案](https://juejin.cn/post/6844904069304156168)

### 页面报错 vue 文件声明模块

配置 tsconfig.json： "files": ["src/shims-vue.d.ts"]

```
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini'

```
