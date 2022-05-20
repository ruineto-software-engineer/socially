import { useContext } from "react";
import ReloadContext from "../contexts/ReloadContext";

export default function useReload() {
  return useContext(ReloadContext);
}
