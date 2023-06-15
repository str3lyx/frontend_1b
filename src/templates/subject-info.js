import * as React from 'react'
import { graphql } from 'gatsby'

export default function SubjectInfo({ data }) {
    return <>{data.directus.subject[0].subject_name}</>
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
            }
        }
    }
`
