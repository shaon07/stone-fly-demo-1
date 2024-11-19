import React from "react";
import HomePageLayout from "../layout/HomePageLayout";
import Header from "../components/Header";
import InformationBar from "../components/InformationBar";
import TriangleShapedCard from "../components/TriangleCard";
import { Progress } from "antd";
import CpuAndMemoryManage from "../components/CpuAndMemoryManage";
import NetworkUtilization from "../components/NetworkUtilization";

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

      <div className="w-full">
        <TriangleShapedCard>
          <div className="flex items-center justify-between py-6">
            <div className="flex flex-col gap-4">
              <h6 className="text-center text-primary-gray text-xl font-medium">
                CPU & Memory
              </h6>
              <CpuAndMemoryManage />
            </div>

            <hr className="bg-primary h-[9rem] w-[2px]" />

            <div className="flex flex-col gap-4">
              <h6 className="text-center text-primary-gray text-xl font-medium">
                Network Utilization
              </h6>
              <NetworkUtilization />
            </div>
          </div>
        </TriangleShapedCard>
      </div>
    </HomePageLayout>
  );
}
