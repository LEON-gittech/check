// pages/teacher/course/course.js
import {login, notify,getCheck} from "../../../utils/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:{},
    signStatus:{},
    startTime: 0,
    duration: 0,
    //弹窗
    show: false,
    actions: [],
  },
  //弹窗
  onClose() {
    this.setData({ show: false });
  },
  onSelect(event) {
    console.log(event.detail);
  },
  onPop(e){
    console.log(e)
    //构造 actions
    let actions = []
    if(e.currentTarget.id==='isCheck'){
      for(let student of this.data.signStatus.signList){
        let action = {}
        action.name = student.name
        action.subname= student.id
        actions.push(action)
      }
    }else{
      for(let student of this.data.signStatus.unSignList){
        let action = {}
        action.name = student.name
        action.subname= student.id
        actions.push(action)
      }
    }
    this.setData({ show: true,actions: actions});
  },
  //
  handleChange(e) {
    this.setData({
      activeValues: e.detail.value,
    });
  },
  //查看收到的请假审核，跳转到审核列表
  getApproves(e){
    wx.redirectTo({
      url: '/pages/teacher/approves/approves?scheduleId='+this.data.course.scheduleId,
    })
  },
  //一键通知
  notify(e){
    notify({"courseId":this.data.course.scheduleId}).then(res=>{
      if(res.status === 200){
        wx.showToast({
          title: '通知成功',
          icon: 'success',
          duration: 2000
        })
      }
      else{
        wx.showToast({
          title: '通知失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  //下拉刷新更新签到情况
  onPullDownRefresh(e){
    //获取签到情况
    getCheck(this.data.course.courseId).then(res=>{
      console.log(res)
      this.setData({
        signStatus: res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("options",options)
    //1.获取课程内容
    //从 check 跳转过来的
    if(options.data !== undefined){
      let data = JSON.parse(options.data)
      console.log(data)
      let course = data.course
      let startTime = data.startTime
      let duration = data.duration
      this.setData({
        course: course,
        startTime: startTime,
        duration: duration
      })
    }
    //从 index 跳转过来的
    else{
      const eventChannel = this.getOpenerEventChannel()
      // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
      eventChannel.on('courseId', (data)=> {
        console.log(data.data)
        this.setData({
          course: data.data
        })
      })
    }
    //2.获取签到情况
    getCheck(this.data.course.scheduleId).then(res=>{
      console.log(res)
      this.setData({
        signStatus: res.data
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
    const component = this.selectComponent('#countdown')
    console.log(component)
    //获取签到时间
    this.setData({
      startTime: getApp().globalData.startTime,
      duration: getApp().globalData.duration
    })
    component.startCountdown()
    
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