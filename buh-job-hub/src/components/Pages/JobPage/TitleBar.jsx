import React, { Component } from 'react'

export default class TitleBar extends Component {
    render() {
        return (
            <div id="titlebar" className="photo-bg" style={{ background: 'url(images/job-page-photo.jpg)' }}>
                <div className="container">
                    <div className="ten columns">
                        <span><a href="browse-jobs.html">Restaurant / Food Service</a></span>
                        <h2>Restaurant Team Member - Crew <span className="full-time">Full-Time</span></h2>
                    </div>
                    <div className="six columns">
                        <a href="#" className="button white"><i className="fa fa-star" /> Bookmark This Job</a>
                    </div>
                </div>
            </div>
        );
    }
}
