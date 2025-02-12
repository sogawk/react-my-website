import React, {Component} from 'react'
import {aboutImg} from '@c/imgurls'
import * as loginCss from './login.scss'
import Axios from '@/utils/request'
import Model from '@c/model'
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      type: '',
      text: '',
      loginType: 'token'
    }
  }
  showModel(opt) {
    this.setState(opt)
    this.refs.model.show()
  }
  loginByToken() {
    const inputToken = this.refs.token.value
    if (!token) {
      this.showModel({
        type: 'err',
        text: '暗号不对'
      })
      return
    }
    const token = `${inputToken}`
    this.checkLogin(token)
  }
  loginByAccount() {
    const account = this.refs.account.value
    const password = this.refs.password.value
    if (!account || !password) {
      this.showModel({
        type: 'err',
        text: '账号密码不能为空'
      })
      return
    }
    const token = `Basic ${btoa(account + ':' + password)}`
    localStorage.setItem('githubToken', token)
    this.checkLogin(token)
  }
  async checkLogin() {
    // const { data } = await Axios({url:'https://api.github.com/user'})
    // if (data) {
    //   this.showModel({
    //     type: 'ok',
    //     text: '您已成功授权'
    //   })
    //   this.props.resetUserInfo(data)
    //   setTimeout(()=>this.props.reGetter(), 1600)
    // } else {
    //   this.showModel({
    //     type: 'err',
    //     text: '验证错误，请重试'
    //   })
    // }
    const data = "\"login\": \"ArthurYung\",\n" +
        "      \"id\": 29910365,\n" +
        "      \"node_id\": \"MDQ6VXNlcjI5OTEwMzY1\",\n" +
        "      \"avatar_url\": \"https://avatars.githubusercontent.com/u/29910365?v=4\",\n" +
        "      \"gravatar_id\": \"\",\n" +
        "      \"url\": \"https://api.github.com/users/ArthurYung\",\n" +
        "      \"html_url\": \"https://github.com/ArthurYung\",\n" +
        "      \"followers_url\": \"https://api.github.com/users/ArthurYung/followers\",\n" +
        "      \"following_url\": \"https://api.github.com/users/ArthurYung/following{/other_user}\",\n" +
        "      \"gists_url\": \"https://api.github.com/users/ArthurYung/gists{/gist_id}\",\n" +
        "      \"starred_url\": \"https://api.github.com/users/ArthurYung/starred{/owner}{/repo}\",\n" +
        "      \"subscriptions_url\": \"https://api.github.com/users/ArthurYung/subscriptions\",\n" +
        "      \"organizations_url\": \"https://api.github.com/users/ArthurYung/orgs\",\n" +
        "      \"repos_url\": \"https://api.github.com/users/ArthurYung/repos\",\n" +
        "      \"events_url\": \"https://api.github.com/users/ArthurYung/events{/privacy}\",\n" +
        "      \"received_events_url\": \"https://api.github.com/users/ArthurYung/received_events\",\n" +
        "      \"type\": \"User\",\n" +
        "      \"site_admin\": false";
    this.showModel({
      type: 'ok',
      text: '您已成功授权'
    })
    this.props.resetUserInfo(data)
  }
  submitGithub() {
    if (this.state.loginType === 'token') {
      this.loginByToken()
    } else {
      this.loginByAccount()
    }
  }
  switchType() {
    this.setState(({loginType}) => {
      if (loginType === 'token') {
        return { loginType: 'auth' }
      } else {
        return { loginType: 'token' }
      }
    })
  }
  render() {
    return (
      <div className={loginCss['login-box']}>
        <div className={loginCss['login-content']}>
          <img src={aboutImg.igit} alt=""/>
          <h3>已加密，请输入暗号</h3>

          <div className={loginCss['login-input-box']}>
            {
              this.state.loginType === 'token'
              ? <input type="text" placeholder="暗号" ref="token" onKeyUp={e => {e.keyCode==13 && this.submitGithub()}}/>
              : <div> 
                  <input type="text" placeholder="Github account" ref="account" onKeyUp={e => {e.keyCode==13 && this.submitGithub()}}/>
                  <input type="password" placeholder="Github password" ref="password" onKeyUp={e => {e.keyCode==13 && this.submitGithub()}}/>
                </div>
            }
            <button className={loginCss['login-input-submit']} onClick={()=> this.submitGithub()}>确定</button>
            {/*<a className={loginCss['login-input-switch']} onClick={()=>this.switchType()}>{ this.state.loginType==='token' ? '使用账号密码授权' : '使用account token授权' }</a>*/}
          </div>
        </div>
        <Model ref="model" type={this.state.type} text={this.state.text}/>
      </div>
    )
  }
}
