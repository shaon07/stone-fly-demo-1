import { ConfigProvider } from "antd";
import React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: { colorPrimary: "#00b96b" },
          components: {
            Menu: {
              itemSelectedBg: "rgba(255,255,255,0)",
              itemSelectedColor: "rgb(255,255,255)",
              colorText:"rgba(255,255,255,0.88)"
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
}
