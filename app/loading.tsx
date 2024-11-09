import "@/styles/loading.css";
import { Globe } from "lucide-react";

export default function Loading() {
  return (
    /* From Uiverse.io by Smit-Prajapati */
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="loader">
        <div className="box">
          <div className="logo">
            <Globe className="h-10 w-10 text-indigo-600 bg-inherit text-9xl" />
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
