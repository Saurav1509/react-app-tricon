import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function getData() {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
      // console.log(data.data)
      setUserData(data)
      setLoading(false)
    }
    getData();
  }, [])

  return (
    <div>
      {(loading)? 
        (<p>Loading...</p>):
          (<>
            {userData.map((index) => {
              return <>
                <p>name: {index.name}</p>
                <p>email: {index.email}</p>
                <p>company name: {index.company.name}</p>
              </>
            })}
        </>)}
    </div>
  )
}

export default App
