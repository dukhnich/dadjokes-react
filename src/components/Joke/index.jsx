import "./style.css";
import { useState } from "react";
import upLikeImg from "./img/like-up.png";
import downLikeImg from "./img/like-down.png";

const Joke = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);
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
            src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
          />
          <p className="user-name">Neroxx</p>
        </div>

        <p className="joke__text">
          The secret service isn't allowed to yell "Get down!" anymore when the
          president is about to be attacked. Now they have to yell "Donald,
          duck!"
        </p>
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
