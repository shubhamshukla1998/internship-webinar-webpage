import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import '../../style/CompanyDetails.css';
import RatingComponent from 'react-star-rating-component';
import DefaultImg from '../../images/empty.jpg'



 class FeedbackForm extends Component {
    state={
        feedback:'',
        name:'user',
        rating: null ,
        image:DefaultImg,
        time:'5th June 2020' ,
        send:false
    }
           
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addFeedback(this.state)
        console.log(this.props)
        this.setState({
            feedback:"",
            send : true
          })
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue });
        console.log(this.state.rating)
      }
      
    render() {
        const { rating,send } = this.state;
        return (
           
                <div className="compDets_Feedback">
                { !send &&  <Container className="compDets_feedbackContainer" style={{paddingLeft:0 }}>
                  <h4 className="compDets_feedbackHeader">Voice your opinion by leaving a feedback and your rating</h4>
                       <Form className="compDets_FeedbackForm">
                   <Form.Group controlId="exampleForm.ControlTextarea1">
       <Form.Control className="compDets_TextfieldForm" as="textarea" rows="3" placeholder="Write a feedback !!!" name="feedback" value={this.state.feedback} onChange={this.handleChange} required/>
     </Form.Group>
     <div style={{ display: "-webkit-inline-box"}}>
           <div className="compDets_rating">
           <RatingComponent
             name="rate1"
             starCount={5}
             value={rating}
             onStarClick={this.onStarClick.bind(this)}
             className="compDets_starSize"
           />
           </div>
     <Button variant="primary" className="compDets_feedbackSendBtn" type="submit" onClick={this.handleSubmit}>
       Send
     </Button></div>
     </Form>
                       </Container>}
                       {
                         send && <div className="compDets_reviewSubmitted"> <Container >
                           <h4 className="compDets_feedbackHeader">Voice your opinion by leaving a feedback and your rating</h4>
                           <p> Your review has been submitted !!</p>
                         </Container></div>
                       }
                   
                </div>
                
          
        )
    }
}

export default FeedbackForm
