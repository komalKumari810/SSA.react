import AboutItem from './AboutItem'

import React, { Component } from 'react'

export class About  extends Component {
  articles = [
    {
      "author": "Prince Kumar",
      "title": "CEO",
      "description": "He is CEO in this website"
    },
    {
      "author": "Abhishek Mishra",
      "title": "Manager",
      "description": "He is Manager in this website"
    },
    {
      "author": "Sagar Kumar",
      "title": "Engineer",
      "description": "He is Engineer in this website"
    }
  ]
  constructor(){
    super();
    this.state = {
      articles: this.articles
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1>GROUP MEMBER</h1>
        <div className="row my-5">
          {this.state.articles.map((element) => {
            return <div className="col md-4">
              <AboutItem title={element.title} description={element.description} author={element.author} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default About 
