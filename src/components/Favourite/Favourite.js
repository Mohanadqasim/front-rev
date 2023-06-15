import axios from "axios";
import Movie from "../Movie/Movie";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";

function Favourite() {
    const serverURL = process.env.REACT_APP_serverURL;
    const [favouriteArr, setFavouriteArr] = useState([]);

    const getFavouriteMovies = async () => {
        const response = await axios.get(`${serverURL}/allfav`);
        setFavouriteArr(response.data);
    }
    useEffect(() => {
        getFavouriteMovies();
    }, [favouriteArr])


    return (
        <>
            <h1>Favourite</h1>
            <Row xs={1} md={5} className="g-4">
                {favouriteArr.map((item) => {
                    return (
                        <Col>
                            <Movie item={item} serverURL={serverURL} parentComp="Favourite"/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}
export default Favourite