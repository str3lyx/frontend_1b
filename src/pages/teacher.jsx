import * as React from 'react'
import { graphql } from 'gatsby'

export default function TeacherList({ data }) {
  const teachers = data.directus.teacher

  return (
    <>
      {Array.from(teachers).map((teacher, index) => {
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
                teacher.profile_picture
                  ? `${process.env.DIRECTUS_URL}/assets/${teacher.profile_picture.id}`
                  : ''
              }
              width='24'
              height='24'
            />
            <a href={`/teacher/${teacher.id}`} style={{ marginLeft: 5 }}>
              {teacher.name}
            </a>
          </div>
        )
      })}
    </>
  )
}

export const Head = ({ data }) => {
  console.log(data.directus.teacher)
  return <title>รายชื่ออาจารย์</title>
}

export const { query } = graphql`
  query {
    directus {
      teacher {
        id
        name
        profile_picture {
          id
        }
      }
    }
  }
`
