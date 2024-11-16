import { forwardRef, useEffect, useRef } from "react";
import { useMergeRefs } from "../../utils/useMergeRef";
import classNames from "./background-music.module.scss";
import Play from "../../assets/icons/play.svg?react";
import Pause from "../../assets/icons/pause.svg?react";
import { motion } from "framer-motion";
import { config } from "../../config";

type Props = {
  isOpened: boolean;
  playAudio: boolean;
  setPlayAudio: React.Dispatch<React.SetStateAction<boolean>>;
};

const BackgroundMusic = forwardRef<HTMLAudioElement, Props>((props, ref) => {
  const internalRef = useRef<HTMLAudioElement>(null);
  const audioRef = useMergeRefs(internalRef, ref);

  const togglePlay = () => {
    props.setPlayAudio((prev) => !prev);
    if (props.playAudio) {
      internalRef.current?.pause();
    } else {
      internalRef.current?.play();
    }
  };

  useEffect(() => {
    if (props.playAudio) {
      internalRef.current?.play();
    } else {
      internalRef.current?.pause();
    }
  }, [props.playAudio]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={config.backgroundMusic} type="audio/mpeg" />
      </audio>
      {props.isOpened && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
          className={classNames.control}
        >
          <button onClick={togglePlay}>
            {props.playAudio ? (
              <Pause className={classNames.icon} />
            ) : (
              <Play className={classNames.icon} />
            )}
          </button>
        </motion.div>
      )}
    </>
  );
});

export default BackgroundMusic;
