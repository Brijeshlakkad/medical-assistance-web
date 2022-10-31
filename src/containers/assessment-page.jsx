import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AssessmentForm from '../components/assessment-form/assessment-form'
import FooterComponent from '../components/footer/footer'
import { RequestState } from '../lib/types'
import { getAssessmentQuestions, submitAssessmentQuestions } from '../store/actions/patient'
import Header from './header'

export default function AssessmentPage(props) {
    const questions = useSelector(state => state.patient.questions);
    const questionsState = useSelector(state => state.patient.questionsState);
    const questionSubmitState = useSelector(state => state.patient.questionSubmitState);
    const errorMessage = useSelector(state => state.patient.errorMessage);
    const dispatch = useDispatch();

    const [attemptedQuestions, setAttemptedQuestions] = useState({});

    useEffect(() => {
        if (questionsState === RequestState.NULL) {
            dispatch(getAssessmentQuestions())
        }
    }, [dispatch, questionsState]);

    const onAttempt = (questionId, answer) => {
        attemptedQuestions[questionId] = answer;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const attemptedQuestionList = [];
        const questionIds = Object.keys(attemptedQuestions);
        for (let index = 0; index < questionIds.length; index++) {
            const attempt = attemptedQuestions[questionIds[index]];
            attemptedQuestionList.push({
                questionId: questionIds[index],
                answer: attempt
            })
        }

        setAttemptedQuestions({});
        dispatch(submitAssessmentQuestions(attemptedQuestionList));
    }

    return (
        <>
            <Header />
            <AssessmentForm
                questionsState={questionsState}
                questions={questions}
                onAttempt={onAttempt}
                onSubmit={onSubmit}
                questionSubmitState={questionSubmitState}
                errorMessage={errorMessage}
            />
            <FooterComponent />
        </>
    )
}