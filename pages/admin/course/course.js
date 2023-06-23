// pages/admin/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notify:{},
    course:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let courseId = options.courseId
    let notifyList = getApp().globalData.notifyList
    for(let notify of notifyList){
      if(notify.courseId === courseId){
        this.setData({
          notify:notify
        })
        break
      }
    }
    console.log(this.data.notify)
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