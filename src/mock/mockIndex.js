import Mock from 'mockjs';

import { userLogin } from './user'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
    timeout: '1000-2000'
})

//接口
Mock.mock(/\/login/, 'post', userLogin);
Mock.mock(/\/detect/, 'get', () => {
    return {
        result: "success",
        version: "5.8",
        module: "CE100G2",
        serialNumber: "XXXX-XXXX-XXXX-XXXX",
        token: ""
    }
});

export default Mock