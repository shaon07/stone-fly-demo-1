import { Menu, MenuProps } from "antd";
import { FcGoogle } from "react-icons/fc";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    label: <div className="text-base font-semibold">SAN</div>,
    children: [
      {
        key: "11",
        label: "Volume",
        children: [
          {
            key: "111",
            label: "Create Volume",
            children: [
              { key: "1111", label: "Auto Create" },
              { key: "1112", label: "Manual Create" },
            ],
          },
        ],
      },
      { key: "12", label: "Host" },
      { key: "13", label: "Session" },
    ],
  },
];

const items2: MenuItem[] = [
  {
    key: "2",
    label: <div className="text-base font-semibold">Target Portal</div>,
    children: [],
  },
];

const items3: MenuItem[] = [
  {
    key: "3",
    label: <div className="text-base font-semibold">NAS</div>,
    children: [
      {
        key: "31",
        label: "Segments",
        children: [],
      },
      {
        key: "32",
        label: "AntiVirus",
        children: [],
      },
      {
        key: "33",
        label: "Scaleout",
        children: [],
      },
    ],
  },
];

const items4: MenuItem[] = [
  {
    key: "4",
    label: <div className="text-base font-semibold">Resources</div>,
    children: [
      {
        key: "41",
        label: "Create Flash Cache",
        children: [],
      },
      {
        key: "42",
        label: "Flash Cache Configuration",
      },
      {
        key: "43",
        label: "Create Object Storage",
      },
      {
        key: "44",
        label: "Detail",
        children: [],
      },
    ],
  },
];

const items5: MenuItem[] = [
  {
    key: "5",
    label: <div className="text-base font-semibold">Reports</div>,
    children: [
      {
        key: "51",
        label: "Log",
        children: [],
      },
      {
        key: "52",
        label: "Configuration Reports",
      },
      {
        key: "53",
        label: "Historical Statistics",
      },
      {
        key: "54",
        label: "Debug Logs",
      },
      {
        key: "55",
        label: "Live Statistics",
      },
    ],
  },
];

const items6: MenuItem[] = [
  {
    key: "6",
    label: <div className="text-base font-semibold">System</div>,
    children: [
      {
        key: "61",
        label: "Admin",
        children: [],
      },
      {
        key: "62",
        label: "Network",
      },
      {
        key: "53",
        label: "iDiagnostics",
        children: [],
      },
      {
        key: "54",
        label: "Notifications",
      },
      {
        key: "56",
        label: "UPS",
      },
      {
        key: "57",
        label: "Users",
      },
    ],
  },
];
export default function Sidebar() {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 py-4">
        <span className="bg-white rounded-full p-4">
          <FcGoogle size={50} />
        </span>
        <div>
          <h6 className="text-white">SC-172-125-82-211</h6>
          <span className="text-gray-300">Administrator</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <div className="w-1 h-10 bg-tertiary rounded-md"></div>
        <h6 className="text-white text-base bg-tertiary py-2 px-4 rounded-md flex-1 text-left">
          Dashboard
        </h6>
      </div>

      <div className="py-4">
        <Menu
          mode="inline"
          defaultSelectedKeys={["231"]}
          items={items}
          className="bg-primary left-sidebar-menu-style"
        />
        <Menu
          mode="inline"
          defaultSelectedKeys={["231"]}
          items={items2}
          className="bg-primary left-sidebar-menu-style"
        />

        <hr />

        <Menu
          mode="inline"
          defaultSelectedKeys={["231"]}
          items={items3}
          className="bg-primary left-sidebar-menu-style"
        />

        <hr />

        <Menu
          mode="inline"
          defaultSelectedKeys={["231"]}
          items={items4}
          className="bg-primary left-sidebar-menu-style"
        />

        <hr />

        <Menu
          mode="inline"
          defaultSelectedKeys={["231"]}
          items={items6}
          className="bg-primary left-sidebar-menu-style"
        />

        <hr />

        <Menu
          mode="inline"
          defaultSelectedKeys={["231"]}
          items={items5}
          className="bg-primary left-sidebar-menu-style"
        />
      </div>
    </div>
  );
}
