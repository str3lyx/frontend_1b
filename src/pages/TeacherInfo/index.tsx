import React, { useState } from "react"
import { useQuery, gql } from '@apollo/client';

import '../../App.scss'
import './TeacherInfo.scss'
import ProfileBlock from "./ProfileBlock"
import { useParams } from "react-router-dom";
import AppBar from "../../components/AppBar";
import SubjectBlock from "./SubjectBlock";

const GET_TEACHER_DATA = (teacher_id: string) => gql`
  query {
    teacher(filter: {id:{_eq:"${teacher_id}"}}) {
      profile_picture {
        id
      },
      name,
      faculty,
      sub_faculty,
      students {
        profile_picture {
          id
        }
        std_id
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

const TeacherInfo: React.FC = () => {

  const [tab, setTab] = useState('profile')
  const [data, setData] = useState({
    profile_picture: {
      id: ''
    },
    name: '',
    faculty: '',
    sub_faculty: '',
    subjects: []
  })
  const {id} = useParams()

  const {loading, error} = useQuery(GET_TEACHER_DATA(id ? id : ''), {
    onCompleted: data => setData(data.teacher[0])
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
              className={`info-choice center ${tab==='student' ? 'selected' : ''}`}
              onClick={() => {setTab('student')}}
            >
              นักศึกษาในที่ปรึกษา
            </div>
            <div
              className={`info-choice center ${tab==='subject' ? 'selected' : ''}`}
              onClick={() => {setTab('subject')}}
            >
              วิชาที่สอน
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

export default TeacherInfo
