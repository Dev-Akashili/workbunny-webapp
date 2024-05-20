import { createContext, useState, ReactNode } from "react";

interface SidebarContextProps {
  isCollapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setCollapsed] = useState<boolean>(true);

  return (
    <SidebarContext.Provider value={{ isCollapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};
