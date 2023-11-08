import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        {data ? (
          <div>
            {" "}
            <h4>{data.message}</h4>
          </div>
        ) : (
          "loading"
        )}
      </div>
    </>
  );
}

export default App;
