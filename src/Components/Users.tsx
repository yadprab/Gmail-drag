import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useContext, useEffect } from "react";
import { dataContext } from "./dataContext";
import { ListComp } from "./ListComp";
const Users = () => {
  const context = useContext(dataContext);
  useEffect(() => {
    if (context?.state.id) {
      setTimeout(() => {
        context.dispatch({ type: "DeleteL", payload: "" });
      }, 200);
    }
  }, [context]);
  return (
    <div className="users--wrapper">
      <AnimateSharedLayout>
        <ul>
          {context?.state.data.map((d) => {
            return (
              <AnimatePresence key={d.id}>
                {!d.isLDelete && (
                  <ListComp
                    id={d.id}
                    img={d.image}
                    body={d.body}
                    name={d.name}
                    state={d.isDelete}
                  />
                )}
              </AnimatePresence>
            );
          })}
        </ul>
      </AnimateSharedLayout>
    </div>
  );
};
export { Users };
