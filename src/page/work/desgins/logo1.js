import React from 'react'
import LazyImg from '@c/lazyImg'
const logo1 = '//cdn.toofook.com/my-blog/work/logo1.jpg'
export default () => {
    return(
      <article className="work-pop-main">
        <h1>记录剩余试试次数</h1>
          <p>哎呦喂</p>
          <p>“瑶瑶酱”</p>
          <h5>当前试试剩余:10086</h5>
        <LazyImg w="1920px" h="1920px" src={logo1}/>
        <strong>END</strong>
      </article>
    )
}
