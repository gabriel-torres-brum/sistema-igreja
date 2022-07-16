import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import { AuthProvider } from "./data/contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
