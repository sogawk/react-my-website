import React from 'react'
import {firends} from '../about.scss'

const friends = [
                {link:'#',name:'小璇',title:'靓女'},
                {link:'#',name:'狗远儿',title:'前端大佬'}
]

const Link = (props) => {
  return(
    <a href={props.link}><span>{props.name}</span>{props.title}</a>
  )
}

export default ()=>{
  return(
    <div className={firends}>
      {friends.map((f,i)=><Link key={i} {...f}/>)}
    </div>
  )
}