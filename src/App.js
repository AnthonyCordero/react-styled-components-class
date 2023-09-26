import React, { useState } from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import ToggleTheme from "./Components/ToggleTheme";

console.log(temaClaro, temaOscuro);

function App() {
  const [tema, setTema] = useState(true);

  const SwithTheme = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={SwithTheme}>
        <ToggleTheme tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;