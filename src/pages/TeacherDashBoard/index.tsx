import React, {useState} from "react";
import { useQuery, gql } from '@apollo/client';
import {Link} from 'react-router-dom'

const GET_TEACHERS = () => gql`
  query {
    teacher{
      id,
      name,
    }
  }
`

const TeacherDashBoard: React.FC = () => {
  const [data, setData] = useState([])

  const {loading, error} = useQuery(GET_TEACHERS(), {
    onCompleted: data => setData(data.teacher)
  })

  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>Error! {error.message}`</p>;

  return (
    <div style={{marginTop: '64px'}}>
      {
        data.map((element: any, index: number) => (
          <li key={index}><Link to={`/teacher/${element.id}`}>{element.name}</Link></li>
        ))
      }
    </div>
  )
}

export default TeacherDashBoard