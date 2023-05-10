import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pagination.scss"

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
            <ul className="pagination__list">
                <li className="pagination__item">
                    <Link className="pagination__link" 
                        onClick={prevPage} 
                        href="#"> 
                        Prev
                    </Link>
                </li>
                {pageNumbers.map(num => ( 
                    <li className="pagination__item" key={num}>
                        <Link className= {`page__item${currentPage === num ? "--active" : ""}`}
                            onClick={() => setCurrentPage(num)}
                            href="#">
                            {num}
                        </Link>
                    </li>
                ))}
                <li className="pagination__item">
                    <Link className="pagination__link"
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