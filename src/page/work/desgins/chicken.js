import React from 'react'
import LazyImg from '@c/lazyImg'
const chicken = '//cdn.toofook.com/my-blog/work/chicken.gif'
const chicken1 = '//cdn.toofook.com/my-blog/work/chicken1.jpg'
const chicken2 = '//cdn.toofook.com/my-blog/work/chicken2.jpg'
const chicken3 = '//cdn.toofook.com/my-blog/work/chicken3.jpg'
const chickenCode = '//cdn.toofook.com/my-blog/work/chikenCode.png'

export default ()=>{
    return(
      <article className="work-pop-main">
        <h1>哎呦喂</h1>
        <p>“瑶瑶酱”</p>
        {/*<h5>Loading页:</h5>*/}
        {/*<LazyImg w="320px" h="563px" src={chicken}/>*/}
        {/*<p>“小傻逼”</p>*/}
        {/*<p>“haha”</p>*/}
        {/*<h5>其它一些页面:</h5>*/}
        {/*<LazyImg w="320px" h="569px" src={chicken1}/>*/}
        {/*<LazyImg w="320px" h="569px" src={chicken2}/>*/}
        {/*<LazyImg w="320px" h="569px" src={chicken3}/>*/}
        {/*<p>或许你可以扫描二维码亲自体验一下～</p>*/}
        {/*<LazyImg w="280px" h="280px" src={chickenCode}/>*/}
        {/*<strong>END</strong>*/}
      </article>
    )
}
