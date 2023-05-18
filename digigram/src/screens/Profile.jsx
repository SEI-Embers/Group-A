import React from "react";
import './Profile.css'

const Profile = ({ user, posts, }) => {
  return (
    <>
      <div className="top-container">

        
        <img className="profile-avatar" src="https://static.wikia.nocookie.net/supermarioglitchy4/images/f/f3/Big_chungus.png" alt={`${user.profile.username} avatar`} />
        
        <div className="bio-stat">I am Big Chungus. This is my bio.</div>
        
          <div className="non-bio-stats-container">
            <div className="stat"> 103 Posts </div>
            <div className="stat"> 1.2M Followers </div>
            <div className="stat"> 3 Following </div>
          </div>

        <div>{user.profile.username}</div>

      </div>
      <button className="follow-button">Follow</button>
      {/* <div className="profile-gallery">
        {posts ? posts.map((post, index) => (
          <img key={index} src={post} alt={`${user.profile.username} post`} />
        )) : <div>No Photos</div>}
      </div> */}
      <div className="grid-container">
        <img className="img-post" src="https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg" alt="" />
        <img className="img-post"  src="https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg" alt="" />
        <img className="img-post"  src="https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg" alt="" />
        <img className="img-post"  src="https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg" alt="" />
        <img className="img-post"  src="https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg" alt="" />
        <img className="img-post"  src="https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg" alt="" />
        <img className="img-post"  src="https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg" alt="" />
        <img className="img-post"  src="https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg" alt="" />
        <img className="img-post"  src="https://www.pennlive.com/resizer/_bwobXn0wQvQAEWXlvyTWHTABB4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/N3CAVECZTZBTBMROEA5PL7VY7A.jpg" alt="" /> 
      </div>
    </>
  );
};

export default Profile;