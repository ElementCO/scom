import React, { useState, ReactNode, useEffect } from "react";
import { Tabbar } from "react-vant";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "./style.module.scss";
import FireIcon from "@/assets/svgs/fire.svg?react";
import HotIcon from "@/assets/svgs/hot.svg?react";
import UserIcon from "@/assets/svgs/user.svg?react";
import Head from '@/components/head'

interface LayoutProps {
  children: ReactNode;
}

interface ITabbarItem {
  icon: ReactNode;
  path: string;
  text: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const { pathname } = useLocation();
  const [name, setName] = useState(pathname);
  const navigate = useNavigate();

  useEffect(() => {
    setName(pathname);
  }, [pathname]);

  const tabbarList: ITabbarItem[] = [
    {
      icon: <FireIcon width="1em" height="1em" />,
      path: "/game",
      text: "游戏",
    },
    {
      icon: <HotIcon width="1em" height="1em" />,
      path: "/active",
      text: "活动",
    },
    {
      icon: <UserIcon width="1em" height="1em" />,
      path: "/me",
      text: "我的",
    }
  ];

  return (
    <main className="tw-h-full tw-w-full tw-overflow-hidden">
      <Head />
      <div className={classes.RouterView}>{children}</div>
      {/* <Tabbar value={name} onChange={(v) => setName(v as string)}>
        {tabbarList.map((item: ITabbarItem) => (
          <Tabbar.Item
            onClick={() => navigate(item.path)}
            name={item.path}
            icon={item.icon}
            key={item.path}
          >
            {item.text}
          </Tabbar.Item>
        ))}
      </Tabbar> */}
    </main>
  );
};

export default Layout;
