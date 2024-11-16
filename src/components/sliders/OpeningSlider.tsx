import { FC, useEffect, useRef, useState } from "react";
import bgvideo from "../../assets/videos/bg-video-1.mp4";
import classNames from "./OpeningSlider.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "../../config";

interface Props {
  isOpened: boolean;
  inView: boolean;
  onClickOpen: () => void;
}

interface QueryParams {
  [key: string]: string;
}

const OpeningSlider: FC<Props> = (props) => {
  const [loadedVideo, setLoadedVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [queryParams, setQueryParams] = useState<QueryParams>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryObj = {};
    params.forEach((value, key) => {
      (queryObj as Record<string, string>)[key] = value;
    });
    setQueryParams(queryObj);
  }, []);

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
      <video
        ref={videoRef}
        className={classNames.bgVideo}
        muted
        loop
        onLoadedData={() => setLoadedVideo(true)}
        style={{ opacity: loadedVideo ? 1 : 0, transition: "opacity 0.5s" }}
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
      {props.inView && loadedVideo && (
        <div className={classNames.content}>
          <motion.p
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.title}
          >
            THE WEDDING OF
          </motion.p>
          <motion.p
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.names}
          >
            {`${config.bride.woman.name} ${config.bride.man.name}`}
          </motion.p>
          <motion.div
            className={classNames.invitation}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ bounce: 0, duration: 1, ease: "easeInOut" }}
          >
            <p>KEPADA YTH</p>
            <p>{queryParams?.name ?? "Tamu Undangan"}</p>
            <AnimatePresence>
              {!props.isOpened && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    className={classNames.button}
                    onClick={props.onClickOpen}
                  >
                    Buka Undangan
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default OpeningSlider;
