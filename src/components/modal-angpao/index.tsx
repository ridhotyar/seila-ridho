import * as Dialog from "@radix-ui/react-dialog";
import XIcon from "../../assets/icons/x-icon.svg?react";
import classNames from "./modal-angpao.module.scss";
import { config } from "../../config";
import Copy from "../../assets/icons/copy-icon.svg?react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ModalAngpao = () => {

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);

    toast.success(`Nomor rekening berhasil disalin`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  return (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={classNames.button}>Kirim Angpao</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <ToastContainer />
      <Dialog.Overlay className={classNames.DialogOverlay} />
      <Dialog.Content className={classNames.DialogContent}>
        <Dialog.Title className={classNames.DialogTitle}>
          Kirim Angpao
        </Dialog.Title>
        <br />
        <div className={classNames.content}>
          <div className={classNames.card}>
            <img src={config.gift.cardImage[2]} alt="" />
            <div className={classNames.desc} onClick={() => handleCopy(config.gift.mandiriNo)}>
              <>{config.bride.woman.cardName}</>
              <br />
              <>{config.gift.mandiriNo}</> <Copy className={classNames.icon}/>
            </div>
          </div>
          <div className={classNames.card}>
            <img src={config.gift.cardImage[0]} alt="" />
            <div className={classNames.desc} onClick={() => handleCopy(config.gift.bcaNo)}>
              <>{config.bride.man.cardName}</>
              <br />
              <>{config.gift.bcaNo}</> <Copy className={classNames.icon}/>
            </div>
            
          </div>
          <div className={classNames.card}>
            <img src={config.gift.cardImage[1]} alt="" />
            <div className={classNames.desc} onClick={() => handleCopy(config.gift.bsiNo)}>
              <>{config.bride.man.cardName}</>
              <br />
              <>{config.gift.bsiNo}</> <Copy className={classNames.icon}/>
            </div>
          </div>
        </div>
        <Dialog.Close asChild>
          <button className={classNames.IconButton} aria-label="Close">
            <XIcon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
};

export default ModalAngpao;