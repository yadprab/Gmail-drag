export interface IData {
  state: {
    id: string;
    name: string;
    body: string;
    image: string;
    isDelete: boolean;
    isLDelete: boolean;
  }[];
}

export interface IState {
  id: string;
  data: IData["state"];
}

export interface IContext {
  ctx: {
    state: IState;
    dispatch: React.Dispatch<ActionTypes>;
  };
}

export type ActionTypes = { type: string; payload: string };
