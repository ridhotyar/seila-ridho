import { FC, useEffect, useRef } from "react";
import bgvideo from "../../assets/videos/bg-video-4.mp4";
import classNames from "./ThankyouSlider.module.scss";
import { motion } from "framer-motion";
import { config } from "../../config";

interface Props {
  inView: boolean;
}

const Thankyou: FC<Props> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (props.inView && videoRef.current) {
      videoRef.current.play();
      videoRef.current.currentTime = 0;
    } else {
      videoRef.current?.pause();
    }
  }, [props.inView]);

  return (
    <div className={classNames.main}>
      <video ref={videoRef} className={classNames.bgVideo} muted loop>
        <source src={bgvideo} type="video/mp4" />
      </video>
      {props.inView && (
        <div className={classNames.content}>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.content}
          >
            {config.thankYou}
          </motion.p>
          <motion.p
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.brideName}
          >
            {`${config.bride.woman.name} & ${config.bride.man.name}`}
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Thankyou;
