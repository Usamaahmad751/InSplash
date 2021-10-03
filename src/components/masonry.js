import React, { Component } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
class ImageMasonry extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="masonary-wrapper">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                        <Masonry gutter={"20px"}>
                            {this.props.images.map(i => <div key={i} className="masonary-image">
                                <div className="masonry-content">
                                    <div className="masonry-image-user">
                                        <a href={i.user.portfolio_url} target="_blank">
                                            {i.user.name}</a></div>
                                    <div className="download-image">
                                        <a className="btn btn-light" taget="_blank" href={i.links.download + '?force=true'}>
                                            <svg width="32" height="32" className="Apljk" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg>
                                        </a>
                                    </div>
                                </div>
                                <img src={i.urls.regular} /></div>

                            )}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </React.Fragment>
        );
    }
}

export default ImageMasonry;