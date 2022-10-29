import React from 'react'
import { Button, Table } from 'antd';
import { ScheduleMeeting } from 'react-schedule-meeting';
import './list-of-patient.css'

export default function ListOfPatient(props) {

    const { role } = props;
    const patientDetails = [{
        patientname: "Urvish",
        date: "12-09-2001"
    },
    {
        patientname: "Tanti",
        date: 'qwi12ed',
    }
    ]

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

    const counselorcColumn = [{
        title: 'Patient Name', dataIndex: 'patientname', key: 'patientname', align: 'center'
    },
    { title: ' Submission Date', dataIndex: 'date', key: 'date', align: 'center' },
    { title: 'View Assessment Form', dataIndex: '', key: '', align: 'center', render: () => <Button title="View Assessment" className='view-assessment'>View Assessment</Button> },
    { title: 'Schedule Appointment', dataIndex: '', key: '', align: 'center', render: () => <Button title="Schedule Appointment" onClick={() => OpenScheduler}>Schedule Appointment</Button> },
    { title: 'Forward to a Doctor', dataIndex: '', key: '', align: 'center', render: () => <Button title="Forward to a Doctor">Forward to a Doctor</Button> },
    { title: 'reject Patient', dataIndex: '', key: '', align: 'center', render: () => <Button title="Reject" danger ghost>Reject</Button> },
    ]
    const doctorColumn = [{
        title: 'Patient Name', dataIndex: 'patientname', key: 'patientname', align: 'center'
    },
    { title: ' Submission Date', dataIndex: 'date', key: 'date', align: 'center' },
    { title: 'View Assessment Form', dataIndex: '', key: '', align: 'center', render: () => <Button title="View Assessment" className='view-assessment'>View Assessment</Button> },
    { title: 'Schedule Appointment', dataIndex: '', key: '', align: 'center', render: () => <Button title="Schedule Appointment" onClick={() => OpenScheduler}>Schedule Appointment</Button> },
    { title: 'reject Patient', dataIndex: '', key: '', align: 'center', render: () => <Button title="Reject" danger ghost>Reject</Button> },
    ]


    return (
        <>
            <Table
                columns={role === 'doctor' ? doctorColumn : counselorcColumn} dataSource={patientDetails} size='middle'
            >
            </Table>
        </>
    )
}