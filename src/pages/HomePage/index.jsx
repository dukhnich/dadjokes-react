import "./style.css";
import Joke from "../../components/Joke";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [jokes, setJokes] = useState(null);
  useEffect(() => {
    const getJokes = async () => {
      const response = await fetch("http://localhost:4000/api/jokes");
      const data = await response.json();
      setJokes(data.result);
    };
    getJokes();
  }, []);
  return (
    <div className="container">
      {Array.isArray(jokes)
        ? jokes.map((joke) => <Joke {...joke} key={joke.id} />)
        : null}
    </div>
  );
};
