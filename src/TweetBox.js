import React, {useState} from 'react'
import { Avatar, Button } from "@material-ui/core";
import db from './firebase'
import "./TweetBox.css";


const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const avatarImg = "https://avatars.githubusercontent.com/u/46249693?v=4";
    
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Patrick Murray',
            username: 'cyams34',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://avatars.githubusercontent.com/u/46249693?v=4"

        })
    }
    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={avatarImg} />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's Good"
                        type="text"
                    />
                </div>
                <input 
                    value={tweetImage}
                    onchange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                    >Tweet</Button>              
            </form>
            
        </div>
    )
}

export default TweetBox
