import * as React from 'react'
import { graphql } from 'gatsby'

const toClockFormat = (num) => {
  return (
    ('' + parseInt(num)).padStart(2, '0') +
    ':' +
    ('' + parseInt((num * 100) % 100)).padStart(2, '0')
  )
}

export default function StudentInfo({ data }) {
  const student = data.directus.student_by_id
  const profile = student.profile_picture
  const advisor = student.advisor
  const subjects = student.subjects
  console.log(student)

  return (
    <>
      <img
        src={profile ? `${process.env.DIRECTUS_URL}/assets/${profile.id}` : ''}
        width='128'
        height='128'
      />
      <div>
        <div>รหัส: {student.std_id}</div>
        <div>ชื่อ: {student.name}</div>
        <div>ชั้นปี: {student.degree}</div>
        <div>คณะ: {student.faculty}</div>
        <div>ภาควิชา: {student.sub_faculty}</div>
        <div>เบอร์โทรศัพท์: {student.phone_number}</div>
        <div>อีเมล: {student.email}</div>
      </div>
      <div>
        <div>
          <b>อาจารย์ที่ปรึกษา</b>
        </div>
        {advisor && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={
                advisor.profile_picture
                  ? `${process.env.DIRECTUS_URL}/assets/${advisor.profile_picture.id}`
                  : ''
              }
              width='24'
              height='24'
            />
            <a href={`/teacher/${advisor.id}`} style={{ marginLeft: 5 }}>
              {advisor.name}
            </a>
          </div>
        )}
      </div>
      <div>
        <div>
          <b>รายวิชาที่ลงทะเบียน</b>
        </div>
        <div>
          {Array.from(subjects).map((subject, index) => {
            return (
              subject.subject_id && (
                <div key={index}>
                  <div>
                    <a href={`/subject/${subject.subject_id.subject_id}`}>
                      {subject.subject_id.subject_id} -{' '}
                      {subject.subject_id.subject_name}
                    </a>
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
  <title>{data.directus.student_by_id.name}</title>
)

export const { query } = graphql`
  query ($id: ID!) {
    directus {
      student_by_id(id: $id) {
        name
        std_id
        sub_faculty
        phone_number
        faculty
        email
        degree
        profile_picture {
          id
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
        advisor {
          name
          id
          profile_picture {
            id
          }
        }
      }
    }
  }
`
