import React, { ReactNode } from 'react';
import FantaTabBar from './TabBar';

interface IViewProps {
  container: ReactNode
}

const View = (props: IViewProps) => {
  const { container } = props;
  

  return (
    <div id='main-view'>
      <div id="main-container">
        {container}
      </div>
      <FantaTabBar />
    </div>
  )
}

export default View;