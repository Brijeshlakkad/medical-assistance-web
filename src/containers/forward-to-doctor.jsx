import React from "react";
import FooterComponent from "../components/footer/footer";
import { ListOfDoctor } from "../components/list-of-doctor/list-of-doctor";
import Header from "./header";

export default function ForwardToDoctor(){

    return(

        <>
    <Header/>
    <ListOfDoctor/>
    <FooterComponent/>
    </>
        )
}
