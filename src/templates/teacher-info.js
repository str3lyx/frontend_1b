import * as React from 'react'
import { graphql } from 'gatsby'

export default function TeacherInfo({ data }) {
    return <>{data.directus.teacher_by_id.name}</>
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
            }
        }
    }
`
