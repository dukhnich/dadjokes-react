import "./style.css";
import { useState } from "react";
import upLikeImg from "./img/like-up.png";
import downLikeImg from "./img/like-down.png";

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [upLikes, setUpLikes] = useState(likes);
  const [downLikes, setDownLikes] = useState(dislikes);
  const changeLikes = (n) => {
    if (n > 0) {
      setUpLikes(upLikes + Number(n));
    } else {
      setDownLikes(downLikes - Number(n));
    }
  };
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src={userAvatar}
            alt={userName + " avatar"}
          />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={() => changeLikes(1)}
          className="btn-like btn-like--up"
        ></button>
        <span className="likes-count likes-count--up">{upLikes}</span>
        <button
          onClick={() => changeLikes(-1)}
          className="btn-like btn-like--down"
        ></button>
        <span className="likes-count likes-count--down">{downLikes}</span>
      </div>
    </div>
  );
};

export default Joke;
