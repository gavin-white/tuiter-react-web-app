import React from "react";
const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group">
        <a href="#" className="list-group-item">
          <i className="fab fa-twitter"/>
        </a>
        <a href="#" className={`list-group-item
${active === 'home'?'active':''}`}>
          <i className="fa fa-house-user"/>
          <span> Home</span>
        </a>
        <a href="#" className={`list-group-item
${active === 'explore'?'active':''}`}>
          <i className="fa fa-hashtag"/>
          <span> Explore</span>
        </a>
        <a href="#" className={`list-group-item
${active === 'notifications'?'active':''}`}>
          <i className="fa fa-bell"/>
          <span> Notifications</span>
        </a>
        <a className={`list-group-item
${active === 'messages'?'active':''}`}>
          <i className="fa fa-envelope"/>
          <span> Messages</span>
        </a>
        <a href="#" className={`list-group-item
${active === 'bookmarks'?'active':''}`}>
          <i className="fa fa-bookmark"/>
          <span> Bookmarks</span>
        </a>
        <a href="#" className={`list-group-item
${active === 'lists'?'active':''}`}>
          <i className="fa fa-list"/>
          <span> Lists</span>
        </a>
        <a href="#" className={`list-group-item
${active === 'profile'?'active':''}`}>
          <i className="fa fa-user"/>
          <span> Profile</span>
        </a>
        <a href="#" className={`list-group-item
${active === 'more'?'active':''}`}>
          <i className="fa fa-dot-circle"/>
          <span> More</span>
        </a>
        <div className="d-grid mt-2">
          <a href="tweet.html"
             className="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
      </div>
  );
};
export default NavigationSidebar;
