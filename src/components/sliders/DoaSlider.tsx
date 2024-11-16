import { FC } from "react";
import bgImg from "../../assets/images/img-6.jpeg";
import classNames from "./DoaSlider.module.scss";
import { config } from "../../config";
import { motion } from "framer-motion";

interface Props {
  inView: boolean;
}

const DoaSlider: FC<Props> = (props) => {
  return (
    <div className={classNames.main}>
      <img className={classNames.bgImg} src={bgImg} />
      {props.inView && (
        <div className={classNames.content}>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.title}
          >
            Doa untuk Pengantin
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.content}
          >
            {config.doa}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DoaSlider;
