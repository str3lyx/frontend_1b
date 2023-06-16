import * as React from 'react'
import { Link, graphql } from 'gatsby'

const toClockFormat = (num) => {
  return (
    ('' + parseInt(num)).padStart(2, '0') +
    ':' +
    ('' + parseInt((num * 100) % 100)).padStart(2, '0')
  )
}

export default function TeacherInfo({ data }) {
  const teacher = data.directus.teacher_by_id
  const profile = teacher.profile_picture
  const students = teacher.students
  const subjects = teacher.subjects

  return (
    <>
      <img
        src={profile ? `${process.env.DIRECTUS_URL}/assets/${profile.id}` : ''}
        style={{ objectFit: 'cover' }}
        width='128'
        height='128'
      />
      <div>
        <div>ชื่อ: {teacher.name}</div>
        <div>คณะ: {teacher.faculty}</div>
        <div>ภาควิชา: {teacher.sub_faculty}</div>
        <div>เบอร์โทรศัพท์: {teacher.phone_number}</div>
        <div>อีเมล: {teacher.email}</div>
      </div>
      <div>
        <div>
          <b>นักศึกษา</b>
        </div>
        {Array.from(students).map((student, index) => {
          const profile = student.profile_picture
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
                  profile
                    ? `${process.env.DIRECTUS_URL}/assets/${profile.id}`
                    : ''
                }
                style={{ objectFit: 'cover' }}
                width='24'
                height='24'
              />
              <Link to={`/student/${student.std_id}`} style={{ marginLeft: 5 }}>
                {student.std_id} - {student.name}
              </Link>
            </div>
          )
        })}
      </div>
      <div>
        <div>
          <b>รายวิชาที่สอน</b>
        </div>
        <div>
          {Array.from(subjects).map((subject, index) => {
            return (
              subject.subject_id && (
                <div key={index}>
                  <div>
                    <Link to={`/subject/${subject.subject_id.subject_id}`}>
                      {subject.subject_id.subject_id} -{' '}
                      {subject.subject_id.subject_name}
                    </Link>
                    <span> : Section {subject.subject_id.section}</span>
                  </div>
                  <div>
                    <u>เวลา</u>
                  </div>
                  <div>
                    {Array.from(subject.subject_id.study_times).map(
                      (time, index) => {
                        return (
                          time.study_time_id && (
                            <div key={index}>
                              + {time.study_time_id.day}{' '}
                              {toClockFormat(time.study_time_id.start_hour)} -{' '}
                              {toClockFormat(time.study_time_id.end_hour)} น.
                            </div>
                          )
                        )
                      }
                    )}
                  </div>
                </div>
              )
            )
          })}
        </div>
      </div>
    </>
  )
}

export const Head = ({ data }) => (
  <title>{data.directus.teacher_by_id.name}</title>
)

export const { query } = graphql`
  query ($id: ID!) {
    directus {
      teacher_by_id(id: $id) {
        name
        phone_number
        sub_faculty
        faculty
        email
        profile_picture {
          id
        }
        students {
          name
          std_id
          profile_picture {
            id
          }
        }
        subjects {
          subject_id {
            section
            subject_id
            subject_name
            study_times {
              study_time_id {
                start_hour
                end_hour
                day
              }
            }
          }
        }
      }
    }
  }
`
