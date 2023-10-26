import React, { Component } from 'react'

export class AboutItem extends Component {
  render() {
    let { title, description, author } = this.props;
    return (
      <div className="container my-5">
        <div className="card" style={{width: "18rem"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdJlsOioUmIKc_mEQGjAidbXZ8VDM6yWKSoj6rIS9FQMFoyt8x2Ax0KmYmJNnRtfkBc4&usqp=CAU" className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-author">{author}</h2>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutItem

  