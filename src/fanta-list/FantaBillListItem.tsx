import React from 'react';
import { IFantaBill } from "../presenter/FantaPresenter";
import { Tag } from 'antd-mobile';


const FantaListItemDescriptionRender = (props: {
  item: IFantaBill
}) => {

  const { item } = props;

  return (
    <p>
      <span style={{ marginRight: 30 }}>申请人: ${item.applyUser}</span>
      <span>
        {item.tags?.map(t => {
          return (
            <span key={t}>
              <Tag >{t}</Tag>
              &nbsp;
            </span>
          )
        })}
      </span>
    </p>
  )
}

export default FantaListItemDescriptionRender;