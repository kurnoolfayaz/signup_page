import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const history = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row text-center  ">
            <h4>404 Error ! Page Not Found</h4>
            <button type="button" className="btn btn-primary" onClick={() =>history("/")}> Redirect Page</button>
        </div>
      </div>
    
    
    </>
  )
}

export default Error