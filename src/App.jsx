import Routes from "./routes";
import GlobalReset from "./styles/reset";
import GlobalBase from "./styles/base";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalReset />
      <GlobalBase />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </>
  );
}

export default App;
