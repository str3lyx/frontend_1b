import * as React from 'react'
import { graphql } from 'gatsby'
import StudentList from './student'
import TeacherList from './teacher'
import SubjectList from './subject'

export default function Index({ data }) {
  data.directus.subject = data.directus.subject.filter(
    (v, i, arr) => arr.findIndex((val) => val.subject_id === v.subject_id) === i
  )
  console.log(data)

  return (
    <>
      <div>
        <div>
          <a href='/student'>รายชื่อนักศึกษา</a>
        </div>
        <div style={{ marginLeft: 10 }}>
          <StudentList data={data} />
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <div>
          <a href='/teacher'>รายชื่ออาจารย์</a>
        </div>
        <div style={{ marginLeft: 10 }}>
          <TeacherList data={data} />
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <div>
          <a href='/subject'>รายวิชา</a>
        </div>
        <div style={{ marginLeft: 10 }}>
          <SubjectList data={data} />
        </div>
      </div>
    </>
  )
}

export const Head = () => <title>หน้าแรก</title>

export const { query } = graphql`
  query {
    directus {
      student {
        std_id
        name
        profile_picture {
          id
        }
      }
      teacher {
        id
        name
        profile_picture {
          id
        }
      }
      subject {
        subject_id
        subject_name
      }
    }
  }
`
