import * as React from 'react'
import { Link, graphql } from 'gatsby'

const toClockFormat = (num) => {
  return (
    ('' + parseInt(num)).padStart(2, '0') +
    ':' +
    ('' + parseInt((num * 100) % 100)).padStart(2, '0')
  )
}

export default function SubjectInfo({ data }) {
  const subjects = data.directus.subject
  console.log(subjects)
  return (
    <>
      <h2>
        {subjects[0].subject_id} - {subjects[0].subject_name}
      </h2>
      <div>
        {subjects.map((subject, index) => {
          return (
            subject && (
              <div key={index}>
                <div>
                  <b>Section {subject.section}</b>
                </div>
                <div>
                  <u>เวลา</u>
                </div>
                <div>
                  {Array.from(subject.study_times).map((time, index) => {
                    return (
                      time && (
                        <div key={index}>
                          + {time.study_time_id.day}{' '}
                          {toClockFormat(time.study_time_id.start_hour)} -{' '}
                          {toClockFormat(time.study_time_id.end_hour)} น.
                        </div>
                      )
                    )
                  })}
                </div>
                <div>
                  <u>อาจารย์ผู้สอน</u>
                </div>
                <div>
                  {Array.from(subject.teachers).map((teacher_id, index) => {
                    const teacher = teacher_id.teacher_id
                    return (
                      teacher && (
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
                            style={{ objectFit: 'cover' }}
                            width='24'
                            height='24'
                          />
                          <Link
                            to={`/teacher/${teacher.id}`}
                            style={{ marginLeft: 5 }}
                          >
                            {teacher.name}
                          </Link>
                        </div>
                      )
                    )
                  })}
                </div>
                <div>
                  <u>นักศึกษาที่ลงทะเบียน</u>
                </div>
                <div>
                  {Array.from(subject.students).map((student_id, index) => {
                    const student = student_id.student_std_id
                    return (
                      student && (
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
                            style={{ objectFit: 'cover' }}
                            width='24'
                            height='24'
                          />
                          <Link
                            to={`/student/${student.std_id}`}
                            style={{ marginLeft: 5 }}
                          >
                            {student.std_id} - {student.name}
                          </Link>
                        </div>
                      )
                    )
                  })}
                </div>
              </div>
            )
          )
        })}
      </div>
    </>
  )
}

export const Head = ({ data }) => (
  <title>{data.directus.subject[0].subject_id}</title>
)

export const { query } = graphql`
  query ($id: String) {
    directus {
      subject(filter: { subject_id: { _eq: $id } }) {
        section
        subject_id
        subject_name
        teachers {
          teacher_id {
            name
            id
            profile_picture {
              id
            }
          }
        }
        students {
          student_std_id {
            name
            std_id
            profile_picture {
              id
            }
          }
        }
        study_times {
          study_time_id {
            end_hour
            start_hour
            day
          }
        }
      }
    }
  }
`
