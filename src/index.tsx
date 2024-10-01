import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { GeolocationPage } from "./pages/Capacitor";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { StoredData } from "./pages/StoredData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Pokemon } from "./pages/Pokemon";
import { CameraScreen } from "./pages/Camera";

const client = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={client}>
      <LocationProvider>
        <Header />
        <main>
          <Router>
            <Route path="/" component={Home} />
            <Route default component={NotFound} />
            <Route path="/mobile" component={GeolocationPage} />
            <Route path="/store" component={StoredData} />
            <Route path="/pokemon" component={Pokemon} />
            <Route path="/camera" component={CameraScreen} />
          </Router>
        </main>
      </LocationProvider>
    </QueryClientProvider>
  );
}

render(<App />, document.getElementById("app"));
