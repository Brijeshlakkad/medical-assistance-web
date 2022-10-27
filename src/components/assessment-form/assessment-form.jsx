import React from 'react'
import {  assessmentQuestions } from '../../lib/assessment-questions'
import './assessment-form.css'
import 'antd/dist/antd.min.css';
import {Form, Radio,Button } from 'antd'

export default function AssessmentForm(props) { 

    const QuestionList = () => {
        return Object.keys(assessmentQuestions).map((key, index) => {
            return (
                
                <Form.Item key={key} className={`${index%2===1?'odd':''}`}>
                    <div className='question-count'>Question { index+1} of 9</div>
                    <div className='assessment-question'>{assessmentQuestions[key]}</div>
                    <div className='radio-group'>
                        <Radio.Group >
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
    return (
        <div className='aform-container'>
            <Form  >
                <QuestionList/>
         
                <Form.Item
                    wrapperCol={{ span: 12, offset: 6 }}
                >
        <Button type="primary" htmlType="submit" className='submit-button'>
                        <div>
                        Submit
                        </div>
        </Button>
                </Form.Item> 
        </Form>
        </div>
    )
}
