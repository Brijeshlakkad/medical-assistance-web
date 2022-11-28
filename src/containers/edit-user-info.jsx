import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditInfoComponent from '../components/edit-user-info/edit-info-component'
import InfoComponent from '../components/edit-user-info/info-component'
import FooterComponent from '../components/footer/footer'
import { LoadingComponent } from '../components/loading/loading'
import { VerticalSpace } from '../components/vertical-space/vertical-space'
import { toBirthDateFormat, toUTCDate } from '../lib/time-util'
import { RequestState } from '../lib/types'
import { fetchProfile, updateProfile } from '../store/actions/user'
import Header from './header'

const EditUserInfo = ({ role }) => {
    const [user, setUser] = useState({});
    const [showForm, setShowForm] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfile(role));
    }, [dispatch, role]);

    const requestState = useSelector(state => state.user.profile.state);
    const editRequestState = useSelector(state => state.user.profileEdit.editState);
    const profile = useSelector(state => state.user.profile.payload);
    const profileUpdated = useSelector(state => state.user.profileEdit.payload);
    const profileUpdatedErrorMessage = useSelector(state => state.user.profileEdit.errorMessage);
    const errorMessage = useSelector(state => state.user.profile.errorMessage);

    useEffect(() => {
        if (requestState === RequestState.COMPLETED){
            setUser({
                ...profile,
                dateOfBirth: toBirthDateFormat(profile.dateOfBirth)
            });
        }
    }, [setUser, requestState, profile]);

    useEffect(() => {
        if (editRequestState === RequestState.COMPLETED){
            setUser({
                ...profileUpdated,
                dateOfBirth: toBirthDateFormat(profileUpdated.dateOfBirth)
            });
        }
    }, [setUser, editRequestState, profileUpdated]);

    const onFieldChange = (fieldName, value) => {
        setUser({
            ...user,
            [fieldName]: value
        })
    }

    const onSubmit = (event) => {
        const updatedUser = {
            ...user,
            dateOfBirth: toUTCDate(user.dateOfBirth)
        }
        //handle submit
        dispatch(updateProfile(updatedUser, role));
    }

    const onPressBack = () => {
        setShowForm(false)
    }

    return (
        <>
            <Header />
            {
                requestState !== RequestState.COMPLETED ?
                    <LoadingComponent /> :
                    <div style={{ display: "flex", margin: "50px 150px" }}>
                        {user && Object.keys(user).length && !showForm && <InfoComponent role={role} data={user} toggleForm={() => setShowForm(true)} />}
                        {user && Object.keys(user).length && showForm && <EditInfoComponent
                            role={role}
                            user={user}
                            requestState={editRequestState}
                            errorMessage={profileUpdatedErrorMessage}
                            onFieldChange={onFieldChange}
                            onSubmit={onSubmit}
                            onPressBack={onPressBack}
                            />}
                    </div>
            }
            <VerticalSpace height={10} />
            <FooterComponent></FooterComponent>
        </>
    )
}

export default EditUserInfo