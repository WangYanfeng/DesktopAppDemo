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
### d3.js
d3 画树状图
http://localhost:3000/d3.html


# Step to create this project
`npm install -g create-react-app`<br/>
`npm install -g webpack webpack-cli `<br/>
`create-react-app desktop-app`<br/>
`npm init`<br/>
`npm install --save electron`<br/>
修改package.json 的入口main.js后： `npm run electron-start`<br/>
package.json script中添加<code>"electron-start": "electron ."</code><br/>
`npm install mockjs -D`

# Available Scripts
In the project directory, you can run: <br/>
`npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br/>
`npm run electron-start`: Start electron [Electron doc](https://electronjs.org/docs)<br/>
`npm test`: Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.<br/>
`npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.<br/>
`npm run eject` **Note: this is a one-way operation. Once you `eject`, you can’t go back!**



### 难点记录：
1. React中添加定时器，实现进度条自动更新