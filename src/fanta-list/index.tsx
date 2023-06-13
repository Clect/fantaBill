import React, { useContext } from 'react';
import { FantaPresenter, IFantaBill } from '../presenter/FantaPresenter';
import FantaPresenterContext from '../context/fantaPresenter';
import { List, Tag } from 'antd-mobile';


interface IFantaListContainerProps {
  presenter: FantaPresenter
}

const FantaListContainer = (props: IFantaListContainerProps) => {

  const presenter = useContext(FantaPresenterContext) as FantaPresenter;
  return (
    <div id="list-container">
      <List>
        {
          presenter.list.map(item => {

            return (
              <List.Item
                clickable
                key={item.code}
                description={<ListItemDescriptionRender item={item} />}
              >
                {item.code}-{item.originAmount}
              </List.Item>
            )
          })
        }
      </List>
    </div>
  )
}

const ListItemDescriptionRender = (props: {
  item: IFantaBill
}) => {

  const { item } = props;

  return (
    <p>
      <span style={{ marginRight: 30 }}>申请人: ${item.applyUser}</span>
      <span>
        {item.tags?.map(t => {
          return (
            <>
              <Tag key={t}>{t}</Tag>
              &nbsp;
            </>
          )
        })}
      </span>
    </p>
  )
}

export default FantaListContainer;