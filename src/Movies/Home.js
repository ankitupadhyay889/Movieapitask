import React, { useEffect, useState } from 'react';
import axios from "axios";
import Moviecart from "./Moviecart";
import "../App.css"
import Page from './Page';

const Home = () => {

    const [data, setdata] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=7b5cfc81dda4178d68de521426cb274b&language=en-US&page=${page}`)
            setdata(res.data.results);
            console.log(res.data.results);
        }
        fetchData();
    },[page])

    return (
        <div className="container">
            <div className="grid">
                {
                    data && data.map((item , id) => <Moviecart key={id} data={item} />)
                }
            </div>
            <div className="mb-5 mt-5">
                <Page page={page} setPage={setPage}/>
            </div>
        </div>
    );
};

export default Home;