# Vue


## 安装与准备工作

>脚本安装前提命令:`Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process`
>可以在PowerShell(需要管理员权限)中运行该命令来临时更改当前 PowerShell 会话的执行策略

安装vue高亮插件:vetur或volar


安装命令:

```
npm install -g @vue/cli
```




## 创建项目

```
vue create my-project
```

## 运行项目

```
cd my-project
npm run serve
```

## 构建项目

```
npm run build
```

## 项目目录结构

```
my-project
├── node_modules
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   ├── main.js
│   └── views
├── .gitignore
├── babel.config.js
├── package.json
├── package-lock.json
├── README.md
└── vue.config.js
```
