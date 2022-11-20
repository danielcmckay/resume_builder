import { useState } from "react";
import { AuthPage } from "./pages/Auth";
import { AppContent } from "./components/app-content";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <AuthPage onLoginFn={() => setIsLoggedIn(true)} />
      ) : (
        <AppContent />
      )}
    </div>
  );
}

export default App;
