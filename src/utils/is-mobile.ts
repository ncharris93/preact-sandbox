import { useEffect, useState } from "preact/hooks";
import { AppConstants } from "../constants";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= AppConstants.mobileMaxWidth);
      console.log(window.innerWidth);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};
