import React from 'react'
import UserLogin from "../../../assets/user-login.png";
import { NavLink } from 'react-router-dom';

export default function Blogcard({author, image, title}) {
  return (
    <div className="max-w-full w-full bg-white justify-center flex flex-col rounded-2xl">
                      
                      <div className="flex flex-row mx-4">
                      <img src={UserLogin} className="rounded-full w-10 h-10 self-center"></img>
                      <h1 style={{
                        margin:"20px",
                        fontWeight:"600",
                        fontSize:"20px"
                      }}>{author}</h1>
                      </div>
                      <NavLink to="/templateBlog" className="max-w-full w-full">
                      <img src={image} className="object-cover" style={{
                        margin: "0 auto",
                      }}/>
                      <h1 style={{
                        margin:"15px",
                        marginBottom:"0",
                        fontWeight:"600",
                        fontSize:"17px"
                      }}
                      >{title}</h1>
                      </NavLink>
                    <div class=" bottom-0 left-0 grid grid-cols-3 my-4">
                       <button className="inline">
                         <ThumbsUp className="inline"></ThumbsUp>123
                       </button>
                       <button className="inline mx-2">
                         <MessageCircle className="inline"></MessageCircle>123
                       </button>
                       <button className="inline">
                         <Bookmark className="inline"></Bookmark>123
                       </button>
                     </div>
                    </div>
                    
  )
}
