import { Button, Form, Radio } from 'antd';
import 'antd/dist/antd.min.css';
import React from 'react';
import { PATIENT_ASSESSMENT_QUESTIONS_SUCCESS, PATIENT_ASSESSMENT_SUBMIT_ERROR, PATIENT_ASSESSMENT_SUBMIT_FETCHING, PATIENT_ASSESSMENT_SUBMIT_SUCCESS } from '../../store/types';
import { ErrorMessage } from '../elements/error-message';
import { PrepareMessage } from '../elements/prepare-message';
import { SucessMessage } from '../elements/success-message';
import './assessment-form.css';

export default function AssessmentForm({ questionsState, questions, onAttempt, onSubmit, questionSubmitState, errorMessage }) {

    const QuestionList = ({ questions }) => {
        return questions.map((questionRecord, index) => {
            return (
                <Form.Item key={questionRecord.questionId} className={`${index % 2 === 1 ? 'odd' : ''}`}>
                    <div className='question-count'>Question {index + 1} of 9</div>
                    <div className='assessment-question'>{questionRecord.question}</div>
                    <div className='radio-group'>
                        <Radio.Group onChange={(e) => {
                            onAttempt(questionRecord.questionId, e.target.value);
                        }}>
                            <Radio.Button value={1}>
                                Yes
                            </Radio.Button>
                            <Radio.Button value={0}>
                                No
                            </Radio.Button>
                        </Radio.Group>
                    </div>
                </Form.Item>
            )
        })
    }
    return questionsState === PATIENT_ASSESSMENT_QUESTIONS_SUCCESS ? <div className='aform-container'>
        <Form  >
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
            <Form.Item
                wrapperCol={{ span: 12, offset: 6 }}
            >
                <Button type="primary" htmlType="submit" className='submit-button' onClick={onSubmit}>
                    <div>
                        Submit
                    </div>
                </Button>
            </Form.Item>
        </Form>
    </div> : <div>

    </div>
}
