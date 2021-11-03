import React, { useReducer } from "react";
import { dataContext } from "./Components/dataContext";
import { data } from "./Components/homedata";
import { Users } from "./Components/Users";
import { ActionTypes, IState } from "./Interface/interface";
import "./Styles/Styles.css";

const initialState = {
  id: "",
  data,
};

const reducer = (state: IState, action: ActionTypes) => {
  switch (action.type) {
    case "Delete":
      return {
        ...state,
        id: action.payload,
        data: state.data.map((d) => {
          if (d.id === state.id) {
            return { ...d, isDelete: true };
          } else {
            return { ...d };
          }
        }),
      };

    case "DeleteL":
      return {
        ...state,
        data: state.data.map((d) => {
          if (d.id === state.id) {
            return { ...d, isLDelete: true };
          } else {
            return { ...d };
          }
        }),
        id: "",
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="outer--wrapper">
      <dataContext.Provider value={{ state, dispatch }}>
        <main>
          <Users />
        </main>
      </dataContext.Provider>
    </div>
  );
}

export default App;
