import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';
import axios from 'axios';
function UpdateForm(props) {

    const sendFeedback = async (event) => {
        event.preventDefault();
        const obj = {
            title: props.item.title,
            release_date: props.item.release_date,
            poster_path: props.item.poster_path,
            overview: props.item.overview,
            feedback: event.target.feedback.value
        }
        const response = await axios.put(`${props.serverURL}/favmovie/${props.item.id}`, obj)
    }
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={sendFeedback}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{props.item.title}</Form.Label>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${props.item.poster_path}`} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control type="text" name='feedback' defaultValue={props.item.feedback}/>
                        </Form.Group>
                        <Button variant="primary" onClick={props.handleClose} type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default UpdateForm