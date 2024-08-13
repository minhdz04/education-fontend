import { useState } from "react";

export const useSiderState = () => {
<<<<<<< HEAD
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  return {
    isCollapsed,
    isSmallScreen,
    setIsCollapsed,
    setIsSmallScreen,
  };
};
=======
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    return {
        isCollapsed,
        isSmallScreen,
        setIsCollapsed,
        setIsSmallScreen,
    };
};
>>>>>>> c87f549 (init project)
