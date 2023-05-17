import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import Header from "./Header";

function Post({ user, postImage, likes, timestamp }) {
  return (
    <> 
    <Header />
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user?.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <button>
              <FavoriteBorderIcon className="postIcon" />
            </button>
            <button>
              <ChatBubbleOutlineIcon className="postIcon" />
            </button>
            <button>
              <TelegramIcon className="postIcon" />
            </button>
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
    </> 
  );
}

export default Post;
