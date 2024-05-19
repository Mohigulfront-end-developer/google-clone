import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchProvider } from "./SearchProvider.js";
import reducer, { initialState } from "./reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider initialState={initialState} reducer={reducer}>
    <App />
  </SearchProvider>
);
