import { Toaster } from "react-hot-toast";

import Routes from "./routes";
import GlobalReset from "./styles/reset";
import GlobalBase from "./styles/base";

import AuthProvider from "./providers/AuthContext";
import CrudProvider from "./providers/CrudContext";

function App() {
  return (
    <AuthProvider>
      <CrudProvider>
        <GlobalReset />
        <GlobalBase />
        <Toaster position="top-right" reverseOrder={false} />
        <Routes />
      </CrudProvider>
    </AuthProvider>
  );
}

export default App;
