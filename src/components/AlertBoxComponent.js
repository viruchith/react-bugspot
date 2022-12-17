import React from 'react'

function AlertBoxComponent({type="success",message=""}) {
  return (
    <div className={"alert alert-"+type} role="alert">
        <strong>{message}</strong>
    </div>
    
  )
}

export default AlertBoxComponent;