import React from 'react'
import { Container} from "@mui/material"
import Header from './ui_components/Header'

function Layout(props) {
  return (
    <Container disableGutters={true}>
      <Header />
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
      <div className="copy">Copyright Oliyide Ibrahim @ AltSchools Africa </div>
    </Container>
  );
}

export default Layout