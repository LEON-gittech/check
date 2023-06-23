// pages/student/approvesHistory/approvesHistory.js
import {getMyApproves} from '../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    approves:[],
    curTab: 0,
    tabList: getApp().globalData.tabList,
  },
  onChange(e){
    const util = require('../../../utils/util.js');
    util.onChange(e)
  },
  clickApprove(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/student/approveHistory/approveHistory?approveId='+e.currentTarget.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      curTab: getApp().globalData.curTab,
      tabList: getApp().globalData.tabList
    })
    getMyApproves(getApp().globalData.studentId).then(res=>{
      this.setData({
        approves: res.data
      })
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