import React from "react";
import ReactDOM from "react-dom";
import { Container} from "semantic-ui-react";

import Example from "./example";

const Search = ({ children }) => (
  <Container style={{ margin: 20 }}>
    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <Search>
    <Example />
  </Search>,
  document.getElementById("root")
);









// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// // // import { Container} from "semantic-ui-react";
// import App from "./App";
// ReactDOM.render( <App/>,document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
