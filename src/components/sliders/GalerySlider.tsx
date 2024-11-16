import { FC, useMemo } from "react";
import bgImg from "../../assets/images/img-4.jpeg";
import classNames from "./GalerySlider.module.scss";
import { config } from "../../config";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  inView: boolean;
}

const Slider8: FC<Props> = (props) => {
  const photos = useMemo(() => config.galeries.slice(0, 6), []);
  return (
    <div className={classNames.main}>
      <img className={classNames.bgImg} src={bgImg} />
      {props.inView && (
        <div className={classNames.content}>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 1.5, ease: "easeInOut" }}
            className={classNames.map}
          >
          <div className={classNames.galeries}>
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className={clsx(classNames.photo, classNames[`photo${idx}`])}
              >
                <img src={photo} />
              </div>
            ))}
          </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Slider8;
