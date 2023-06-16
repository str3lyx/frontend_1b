import * as React from 'react'
import { graphql } from 'gatsby'

export default function SubjectList({ data }) {
  const subjects = data.directus.subject.filter(
    (v, i, arr) => arr.findIndex((val) => val.subject_id === v.subject_id) === i
  )

  return (
    <>
      {subjects.map((subject, index) => {
        return (
          <div key={index}>
            <a href={`/subject/${subject.subject_id}`}>
              {subject.subject_id} - {subject.subject_name}
            </a>
          </div>
        )
      })}
    </>
  )
}

export const Head = ({ data }) => {
  const subjects = data.directus.subject.filter(
    (v, i, arr) => arr.findIndex((val) => val.subject_id === v.subject_id) === i
  )
  console.log(subjects)
  return <title>รายวิชา</title>
}

export const { query } = graphql`
  query {
    directus {
      subject {
        subject_id
        subject_name
      }
    }
  }
`
