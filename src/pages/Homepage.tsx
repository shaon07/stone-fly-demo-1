import React from "react";
import HomePageLayout from "../layout/HomePageLayout";
import Header from "../components/Header";
import InformationBar from "../components/InformationBar";
import TriangleShapedCard from "../components/TriangleCard";
import { Button, Progress } from "antd";
import CpuAndMemoryManage from "../components/CpuAndMemoryManage";
import NetworkUtilization from "../components/NetworkUtilization";
import CardWrapper from "../components/CardWrapper";
import ResourceTable from "../components/ResourceTable";

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

        <div className="mt-4 flex items-center gap-4">
          <CardWrapper>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-base text-white">
                  Concentrator Type
                </h2>
                <div>
                  <p className="text-sm text-white">Name: SC-192-168-10-250</p>
                  <p className="text-sm text-white">MGMT: 192.168.10.250</p>
                  <p className="text-sm text-white">ISCSI IP: 192.168.10.250</p>
                </div>
              </div>

              <div>
                <img src="/radio.png" alt="radio" width={100} height={100} />
              </div>
            </div>
          </CardWrapper>

          <CardWrapper>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-base text-white">
                  Concentrator Type
                </h2>
                <h2 className="font-bold text-base text-white">
                  Concentrator Type
                </h2>
              </div>

              <div>
                <img src="/user.png" alt="radio" width={65} height={65} />
              </div>
            </div>
          </CardWrapper>

          <CardWrapper>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-base text-white">
                  Concentrator Type
                </h2>
                <div>
                  <p className="text-sm text-white"> SC-192-168-10-250</p>
                  <p className="text-sm text-white"> SC-192-168-10-250</p>
                  <Button type="default" className="rounded-full px-6 mt-4">
                    Open
                  </Button>
                </div>
              </div>

              <div>
                <img src="/tiles.png" alt="radio" width={100} height={45} />
              </div>
            </div>
          </CardWrapper>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Resources</h2>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-blue-600 block"></span>
              <span className="text-sm">Used</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-teal-400 block"></span>
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-blue-200 block"></span>
              <span className="text-sm">Not Managed</span>
            </div>
          </div>
        </div>
        <ResourceTable />
      </div>
    </HomePageLayout>
  );
}
