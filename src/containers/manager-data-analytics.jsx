import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FooterComponent from '../components/footer/footer';
import HeaderComponent from '../components/header/header';
import ManagerDataAnalyticsComponent from '../components/manager-data-analytics/manager-data-analytics';
import { toEndHourDate, toStartHourDate, toUTCDateInDate } from '../lib/time-util';
import { fetchReport, fetchReportParameters } from '../store/actions/admin';


var currentDate = toUTCDateInDate(new Date());
var startDate = toUTCDateInDate(new Date(currentDate.getFullYear(), 0, 1));
var days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));
export default function ManagerDataAnalytics() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReportParameters());
        // get today's report
        dispatch(fetchReport(toStartHourDate(new Date()), toEndHourDate(new Date())));
    }, [dispatch]);

    const reportParametersRequestState = useSelector(state => state.admin.reportParameters.state);
    const reportParameters = useSelector(state => state.admin.reportParameters.payload);
    const reportParametersErrorMessage = useSelector(state => state.admin.reportParameters.errorMessage);

    const reportDataRequestState = useSelector(state => state.admin.reportData.state);
    const reportData = useSelector(state => state.admin.reportData.payload);
    const reportDataErrorMessage = useSelector(state => state.admin.reportData.errorMessage);

    const onDateRangeChanged = (startDateTime, endDateTime) => {
        console.log("startDateTime, endDateTime", new Date(startDateTime), new Date(endDateTime));
        dispatch(fetchReport(startDateTime, endDateTime));
    }

    const [chartCategory, setChartCategory] = useState(0);

    const [inputValues, setInputValues] = useState({
        day: `${new Date().toISOString().slice(0, 10)}`,
        week: `${toUTCDateInDate(new Date()).getFullYear()}-W${Math.ceil(days / 7)}`,
        month: `${toUTCDateInDate(new Date()).getFullYear()}-${(toUTCDateInDate(new Date()).getMonth()) + 1}`,
    });

    const onChangeInputValues = (key, value) => {
        setInputValues({
            ...inputValues,
            [key]: value
        })
    }

    return (
        <>
            <HeaderComponent />
            <ManagerDataAnalyticsComponent
                reportParametersRequestState={reportParametersRequestState}
                reportDataRequestState={reportDataRequestState}
                reportParameters={reportParameters}
                reportParametersErrorMessage={reportParametersErrorMessage}
                reportData={reportData}
                reportDataErrorMessage={reportDataErrorMessage}
                onDateRangeChanged={onDateRangeChanged}
                chartCategory={chartCategory}
                onChangeChartCategory={setChartCategory}
                inputValues={inputValues}
                onChangeInputValues={onChangeInputValues}
            />
            <FooterComponent />
        </>
    )
}

