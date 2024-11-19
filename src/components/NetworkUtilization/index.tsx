import { Flex, Progress } from "antd";

export default function NetworkUtilization() {
  return (
    <Flex gap="small" wrap>
      <div className="relative">
        <Progress type="circle" percent={75} showInfo={false} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h4 className="text-[8px] text-center font-semibold text-primary">Network Rcvd</h4>
          <h3 className="text-[8px] text-center">0.0%</h3>
          <h6 className="text-[10px] text-center">megabits/s</h6>
        </div>
      </div>

      <div className="relative">
        <Progress
          type="circle"
          percent={70}
          status="exception"
          showInfo={false}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h4 className="text-[8px] text-center font-semibold text-primary">Network Sent</h4>
          <h3 className="text-[8px] text-center">0.0%</h3>
          <h6 className="text-[10px] text-center">megabits/s</h6>
        </div>
      </div>
    </Flex>
  );
}
