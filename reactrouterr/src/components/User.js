import React from 'react'
import { useParams } from 'react-router-dom';
export default function User() {
    const {userid} = useParams()
    const {helll} = useParams()
  return (
      <div className="py-16 bg-white text-center text-red-900 ">
          <p> User Id : {userid} : {helll}</p>
      </div>
  );
}