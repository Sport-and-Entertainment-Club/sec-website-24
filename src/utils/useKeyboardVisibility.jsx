import { useEffect, useState } from "react";

const useKeyboardVisibility = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleFocus = () => setKeyboardVisible(true);
    const handleBlur = () => setKeyboardVisible(false);

    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  return keyboardVisible;
};

export default useKeyboardVisibility;
