
import React from 'react';
import Modal from 'react-modal';
import "./Modal.css";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        
    },
};

export const RejectModal = ({ modalIsOpen, closeModal }) => {

    let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    console.log("modal is", modalIsOpen, closeModal)
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Reject Button"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
            {/* <button onClick={closeModal}>close</button> */}
            {/* <div>Are you sure, you want to reject?</div> */}
            <div className='modalContainer'> 


                <div className='title-modal'>
                    <p>Are you sure, you want to reject?</p>
                </div>
                <form>
                    {/* <div className='footer' > */}
                        {/* <button onClick={closeModal}>close</button> */}
                    {/* </div> */}
                    <div className='footer'>
                        <button onClick={closeModal}>Close</button>
                        <button onClick={modalIsOpen}>Confirm</button>
                    </div>
                    {/* <button>Cancel</button> */}
                </form>
            </div>
        </Modal>)

}

