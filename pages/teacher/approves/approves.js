// pages/teacher/approves/approves.js
import {getApproves} from '../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    approves: {},
    scheduleId: null
  },
  getApprove(e){
    console.log(e.currentTarget)
    let data = JSON.stringify({scheduleId:this.data.shceduleId,approveId:e.currentTarget.approveId})
    wx.redirectTo({
      url: '/pages/teacher/approve/approve?approve='+data,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let scheduleId = options.scheduleId
    this.setData({
      scheduleId: scheduleId
    })
    //通过 courseId 获取该课程对应的请假审批列表
    getApproves(scheduleId).then(res=>{
      console.log(res)
      this.setData({
        approves: res.data.approves
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