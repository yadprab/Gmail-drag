import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useContext } from "react";
import { exit } from "./animation";
import { dataContext } from "./dataContext";
import { ImageComp } from "./ImageComp";
import { TextComp } from "./TextComp";
import { Trash } from "./Trash";
const ListComp = ({
  img,
  name,
  body,
  id,
  state,
}: {
  img: string;
  name: string;
  body: string;
  id: string;
  state: boolean;
}) => {
  const x = useMotionValue(0);
  const context = useContext(dataContext);

  return (
    <motion.li
      className={`list--container`}
      variants={exit}
      initial={false}
      animate={false}
      exit="exit"
    >
      <div className="trash--wrapper">
        <Trash />
        <Trash />
      </div>
      <AnimatePresence exitBeforeEnter>
        {!state && (
          <motion.div
            className="inner--wrapper"
            id={id}
            drag="x"
            dragConstraints={{ right: -300, left: -300 }}
            whileDrag={{ borderRadius: 10 }}
            exit={{ scaleX: 0 }}
            style={{ x }}
            onDragStart={(e) => {
              const id = (e.target as HTMLDivElement).id;
              x.onChange((v) => {
                if (Math.abs(v) >= 270) {
                  context?.dispatch({ type: "Delete", payload: id });
                }
              });
            }}
          >
            <ImageComp img={img} />
            <TextComp name={name} body={body} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};
export { ListComp };
