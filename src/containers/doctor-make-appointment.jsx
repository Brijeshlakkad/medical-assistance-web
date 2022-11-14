import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MakeAppointment } from "../components/make-appointment/make-appointment";
import { toUTCDate, toUTCDateTime } from "../lib/time-util";
import { RequestState } from "../lib/types";
import {
  fetchAppointmentsForDate,
  makeAppointment,
} from "../store/actions/doctor-appointments";

export default function DoctorMakeAppointment({
  patientRecordId,
  onUpdateVisibility,
  patient,
}) {
  const [date, setDate] = useState(toUTCDate());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointmentsForDate(date));
  }, [dispatch, date]);

  const requestState = useSelector((state) =>
    state.doctorAppointments.appointmentsForDate[date]
      ? state.doctorAppointments.appointmentsForDate[date].state
      : RequestState.NULL
  );

  const payload = useSelector((state) =>
    requestState === RequestState.COMPLETED
      ? state.doctorAppointments.appointmentsForDate[date].payload
      : null
  );

  const onMakeAppointment = ({ startTime, endTime }) => {
    dispatch(
      makeAppointment(
        patientRecordId,
        toUTCDateTime(startTime),
        toUTCDateTime(endTime)
      )
    );
  };

  return (
    <MakeAppointment
      patient={patient}
      onUpdateVisibility={onUpdateVisibility}
      onSelectDate={setDate}
      payload={payload}
      requestState={requestState}
      onMakeAppointment={onMakeAppointment}
    />
  );
}
