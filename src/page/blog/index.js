import React,{Component} from 'react'
import Switch from '@c/switch'
import Axios from '@/utils/request'
import Menu from './menu'
import Article from './article'
import Pop from '@c/windo'
import isMobile from '@/utils/isPhone'
import * as blogCss from './blog.scss'

export default class Blog extends Component {
  constructor(){
    super()
    this.state = {
      switchin: true,
      articles: [],
      currentArticle: {},
      lookPage: false,
      showLogin: false,
      userInfo: {}
    }
  }
  switchOut(n){
    this.setState({
      switchin: n
    })
  }
  componentWillMount() {
    this.getArticleList()
    // this.getUserInfo()
  }
  changeArticle(article) {
    this.refs.articleComponent.resetScrollTop()
    this.setState({
      currentArticle: article,
      lookPage: true
    })
  }
  toggleMenu() {
    this.setState(({ lookPage }) => ({
      lookPage: !lookPage
    }))
  }
  setLoginStatus(status) {
    this.setState({
      showLogin: status
    })
  }
  showLogin() {
    this.setState({
      showLogin: true,
      lookPage: true,
      currentArticle: {
        title: '刘语',
        needLoginGithub: true
      }
    })
  }
  async getArticleList() {
    try {
      const {data} = "[\n" +
      "  {\n" +
      "    \"url\": \"#\",\n" +
      "    \"repository_url\": \"#\",\n" +
      "    \"labels_url\": \"#\",\n" +
      "    \"comments_url\": \"#\",\n" +
      "    \"events_url\": \"#\",\n" +
      "    \"html_url\": \"#\",\n" +
      "    \"id\": 841694029,\n" +
      "    \"node_id\": \"MDU6SXNzdWU4NDE2OTQwMjk=\",\n" +
      "    \"number\": 13,\n" +
      "    \"title\": \"刘言刘语\",\n" +
      "    \"user\": {\n" +
      "\n" +
      "    },\n" +
      "    \"labels\": [\n" +
      "\n" +
      "    ],\n" +
      "    \"state\": \"open\",\n" +
      "    \"locked\": false,\n" +
      "    \"assignee\": null,\n" +
      "    \"assignees\": [\n" +
      "\n" +
      "    ],\n" +
      "    \"milestone\": null,\n" +
      "    \"comments\": 1,\n" +
      "    \"created_at\": \"2021-03-26T07:58:05Z\",\n" +
      "    \"updated_at\": \"2021-04-29T09:47:31Z\",\n" +
      "    \"closed_at\": null,\n" +
      "    \"author_association\": \"OWNER\",\n" +
      "    \"active_lock_reason\": null,\n" +
      "    \"body\": \"#哎呦喂。\\r\\n\\r\\n\",\n" +
      "    \"reactions\": {\n" +
      "      \"url\": \"#\",\n" +
      "      \"total_count\": 0,\n" +
      "      \"+1\": 0,\n" +
      "      \"-1\": 0,\n" +
      "      \"laugh\": 0,\n" +
      "      \"hooray\": 0,\n" +
      "      \"confused\": 0,\n" +
      "      \"heart\": 0,\n" +
      "      \"rocket\": 0,\n" +
      "      \"eyes\": 0\n" +
      "    },\n" +
      "    \"timeline_url\": \"#\",\n" +
      "    \"performed_via_github_app\": null\n" +
      "  }\n" +
      "\n" +
      "]\n";
      this.setState({
        articles: data,
        currentArticle: data[0]
      })
    } catch (err) {
      this.showLogin()
    }
  }
  async getUserInfo() {
    const { data } = await Axios({ url: '#'})
    if (data) {
      this.resetUserInfo(data)
    }
  }
  resetUserInfo(info) {
    this.setState({
      userInfo: info
    })
  }
  render(){
    const { articles, currentArticle, lookPage, userInfo } = this.state
    let blogClassNames = [blogCss['blog-main']]
    if (isMobile) {
      blogClassNames.push(blogCss['blog-mobile'])
    }
    if (isMobile && lookPage) {
      blogClassNames.push(blogCss['blog-look'])
    }
    blogClassNames = blogClassNames.join(' ')
    return (
      <div className="page app-center">
        <div className={ blogClassNames }>
          <Pop
            noClose={true}
            title="刘言"
            type="white"
            unmove={true}
            class={blogCss['blog-menu-box']}
          >
            <Menu articles={ articles } currentArticle = { currentArticle } changeArticle={ article => this.changeArticle(article)}/>
          </Pop>
          <Pop
            noClose={true}
            title={currentArticle.title || ''}
            type="white"
            unmove={true}
            class={blogCss['blog-article-box']}
          >
            <Article 
              ref="articleComponent" 
              showLogin={()=>this.showLogin()} 
              reGetter={()=>this.getArticleList()} 
              resetUserInfo={data=>this.resetUserInfo(data)}
              data={ currentArticle } 
              userInfo={userInfo}
            />
          </Pop>
        </div>
        {
          isMobile 
          ? <span 
            className={blogCss['blog-toggle']} 
            onClick={() => this.toggleMenu()}>
              {lookPage ? 'BACK' : 'VIEW'}
            </span> 
          : ''
        }
        {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''}
      </div>
    )
  }
}
