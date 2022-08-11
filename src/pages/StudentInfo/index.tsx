import React, { useState } from "react"
import { useQuery, gql } from '@apollo/client';

import '../../App.scss'
import './StudentInfo.scss'
import ProfileBlock from "./ProfileBlock"
import { useParams } from "react-router-dom";
import AppBar from "../../components/AppBar";
import SubjectBlock from "./SubjectBlock";

const GET_STD_DATA = (std_id: string) => gql`
  query {
    student(filter: {std_id:{_eq:"${std_id}"}}) {
      std_id,
      name,
      profile_picture {
        id
      }
      faculty,
      sub_faculty,
      degree,
      email,
      phone_number
      advisor {
        id
        name
      },
      subjects {
        subject_id {
          subject_id,
          section,
          subject_name
        }
      }
    }
  }
`

const StudentInfo: React.FC = () => {

  const [tab, setTab] = useState('profile')
  const [data, setData] = useState({
    std_id: '',
    profile_picture: {
      id: ''
    },
    name: '',
    faculty: '',
    sub_faculty: '',
    degree: 'นักศึกษา?',
    email: '',
    phone_number: '',
    advisor: {
      id: '',
      name: ''
    },
    subjects: []
  })
  const {id} = useParams()

  const {loading, error} = useQuery(GET_STD_DATA(id ? id : ''), {
    onCompleted: data => setData(data.student[0])
  })

  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>Error! {error.message}`</p>;

  return (
    <>
      <AppBar />
      <div id="std-info">
        <div className="header center" style={{flexDirection: 'column'}}>
          <div className="main-info">
            <img src={data.profile_picture ? `http://localhost:8055/assets/${data.profile_picture.id}` : ''} alt='' />
            <div className="header-name">
              <h1>{data.name}</h1>
              <h2>{data.degree}</h2>
            </div>
          </div>
          <div className="info-menu center">
            <div
              className={`info-choice center ${tab==='profile' ? 'selected' : ''}`}
              onClick={() => {setTab('profile')}}
            >
              โปรไฟล์
            </div>
            <div
              className={`info-choice center ${tab==='subject' ? 'selected' : ''}`}
              onClick={() => {setTab('subject')}}
            >
              วิชาที่ลงทะเบียนเรียน
            </div>
          </div>
        </div>
        {
          tab === 'profile' && <ProfileBlock data={data}/>
        }
        {
          tab === 'subject' && <SubjectBlock data={data}/>
        }
      </div>
    </>
  )
}

export default StudentInfo
