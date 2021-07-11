import React from 'react';
import {Link} from "react-router-dom";

const Page = ({page,setPage}) => {
    return (
        <div className="pagination">
            <Link onClick={() => setPage(--page)}>&laquo;</Link>
            <Link className={`${page === 1 ? 'active': ""}`} onClick={() => setPage(1)}>1</Link>
            <Link className={`${page === 2 ? 'active': ""}`} onClick={() => setPage(2)}>2</Link>
            <Link className={`${page === 3 ? 'active': ""}`} onClick={() => setPage(3)}>3</Link>
            <Link className={`${page === 4 ? 'active': ""}`} onClick={() => setPage(4)}>4</Link>
            <Link className={`${page === 5 ? 'active': ""}`} onClick={() => setPage(5)}>5</Link>
            <Link className={`${page === 6 ? 'active': ""}`} onClick={() => setPage(6)}>6</Link>
            <Link className={`${page === 7 ? 'active': ""}`} onClick={() => setPage(7)}>7</Link>
            <Link className={`${page === 8 ? 'active': ""}`} onClick={() => setPage(8)}>8</Link>
            <Link className={`${page === 9 ? 'active': ""}`} onClick={() => setPage(9)}>9</Link>
            <Link className={`${page === 10 ? 'active': ""}`} onClick={() => setPage(10)}>10</Link>
            <Link onClick={() => setPage(++page)}>&raquo;</Link>
        </div>
    );
};

export default Page;