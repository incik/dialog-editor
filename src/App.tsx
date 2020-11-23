import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

import EditorPage from "./EditorPage";

import "./styles.css";

import { Stack, Label, TextField, PrimaryButton } from "office-ui-fabric-react";
export default function App() {
  const columnProps = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/editor">
            <EditorPage />
          </Route>
          <Route path="/">
            <br />
            <div className="box dialogForm">
              <Stack {...columnProps}>
                <TextField
                  label="ID"
                  disabled
                  required
                  defaultValue="59e954c8-cbdb-4d5b-95f8-95614e5f0e2d"
                />
                <TextField
                  label="Sentense"
                  required
                  multiline
                  rows={3}
                  defaultValue="I am disabled"
                />
                <TextField
                  label="Go to"
                  defaultValue="d9096716-8cec-4aec-8486-7c6d3c7ef0fe"
                />

                <Label>Answers</Label>

                <PrimaryButton iconProps={{ iconName: "Add" }}>
                  Add answer
                </PrimaryButton>
              </Stack>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
