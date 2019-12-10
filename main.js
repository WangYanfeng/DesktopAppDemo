// app 控制应用生命周期的模块。
// BrowserWindow 创建原生浏览器窗口的模块
const { app, BrowserWindow, Menu } = require('electron');

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let mainWindow = null;

function createWindow() {
    //创建浏览器窗口
    mainWindow = new BrowserWindow({
        width: 1100,
        height: 800,
        // frame: false
        icon: './favicon.ico'
    });

    //窗口不现实菜单栏
    Menu.setApplicationMenu(null);

    // mainWindow.loadFile('index.html');  加载index.html文件
    // 加载应用----适用于 react 项目
    mainWindow.loadURL('http://localhost:3000/');

    // 打开开发者工具，默认不打开
    mainWindow.webContents.openDevTools();

    // 关闭window时触发下列事件.
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow);

// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
    // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
    if (mainWindow === null) {
        createWindow();
    }
});