import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
function Home() {

    const [popularArr, setPopularArr] = useState([]);
    const serverURL = process.env.REACT_APP_serverURL;

    const getPopularMovies = async () => {
        const response = await axios.get(`${serverURL}/popular`);
        setPopularArr(response.data);
        // console.log(response.data)
    };

    useEffect(() => {
        getPopularMovies();
    }, [])
    
    return (
        <>
            <h1>Popular</h1>
            <Row xs={1} md={5} className="g-4">
                {popularArr.map((item) => {
                    return (
                        <Col>
                            <Movie item={item} serverURL={serverURL} parentComp="Home"/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}
export default Home;
