import { useState, useEffect } from "react";

const useUnsavedChangesWarning = (
  message = "You have unsaved changes, are you sure you want to leave?"
) => {
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty, message]);

  const routerPrompt = (location, action) => {
    if (isDirty && action === "POP") {
      if (window.confirm(message)) {
        setIsDirty(false);
        return true;
      } else {
        return false;
      }
    }
    return true;
  };

  return [setIsDirty, routerPrompt];
};

export default useUnsavedChangesWarning;
