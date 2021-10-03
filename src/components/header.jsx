import React, { Component } from 'react';
class Header extends Component {
    state = {}

    render() {
        var itemsperPage = [10, 15, 20, 25, 30];

        return (
            <React.Fragment>
                <div className="header-wrapper">
                    <div className="header-logo">InSplash</div>
                    <div className="search-wrapper">
                        <div className="m-2 text-center search-box">
                            <input type="text" onKeyPress={(e) => e.key === 'Enter' && this.props.handleSearch()} onChange={(e) => this.props.onChangeSearch(e)} placeholder="Search Images" />
                            <button onClick={this.props.handleSearch} className="search-btn">
                                <svg width="32" height="32" className="_35lll _3FpBp _24pSQ" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="extra-wrapper">
                        <div className="imagesperPage">
                            <p>Images per Page</p>
                            <select className="select-wrapper" onChange={(e) => this.props.onchangeItem(e)}>
                                {
                                    itemsperPage.map(i => <option key={i} value={i}>{i}</option>)
                                }
                            </select>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;