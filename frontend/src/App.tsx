import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    console.log(API_URL);
    fetch(API_URL)
      .then((res) => res.text())
      .then(setMessage)
      .catch((err) => console.log(err));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
