import { useLocation } from "preact-iso";
import { AppConstants } from "../constants";

export function Header() {
  const { url } = useLocation();
  const { isNativeMobile } = AppConstants;

  return (
    <header style={isNativeMobile && { paddingTop: 40 }}>
      <nav>
        <a href="/" class={url == "/" && "active"}>
          Home
        </a>
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
      </nav>
    </header>
  );
}
