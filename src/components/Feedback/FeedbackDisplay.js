// let rating = stars.map(star=>{ return(
//     this.state.rating >= star? (<FontAwesomeIcon icon={faStar} className="compDets_yellowStar"/>):(<FontAwesomeIcon icon={faStar} className="compDets_emptyStar"/>)
// )})
// let feedback = this.state.feedback != '' ? (<div>{this.state.feedback}</div>):null
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

import '../../style/CompanyDetails.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeedbackDisplay=(props)=> {
    const stars=[1,2,3,4,5]
    const { state} = props
    console.log(state)
    const feedbackList = state.feedbacks.length ? (
        state.feedbacks.map(feedback => {
          return (
            <Row className="compDets_feedbackDisplay" key={feedback.id}>
              <Col xs={2} md={1} className="compDets_feedbackImageCol">
                <img src={feedback.image} alt="default"/>
              </Col>
              <Col xs={10} md={11} style={{paddingLeft:0}}>
              <Col xs={6} className="compDets_feedbackNameCol">
              <p>{feedback.name}</p>
              <p className="compDets_feedbackDate"> {feedback.time}</p>
              </Col>
              {/* <Col sm={3} className="compDets_feedbackTimeCol" >
              <p> {feedback.time}</p>
              </Col> */}
              <Col sm={12} className="compDets_feedbackReveiwCol" >
              <p>{feedback.feedback}</p>
              </Col>
              <Col sm={12} className="compDets_feedbackStarCol">
              {stars.map((star,i)=>{ return(
                         feedback.rating >= star ? (<FontAwesomeIcon icon={faStar} className="compDets_yellowStar"  key={i}/>):(<FontAwesomeIcon icon={faStar} className="compDets_emptyStar" key={i}/>)
                     )})}
              
              </Col>
              </Col>
              {/* <span onClick={() => {deleteCompany(company.id)}}>{company.content}</span> */}
            </Row>
          )
        })
      ) : null;
   
    return (
       <Container>
            {feedbackList}
       </Container>
         
    )
}
export default FeedbackDisplay