import React from "react";
import { FantaPresenter } from "../presenter/FantaPresenter";

const FantaPresenterContext = React.createContext<FantaPresenter | null>(null);

export default FantaPresenterContext;