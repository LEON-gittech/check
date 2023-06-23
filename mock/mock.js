const Mock = require('mockjs')
Mock.mock('/api/login',{
    status: 200,
    data: {
        user: {
            name: "张三",
            id: "10205101573",
            type: 0, //0 学生 1 教师 2 辅导员教务
        },
        token: "xiba"
    },
    msg: "登录成功"
})

Mock.mock('/api/getCourseList',{
  status: 200,
  data: {
      courseList:[
          {
              courseId: "0001",
              scheduleId:"001",
              courseName:"计算机网络",
              week: 1,
              startTime:"1",
              endTime:"2",
              coursePlace:"教学楼A101",
              isCheck: false,
          },
          {
            courseId: "0002",
            scheduleId:"001",
            courseName:"计算机网络",
            week: 1,
            startTime:"1",
            endTime:"2",
            coursePlace:"教学楼A101",
            isCheck: false,
        },
        {
          courseId: "0001",
          scheduleId:"001",
          courseName:"计算机网络",
          week: 1,
          startTime:"1",
          endTime:"2",
          coursePlace:"教学楼A101",
          isCheck: false,
        },
        {
          courseId: "0001",
          scheduleId:"001",
          courseName:"计算机网络",
          week: 1,
          startTime:"1",
          endTime:"2",
          coursePlace:"教学楼A101",
          isCheck: false,
        },
        {
          courseId: "0001",
          scheduleId:"001",
          courseName:"计算机网络",
          week: 1,
          startTime:"1",
          endTime:"2",
          coursePlace:"教学楼A101",
          isCheck: false,
        },
      ],
  },
  msg: "登录成功"
})
//管理员
Mock.mock('/api/notify',{
    status: 200,
    data: {
        //管理员的消息列表
        notifyList:[
            {
                courseId:"0001",
                courseName:"计算机网络",
                courseTeacher:"张三",
                week:1,
                startTime:"1",
                endTime:"2",
                coursePlace:"教学楼A101",
                teacherContact:"123456789",
                unSignList:[{
                    name:"张三",
                    id:"10205101573",
                },{
                    name:"李四",
                    id:"10205101574",
                },{
                    name:"王五",
                    id:"10205101575",
                }],
                comment:"张三、李四、王五未签到,请及时通知",
            }
        ]
    },
    msg: "通知成功"
})

Mock.mock('/api/startCheck',{
  status: 200,
  data:{},
  msg: "成功"
})

Mock.mock('/api/getCheck',{
  status: 200,
  data:{
    signNum: 0,
    totalNum: 0,
    signList: [
      {id:"10205101573",name:"张三"},
      {id:"10205101573",name:"李斯"},
      {id:"10205101573",name:"王武"},
      {id:"10205101573",name:"王武"},
      {id:"10205101573",name:"王武"},
      {id:"10205101573",name:"王武"},
    ],
    unSignList: [
      {id:"10205101573",name:"张三"},
      {id:"10205101573",name:"李斯"},
      {id:"10205101573",name:"王武"},
  ]
  },
  msg: "成功"
})

Mock.mock('/api/getApproves',{
  status: 200,
  data:{
    approves:[
      {
        name: "张三",
        studentId: 1020,
        approveId: 1
      },
      {
        name: "赵四",
        studentId: 1020,
        approveId: 2
      }
    ]
  },
  msg: "成功"
})
//获取请假详情
Mock.mock('/api/getApprove',{
  status: 200,
  data:{
    name: "张三",
    id: 1,
    reason: "shit",
    imgs:[
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
    ],
    isDecide: false
  },
  msg: "成功"
})

Mock.mock('/api/getCourses',{
  status: 200,
  data:[
    {
        courseId: "0001",
        courseName:"计算机网络",
        courseTeacher:"张三",
        courseTime:"周一 1-2节",
        coursePlace:"教学楼A101",
        isCheck: false,
    },
    {
        courseId: "0002",
        courseName:"操作系统",
        courseTeacher:"李四",
        courseTime:"周二 3-4节",
        coursePlace:"教学楼A102",
        isCheck: false,
    }
  ],
  msg: "成功"
})

Mock.mock('/api/getAbsence',{
  status: 200,
  data:{
    courseName: "计算机网络",
    courseList:[
      {
        name: "张三",
        id: '1021',
        week: 18
      },
      {
        name: "赵四",
        id: '1020',
        week: 16
      },
      {
        name: "小王",
        id: '1111',
        week: 10
      }
    ]
  },
  msg: "成功"
})
//学生端
Mock.mock('/api/sendApprove',{
  status: 200,
  data:{},
  msg: "成功"
})

Mock.mock('/api/sendApproveFile',{
  status: 200,
  data:{},
  msg: "成功"
})

Mock.mock('/api/sendCheck',{
  status: 200,
  data:{},
  msg: "成功"
})

Mock.mock('/api/getMyCourses',{
  status: 200,
  data:[
    {
      courseId: "0001",
      courseName:"计算机网络",
      courseTeacher:"张三",
      week: 1,
      startTime:"1",
      endTime:"2",
      coursePlace:"教学楼A101",
    },
    {
      courseId: "0002",
      courseName:"操作系统",
      courseTeacher:"李四",
      week: 1,
      startTime:"1",
      endTime:"2",
      coursePlace:"教学楼A102",
    }
  ],
  msg: "成功"
})

Mock.mock('/api/getMyCourse',{
  status: 200,
  data:{
    courseId: "0001",
    courseName:"计算机网络",
    courseTeacher:"张三",
    week: 1,
    startTime:"1",
    endTime:"2",
    coursePlace:"教学楼A101",
  },
  msg: "成功"
})

Mock.mock('/api/getMyApproves',{
  status: 200,
  data:[
    {
      status: 0, //0 代表未审批，1 代表通过，2 代表拒绝
      courseName: "计算机网络",
      approveMonth: 1,
      approveDay: 22,
      approveId: 1,
    }
  ],
  msg: "成功"
})

Mock.mock('/api/getMyApprove',{
  status: 200,
  data:
  {
    status: 0, //0 代表未审批，1 代表通过，2 代表拒绝
    courseName: "计算机网络",
    approveMonth: 1,
    approveDay: 22,
    approveId: 1,
    reason: "shit",
    imgs:[
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
      'https://i.imgloc.com/2023/01/09/0FrTV.jpeg',
    ],
  },
  msg: "成功"
})
