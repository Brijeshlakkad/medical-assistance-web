import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MakeAppointment } from '../components/make-appointment/make-appointment';
import { toUTCDate, toUTCDateTime } from '../lib/time-util';
import { RequestState } from '../lib/types';
import { fetchAppointmentsForDate, makeAppointment } from '../store/actions/counselor-appointments';

export default function CounselorMakeAppointment({ patientRecordId, onUpdateVisibility }) {
    const [date, setDate] = useState(toUTCDate());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAppointmentsForDate(date))
    }, [dispatch, date]);

    const requestState = useSelector(state => state.counselorAppointments.appointmentsForDate[date] ?
        state.counselorAppointments.appointmentsForDate[date].state : RequestState.NULL);

    const payload = useSelector(state => requestState === RequestState.COMPLETED ? state.counselorAppointments.appointmentsForDate[date].payload : null);

    const onMakeAppointment = ({ startTime, endTime }) => {
        dispatch(makeAppointment(patientRecordId, toUTCDateTime(startTime), toUTCDateTime(endTime)));
    };

    return <MakeAppointment
        onUpdateVisibility={onUpdateVisibility}
        onSelectDate={setDate}
        payload={payload}
        requestState={requestState}
        onMakeAppointment={onMakeAppointment}
    />
}