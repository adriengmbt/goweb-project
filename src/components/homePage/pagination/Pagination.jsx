import React from "react";
import { Link } from "react-router-dom";
import '../../../styles/Main.scss';

function Pagination( {totalPagesNum, currentPage, setCurrentPage} ) {

    const pageNumbers = [...Array(totalPagesNum).keys()].map(num => num + 1);
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const nextPage = () => {
        if (currentPage !== totalPagesNum) {
            setCurrentPage(currentPage + 1);
        }
    }
  
    return (
        <nav className="pagination">
            <ul className="pagination__list-container">
                <li className="pagination__list-item">
                    <Link className="pagination__list-link" 
                        onClick={prevPage} 
                        href="#"> 
                        Prev
                    </Link>
                </li>
                {pageNumbers.map(num => ( 
                    <li className="pagination__list-item" key={num}>
                        <Link className= {`pagination__list-link ${(currentPage === num )&& "pagination__list-link--active" }`}
                            onClick={() => setCurrentPage(num)}
                            href="#">
                            {num}
                        </Link>
                    </li>
                ))}
                <li className="pagination__list-item">
                    <Link className="pagination__list-link"
                        onClick={nextPage}
                        href="#">
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    );
}


export default Pagination;