import { FC, useState } from "react";
import bgImg from "../../assets/images/img-9.jpeg";
import classNames from "./RSVPSlider.module.scss";
import { motion } from "framer-motion";
import ModalAngpao from "../modal-ucapan";
import ListUcapan from "../modal-list-ucapan";

interface Props {
  inView: boolean;
}

const RSVPSlider: FC<Props> = (props) => {
  
  const [refreshData, setRefreshData] = useState(false);

  const handleDataRefresh = () => {
    setRefreshData((prev) => !prev);  // Toggle the state to trigger reload in ListUcapan
  };

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
            Kirim Ucapan
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.content}
          >
            <ListUcapan refreshData={refreshData}/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.buttons}
          >
            <ModalAngpao onSubmit={handleDataRefresh}/>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default RSVPSlider;
