import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScheduleMeeting } from 'react-schedule-meeting';
import styled from 'styled-components';
import { PathConstants } from '../../lib/path-constants';
import './list-of-patient.css';

const Button = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    color: rgba(0,0,0,.85);
    border: 1px solid #d9d9d9;
    background: #fff;

    &:active, &:focus, &:hover {
        text-decoration: none;
        background: #fff;
    }
    
    &:focus, &:hover {
        color: #40a9ff;
        border-color: #40a9ff;
        background: #fff;
    }

    &, &:active, &:focus {
        outline: 0;
    }
    
    &.dangerous {
        color: #ff4d4f;
        border-color: #ff4d4f;
        text-shadow: none;
    }

    &.dangerous:hover {
        text-decoration: none;
        background: #fff;
    }
`

const Table = styled.table`
    width: 100%;
    text-align: left;
    border-radius: 2px 2px 0 0;
    border-collapse: separate;
    border-spacing: 0;

    th {
        text-align: center;
    }
    tr > td {
        padding: 12px 8px;
    }
`

export default function ListOfPatient({ role, patientList }) {

    const OpenScheduler = () => {
        return (< div style={{ zIndex: 99999, position: 'relative' }}>
            <ScheduleMeeting
                availableTimeslots={['9am to 10am']}
                lang_cancelButtonText="Cancel"
                lang_confirmButtonText="Confirm"
                lang_emptyListText="No times available"
                lang_goToNextAvailableDayText="Next Available"
                lang_noFutureTimesText="No future times available"
                format_nextFutureStartTimeAvailableFormatString="cccc, LLLL do"
                format_selectedDateDayTitleFormatString="cccc, LLLL do"
                format_selectedDateMonthTitleFormatString="LLLL yyyy"
                format_startTimeFormatString="h:mm a"
            />
        </div>
        )
    }

    const navigate = useNavigate();

    const onViewAssessment = (patientRecordId) => {
        navigate(PathConstants.Internal_CounselorPatientDetails + patientRecordId);
    }

    const counselorcColumn = [{
        title: 'Patient Name', key: 'patientname', align: 'center', getValue: (row, index) => {
            return row['patient'] ? row['patient']['fullName'] : `Patient ${index + 1}`;
        }
    },
    {
        title: 'Submission Date', key: 'assessmentCreatedAt', getValue: (row, index) => {
            return `${(new Date(row['assessmentCreatedAt'])).toISOString()}`
        }
    },
    {
        title: 'View Assessment Form', key: '', render: ({data}) =>
            <Button title="View Assessment" className='view-assessment' onClick={(e) => {
                e.preventDefault();
                onViewAssessment(data.patientRecordId);
            }}>View Assessment</Button>
    },
    { title: 'Schedule Appointment', key: '', render: (data) => <Button title="Schedule Appointment" onClick={() => OpenScheduler}>Schedule Appointment</Button> },
    { title: 'Forward to a Doctor', key: '', render: (data) => <Button title="Forward to a Doctor">Forward to a Doctor</Button> },
    { title: 'reject Patient', key: '', render: (data) => <Button title="Reject" className={classNames('dangerous')} >Reject</Button> },
    ]
    const doctorColumn = [{
        title: 'Patient Name', key: 'patientname', align: 'center', getValue: (row, index) => {
            return row['patient'] ? row['patient']['fullName'] : `Patient ${index + 1}`;
        }
    },
    {
        title: 'Submission Date', key: 'assessmentCreatedAt', align: 'assessmentCreatedAt', getValue: (row, index) => {
            return `${(new Date(row['assessmentCreatedAt'])).toISOString()}`
        }
    },
    { title: 'View Assessment Form', key: '', render: (data) => <Button title="View Assessment" className='view-assessment'>View Assessment</Button> },
    { title: 'Schedule Appointment', key: '', render: (data) => <Button title="Schedule Appointment" onClick={() => OpenScheduler}>Schedule Appointment</Button> },
    { title: 'reject Patient', key: '', render: (data) => <Button title="Reject" danger ghost>Reject</Button> },
    ]

    const columnSchema = role === 'doctor' ? doctorColumn : counselorcColumn

    return (
        <>
            <Table size='middle'
            >
                <thead>
                    <tr>
                        {
                            columnSchema.map((columnS, index) => {
                                return <th key={`${index}-${columnS.key}`}>{columnS.title}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        patientList.map((row, index) => {
                            return <tr key={`record-${index}`}>
                                {
                                    columnSchema.map((columnS, index) => {
                                        return <td key={`${index}-${columnS.key}`}>
                                            {columnS.render ? <columnS.render data={row} /> :
                                                columnS.getValue ?
                                                    <span>{columnS.getValue(row)}</span> :
                                                    <span>{row[columnS.key]}</span>}
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}