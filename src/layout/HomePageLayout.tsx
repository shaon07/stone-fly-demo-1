import React from "react";
import Sidebar from "../components/Sidebar";

type HomePageLayoutProps = {
  children: React.ReactNode;
};

export default function HomePageLayout({ children }: HomePageLayoutProps) {
  return (
    <div className="flex">
      <div className="w-full max-w-[320px] bg-primary py-4 h-screen overflow-hidden overflow-y-scroll hidescrollbar">
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
}
