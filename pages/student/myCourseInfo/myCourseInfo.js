// pages/student/myCourseInfo/myCourseInfo.js
import {getMyCourse,sendApprove} from '../../../utils/api'
import config from '../../../utils/config.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:{},
    visible: false,
    upLoadStatus: '上传审批材料',
    reason: '',
  },
  // 弹窗
  handlePopup(e) {
    const { item } = e.currentTarget.dataset;

    this.setData(
      {
        cur: item,
      },
      () => {
        this.setData({ visible: true });
      },
    );
  },
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },
  // 上传材料
  chooseUpload() {
    var that = this
    console.log(config.host)
    wx.chooseMessageFile({
      count: 10,
      type: 'file',
      extension: ['.xlsx', '.xls', '.XLSX', '.XLS', 'xlsx', 'xls', 'XLSX', 'XLS','jpg','png'],
      success(res) {
        that.setData({
          upLoadStatus: "上传成功"
        })
        const tempFilePaths = res.tempFiles
        for (var i in tempFilePaths) {
          wx.uploadFile({
            url: config.host+'/excel', //上传的服务器地址
            filePath: tempFilePaths[i].path,
            name: 'file',
            formData: {
              'file': tempFilePaths[i].path
                   },

            header: {
              [wx.getStorageSync('tokenName')]: wx.getStorageSync('token'),
            },
            success: function (resp) {
              console.log(resp)
              var data = JSON.parse(resp.data)
              console.log(data)
              if (data.code == 200) {
                wx.showToast({
                  title: '上传成功',
                  icon: 'none',
                  duration: 1300
                })
              } else {
                wx.showToast({
                  title: data.message,
                  icon: 'none',
                  duration: 2000
                })
              }
            },
            fail: function (err) {
              console.log(err)
            }
          })
        }
      },
      fail(res){
        that.setData({
          upLoadStatus: "上传成功"
        })
      }
    })
  },
  //上传请假审批
  uploadApprove(e){
    sendApprove({reason:this.data.reason,scheduleId:this.data.course.scheduleId,studentId:getApp().globalData.user.id})
  },
  // 
  handleSelect(e) {
    const { value, entireValue } = e.detail;
    // 返回的是时间戳
    console.log(value);
    const date = new Date(value);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    // 弹出请假窗口
    this.setData({
      visible: true,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getMyCourse(options.courseId).then(res=>{
      console.log(res.data)
      this.setData({
        course: res.data
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