import config from './config.js'
export default (url,data={},method='GET') =>{
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.host+ url,
            data: data,
            method: method,
            success:(res)=>{
                console.log("请求成功: ",res);
                resolve(res.data); //修改promise为成功状态
            },
            fail:(err)=>{
                console.log("请求失败: ",err);
                reject(err);
            },
            header: { 'content-type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
        })
    })
}