import * as Dialog from "@radix-ui/react-dialog";
import XIcon from "../../assets/icons/x-icon.svg?react";
import classNames from "./modal-gift.module.scss";
import { config } from "../../config";
import Copy from "../../assets/icons/copy-icon.svg?react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalGift = () => {

  const handleCopy = (adress: string) => {
    navigator.clipboard.writeText(adress);

    toast.success(`Alamat berhasil disalin`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  return(
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={classNames.button}>Kirim Kado</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <ToastContainer />
      <Dialog.Overlay className={classNames.DialogOverlay} />
      <Dialog.Content className={classNames.DialogContent}>
        <Dialog.Title className={classNames.DialogTitle}>
          Kirim Kado
        </Dialog.Title>
        <br />
        <div className={classNames.content}>
          <div className={classNames.desc} onClick={() => handleCopy(config.gift.alamat.reciveAddress)}>
            Penerima : {config.gift.alamat.reciveName} <br />
            No. HP : {config.gift.alamat.reciveNumber} <br />
            Alamat : {config.gift.alamat.reciveAddress} <Copy className={classNames.icon}/> <br />
          </div>
        </div>
        <br />
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

export default ModalGift;
