import classNames from 'classnames';
import React from 'react';
import { PATIENT_ASSESSMENT_QUESTIONS_SUCCESS, PATIENT_ASSESSMENT_SUBMIT_ERROR, PATIENT_ASSESSMENT_SUBMIT_FETCHING, PATIENT_ASSESSMENT_SUBMIT_SUCCESS } from '../../store/types';
import { BooleanRadioGroupComponent } from '../boolean-radio-group/boolean-radio-group';
import { ErrorMessage } from '../elements/error-message';
import { PrepareMessage } from '../elements/prepare-message';
import { SucessMessage } from '../elements/success-message';
import './assessment-form.css';

export default function AssessmentForm({ questionsState, questions, onAttempt, onSubmit, questionSubmitState, errorMessage }) {

    const QuestionList = ({ questions }) => {
        return questions.map((questionRecord, index) => {
            return (
                <div key={questionRecord.questionId} className={classNames(`${index % 2 === 1 ? 'odd' : ''}`, "question-container")}>
                    <div className='question-count'>Question {index + 1} of 9</div>
                    <div className='assessment-question'>{questionRecord.question}</div>
                    <div className='radio-group'>
                        <BooleanRadioGroupComponent onChange={(e) => {
                            onAttempt(questionRecord.questionId, e.target.value);
                        }} />
                    </div>
                </div>
            )
        })
    }
    return questionsState === PATIENT_ASSESSMENT_QUESTIONS_SUCCESS ? <div className='aform-container'>
        <QuestionList questions={questions} />
        {
            questionSubmitState === PATIENT_ASSESSMENT_SUBMIT_SUCCESS && <SucessMessage>Your assessment submitted successfully!</SucessMessage>
        }
        {
            questionSubmitState === PATIENT_ASSESSMENT_SUBMIT_FETCHING && <PrepareMessage>Please, wait while we submit your assessment!</PrepareMessage>
        }
        {
            questionSubmitState === PATIENT_ASSESSMENT_SUBMIT_ERROR && <ErrorMessage>{errorMessage}</ErrorMessage>
        }
        <br />
        <div className='submit-button-container'>
            <button type="primary" onClick={onSubmit}>Submit</button>
        </div>
    </div> : <div>

    </div>
}
