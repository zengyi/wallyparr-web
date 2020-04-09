import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bulington from "./components/Burlington";
import Caledonia from "./components/Caledonia";
import Hamilton from "./components/Hamilton";
import Guelph from "./components/Guelph";

function App() {
  return (
    <Container className="container pt-5">
      <Tabs defaultActiveKey="bulington" id="uncontrolled-tab">
        <Tab eventKey="bulington" title="bulington">
          <div className="d-flex flex-row justify-content-between flex-wrap m-1 p-1">
            <Bulington />
          </div>
        </Tab>
        <Tab eventKey="caledonia" title="caledonia">
          <Caledonia />
        </Tab>
        <Tab eventKey="hamilton" title="hamilton">
          <Hamilton />
        </Tab>
        <Tab eventKey="guelph" title="guelph">
          <Guelph />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
