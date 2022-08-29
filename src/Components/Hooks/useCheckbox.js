import { useState } from "react";

export const useCheckbox = () => {
  const [checkbox, setCheckbox] = useState(false);

  return {
    checkbox,
    setCheckbox
  }
}
