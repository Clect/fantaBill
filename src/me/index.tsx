import React, { useState } from 'react';
import { Collapse, Button } from 'antd-mobile'
import { TagOutline, BankcardOutline, SetOutline } from 'antd-mobile-icons'
import './me.scss';

interface IMeContainerProps {

}

const MeContainer = (props: IMeContainerProps) => {


  const [activeKeys, setActiveKeys] = useState<string[]>(['document', 'setting'])

  return (
    <div className='me-container'>
      <Collapse activeKey={activeKeys}>
        <Collapse.Panel key='document' title='档案'>
          <MenuIconItem icon={<BankcardOutline fontSize={24} />} title="单据类型" />
          <MenuIconItem icon={<TagOutline fontSize={24} />} title="标签类型" />
        </Collapse.Panel>
        <Collapse.Panel key='setting' title='设置'>
          <MenuIconItem icon={<SetOutline fontSize={24} />} title="设置" />
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

interface IMenuIconItemProps {
  icon: React.ReactNode;
  title: string;
}

const MenuIconItem = (props: IMenuIconItemProps) => {
  const { icon, title } = props;
  return (
    <Button className='me-menu-item' fill='none'>
      <div className='me-menu-item-icon'>{icon}</div>
      <p className='me-menu-item-title'>{title}</p>
    </Button>
  )
}

export default MeContainer;