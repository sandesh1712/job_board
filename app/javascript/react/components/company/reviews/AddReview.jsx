import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AddReview({closeModal,addReview}) {
    const [show, setShow] = useState(false);

    const [review,setReview] = useState('');

    const [isError,setIsError] = useState(false);

    const reviewChangeHandler=(e)=>{
        setReview(e.target.value)
    }
    const handleClose = (newValueAdded) => {
        closeModal(!!newValueAdded);
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const handleSubmit = async ()=>{
        const res = await addReview(review);

        if(!res.ok){
            setIsError(true);
            return;
        }

        handleClose(true);
    }

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} >
                Add Review
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        isError && <div>
                            <p> Error Occured while adding a review!</p>
                        </div>
                    }

                    <div className="input-group">
                      <textarea className="form-control" type="textarea" onChange={reviewChangeHandler}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}