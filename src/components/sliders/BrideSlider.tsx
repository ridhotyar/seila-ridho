import { FC } from "react";
import bgImg from "../../assets/images/img-1.jpeg";
import classNames from "./BrideSlider.module.scss";
import { motion } from "framer-motion";
import PhotoFrame from "../photo-frame";
import Instagram from "../../assets/icons/instagram.svg?react";
import { config } from "../../config";

interface Props {
  inView: boolean;
}

const BrideSlider: FC<Props> = (props) => {
  return (
    <div className={classNames.main}>
      <img className={classNames.bgImg} src={bgImg} />
      {props.inView && (
        <div className={classNames.content}>
          <motion.p
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.name}
          >
            {config.bride.woman.fullName}
          </motion.p>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.desc}
          >
            {config.bride.woman.desc}
          </motion.p>
          <motion.button
            className={classNames.button}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            onClick={() => window.open(config.bride.woman.instagram, "_blank")}
          >
            <Instagram />
            selatazkiyah
          </motion.button>
          <div className={classNames.photoWrapper}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            >
              <PhotoFrame src={config.bride.woman.photo} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            >
              <PhotoFrame src={config.bride.man.photo} />
            </motion.div>
          </div>
          <motion.button
            className={classNames.button}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            onClick={() => window.open(config.bride.man.instagram, "_blank")}
          >
            <Instagram />
            ridhotiyar
          </motion.button>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.name}
          >
            {config.bride.man.fullName}
          </motion.p>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.desc}
          >
            {config.bride.man.desc}
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default BrideSlider;
