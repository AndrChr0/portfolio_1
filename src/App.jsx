import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(false);

  function renderText() {
    setClick(!click);
  }

  return (
    <ChakraProvider>
      <h1>Andreas sin kule portfolio</h1>
      <Button
        colorScheme="red"
        onClick={() => {
          renderText();
        }}
      >
        Button
      </Button>
      {click ? <p>Andreas er kul</p> : null}
    </ChakraProvider>
  );
}

export default App;
