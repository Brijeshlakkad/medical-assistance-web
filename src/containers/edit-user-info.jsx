import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import EditInfoComponent from '../components/edit-user-info/edit-info-component'
import InfoComponent from '../components/edit-user-info/info-component'
import FooterComponent from '../components/footer/footer'
import Header from './header'

const EditUserInfo = () => {

    const [user, setUser] = useState({
        fullName: "",
        emailAddress: "",
        addressLine: "",
        city: "",
        province: "",
        country: "",
        dateOfBirth: "",
        phoneNumber: "",
    });

    const [showForm,setShowForm]= useState(false)



    useEffect(() => {
        //fetch data here
        const data = {
            fullName:"Aniket Tailor",
            email:"aniket.tailor@gmail.com",
            dateOfBirth:"21-06-1998",
            addressLine:"4 cmd road",
            city:"Montreal",
            province:"Quebec",
            phoneNumber:"1231231231"
        }
        setUser(data)
    }, [])

    const onFieldChange = (fieldName, value) => {
        setUser({
            ...user,
            [fieldName]: value
        });
    }

    const onSubmit = (event) => {
        setShowForm(false)
        //handle submit
    }
    
  return (
    <>
        <Header />
        <div style={{display:"flex", margin:"50px 150px"}}>
        { user && <InfoComponent data = { user} toggleForm={()=> setShowForm(true)}/>}
        { user && showForm && <EditInfoComponent user = { user} onFieldChange={onFieldChange}  onSubmit={onSubmit}/>}
        </div>
        <FooterComponent></FooterComponent>
    </>
  )
}

export default EditUserInfo