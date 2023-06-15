import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateForm from '../UpdateForm/UpdateForm';
import ModalMovie from '../ModalMovie/ModalMovie';

function MoviePopular(props) {
    const removeFromFav = async () => {
        const response = await axios.delete(`${props.serverURL}/delfav/${props.item.id}`);
    };

    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const showAddForm = () => {
        setShowAddModal(true);
    };

    const showUpdateForm = () => {
        setShowUpdateModal(true);
    };

    const handleClose = () => {
        setShowAddModal(false);
        setShowUpdateModal(false);
    };

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${props.item.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>{props.item.release_date}</Card.Text>
                    <Card.Text>{props.item.overview}</Card.Text>
                    {props.parentComp === 'Home' && (
                        <Button variant="outline-primary" onClick={showAddForm}>
                            Add to Favourite List
                        </Button>
                    )}
                    {props.parentComp === 'Trending' && (
                        <Button variant="outline-primary" onClick={showAddForm}>
                            Add to Favourite List
                        </Button>
                    )}
                    {props.parentComp === 'Favourite' && (
                        <>
                            <Button variant="outline-primary" onClick={removeFromFav}>
                                Remove From Favourite List
                            </Button>
                            <Button variant="outline-primary" onClick={showUpdateForm}>
                                Update Feedback
                            </Button>
                        </>
                    )}
                </Card.Body>
            </Card>
            <ModalMovie
                show={showAddModal}
                handleClose={handleClose}
                item={props.item}
                serverURL={props.serverURL}
            />
            <UpdateForm
                show={showUpdateModal}
                handleClose={handleClose}
                item={props.item}
                serverURL={props.serverURL}
            />
        </>
    );
}

export default MoviePopular;
