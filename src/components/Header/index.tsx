import { Button } from "antd";
import { RxAvatar } from "react-icons/rx";
import { FaPowerOff } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="rounded-full bg-primary p-4">
          <RxAvatar size={40} color="white" />
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-left">Welcome</p>
          <p className="text-xs text-left">SC-172-125-82-211</p>

          <div className="flex items-center gap-1 mt-1">
            <p className="text-sm">Status</p>
            <Button type="primary" size="small" className="rounded-full">
              Good
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button type="primary" className="rounded-full">
          Support
        </Button>
        <Button type="primary" className="rounded-full">
          <FaPowerOff />
        </Button>
      </div>
    </div>
  );
}
