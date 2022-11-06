import React from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import "./make-appointment.css";

export function MakeAppointment(props) {
  const { visibility } = props;
  return (
    <div className="modal-appointment">
      <div className="modal-content">
        <div className="modal-heading">
          <div className="patient-id">
            Schedule appointment for Patient Name
          </div>
          <div className="close" onClick={() => visibility(false)}>
            &times;
          </div>
        </div>
        <ScheduleMeeting
          // ... other props
          availableTimeslots={[0, 1, 2, 3, 4, 5].map((id) => {
            return {
              id,
              startTime: new Date(
                new Date(
                  new Date().setDate(new Date().getDate() + id)
                ).setHours(9, 0, 0, 0)
              ),
              endTime: new Date(
                new Date(
                  new Date().setDate(new Date().getDate() + id)
                ).setHours(17, 0, 0, 0)
              ),
            };
          })}
          // Language props
          onStartTimeSelect={() => {
            visibility(false);
            alert("Your appointment with Patient Name has been confirmed");
          }}
          lang_cancelButtonText="Cancel"
          lang_confirmButtonText="Confirm"
          lang_emptyListText="No slots available for today"
          lang_goToNextAvailableDayText="Next Available"
          lang_noFutureTimesText="No future times available"
          // Date format props
          format_nextFutureStartTimeAvailableFormatString="cccc, LLLL do"
          format_selectedDateDayTitleFormatString="cccc, LLLL do"
          format_selectedDateMonthTitleFormatString="LLLL yyyy"
          format_startTimeFormatString="h:mm a"
        />
      </div>
    </div>
  );
}
