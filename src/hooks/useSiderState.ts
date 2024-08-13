import { useState } from "react";

export const useSiderState = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    return {
        isCollapsed,
        isSmallScreen,
        setIsCollapsed,
        setIsSmallScreen,
    };
};