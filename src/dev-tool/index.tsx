import React from 'react';
import { DevToolPresenter } from '../presenter/DevToolPresenter';

interface IDevToolContainerProps {
  devToolPresenter: DevToolPresenter
}

function DevToolContainer(props: IDevToolContainerProps) {


  return (
    <p>DevToolContainer</p>
  )
}

export default DevToolContainer;