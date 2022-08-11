import React from "react"

import './TeacherInfo.scss'
import MaterialIcon from "../../components/MaterialIcon"

interface IIconText {
  icon: string,
  text: string
}

const IconText: React.FC<IIconText> = (props) => {
  return (
    <div className="icon-text">
      <MaterialIcon name={props.icon} style={{fontSize: '100%', color: 'black'}} />
      <div style={{marginLeft: '8px', color: 'black'}}>{props.text}</div>
    </div>
  )
}

const InformationBlock: React.FC<IProfile> = (props) => {
  return (
    <div className="info">
      <div className="inner">
        <h1>ข้อมูลทั่วไป</h1>
        <div className="table">
          <div className="row">
            <div>ชื่อ</div>
            <div>{props.data.name}</div>
          </div>
          <div className="row">
            <div>คณะ</div>
            <div>{props.data.faculty}</div>
          </div>
          <div className="row">
            <div>ภาควิชา</div>
            <div>{props.data.sub_faculty}</div>
          </div>
        </div>
        <h1>นักศึกษาในที่ปรึกษา</h1>
        {
          props.data.students.slice(0,5).map((element: any, index: number) => (
            <div className="student" key={index} onClick={() => window.location.href = `/student/${element.std_id}`}>
              <img alt="" src={element.profile_picture ? `http://localhost:8055/assets/${element.profile_picture.id}` : ''}/>
              <div>{element.name}</div>
            </div>
          ))
        }
        {
          props.data.students.length > 5 && <div className="student">
            <div>ดูเพิ่มเติม ...</div>
          </div>
        }
      </div>
    </div>
  )
}

const ContactBlock: React.FC<IProfile> = (props) => {
  return (
    <div className="contact">
      <div className="inner">
        <h1>Contact</h1>
        { (props.data.phone_number != null) && <IconText icon='call' text={props.data.phone_number} /> }
        { (props.data.email != null) && <IconText icon='mail' text={props.data.email} /> }
        {
          (props.data.phone_number == null && props.data.phone_number == null) && <div>N/A</div>
        }
      </div>
    </div>
  )
}

interface IProfile {
  data: any
}

const ProfileBlock: React.FC<IProfile> = (props) => {
  return (
    <div className="profile">
      <InformationBlock data={props.data}/>
      <ContactBlock data={props.data}/>
    </div>
  )
}

export default ProfileBlock