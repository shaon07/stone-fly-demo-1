import { Progress } from "antd";
import React from "react";

export default function CpuAndMemoryManage() {
  return (
    <div className="flex items-center justify-between gap-6">
      <div>
        <div className="flex flex-col w-fit relative pb-3">
          <Progress
            type="dashboard"
            steps={8}
            percent={50}
            trailColor="rgba(0, 0, 0, 0.06)"
            strokeWidth={20}
            showInfo
          />
          <span className="absolute left-4 bottom-0 text-xs">0.0%</span>
          <span className="absolute right-4 bottom-0 text-xs">100%</span>
        </div>
        <h6 className="text-center">CPU</h6>
      </div>

      <div>
        <div className="flex flex-col w-fit relative pb-3">
          <Progress
            type="dashboard"
            steps={8}
            percent={50}
            trailColor="rgba(0, 0, 0, 0.06)"
            strokeWidth={20}
            showInfo
          />
          <span className="absolute left-4 bottom-0 text-xs">0.0%</span>
          <span className="absolute right-4 bottom-0 text-xs">100%</span>
        </div>
        <h6 className="text-center">Memory</h6>
      </div>
    </div>
  );
}
