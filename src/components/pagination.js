import React, { Component } from 'react';
class Pagination extends Component {
    state = {};
    render() {
        const pageNumbers = [];
        for (let i = 1; i <= 10; i++) {
            pageNumbers.push(i)
        }
        return (
            <nav aria-label="Page navigation" className="pagination-wrapper">
                <ul className="pagination text-center">
                    {pageNumbers.map(i =>
                        <li key={i} className={"page-item " + (this.props.currentPage === i ? "active" : "")} ><a className="page-link" onClick={() => this.props.handlePaginate(i)} href="!#" >{i}</a></li>
                    )}

                </ul>
            </nav>
        );
    }
}

export default Pagination;