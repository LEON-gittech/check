// pages/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: getApp().globalData.tabList,
    curTab: 1,
    canIUseGetUserProfile: false,
    userInfo: {},
    user: {},
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo: false,
    isStudent: false,
  },
  getCourses(e){
    wx.navigateTo({
      url: '/pages/student/myCourse/myCourse',
    })
  },
  exit(e){
    //删除缓存中的 token
    wx.removeStorage({
      key: 'token',
    })
    //修改全局状态
    getApp().globalData.isLogin = false
    console.log(getApp().globalData.isLogin)
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  onChange(e){
    const util = require('../../../../utils/util.js');
    util.onChange(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("onLoad"+getApp().globalData.userInfo.avatarUrl)
    this.setData({
      userInfo: getApp().globalData.userInfo,
      user: getApp().globalData.user,
      tabList: getApp().globalData.tabList,
      isStudent: getApp().globalData.user.type===0? true: false
    })
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