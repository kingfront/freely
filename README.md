<p align="center">
    <img alt="logo" src="https://freely.vercel.app/favicon.ico" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h1 align="center">手机端简易示例《随机热门音乐》</h1>

<p align="center">Vue 3 + Typescript + Vite + Vant + Pinia</p>

<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/kingfront/vite_vue3_ts" />
    <img src="https://img.shields.io/github/languages/top/kingfront/vite_vue3_ts?style=flat-square&color=green"  alt="GitHub top language" />
    <img src="https://img.shields.io/badge/dynamic/json?color=green&label=github&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dkingfront&style=flat-square&logo=github" />
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/kingfront/vite_vue3_ts?color=yellow">
</p>

<p align="center">
🔥 <a target="_blank" href="https://freely.vercel.app/">Demo 访问</a>
&nbsp;
🌈 <a target="_blank" href="https://juejin.cn/post/7070402652948922381">文档</a>
</p>

---

## 依赖

- 🚀 vue3.2 + vite + typescript + pinia + axios + vant
- 💪 使用 vue3.2 `<script setup>` 语法糖
- 💪 使用 TypeScript
- 🍭 支持 jsx 组件写法
- 🍭 整合 vant ui、less
- 🍭 使用 viewport 移动端方案
- 🍭 使用 pinia 替代 vuex，更简单、更高效
- 🍭 使用 `网易云音乐` 热门歌曲接口为数据源

## 启动、部署

Using `yarn` to :

```bash
  # 安装依赖
  yarn

  # 本地启动
  yarn dev

  # 本地打包
  yarn build

```

## 增加 jest 单元测试

### jest 安装

1.  基本依赖

```shell
yarn add jest babel-jest @vue/vue3-jest @vue/test-utils -D
```

2.  兼容 typescript 需要安装如下

```shell
yarn add @types/jest ts-jest -D
```

3. 兼容全局 @ 别名导入

```js
// jest.conf.js增加如下
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1'
}
```
