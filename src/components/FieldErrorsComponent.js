import React from 'react'

function FieldErrorsComponent({errors}) {

  return (
    <div className="text-danger">
        <ul>
            {errors.map((error,index)=><li key={index}>{error}</li>)}
        </ul>
    </div>
  )
}

export default FieldErrorsComponent