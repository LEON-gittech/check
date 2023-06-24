// pages/login/login.js
const app = getApp()
import {getCourseList, login} from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    password: "",
    isLogin: false,
  },
  getAccount(e){
    let input = app.getInputValue(e,this)
    this.setData({
      account: input
    })
  },
  getPassword(e){
    let input = app.getInputValue(e,this)
    this.setData({
      password: input
    })
  },
  login(){
    if(!this.data.account){
      wx.showToast({
        title: '账号不能为空',
        icon: 'none'
      })
      return;
    }
    //密码不为空
    if(!this.data.password){
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return;
    }
    login({"account":this.data.account,"password":this.data.password}).then(res=>{
        console.log(res)
        if(res.code === 0){
            wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000
            })
            getApp().globalData.user = res.data.user
            wx.setStorage({
              key:"token",
              data:res.data.token,
              success:function(){
                console.log("设置 token 成功")
              }
            })
            //判断是不是老师或学生，如果是老师的话 TabBar 得改
            console.log(res.data.user)
            if(res.data.user.type!==2){
              getApp().globalData.tabList = getApp().globalData.teacherTabList
            }
            getApp().globalData.isLogin = true
            //判断是否是管理员
            if(res.data.user.type === 2){
                wx.redirectTo({
                url: '/pages/admin/home/home',
                })
            }
            else{
                wx.redirectTo({
                    url: '/pages/index/index',
                })
            }
        }
        else{
            wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000
            })
        }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
      console.log("isLogin",getApp().globalData.isLogin)
      if(getApp().globalData.isLogin){
          if(getApp().globalData.user.type === 2){
              wx.redirectTo({
                  url: '/pages/admin/home/home',
              })
          }
          else{
              wx.redirectTo({
                  url: '/pages/index/index',
              })
          }
      }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})