import React from "react"

import './TeacherInfo.scss'

interface IProfile {
  data: any
}

const SubjectBlock: React.FC<IProfile> = (props) => {

  function getSection(section: number): string {
    if(section < 10)
      return `0${section}`
    return ''+section
  }

  return (
    <div className="subjects">
      <div className="table">
        <div className="row">
          <div style={{width: '12%'}}>รหัสวิชา</div>
          <div style={{width: '8%'}}>Section</div>
          <div style={{width: '80%'}}>ชื่อวิชา</div>
        </div>
        {
            props.data.subjects.map((element: any, index: number) => (
              <div className="row" key={index}>
                <div style={{width: '12%'}}>{element.subject_id.subject_id}</div>
                <div style={{width: '8%'}}>{getSection(element.subject_id.section)}</div>
                <div style={{width: '80%'}}>{element.subject_id.subject_name}</div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default SubjectBlock