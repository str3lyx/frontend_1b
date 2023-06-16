const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data } = await graphql(`
        query {
            directus {
                student {
                    std_id
                }
                subject_aggregated(groupBy: "subject_id") {
                    group
                }
                teacher {
                    id
                }
            }
        }
    `)

    data.directus.student.forEach((student) => {
        createPage({
            path: `/student/${student.std_id}`,
            component: path.resolve('src/templates/student-info.jsx'),
            context: { id: student.std_id },
        })
    })

    data.directus.teacher.forEach((teacher) => {
        createPage({
            path: `/teacher/${teacher.id}`,
            component: path.resolve('src/templates/teacher-info.jsx'),
            context: { id: teacher.id },
        })
    })

    data.directus.subject_aggregated.forEach((subject) => {
        createPage({
            path: `/subject/${subject.group.subject_id}`,
            component: path.resolve('src/templates/subject-info.jsx'),
            context: { id: subject.group.subject_id },
        })
    })
}
