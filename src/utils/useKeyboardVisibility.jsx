import { useEffect, useState } from "react";

const useKeyboardVisibility = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    let initialHeight = window.innerHeight;

    const handleResize = () => {
      if (window.innerHeight < initialHeight) {
        setKeyboardVisible(true);
      } else {
        setKeyboardVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return keyboardVisible;
};

export default useKeyboardVisibility;
