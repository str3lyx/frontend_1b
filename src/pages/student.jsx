import * as React from 'react'
import { graphql } from 'gatsby'

export default function StudentList({ data }) {
  const students = data.directus.student

  return (
    <>
      {Array.from(students).map((student, index) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={
                student.profile_picture
                  ? `${process.env.DIRECTUS_URL}/assets/${student.profile_picture.id}`
                  : ''
              }
              width='24'
              height='24'
            />
            <a href={`/student/${student.std_id}`} style={{ marginLeft: 5 }}>
              {student.std_id} - {student.name}
            </a>
          </div>
        )
      })}
    </>
  )
}

export const Head = ({ data }) => {
  console.log(data.directus.student)
  return <title>รายชื่อนักศึกษา</title>
}

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
    }
  }
`
