import { createContext } from "react";
import { IContext } from "./../Interface/interface";

export const dataContext = createContext<IContext["ctx"] | null>(null);
