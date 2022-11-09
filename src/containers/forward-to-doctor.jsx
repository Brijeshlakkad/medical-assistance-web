import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FooterComponent from "../components/footer/footer";
import { ListOfDoctor } from "../components/list-of-doctor/list-of-doctor";
import { LoadingComponent } from "../components/loading/landing-page";
import { RequestState } from "../lib/types";
import { fetchDoctorList } from "../store/actions/couselor-lod";
import Header from "./header";

export default function ForwardToDoctor() {
    const dispatch = useDispatch();
    const location = useLocation();

    const requestState = useSelector(state => state.counselorLOD.state);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = queryParams.get("page");
        dispatch(fetchDoctorList(page));
    }, [dispatch, location]);

    const payload = useSelector(state => state.counselorLOD.payload);

    return (
        requestState !== RequestState.COMPLETED ?
            <LoadingComponent /> :
            <>
                <Header />
                <ListOfDoctor payload={payload} />
                <FooterComponent />
            </>
    )
}
