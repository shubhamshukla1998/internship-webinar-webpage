
import React from 'react'


import '../../style/CompanyDetails.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const QuestionDisplay=({state})=> {
    console.log(state)
    
    const questionList = state.questions.length ? (
      state.questions.map(question => {
        return (
          <Row className="compDets_questionDisplay" key={question.id}>
            <Col xs={2} md={1} className="compDets_questionImageCol">
              <img src={question.image} alt="default"/>
            </Col>
            <Col xs={10} md={11} style={{paddingLeft:0}}>
            <Col xs={6} className="compDets_questionNameCol">
            <p>{question.name}</p>
            <p className="compDets_questionDate"> {question.time}</p>
            </Col>
            {/* <Col sm={3} className="compDets_questionTimeCol" >
            <p> {question.time}</p>
            </Col> */}
            <Col sm={12} className="compDets_questionReveiwCol" >
            <p>{question.ques}</p>
            </Col>
            </Col>
            {/* <span onClick={() => {deleteCompany(company.id)}}>{company.content}</span> */}
          </Row>
        )
      })
    ) : null;

    return (
       <Container className="compDets_questionDisplayContainer" >
         { questionList}
       </Container>
        
    )
}
export default QuestionDisplay