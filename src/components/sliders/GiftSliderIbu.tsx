import { FC, useState } from "react";
import bgImg from "../../assets/images/img-7.png";
import classNames from "./GiftSliderIbu.module.scss";
import { motion } from "framer-motion";
import { config } from "../../config";

interface Props {
  inView: boolean;
}

const GiftSliderIbu: FC<Props> = (props) => {
  
  const [copied,setCopied] = useState("");
  const [number,setNumber] = useState("");

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
            Kirim Hadiah
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.content}
          >
            {config.gift.contentIbu}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.buttons}
          >

          <div className={classNames.card}>
            <img src={config.gift.cardImage[1]} alt="" />
            <div className={classNames.desc} onClick={ () => {navigator.clipboard.writeText(config.gift.bsiNoIbu);setNumber(config.gift.bsiNoIbu);setCopied("copied")}}>
              <>{config.gift.ibuName}</>
              <br />
              <>{config.gift.bsiNoIbu}</>
            </div>
          </div>  
          <div className={classNames.card}>
            <img src={config.gift.cardImage[2]} alt="" />
              <div className={classNames.desc} onClick={ () => {navigator.clipboard.writeText(config.gift.mandiriNo);setNumber(config.bride.woman.cardName);setCopied("copied")}}>
                <>{config.bride.woman.cardName}</>
                <br />
                <>{config.gift.mandiriNo}</>
              </div>
          </div>
          <div className={classNames.note}>{ copied==='copied' ? `Number Copied :  ${number}  ✅` : `*Tap nama atau nomor untuk copy`}</div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GiftSliderIbu;
