import request from '@/utils/request'

export default {
    getTeacherListPage(current,limit,teacherQuery){//当前页，每页记录数，条件
        return request({
            //url: '/table/list/',
            url:`/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: `post`,
            //用requestbody获取数据,data用json传送数据
          //  data: teacherQuery
          })
    }
}
