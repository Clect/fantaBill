import React, { useContext } from 'react';
import { FantaPresenter } from '../presenter/FantaPresenter';
import FantaPresenterContext from '../context/fantaPresenter';
import FantaBillList from './FantaBillList';
import FantaBillListAction from './FantaBillListAction';


interface IFantaListContainerProps {
  presenter: FantaPresenter
}

const FantaListContainer = (props: IFantaListContainerProps) => {
  return (
    <div id="list-container">
      <FantaBillListAction />
      <FantaBillList />
    </div>
  )
}



export default FantaListContainer;