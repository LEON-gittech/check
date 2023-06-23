// pages/teacher/approve/approve.js
import {getApprove,agree,reject} from '../../../utils/api'
import Toast from '../../../miniprogram_npm/tdesign-miniprogram/toast/index';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    approve:{},
    scheduleId: null,
    approveId: null,
    isDecide: false,
    // 照片预览
    visible: false,
    showIndex: false,
    closeBtn: false,
    deleteBtn: false,
  },
  //照片浏览
  onClick() {
    this.setData({
      showIndex: true,
      visible: true,
    });
  },
  onChange(e) {
    const { index } = e.detail;
    console.log('change', index);
  },

  onDelete(e) {
    const { index } = e.detail;

    Toast({
      context: this,
      selector: '#t-toast',
      message: `删除第${index + 1}个`,
    });
  },

  onClose(e) {
    const { trigger } = e.detail;
    console.log(trigger);
    this.setData({
      visible: false,
    });
  },

  agree(e){
    this.setData({
      isDecide: true
    })
    agree(this.data.approveId)
  },
  reject(e){
    this.setData({
      isDecide: true
    })
    reject(this.data.approveId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.approve)
    let approve = JSON.parse(options.approve)
    this.setData({
      scheduleId: approve.scheduleId,
      approveId: approve.approveId,
    })
    //查询请假审批详情
    getApprove(options).then(res=>{
      console.log(res)
      this.setData({
        approve: res.data,
        isDecide: res.data.isDecide
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