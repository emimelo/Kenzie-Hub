import Routes from "./routes";
import GlobalReset from "./styles/reset";
import GlobalBase from "./styles/base";
import React from "react";

import { Toaster } from "react-hot-toast";

import AuthProvider from "./providers/AuthContext";

function App() {
  return (
    <AuthProvider>
      <GlobalReset />
      <GlobalBase />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </AuthProvider>
  );
}

export default App;
