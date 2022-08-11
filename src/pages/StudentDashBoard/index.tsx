import React, {useState} from "react"
import { useQuery, gql } from '@apollo/client';
import { Link } from "react-router-dom";

const GET_STUDENTS = () => gql`
  query {
    student{
      std_id,
      name,
    }
  }
`

const StudentDashBoard: React.FC = () => {
  const [data, setData] = useState([])

  const {loading, error} = useQuery(GET_STUDENTS(), {
    onCompleted: data => setData(data.student)
  })

  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>Error! {error.message}`</p>;

  return (
    <div style={{marginTop: '64px'}}>
      {
        data.map((element: any, index: number) => (
          <li key={index}><Link to={`/student/${element.std_id}`}>{element.name}</Link></li>
        ))
      }
    </div>
  )
}

export default StudentDashBoard