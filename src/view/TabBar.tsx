import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import { useNavigate, useLocation } from 'react-router-dom';


interface IFantaTabBarProps {

}

const FantaTabBar = (props: IFantaTabBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;


  const tabs = [
    {
      key: '/dashboard',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/list',
      title: '列表',
      icon: <UnorderedListOutline />,
    },
    // {
    //   key: 'message',
    //   title: '消息',
    //   icon: (active: boolean) =>
    //     active ? <MessageFill /> : <MessageOutline />,
    // },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  const [activeKey, setActiveKey] = useState(pathname)

  return (
    <div className="main-tab-bar">
      <TabBar
        activeKey={activeKey}
        onChange={(key: string) => {
          setActiveKey(key);
          navigate(key)
        }}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}


export default FantaTabBar;