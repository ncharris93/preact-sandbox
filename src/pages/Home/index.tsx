import { useState } from "preact/hooks";
import preactLogo from "../../assets/preact.svg";
import "./style.css";
import { useLocation } from "preact-iso";
import { useIsMobile } from "../../utils/is-mobile";
import { AppConstants } from "../../constants";
import { useBearStore } from "../../stores/counter";

export function Home() {
  const { route } = useLocation();
  const [count, setCount] = useState(0);
  const isMobile = useIsMobile();
  const { bears, increasePopulation } = useBearStore();

  return (
    <div class="home">
      <h1>
        {AppConstants.platform}:: {`${isMobile}`}
      </h1>
      <a href="https://preactjs.com" target="_blank">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <h1>Get Started building Vite-powered Preact Apps </h1>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Click Me! {count}
      </button>
      <button
        onClick={() => {
          route("/abc123");
        }}
      >
        Test
      </button>
      <button
        onClick={() => {
          route("/store");
        }}
      >
        Store
      </button>
      <button
        onClick={() => {
          route("/mobile");
        }}
      >
        Mobile
      </button>
      <button
        onClick={() => {
          route("/pokemon");
        }}
      >
        Pokemon
      </button>
      <button onClick={increasePopulation}>Bear Count {bears}</button>
      <section>
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          href="https://preactjs.com/tutorial"
        />
        <Resource
          title="Differences to React"
          description="If you're coming from React, you may want to check out our docs to see where Preact differs"
          href="https://preactjs.com/guide/v10/differences-to-react"
        />
        <Resource
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
      </section>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
