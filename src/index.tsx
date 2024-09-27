import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { GeolocationPage } from "./pages/Capacitor";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { StoredData } from "./pages/StoredData";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
          <Route path="/mobile" component={GeolocationPage} />
          <Route path="/store" component={StoredData} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
