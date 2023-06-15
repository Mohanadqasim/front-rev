import axios from "axios";
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Movie from "../Movie/Movie";

function Trending() {

    const serverURL = process.env.REACT_APP_serverURL;
    const [trendingArr, setTrendingArr] = useState([]);

    const getTrendingMovie = async () => {
        const response = await axios.get(`${serverURL}/trending`);
        setTrendingArr(response.data);
        console.log(response.data)
    }

    useEffect(() => {
        getTrendingMovie();
    }, [])


    return (
        <>
        <h1>Trending</h1>
        <Row xs={1} md={5} className="g-4">
            {trendingArr.map((item) => {
                return (
                    <Col>
                        <Movie item={item} serverURL={serverURL} parentComp="Trending" />
                    </Col>
                )
            })}
        </Row>
    </>
    )
}
export default Trending;