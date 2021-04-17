import React from "react"
// import DateTime from 'luxon/src/datetime.js'


const Chirp = ({ title, body }) => {
  // let now = DateTime.now().toString();
  return (
    <div className="d-flex justify-content-center col-12">
      <div className="card d-flex justify-content-center col-12">
        <div className="card-body">
          <h3>{title}</h3>
          <p>{body}</p>
          {/* <p>{now}</p> */}
        </div>
      </div>

    </div>
  )
}
export default Chirp