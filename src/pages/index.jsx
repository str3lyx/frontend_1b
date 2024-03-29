import * as React from 'react'
import { Link, graphql } from 'gatsby'
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
          <Link to='/student'>รายชื่อนักศึกษา</Link>
        </div>
        <div style={{ marginLeft: 10 }}>
          <StudentList data={data} />
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <div>
          <Link to='/teacher'>รายชื่ออาจารย์</Link>
        </div>
        <div style={{ marginLeft: 10 }}>
          <TeacherList data={data} />
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <div>
          <Link to='/subject'>รายวิชา</Link>
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
