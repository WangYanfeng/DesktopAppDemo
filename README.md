Electron + React项目实战

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# 简介
#### Electron
1. 标签跳转，函数跳转
2. url传参，隐式传参
3. goBack: this.props.history.goBack();
### React
1. 默认index.js 是入口文件。约定大于配置
2. 组件、受控组件、非受控组件
3. Props、设置状态更新
4. 生命周期
5. 状态提升
6. 组合
### axios
1. Axios 是一个基于 promise 的 HTTP 库
2. <pre><code>axios.get('/user', {
        params: {
            ID: 12345
        }
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });</code></pre>
### Mockjs
1. 生成随机数据，拦截 Ajax 请求
### ant design
1. 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。[Doc](https://ant.design/docs/react/introduce-cn)


# How to Run
1. `npm start`: Call "react-scripts start" to start React
2. `npm run electron-start`: Call "electron ." to start electron


# How to Build
1. `npm run build`: Call "react-scripts build" script to generate static resource.
2. 进入build目录运行 `npm run electron-build`: Call "electron-build" script


# Step to create this project
`npm install -g create-react-app`<br/>
`npm install -g webpack webpack-cli `<br/>
`create-react-app desktop-app`<br/>
`npm init`<br/>
`npm install --save electron`<br/>
修改package.json 的入口main.js后： `npm run electron-start`<br/>
package.json script中添加<code>"electron-start": "electron ."</code><br/>
`npm install mockjs -D`
`npm install antd --save`
`npm install react-router-dom --save`
`npm install --save react-chartjs`
`npm install electron-packager@13.0.1 --save-dev npm install electron-packager@13.0.1 -g`


# Available Scripts
In the project directory, you can run: <br/>
`npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br/>
`npm run electron-start`: Will call "electron ." Start electron [Electron doc](https://electronjs.org/docs)<br/>
`npm test`: Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.<br/>
`npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.<br/>
`npm run eject` **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
`npm run electron-build`


### 难点记录
1. React中添加定时器，实现进度条自动更新
2. Build APP:
    1) 参考[例子](https://segmentfault.com/a/1190000014030465)
    3) build React后，Open ./build/index.html显示ERR_FILE_NOT_FOUND. 在package.json中添加"homepage": "./"
    4) 在调试时应该loadURL(`http://localhost:3000/xxxxxx`)而在production时则应该webpack打包后，用file://方式来引入html文件 [sample](https://www.jianshu.com/p/c10203ef0c9a)
    5) main.js 放在根目录，所以mainWindow.loadURL('file://' + __dirname + '/build/index.html');必须带上build目录
    6) 必须在build 目录下执行npm run electron-build

### 效果图
![image](https://github.com/WangYanfeng/DesktopAppDemo/blob/master/demo_images/Login.png)
![image](https://github.com/WangYanfeng/DesktopAppDemo/blob/master/demo_images/HomePage.png)
