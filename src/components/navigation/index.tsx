/* eslint-disable react-hooks/exhaustive-deps */
import { KeenSliderHooks, KeenSliderInstance } from "keen-slider";
import { FC, useEffect, useState } from "react";
import classNames from "./navigation.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import clsx from "clsx";
import { config } from "../../config";

interface Props {
  isOpened: boolean;
  navigationRef: KeenSliderInstance<object, object, KeenSliderHooks>;
  currentSlide: number;
}

const Navigation: FC<Props> = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      origin: "center",
      perView: 4,
    },
    initial: 0,
    slideChanged(slider) {
      props.navigationRef.moveToIdx(slider.track.details.rel, true);
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const onClickMenu = (idx: number) => {
    props.navigationRef.moveToIdx(idx);
    setCurrentSlide(idx);
    instanceRef.current?.moveToIdx(idx, true);
  };

  useEffect(() => {
    if (props.currentSlide !== currentSlide) {
      setCurrentSlide(props.currentSlide);
      instanceRef.current?.moveToIdx(props.currentSlide, true);
    }
  }, [props.currentSlide]);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className={classNames.main}>
      {props.isOpened && (
        <motion.div
          className={classNames.content}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, bounce: 0 }}
        >
          <div ref={ref} className="keen-slider">
            {config.sliderList.map((item, idx) => (
              <div
                key={idx}
                className="keen-slider__slide"
                onClick={() => onClickMenu(idx)}
              >
                <div
                  className={clsx(classNames.item, {
                    [classNames.active]: idx === currentSlide,
                  })}
                >
                  <div className={classNames.icon}>{item.icon}</div>
                  <p className={classNames.label}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;
