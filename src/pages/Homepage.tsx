import React from "react";
import HomePageLayout from "../layout/HomePageLayout";
import Header from "../components/Header";
import InformationBar from "../components/InformationBar";

export default function Homepage() {
  return (
    <HomePageLayout>
      <Header />

      <div className="mt-6 flex flex-col gap-1">
        <h6 className="text-primary pl-4 font-medium text-lg">Dashboard</h6>
        <hr className="bg-primary h-[2px]" />
      </div>

      <div className="mt-4">
        <InformationBar />
      </div>
    </HomePageLayout>
  );
}
