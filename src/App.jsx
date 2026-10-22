import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  let message;

  if (loggedIn) {
    message = <h2>Welcome back!</h2>;
  } else {
    message = <h2>Please log in.</h2>;
  }

  return (
    <div>
      {message}

      <button onClick={() => setLoggedIn(!loggedIn)}>
        Login / Logout
      </button>
    </div>
  );
}

export default App;