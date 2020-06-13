import React, { Component } from 'react';
import DefaultImg from '../../images/empty.jpg'
import QuestionDisplay from './QuestionDisplay';
import Question from './QuestionForm';

 class QuestionMain extends Component {

    state={
        questions:[
            { id:Math.random(),
              ques:'What are the perks of this internship ?',
              name:'User',
              time:'5th June 2020',
              image:DefaultImg
            }
        ]
    }
    addQuestions = (question) => {
        question.id = Math.random();
        let questions = [...this.state.questions,question];
        this.setState({
          questions : questions
        });
    }
    render() {
        return (
            <div>
                <Question addQuestions={this.addQuestions}/>
                <QuestionDisplay state={this.state}/>
            </div>
        )
    }
}

export default QuestionMain
