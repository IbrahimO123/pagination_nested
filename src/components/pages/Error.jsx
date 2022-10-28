import React, { useState, useEffect } from "react";
import { TextField, Container } from "@mui/material";

function Bomb({ heroname }) {
  useEffect(() => {
    if (heroname === "Joker" || heroname === "joker")
      throw new Error("Not a Hero");
  }, [heroname]);

 return
}

function Error({ explode, setExplode }) {
  const [heroName, setHeroName] = useState("Batman");

  const handleChange = (e) => {
    e.preventDefault();
    setHeroName(e.target.value);
  };

  return (
    <Container>
      <div>
        <div>
          <h3>Error Boundary</h3>
        </div>
        <TextField
          id="standard-basic"
          color={heroName === "Joker" ? "error" : "info"}
          label="Type Joker and click Explode"
          variant="standard"
          value={heroName}
          onChange={handleChange}
        />
        <div>
          {heroName !== "Joker" ? (
            <small>{heroName} is an Hero</small>
          ) : (
            <small>{heroName} is not an Hero</small>
          )}
        </div>
        <div>{explode ? <Bomb heroname={heroName} /> : null}</div>
        <div>
          <button className="explode" onClick={() => setExplode((e) => !e)}>
            Explode
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Error;
