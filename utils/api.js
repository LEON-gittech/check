import request from "../utils/request";
import config from "../utils/config";
//登录 data={account,password}
export const login =  async (data) => {
    console.log(data)
    return await request('/login', data, 'POST')
}
// 获取首页 courseList data=id
export const getCourseList =  async (id) => {
  console.log(id)
  return await request('/getCourseList', id, 'POST')
}
//学生端
//发送审批请求 data={reason,scheduleId,studentId}
export const sendApprove = async(data)=>{
    return await request('/sendApprove',data,'POST')
}
//发送签到请求 data={studentId,scheduleId,latitude,longitude}
export const sendCheck = async(data)=>{
    return await request('/sendCheck',data,'POST')
}
// 获取我的课程 data={studentId}
export const getMyCourses = async(studentId)=>{
  return await request('/getMyCourses',studentId,'POST')
}
// 点击进课程进行请假
export const getMyCourse = async(courseId)=>{
  return await request('/getMyCourse',courseId,'POST')
}
// 获取我的审批列表 data={studentId}
export const getMyApproves = async(studentId)=>{
  return await request('/getMyApproves',studentId,'POST')
}
// 获取我的审批详情 data={approveId}
export const getMyApprove = async(approveId)=>{
  return await request('/getMyApprove',approveId,'POST')
}

//教师端
//发起一键通知请求 data=scheduleId
export const notify = async (scheduleId) => {
    return await request('/notify', scheduleId, 'POST')
}
//通知后端开始签到 data={scheduleId,startTime/s,duration/s} 
export const startCheck = async (scheduleId) =>{
  return await request('/startCheck',scheduleId,'POST')
}
//获取指定课程签到情况 data=scheduleId
export const getCheck = async (scheduleId)=>{
  return await request('/getCheck',scheduleId,'POST')
}
//获取请假审批列表 data=courseId
export const getApproves = async(courseId)=>{
  return await request('/getApproves',courseId,'POST')
}
// 获取指定请假审批列表详情 data:{courseId,approveId}
export const getApprove = async(data)=>{
  return await request('/getApprove',data,'POST')
}
//同意审批 data:{approveId}
export const agree = async(approveId)=>{
  return await request('/agree',data,'POST')
}
//拒绝审批 data:{approveId}
export const reject = async(approveId)=>{
  return await request('/reject',data,'POST')
}
//获取该老师本学期的所有课程 data=teacherId
export const getCourses = async(teacherId)=>{
  return await request('/getCourses',teacherId,'POST')
}
//获取指定课程的缺勤记录 data=courseId
export const getAbsence = async(courseId)=>{
  return await request('/getAbsence',courseId,'POST')
}

