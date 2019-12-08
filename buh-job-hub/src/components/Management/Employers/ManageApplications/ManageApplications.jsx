import React, { Component } from 'react';

export default class ManageApplications extends Component {
    render() {
        return (
            <div>
                <div class="dashboard-content">
                    <div id="titlebar">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Manage Applications</h2>
                                <nav id="breadcrumbs">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Dashboard</a></li>
                                        <li>Manage Applications</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        
                        <div class="col-lg-12 col-md-12">

                            <div class="notification notice">
                                The job applications for <strong><a href="#">Power Systems User Experience Designer</a></strong> are listed below.
                            </div>
                        </div>

                    <div class="col-md-6">
                        <select data-placeholder="Filter by status" class="chosen-select-no-single">
                            <option value="">Filter by status</option>
                            <option value="new">New</option>
                            <option value="interviewed">Interviewed</option>
                            <option value="offer">Offer extended</option>
                            <option value="hired">Hired</option>
                            <option value="archived">Archived</option>
                        </select>
                        <div class="margin-bottom-15"></div>
                    </div>

                    <div class="col-md-6">
                        <select data-placeholder="Newest first" class="chosen-select-no-single">
                            <option value="">Newest first</option>
                            <option value="name">Sort by name</option>
                            <option value="rating">Sort by rating</option>
                        </select>
                        <div class="margin-bottom-35"></div>
                    </div>


                    <div class="col-md-12">
                        
                        <div class="application">
                            <div class="app-content">
                                
                                <div class="info">
                                    <img src="images/resumes-list-avatar-01.png" alt=""/>
                                    <span>John Doe</span>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-file-text"></i> Download CV</a></li>
                                        <li><a href="#"><i class="fa fa-envelope"></i> Contact</a></li>
                                    </ul>
                                </div>
                                
                                <div class="buttons">
                                    <a href="#one-1" class="button gray app-link"><i class="fa fa-pencil"></i> Edit</a>
                                    <a href="#two-1" class="button gray app-link"><i class="fa fa-sticky-note"></i> Add Note</a>
                                    <a href="#three-1" class="button gray app-link"><i class="fa fa-plus-circle"></i> Show Details</a>
                                </div>
                                <div class="clearfix"></div>

                            </div>

                            <div class="app-tabs">

                                <a href="#" class="close-tab button gray"><i class="fa fa-close"></i></a>
                                
                                <div class="app-tab-content" id="one-1">

                                    <div class="select-grid">
                                        <select data-placeholder="Application Status" class="chosen-select-no-single">
                                            <option value="">Application Status</option>
                                            <option value="new">New</option>
                                            <option value="interviewed">Interviewed</option>
                                            <option value="offer">Offer extended</option>
                                            <option value="hired">Hired</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                    </div>

                                    <div class="select-grid">
                                        <input type="number" min="1" max="5" placeholder="Rating (out of 5)"/>
                                    </div>

                                    <div class="clearfix"></div>
                                    <a href="#" class="button margin-top-15">Save</a>
                                    <a href="#" class="button gray margin-top-15 delete-application">Delete this application</a>

                                </div>
                                
                                <div class="app-tab-content"  id="two-1">
                                    <textarea placeholder="Private note regarding this application"></textarea>
                                    <a href="#" class="button margin-top-15">Add Note</a>
                                </div>
                                
                                <div class="app-tab-content"  id="three-1">
                                    <i>Full Name:</i>
                                    <span>John Doe</span>

                                    <i>Email:</i>
                                    <span><a href="/cdn-cgi/l/email-protection#ed87828583c3898288ad88958c809d8188c38e8280"><span class="__cf_email__" data-cfemail="d4bebbbcbafab0bbb194b1acb5b9a4b8b1fab7bbb9">[email&#160;protected]</span></a></span>

                                    <i>Message:</i>
                                    <span>Praesent efficitur dui eget condimentum viverra. Sed non maximus ipsum, non consequat nulla. Vivamus nec convallis nisi, sit amet egestas magna. Quisque vulputate lorem sit amet ornare efficitur. Duis aliquam est elit, sed tincidunt enim commodo sed. Fusce tempus magna id sagittis laoreet. Proin porta luctus ante eu ultrices. Sed porta consectetur purus, rutrum tincidunt magna dictum tempus. </span>
                                </div>

                            </div>

                            <div class="app-footer">

                                <div class="rating no-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>

                                <ul>
                                    <li><i class="fa fa-file-text-o"></i> New</li>
                                    <li><i class="fa fa-calendar"></i> September 24, 2019</li>
                                </ul>
                                <div class="clearfix"></div>

                            </div>
                        </div>


                        <div class="application">
                            <div class="app-content">
                                
                                <div class="info">
                                    <img src="images/avatar-placeholder.png" alt=""/>
                                    <span><a href="#">Tom Smith</a></span>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-file-text"></i> Download CV</a></li>
                                        <li><a href="#"><i class="fa fa-envelope"></i> Contact</a></li>
                                    </ul>
                                </div>
                                
                                <div class="buttons">
                                    <a href="#one-2" class="button gray app-link"><i class="fa fa-pencil"></i> Edit</a>
                                    <a href="#two-2" class="button gray app-link"><i class="fa fa-sticky-note"></i> Add Note</a>
                                    <a href="#three-2" class="button gray app-link"><i class="fa fa-plus-circle"></i> Show Details</a>
                                </div>
                                <div class="clearfix"></div>

                            </div>

                            <div class="app-tabs">

                                <a href="#" class="close-tab button gray"><i class="fa fa-close"></i></a>
                                
                                <div class="app-tab-content" id="one-2">

                                    <div class="select-grid">
                                        <select data-placeholder="Application Status" class="chosen-select-no-single">
                                            <option value="">Application Status</option>
                                            <option value="new">New</option>
                                            <option value="interviewed">Interviewed</option>
                                            <option value="offer">Offer extended</option>
                                            <option value="hired">Hired</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                    </div>

                                    <div class="select-grid">
                                        <input type="number" min="1" max="5" placeholder="Rating (out of 5)"/>
                                    </div>

                                    <div class="clearfix"></div>
                                    <a href="#" class="button margin-top-15">Save</a>
                                    <a href="#" class="button gray margin-top-15 delete-application">Delete this application</a>

                                </div>
                                
                                <div class="app-tab-content"  id="two-2">
                                    <textarea placeholder="Private note regarding this application"></textarea>
                                    <a href="#" class="button margin-top-15">Add Note</a>
                                </div>
                                
                                <div class="app-tab-content" id="three-2">
                                    <i>Full Name:</i>
                                    <span>Tom Smith</span>

                                    <i>Email:</i>
                                    <span><a href="/cdn-cgi/l/email-protection#fe8a9193d08d93978a96be9b869f938e929bd09d9193"><span class="__cf_email__" data-cfemail="d3a7bcbefda0bebaa7bb93b6abb2bea3bfb6fdb0bcbe">[email&#160;protected]</span></a></span>

                                    <i>Message:</i>
                                    <span>Morbi non pharetra quam. Pellentesque eget massa dolor. Sed vitae placerat eros, quis aliquet purus. Donec feugiat sapien urna, at sagittis libero pellentesque in. Praesent efficitur dui eget condimentum viverra. Sed non maximus ipsum, non consequat nulla. Vivamus nec convallis nisi, sit amet egestas magna. Quisque vulputate lorem sit amet ornare efficitur. Duis aliquam est elit, sed tincidunt enim commodo sed. Fusce tempus magna id sagittis laoreet. Proin porta luctus ante eu ultrices. Sed porta consectetur purus, rutrum tincidunt magna dictum tempus. </span>
                                </div>

                            </div>

                            <div class="app-footer">

                                <div class="rating five-stars">
                                    <div class="star-rating"></div>
                                    <div class="star-bg"></div>
                                </div>

                                <ul>
                                    <li><i class="fa fa-file-text-o"></i> Interviewed</li>
                                    <li><i class="fa fa-calendar"></i> September 22, 2019</li>
                                </ul>
                                <div class="clearfix"></div>

                            </div>
                        </div>


                        <div class="application">
                            <div class="app-content">
                                
                                <div class="info">
                                    <img src="images/avatar-placeholder.png" alt=""/>
                                    <span>Kathy Berry</span>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-file-text"></i> Download CV</a></li>
                                        <li><a href="#"><i class="fa fa-envelope"></i> Contact</a></li>
                                    </ul>
                                </div>
                                
                                <div class="buttons">
                                    <a href="#one-3" class="button gray app-link"><i class="fa fa-pencil"></i> Edit</a>
                                    <a href="#two-3" class="button gray app-link"><i class="fa fa-sticky-note"></i> Add Note</a>
                                    <a href="#three-3" class="button gray app-link"><i class="fa fa-plus-circle"></i> Show Details</a>
                                </div>
                                <div class="clearfix"></div>

                            </div>

                            <div class="app-tabs">

                                <a href="#" class="close-tab button gray"><i class="fa fa-close"></i></a>
                                
                                <div class="app-tab-content" id="one-3">

                                    <div class="select-grid">
                                        <select data-placeholder="Application Status" class="chosen-select-no-single">
                                            <option value="">Application Status</option>
                                            <option value="new">New</option>
                                            <option value="interviewed">Interviewed</option>
                                            <option value="offer">Offer extended</option>
                                            <option value="hired">Hired</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                    </div>

                                    <div class="select-grid">
                                        <input type="number" min="1" max="5" placeholder="Rating (out of 5)"/>
                                    </div>

                                    <div class="clearfix"></div>
                                    <a href="#" class="button margin-top-15">Save</a>
                                    <a href="#" class="button gray margin-top-15 delete-application">Delete this application</a>

                                </div>
                                
                                <div class="app-tab-content"  id="two-3">
                                    <textarea placeholder="Private note regarding this application"></textarea>
                                    <a href="#" class="button margin-top-15">Add Note</a>
                                </div>
                                
                                <div class="app-tab-content"  id="three-3">
                                    <i>Full Name:</i>
                                    <span>Kathy Berry</span>

                                    <i>Email:</i>
                                    <span><a href="/cdn-cgi/l/email-protection#274c46534f5e09454255555e67425f464a574b420944484a"><span class="__cf_email__" data-cfemail="4922283d2130672b2c3b3b30092c31282439252c672a2624">[email&#160;protected]</span></a></span>
                                </div>

                            </div>
                            

                        <div class="app-footer">

                            <div class="rating four-stars">
                                <div class="star-rating"></div>
                                <div class="star-bg"></div>
                            </div>

                            <ul>
                                <li><i class="fa fa-file-text-o"></i> Interviewed</li>
                                <li><i class="fa fa-calendar"></i> September 26, 2019</li>
                            </ul>
                            <div class="clearfix"></div>

                        </div>
                    </div>


                    </div>
                        <div class="col-md-12">
                            <div class="copyrights">© 2019 WorkScout. All Rights Reserved.</div>
                        </div>
                    </div>

                    </div>
            </div>
        )
    }
}
