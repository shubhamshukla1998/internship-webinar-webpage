import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import '../../style/CompanyDetails.css';
import DefaultImg from '../../images/empty.jpg'

 class Question extends Component {
    state={
        ques:'',
        name:'user',
        image:DefaultImg,
        time:'5th June 2020'  
    }

           
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addQuestions(this.state)
        console.log(this.state)
        this.setState({
            ques:""
          })
    }
    render() {
        return (
            <div>
                <div className="compDets_Question">
                    <Container className="compDets_QuesContainer"style={{paddingLeft:0 }}>
                    <h4 className="compDets_questionHeader">Get your queries and questions answered. Discuss here!</h4>
                    <Form className="compDets_questionForm" >
                <Form.Group controlId="exampleForm.ControlTextarea1" >
    <Form.Control required={true} as="textarea" className="compDets_TextfieldForm"  rows="3" placeholder="Ask a question (be specific)" name="ques"  onChange={this.handleChange} value={this.state.ques} />
  </Form.Group>
   
  <Button variant="primary" className="compDets_QuestionSendBtn" type="submit" onClick={this.handleSubmit}>
    Send
  </Button>
  </Form>
                    </Container>
                </div>
                
            </div>
        )
    }
}

export default Question
