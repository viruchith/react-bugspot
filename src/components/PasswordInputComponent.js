import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function PasswordInputComponent({name,id}) {
    const [toggle, setToggle] = useState(false);
  return (
    <div className="mb-3 input-group">
        <input type={(toggle)?"text":"password"} className='form-control' name={name} id={name} />
        <button type='button' className="btn btn-secondary" onClick={(e)=>{setToggle(!toggle)}}>{(toggle)?<FontAwesomeIcon icon="fa-solid fa-eye-slash" />:<FontAwesomeIcon icon="fa-solid fa-eye" />}</button>
    </div>
  )
}

export default PasswordInputComponent