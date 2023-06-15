import React from 'react';
import { Collapse } from 'antd-mobile'
import { TagOutline, BankcardOutline, SetOutline } from 'antd-mobile-icons'
import './me.scss';

interface IMeContainerProps {

}

const MeContainer = (props: IMeContainerProps) => {

  return (
    <div className='me-container'>
      <Collapse activeKey={['document', 'setting']}>
        <Collapse.Panel key='document' title='档案'>
          <MenuIconItem icon={<BankcardOutline />} title="单据类型" />
          <MenuIconItem icon={<TagOutline />} title="标签类型" />
        </Collapse.Panel>
        <Collapse.Panel key='setting' title='设置'>
          <MenuIconItem icon={<SetOutline />} title="设置" />
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
    <div className='me-menu-item'>
      <div className='me-menu-item-icon'>{icon}</div>
      <p className='me-menu-item-title'>{title}</p>
    </div>
  )
}

export default MeContainer;