import * as React from 'react'
import { graphql } from 'gatsby'

export default function StudentInfo({ data }) {
    return <>{data.directus.student_by_id.name}</>
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
            }
        }
    }
`
