import React from 'react'

function FormContainerComponent(props) {
  return (
    <div className="mt-3 mb-5 d-flex justify-content-center">
    <div className="card p-3 col-sm-6 col-md-4 col-lg-4">
      {props.children}
    </div>
  </div>  )
}

export default FormContainerComponent