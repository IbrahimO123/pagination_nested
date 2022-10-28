import React, { useState, useEffect, useContext } from "react";
import { TextField, Container } from "@mui/material";
import { ExplodeContext } from './../Layout';

function Bomb({ heroName }) {
  useEffect(() => {
    if (heroName === "Joker" || heroName === "joker")
      throw new Error("Not a Hero");
  }, [heroName]);
   throw new Error ("Another Error");
}

function Error() {
  const [heroName, setHeroName] = useState("Batman");
  const [explode, setExplode] = useContext(ExplodeContext)

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
          color={
            heroName === "Joker" || heroName === "joker" ? "error" : "info"
          }
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
        <div>{explode ? <Bomb heroName={heroName} /> : null}</div>
        <div>
          <small>Or you just click &#8595;</small>
          <p>
            <button className="explode" onClick={() => setExplode((e) => !e)}>
              Explode
            </button>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Error;
