import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
const data =   useLoaderData()
  //   const [data, setData] = useState({})
  // useEffect(() => {
  //   fetch('https://api.github.com/users/techkagdi')
  //   .then(response => response.json())
  //   .then(data => {
  //       console.log(data)
  //       setData(data)
  //   })
  // },[])
  return (
      <div className="py-16 bg-gray-600 content-center text-center text-white text-4xl align-middle">
        <img src={data.avatar_url} width={300} height={200}/>
        <p> Github Followers :{data.login}</p>
          <p> Github Followers :{data.followers}</p>
      </div>
  );
}
export const githubLoader = async() => {
  const response = await fetch('https://api.github.com/users/techkagdi')
  return response.json()
  
}