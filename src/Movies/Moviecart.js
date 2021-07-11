import React from 'react';

const Moviecart = ({data}) => {
    return (
        <div class="card">
            <img src={`https://image.tmdb.org/t/p/w200/${data && data.poster_path}`} alt={`${data && data.title}Poster`} />
            <div class="card-body">
                <h5 class="card-title"> {data.title} </h5>
                {/* <p class="card-text"> {data.overview} </p> */}
            </div>
        </div>
    );
};

export default Moviecart;