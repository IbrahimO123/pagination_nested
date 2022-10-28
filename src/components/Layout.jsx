import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import Header from "./ui_components/Header";
import { ErrorBoundary } from "react-error-boundary";


export const ExplodeContext = React.createContext([]) 

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Container sx={{marginTop:"80px", textAlign:"center"}}>
      <div role="alert">
        <Typography component="div" variant="h4">
          Something went wrong
        </Typography>
        <pre>{error.message}</pre>
        <button
          style={error ? { backgroundColor: "green" } : null}
          className="explode"
          onClick={resetErrorBoundary}
        >
          Reset
        </button>
      </div>
    </Container>
  );
}

function Layout(props) {
  const [explode, setExplode] = useState(false);
  return (
    <ExplodeContext.Provider value={[explode,setExplode]}>
      <Container disableGutters={true}>
        <Header />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "70px",
            }}
          >
            {props.children}
          </Container>
        </ErrorBoundary>
        <div className="copy">
          Copyright Oliyide Ibrahim @ AltSchools Africa{" "}
        </div>
      </Container>
    </ExplodeContext.Provider>
  );
}

export default Layout;
