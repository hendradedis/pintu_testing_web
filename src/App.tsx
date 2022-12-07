import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import StaticHeader from "../src/components/staticHeader";
import Market from "../src/modules/screen/Market";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <StaticHeader />
          {/* body */}
          <Switch>
            <Route path="/market">
              <Market />
            </Route>
            <Route path="/">
              <Redirect to={"/market"} />
            </Route>
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
