import { FC } from "react";
import frame from "../../assets/images/frame.webp";
import classNames from "./photo-frame.module.scss";

interface Props {
  src: string;
}

const PhotoFrame: FC<Props> = (props) => {
  return (
    <div className={classNames.main}>
      <img className={classNames.frame} src={frame} />
      <img className={classNames.img} src={props.src} />
    </div>
  );
};

export default PhotoFrame;
