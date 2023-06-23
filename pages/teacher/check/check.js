// pages/teacher/check/check.js
import {startCheck} from '../../../utils/api'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    course:{},
    showWithInput: false,
    duration: Number,
    dialogKey: '',
  },
  //获取签到持续时间
  getInputValue(e){
    let input = getApp().getInputValue(e,this)
    console.log(input)
    this.setData({
      duration: input
    })
  },
  closeDialog(e) {
    console.log(e)
    const { dialogKey } = this.data;
    console.log(dialogKey)
    this.setData({ [dialogKey]: false });
    if(e.type!=='cancel'){
      // 构造 data
      let data = {}
      data.scheduleId = this.data.course.scheduleId
      data.duration = this.data.duration*60
      data.startTime = Math.floor(Date.now() / 1000)
      //全局存储签到时间
      getApp().globalData.startTime = data.startTime
      getApp().globalData.duration = data.duration
      //向后端发送签到通知
      data = JSON.stringify(data)
      startCheck(data).then(res=>{
        if(res.status === 200){
          wx.showToast({
            title: '开始签到',
            icon: 'success',
            duration: 2000
          })
        }
        else{
          wx.showToast({
            title: '签到失败',
            icon: 'none',
            duration: 2000
          })
        }
      })
      // JSON序列化并跳转到签到详情
      data = JSON.parse(data)
      data.course = this.data.course
      data = JSON.stringify(data)
      console.log(this.data.course)
      wx.redirectTo({
        url: '/pages/teacher/course/course?data='+data,
      })
    }
  },
  // 查看审核
  getApproves(e){
    wx.redirectTo({
      url: '/pages/teacher/approves/approves?scheduleId='+this.data.course.scheduleId,
    })
  },
  // 开始签到
  startCheck(e){
    console.log(this.data.course.scheduleId)
    //更改全局信息
    let courses = getApp().globalData.courseList
    for(let course of courses){
      if(course.courseId===this.data.course.courseId){
        course.isCheck=true
        getApp().globalData.courseList=courses
        break
      }
    }
    // 打开弹窗
    console.log(e.currentTarget.dataset)
    const { key } = e.currentTarget.dataset;
    this.setData({ [key]: true, dialogKey: key });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('courseId', (data)=> {
      console.log(data)
      console.log("this",this)
      this.setData({
        course: data.data
      })
      console.log("course",this.data.course)
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