import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./starRating";

function Test() {
  const [ratingMovie, setRatingMovie] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setRatingMovie} />
      <p>This movie was rated {ratingMovie} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size="24" color="red" className="test" defaultRating={3} />

    <Test />
  </React.StrictMode>
);
