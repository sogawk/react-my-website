import React from 'react'
import Cloud from './cloud'
import {mylabel} from '../about.scss'

/**
 * @name AboutMe云朵集组件
 */

const labels = [
                 '#00后',
                 '#可爱到爆',
                 '#仙女本仙'
                ]

export default ()=>{
  return(
    <div className={mylabel}>
      {labels.map((t,i) => <Cloud key={i} text={t} index={i}/>)}
    </div>
  )
}