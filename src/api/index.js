import qs from "qs"
import request from "../utils/request"

const api = {
  getInsitutions() {
    let options = {
      method: 'POST',
      url: '/table/json/institution/list',
      data: qs.stringify({columns: 'id,abbr_name,name'})
    };
    return request(options);
  },
  getSemestersByInstitution(id) {
    let data = {columns: 'name', institutionId: id, institutionIdType: "long", orderBy: 't', isAsc: 'false'};
    let options = {
      method: 'POST',
      url: '/table/json/semester/list',
      data: qs.stringify(data)
    };
    return request(options);
  },
  //http://127.0.0.1:10510/table/json/course_remark/page?columns=remark&courseId=260957686638620672
  getRemarkByCourseId(id) {
    let options = {
      method: 'POST',
      url: '/table/json/course_remark/get',
      data: qs.stringify({columns: 'remark', courseId: id, courseIdType: "long"})
    };
    return request(options);
  },


  updateClassesFromUrl(url) {
    let options = {
      method: 'get',
      url: '/spider/updateClassesFromUrl',
      params: {url: url}
    };
    return request(options);
  }
};

export default api
