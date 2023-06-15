import React, { useContext } from 'react';
import { List } from 'antd-mobile';
import { FantaPresenter } from '../presenter/FantaPresenter';
import FantaPresenterContext from '../context/fantaPresenter';
import FantaListItemDescriptionRender from './FantaBillListItem';

interface IFantaBillListProps {

}

const FantaBillList = (props: IFantaBillListProps) => {

  const presenter = useContext(FantaPresenterContext) as FantaPresenter;

  return (
    <div id="list-view">
      <List>
        {
          presenter.list.map(item => {

            return (
              <List.Item
                clickable
                key={item.code}
                description={<FantaListItemDescriptionRender item={item} />}
              >
                <p>{item.code}-{item.originAmount}</p>
              </List.Item>
            )
          })
        }
      </List>
    </div>
  )
}

export default FantaBillList;