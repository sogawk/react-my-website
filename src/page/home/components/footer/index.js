import React from 'react';
import {footer} from '../../home.scss'
/**
 * @name home页面的页脚
 */
export default function TextNode () {
  const date = new Date()
  const dateValue = " " + date.getFullYear()+'/'+(+date.getMonth()+1)+'/'+date.getDate()
    return (
      <footer className={footer}>
        <ul>
          <li><b>日期</b>{dateValue}</li>
          <li><b>const</b> 哎呦喂</li>
          <li><b>YAOYAO</b> </li>
          <li>WWW.YAOYAOMUA.COM</li>
          <li><b>祝你快乐</b></li>
        </ul>
      </footer>
    )
}
