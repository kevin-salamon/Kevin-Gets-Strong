import React, { useRef, useState } from 'react'
import "../style.css";
import Modal from 'react-bootstrap/Modal';
import { updateEntry } from "../utils/API";

function UpdateEntryModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const caloriesRef = useRef();
    const proteinRef = useRef();
    const workoutsRef = useRef();
    const weightRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const updatedEntry = {
            calories: caloriesRef.current.value,
            protein: proteinRef.current.value,
            workouts: workoutsRef.current.value,
            weight: weightRef.current.value
        };

        updateEntry(props.id, updatedEntry)
            .then(res => {
                console.log(res)
                props.handleGetSavedEntries();
            });
        
        handleClose();
    }

    return (
        <>
            <button variant="primary" style={{width: "100%"}} className="entry-button" onClick={handleShow}>
                Edit
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Edit today's fitness measurables: </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "rgb(255, 179, 38)" }}>
                    <form>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={caloriesRef}
                                type="text"
                                placeholder="Calories"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={proteinRef}
                                type="text"
                                placeholder="Protein"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={workoutsRef}
                                type="text"
                                placeholder="Workouts"
                            />
                        </div>

                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={weightRef}
                                type="text"
                                placeholder="Weight"
                            />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer className="text-center">
                    <button variant="primary" className="job-button-small" onClick={handleSubmit}>
                        Edit Entry
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateEntryModal;