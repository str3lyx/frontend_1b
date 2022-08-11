import React from "react"

import './StudentInfo.scss'
import MaterialIcon from "../../components/MaterialIcon"
import { Link } from "react-router-dom"

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
            <div>รหัสนักศึกษา</div>
            <div>{props.data.std_id}</div>
          </div>
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
        <h1>อาจารย์ที่ปรึกษา</h1>
        <div className="teacher" onClick={() => {window.location.href = `/teacher/${props.data.advisor.id}`}}>
          <img alt="" src={props.data.advisor.profile_picture ? `http://localhost:8055/assets/${props.data.advisor.profile_picture.id}` : ''}/>
          {props.data.advisor && <div>{props.data.advisor.name}</div>}
        </div>
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
        <IconText icon='mail' text={`${props.data.std_id}@email.psu.ac.th`} />
        <IconText icon='mail' text={`${props.data.std_id}@psu.ac.th`} />
        { (props.data.email != null) && <IconText icon='mail' text={props.data.email} /> }
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