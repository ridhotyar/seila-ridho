import { FC, useMemo } from "react";
import bgImg from "../../assets/images/img-3.jpeg";
import classNames from "./ReceptionSlider.module.scss";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";
import Countdown, { CountdownRendererFn } from "react-countdown";
import { config } from "../../config";
dayjs.locale("id");
dayjs.extend(utc);
dayjs.extend(timezone);

interface Props {
  inView: boolean;
}

const ReceptionSlider: FC<Props> = (props) => {
  const event = useMemo(() => {
    return {
      title: config.event.reception.title,
      startDate: dayjs
        .tz(config.event.reception.startDate, "Asia/Jakarta")
        .utc(),
      endDate: dayjs.tz(config.event.reception.endDate, "Asia/Jakarta").utc(),
      detail: config.event.reception.detail,
      location: config.event.reception.location,
    };
  }, []);

  const onClickAddToCalendar = () => {
    const link = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${dayjs(event.startDate).format("YYYYMMDDTHHmmss[Z]")}/${dayjs(
      event.endDate
    ).format("YYYYMMDDTHHmmss[Z]")}&details=${encodeURIComponent(
      event.detail
    )}&location=${encodeURIComponent(event.location)}`;
    window.open(link, "_blank");
  };

  const renderer: CountdownRendererFn = (time) => {
    return (
      <div className={classNames.countdown}>
        <div className={classNames.boxes}>
          <p className={classNames.time}>{time.days}</p>
          <p className={classNames.unit}>Hari</p>
        </div>
        <div className={classNames.boxes}>
          <p className={classNames.time}>{time.hours}</p>
          <p className={classNames.unit}>Jam</p>
        </div>
        <div className={classNames.boxes}>
          <p className={classNames.time}>{time.minutes}</p>
          <p className={classNames.unit}>Menit</p>
        </div>
        <div className={classNames.boxes}>
          <p className={classNames.time}>{time.seconds}</p>
          <p className={classNames.unit}>Detik</p>
        </div>
      </div>
    );
  };

  return (
    <div className={classNames.main}>
      <img className={classNames.bgImg} src={bgImg} />
      {props.inView && (
        <div className={classNames.content}>
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.title}
          >
            Acara Resepsi
          </motion.p>
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.desc}
          >
            {dayjs(event.startDate)
              .tz("Asia/Jakarta")
              .format("dddd, DD MMMM YYYY")}
            <br />{" "}
            {`Pukul ${dayjs(event.startDate)
              .tz("Asia/Jakarta")
              .format("HH:mm")} WIB s.d. ${dayjs(event.endDate)
                .tz("Asia/Jakarta")
                .format("HH:mm")} WIB`}
            <br />
            <br /> {event.location}
          </motion.p>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 1.5, ease: "easeInOut" }}
          >
            <Countdown
              date={event.startDate.tz("Asia/Jakarta").toDate()}
              renderer={renderer}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
          >
            <button
              className={classNames.button}
              onClick={onClickAddToCalendar}
            >
              Add to Calendar
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ReceptionSlider;
