import React, { useState, useEffect } from 'react';
import Post from "../posts";
import ProfilePicture from "./profile-picture";
import { fetchPosts } from "../../utils/fetch-post";

const Profile = (props) => {
    const { username } = props;
    const [isFollowed, setIsFollowed] = useState(false);
    const postCount = 11;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(setPosts)
    })
  
    return (
      <React.Fragment>
        <ProfilePicture src= "https://via.placeholder.com/150" />
        
        <div>@{username}</div>
        <button onClick={() => setIsFollowed(!isFollowed)}>
          {isFollowed ? "Unfollow" : "Follow"}
        </button>

        {/* <Button variantColor="blue" onClick={() => setIsFollowed(!isFollowed)}
            {isFollowed ? "Unfollow" : "Follow"}
        <Button> */}

        <div>{posts.length} Posts</div>
        <div>Follower</div>
        <div>Following</div>
        <div>Bio</div>
        {posts.length === 0 ? (
          <div>No Posts</div>
        ) : (
          <div className="posts">
            {posts.map((_, idx) => (
              <Post
                src="https://via.placeholder.com/300"
                key={idx}
                className="post"
              />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  };

export default Profile;
//export Profile to import in App.js

//below is the code for index.test.js
/* import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { Profile } from "./index"

test("renders follow button", () => {
    render(<Profile />);
    const linkElement = screen.getByText("Follow");
    expect(linkElement).toBeTruthy();
});

*/