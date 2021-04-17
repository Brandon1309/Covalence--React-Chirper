import React, { useState } from "react";
import Chirp from "./Chirp"
import { v4 as uuidv4 } from "uuid"
import AddIcon from '@material-ui/icons/Add';
const Form = (props) => {
  const initList = [
    {

      title: "This is My 1st Chirp",
      body: "this is the Chirp body"
    },
    {

      title: "This is my 2nd Chirp",
      body: "this is the Chirp body number 2"
    },
    {

      title: "This is my 3rd Chirp",
      body: "this is the Chirp body 3"
    }

  ]

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [list, setList] = useState(initList)

  const fancyList = list.map(val => {
    return <li className="col-12 m-4" key={uuidv4()}><Chirp title={val.title} body={val.body} /></li>

  })


  const handleClickEvent = (e) => {
    e.preventDefault();
    console.log("button clicked");
    setList(list.concat({
      title: title,
      body: body
    }))
    setTitle("")
    setBody("")

  }
  const handleTitleChangeEvent = (e) => {
    setTitle(e.target.value)
  }
  const handleBodyChangeEvent = (e) => {
    setBody(e.target.value);
  }

  return (


    <div className="container-fluid">
      <div className="col-8  justify-content-center">
        <form className="">
          <div className="row">
            {/* <label htmlFor="title">Title</label> */}
            <input className="form-control col-10 m-4" placeholder="Title here" onChange={handleTitleChangeEvent} type="text" value={title} />
            <button className="btn btn-light btn-lg col-1 " type="submit" onClick={handleClickEvent}><AddIcon /></button>
          </div>
          {/* <label htmlFor="body">Body</label> */}
          <textarea className=" txt-ar form-control m-2 col-11" placeholder="Body Here" onChange={handleBodyChangeEvent} type="text" value={body} />

          {/* <hr className="" /> */}

        </form>
        <ul className="d-block list-unstyled m-4 col-12 ">
          {fancyList}
        </ul>
      </div>
    </div>
  )


}
export default Form;