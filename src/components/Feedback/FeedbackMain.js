import React, { Component } from 'react';
import DefaultImg from '../../images/empty.jpg'
import FeedbackDisplay from './FeedbackDisplay';
import FeedbackForm from './FeedbackForm';


 class FeedbackMain extends Component {

    state={
        feedbacks:[
            { id:Math.random(),
              feedback:'Had a very educative experience !!',
              name:'User',
              rating:3,
              time:'5th June 2020',
              image:DefaultImg
            }
        ]
    }
    addFeedback = (feedback) => {
        feedback.id = Math.random();
        let feedbacks = [...this.state.feedbacks,feedback];
        this.setState({
          feedbacks : feedbacks
        });
    }
    render() {
        return (
            <div>
                <FeedbackForm addFeedback={this.addFeedback}/>
                <FeedbackDisplay state={this.state}/>
            </div>
        )
    }
}

export default FeedbackMain
