// pages/teacher/history/history.js
import {getCourses,getAbsence} from '../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList:[],
    curTab: 0,
    tabList: getApp().globalData.tabList,
  },
  onChange(e){
    const util = require('../../../utils/util.js');
    util.onChange(e)
  },

  onClick(e){
    console.log(e)
    let courses = getApp().globalData.courseList
    let curCourse = {}
    for(let course of courses){
      if(course.courseId === e.currentTarget.id){
        curCourse = course
        curCourse = JSON.stringify(curCourse)
        break
      }
    }
    wx.navigateTo({
      url: '/pages/teacher/courseHistory/courseHistory?course='+curCourse,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getCourses(getApp().globalData.user.id).then(res=>{
      this.setData({
        courseList: res.data,
        curTab: getApp().globalData.curTab,
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