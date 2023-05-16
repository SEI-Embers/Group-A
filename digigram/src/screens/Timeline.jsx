import React, { useState } from "react";
import Post from "../components/Post";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Tio Nel",
      postImage:
        "https://cdn.vox-cdn.com/thumbor/_wujSQTVzMIuua8yYfxXZnCmkNM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19907056/Digimon_Adventure_EP_1_06.jpg",
      likes: 20,
      timestamp: "2hrs",
    },
    {
      user: "Professor Ho",
      postImage:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d606c41a-305c-4e7e-806c-e4e4ecf38c64/dfc9f2w-3294e739-f886-495d-bda6-54191714a92c.png/v1/fill/w_1024,h_1414,q_80,strp/__digimon___jijimon_by_clytemnon_dfc9f2w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q2MDZjNDFhLTMwNWMtNGU3ZS04MDZjLWU0ZTRlY2YzOGM2NFwvZGZjOWYydy0zMjk0ZTczOS1mODg2LTQ5NWQtYmRhNi01NDE5MTcxNGE5MmMucG5nIiwiaGVpZ2h0IjoiPD0xNDE0Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvZDYwNmM0MWEtMzA1Yy00ZTdlLTgwNmMtZTRlNGVjZjM4YzY0XC9jbHl0ZW1ub24tNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.elrHQYzQ1nMNexrh27LSIruF9-WS8xEcdxumTmlY9A4",
      likes: 55,
      timestamp: "4hrs",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
