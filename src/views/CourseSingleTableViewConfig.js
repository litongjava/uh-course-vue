export default {
  "f": "course",
  "idName": "id",
  "idType": "long",
  "tableAlias": "Course",
  "pageUri": "/table/json/course/page",
  "getUri": "/table/json/course/get",
  "createUri": "/table/json/course/create",
  "updateUri": "/table/json/course/update",
  "deleteUri": "/table/json/course/delete",
  "exportExcelUri": "/table/json/course/export-excel",
  "exportTableExcelUri": "/table/json/course/export-table-excel",
  "query": {
    "show": true,
    "items": [
      {
        "name": "Id",
        "key": "id",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Id"
      },
      {
        "name": "Institution",
        "key": "institution",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Institution"
      },
      {
        "name": "Term",
        "key": "term",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Term"
      },
      {
        "name": "Subject Abbr",
        "key": "subject_abbr",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Subject Abbr"
      },
      {
        "name": "Subject Name",
        "key": "subject_name",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Subject Name"
      },
      {
        "name": "Focus On",
        "key": "focus_on",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Focus On"
      },
      {
        "name": "CRN",
        "key": "crn",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Crn"
      },
      {
        "name": "Course",
        "key": "course",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Course"
      },
      {
        "name": "Section",
        "key": "section",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Section"
      },
      {
        "name": "Title",
        "key": "title",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Title"
      },
      {
        "name": "Credits",
        "key": "credits",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Credits"
      },
      {
        "name": "Instructor",
        "key": "instructor",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Instructor"
      },
      {
        "name": "Curr Enrolled",
        "key": "currEnrolled",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Curr Enrolled"
      },
      {
        "name": "Seats Avail",
        "key": "seatsAvail",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Seats Avail"
      },
      {
        "name": "Curr Waitlisted",
        "key": "currWaitlisted",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Curr Waitlisted"
      },
      {
        "name": "Wait Avail",
        "key": "waitAvail",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Wait Avail"
      },
      {
        "name": "Days",
        "key": "days",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Days"
      },
      {
        "name": "Time",
        "key": "time",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Time"
      },
      {
        "name": "Room",
        "key": "room",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Room"
      },
      {
        "name": "Dates",
        "key": "dates",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Dates"
      },
      {
        "name": "Details Url",
        "key": "details_url",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Details Url"
      },
      {
        "name": "Sources Url",
        "key": "sources_url",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Sources Url"
      },
      {
        "name": "Creator",
        "key": "creator",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Creator"
      },
      {
        "name": "Create Time",
        "key": "create_time",
        "type": "date",
        "show": false,
        "prop": {
          "type": "daterange",
          "valueFormat": "yyyy-MM-dd HH:mm:ss",
          "rangeSeparator": "-",
          "startPlaceholder": "Start Date",
          "endPlaceholder": "End Date",
          "defaultTime": [
            "00:00:00",
            "23:59:59"
          ]
        }
      },
      {
        "name": "Updater",
        "key": "updater",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Updater"
      },
      {
        "name": "Update Time",
        "key": "update_time",
        "type": "date",
        "show": false,
        "prop": {
          "type": "daterange",
          "valueFormat": "yyyy-MM-dd HH:mm:ss",
          "rangeSeparator": "-",
          "startPlaceholder": "Start Date",
          "endPlaceholder": "End Date",
          "defaultTime": [
            "00:00:00",
            "23:59:59"
          ]
        }
      },
      {
        "name": "Deleted",
        "key": "deleted",
        "type": "bool",
        "show": false,
        "placeholder": "Please Input Deleted"
      },
      {
        "name": "Tenant Id",
        "key": "tenant_id",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Tenant Id"
      }
    ],
    "operator": {
      "institutionOp": "ct",
      "termOp": "ct",
      "subjectAbbrOp": "ct",
      "subjectNameOp": "ct",
      "focusOnOp": "ct",
      "crnOp": "ct",
      "courseOp": "ct",
      "sectionOp": "ct",
      "titleOp": "ct",
      "creditsOp": "ct",
      "instructorOp": "ct",
      "currEnrolledOp": "ct",
      "seatsAvailOp": "ct",
      "currWaitlistedOp": "ct",
      "waitAvailOp": "ct",
      "daysOp": "ct",
      "timeOp": "ct",
      "roomOp": "ct",
      "datesOp": "ct",
      "detailsUrlOp": "ct",
      "sourcesUrlOp": "ct",
      "creatorOp": "ct",
      "createTimeOp": "bt",
      "updaterOp": "ct",
      "updateTimeOp": "bt"
    },
    "button": {
      "queryButtonName": "Query",
      "resetButtonName": "Reset"
    }
  },
  "toolBar": {
    "show": true,
    "addButtonShow": false,
    "exportButtonShow": true,
    "exportAllButtonShow": true,
    "addButtonName": "Add",
    "exportButtonName": "Export",
    "exportAllButtonName": "Export All"
  },
  "table": {
    "selectionShow": false,
    "numberShow": true,
    "items": [
      {
        "name": "Id",
        "key": "id",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Institution",
        "key": "institution",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Term",
        "key": "term",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "Subject Abbr",
        "key": "subject_abbr",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "Subject Name",
        "key": "subject_name",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Focus On",
        "key": "focus_on",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "CRN",
        "key": "crn",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "Course",
        "key": "course",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "Section",
        "key": "section",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "Title",
        "key": "title",
        "type": "varchar",
        "align": "center",
        "sortable": true,
        "resizable": true,
        "width": "250",
        "show": true
      },
      {
        "name": "Credits",
        "key": "credits",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "Instructor",
        "key": "instructor",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "Curr Enrolled",
        "key": "curr_enrolled",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Seats Avail",
        "key": "seats_avail",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Curr Waitlisted",
        "key": "curr_waitlisted",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Wait Avail",
        "key": "wait_avail",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Days",
        "key": "days",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "Time",
        "key": "time",
        "type": "varchar",
        "align": "center",
        "width": "130",
        "show": true
      },
      {
        "name": "Room",
        "key": "room",
        "type": "varchar",
        "align": "center",
        "width": "130",
        "show": true
      },
      {
        "name": "Dates",
        "key": "dates",
        "type": "varchar",
        "align": "center",
        "width": "110",
        "show": true
      },
      {
        "name": "remark",
        "key": "remark",
        "type": "varchar",
        "align": "center",
        "show": true
      },
      {
        "name": "Details Url",
        "key": "details_url",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Sources Url",
        "key": "sources_url",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Creator",
        "key": "creator",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Create Time",
        "key": "create_time",
        "type": "date",
        "align": "center",
        "show": false
      },
      {
        "name": "Updater",
        "key": "updater",
        "type": "varchar",
        "align": "center",
        "show": false
      },
      {
        "name": "Update Time",
        "key": "update_time",
        "type": "date",
        "align": "center",
        "show": false
      },
      {
        "name": "Deleted",
        "key": "deleted",
        "type": "bool",
        "align": "center",
        "show": false
      },
      {
        "name": "Tenant Id",
        "key": "tenant_id",
        "type": "varchar",
        "align": "center",
        "show": false
      }
    ],
    "operation": {
      "show": false,
      "align": "right",
      "updateButtonShow": true,
      "deleteButtonShow": true,
      "updateButtonName": "Edit",
      "deleteButtonName": "Delete"
    }
  },
  "form": {
    "width": "1000px",
    "labelWidth": "150px",
    "items": [
      {
        "name": "Id",
        "key": "id",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Id"
      },
      {
        "name": "Institution",
        "key": "institution",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Institution"
      },
      {
        "name": "Term",
        "key": "term",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Term"
      },
      {
        "name": "Subject Abbr",
        "key": "subjectAbbr",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Subject Abbr"
      },
      {
        "name": "Subject Name",
        "key": "subjectName",
        "type": "varchar",
        "show": false,
        "placeholder": "Please Input Subject Name"
      },
      {
        "name": "Focus On",
        "key": "focusOn",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Focus On"
      },
      {
        "name": "CRN",
        "key": "crn",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Crn"
      },
      {
        "name": "Course",
        "key": "course",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Course"
      },
      {
        "name": "Section",
        "key": "section",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Section"
      },
      {
        "name": "Title",
        "key": "title",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Title"
      },
      {
        "name": "Credits",
        "key": "credits",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Credits"
      },
      {
        "name": "Instructor",
        "key": "instructor",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Instructor"
      },
      {
        "name": "Curr Enrolled",
        "key": "currEnrolled",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Curr Enrolled"
      },
      {
        "name": "Seats Avail",
        "key": "seatsAvail",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Seats Avail"
      },
      {
        "name": "Curr Waitlisted",
        "key": "currWaitlisted",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Curr Waitlisted"
      },
      {
        "name": "Wait Avail",
        "key": "waitAvail",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Wait Avail"
      },
      {
        "name": "Days",
        "key": "days",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Days"
      },
      {
        "name": "Time",
        "key": "time",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Time"
      },
      {
        "name": "Room",
        "key": "room",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Room"
      },
      {
        "name": "Dates",
        "key": "dates",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Dates"
      },
      {
        "name": "Details Url",
        "key": "detailsUrl",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Details Url"
      },
      {
        "name": "Sources Url",
        "key": "sources_Url",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Sources Url"
      },
      {
        "name": "Creator",
        "key": "creator",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Creator"
      },
      {
        "name": "Create Time",
        "key": "createTime",
        "type": "date",
        "show": true,
        "prop": {
          "type": "datetime",
          "valueFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      {
        "name": "Updater",
        "key": "updater",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Updater"
      },
      {
        "name": "Update Time",
        "key": "updateTime",
        "type": "date",
        "show": true,
        "prop": {
          "type": "datetime",
          "valueFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      {
        "name": "Deleted",
        "key": "deleted",
        "type": "bool",
        "show": true,
        "placeholder": "Please Input Deleted"
      },
      {
        "name": "Tenant Id",
        "key": "tenantId",
        "type": "varchar",
        "show": true,
        "placeholder": "Please Input Tenant Id"
      }
    ],
    "button": {
      "confimButtonName": "Comfirm",
      "cancelButtonName": "Cancel"
    }
  }
}
