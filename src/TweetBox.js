import React from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
    const avatarImg = "https://avatars.githubusercontent.com/u/46249693?v=4";
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={avatarImg} />
                    <input
                        placeholder="What's Good"
                        type="text"
                    />
                </div>
            </form>
            
        </div>
    )
}

export default TweetBox
