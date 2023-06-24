// index.js
import { request } from '../../utils/request.js'
import {getCourseList} from '../../utils/api'
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    curTab: 0,
    tabList: getApp().globalData.tabList,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false,
    courseList:getApp().globalData.courseList
  },
  onChange(e){
    const util = require('../../utils/util.js');
    util.onChange(e)
  },
  onLoad() {
    if (wx.getUserProfile) {
      console.log("index 获取用户信息成功")
      this.setData({
        canIUseGetUserProfile: true,
      })
    }
    // 获取本周课程列表
    getCourseList({"id":getApp().globalData.user.id}).then(res=>{
      getApp().globalData.courseList = res.data.courseList
    })
    this.setData({
      tabList: getApp().globalData.tabList
    })
  },
  onShow(){
    this.setData({
      courseList:getApp().globalData.courseList
    })
  },
  //系统方法
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        getApp().globalData.userInfo = res.userInfo
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //点击指定课程
  clickCourse(e){
    //这里进行动态路由，区分老师和学生
    console.log("click this course: ",e)
    if(getApp().globalData.user.type === 1){
      //判断该课是否已经签到，若已签到则直接跳转到课程页面，否则跳转到签到页面
      
      if(e.currentTarget.dataset.course.isCheck){
        wx.navigateTo({
          url: '/pages/teacher/course/course?index='+e.currentTarget.dataset.course.index,
          success: function(res) {
            // 通过eventChannel向被打开页面传送数据
            console.log("courseId",e.target)
            res.eventChannel.emit('courseId', { data: e.target.dataset.course })
          }
        })
      }else{
        wx.navigateTo({
          url: '/pages/teacher/check/check',
          success: function(res) {
            // 通过eventChannel向被打开页面传送数据
            console.log("courseId",e.target)
            res.eventChannel.emit('courseId', { data: e.target.dataset.course })
          }
        })
      }
    }
    //跳转到学生页面
    else{
      wx.navigateTo({
        url: '/pages/student/course/course?index='+e.currentTarget.dataset.course.index,
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          console.log("courseId",e.target)
          res.eventChannel.emit('courseId', { data: e.target.dataset.course })
        }
      })
    }
  }
})
