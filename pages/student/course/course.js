// pages/course/course.js
import Message from "/tdesign-miniprogram/message/index";
import {sendCheck} from '../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: getApp().globalData.tabList,
    curTab: 0,
    course:{},
  },
  makeApprove(e){
    let course = JSON.stringify(this.data.course)
    wx.navigateTo({
      url: '/pages/student/approve/approve?course='+course,
      success: function(res) {
      }
    })
  },
  clickCheck(e){
    let that = this
    //获取地理位置，并进行判断
    wx.getLocation({
      type:'wgs84',
      success(res){
        const latitude = res.latitude
        const longitude = res.longitude
        sendCheck({
        "studentId":getApp().globalData.user.Id,
        "scheduleId":that.data.course.scheduleId,"latitude":latitude,
        "longitude":longitude}).then(res=>{
          if(res.status===200){
            Message.success({
              context: this,
              offset: [20, 32],
              duration: 1000,
              icon: false,
              content: '签到成功',
            });
          }else{
            Message.success({
              context: this,
              offset: [20, 32],
              duration: 1000,
              icon: false,
              content: '签到失败',
            });
          }
        })
      }
    })
    let course = this.data.course
    course.isCheck = true
    this.setData({
      course: course
    })
    // 同步全局
    let courses = getApp().globalData.courseList
    for(let course of courses){
      if(course.courseId===this.data.course.courseId){
        course.isCheck = true
      }
      getApp().globalData.courseList = courses
      break
    }
  },
  onChange(e){
    console.log("TabChange",e.detail.value)
    getApp().globalData.curTab = e.detail.value
    console.log("AppData",getApp().globalData.curTab)
    if(e.detail.value === 0){
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }else{
      wx.navigateTo({
        url: '/pages/user/user',
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('courseId', (data)=> {
      console.log(data.data)
      this.setData({
        course: data.data,
        tabList: getApp().globalData.tabList
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