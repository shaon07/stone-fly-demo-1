import { Button } from "antd";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import ISP, { IP2Icon, IPIcon } from "../../Custom-Icons";

type ISPCardProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
};

function ISPCard({ icon, title, description }: ISPCardProps) {
  return (
    <div className="flex items-center gap-3">
      {icon}

      <div className="flex flex-col">
        <p className="text-white text-base font-bold">{title}</p>
        <p className="text-white text-sm font-normal">{description}</p>
      </div>
    </div>
  );
}

export default function InformationBar() {
  return (
    <div className="w-full bg-primary rounded-md p-4 flex items-center gap-14">
      <div className="flex items-center gap-1">
        <span className="font-semibold text-xl text-white">Information</span>
        <FaChevronRight size={18} color="white" />
      </div>

      <div className="flex items-center gap-14">
        <ISPCard icon={<ISP />} title={"ISCSI SAN IP:"} description={"192.168.10.255"} />
        <ISPCard icon={<IPIcon />} title={"NAS LAN IP:"} description={"192.168.10.255"} />
        <ISPCard icon={<IP2Icon />} title={"ISCSI LAN IP:"} description={"192.168.10.255"} />
      </div>
    </div>
  );
}
