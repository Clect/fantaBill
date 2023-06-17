import React from 'react';
import { AddOutline, FilterOutline } from 'antd-mobile-icons'
import './fanta-bill-list.scss';
import { Button } from 'antd-mobile';


interface IFantaBillListActionProps {

}

const FantaBillListAction = (props: IFantaBillListActionProps) => {


  return (
    <div className='fanta-bill-action'>
      <div className='fanta-bill-search'>
        <Button color='primary' fill='none' size='small'>
          <FilterOutline fontSize={12} />
          <span className='btn-content'>过滤</span>
        </Button>
      </div>
      <div className='fanta-bill-add'>
        <Button color='primary' fill='none' size='small'>
          <AddOutline fontSize={12} />
          <span className='btn-content'>创建</span>
        </Button>
      </div>
    </div>
  )
}

export default FantaBillListAction;