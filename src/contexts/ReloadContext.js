import { createContext, useState } from "react";

const ReloadContext = createContext();

export function ReloadProvider({ children }) {
  const [reload, setReload] = useState(false);

  return (
    <ReloadContext.Provider value={{ reload, setReload }}>
      {children}
    </ReloadContext.Provider>
  );
}

export default ReloadContext;
