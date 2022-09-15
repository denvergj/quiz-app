import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ScoreBox from './quiz/ScoreBox.jsx';
import QuestionList from './quiz/QuestionList.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is you name?',
					choices: [
						{
							id: 'a',
							text: 'Denver'
						},
						{
							id: 'b',
							text: 'Jack'
						},
						{
							id: 'c',
							text: 'Kolan'
						}
					],
					correct: 'a'
				},
				{
					id: 2,
					text: 'What is your mothers name?',
					choices: [
						{
							id: 'a',
							text: 'Sarah'
						},
						{
							id: 'b',
							text: 'Joanne'
						},
						{
							id: 'c',
							text: 'Kate'
						}
					],
					correct: 'b'
				},
				{
					id: 3,
					text: 'What is your favourite football team?',
					choices: [
						{
							id: 'a',
							text: 'Bolton'
						},
						{
							id: 'b',
							text: 'Wolves'
						},
						{
							id: 'c',
							text: 'Arsenal'
						}
					],
					correct: 'c'
				},
				{
					id: 4,
					text: 'What is your boyfriend called?',
					choices: [
						{
							id: 'a',
							text: 'Denver'
						},
						{
							id: 'b',
							text: 'Thomas'
						},
						{
							id: 'c',
							text: 'Ian'
						}
					],
					correct: 'a'
				}
			],
			score: 0,
			current: 1
		}
	}
	
	setCurrent(current) {
		this.setState({
			current
		});
	}
	
	
	setScore(score) {
		this.setState({
			score
		});
	}
	
	render() {
		
		if(this.state.current > this.state.questions.length) {
			var scoreBox = '';
			var results = <Results {...this.state} />;
		} else {
			var scoreBox = <ScoreBox {...this.state} />;
			var results = '';
		}
		
		return (
			<div>
				{scoreBox}
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
				{results}
			</div>	
		);
	}
};

export default App;