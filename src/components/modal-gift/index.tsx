import * as Dialog from "@radix-ui/react-dialog";
import XIcon from "../../assets/icons/x-icon.svg?react";
import classNames from "./modal-gift.module.scss";
import { config } from "../../config";
import { useState } from "react";

const ModalGift = () => {
  const [copied,setCopied] = useState("");

  return(
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={classNames.button}>Kirim Kado</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={classNames.DialogOverlay} />
      <Dialog.Content className={classNames.DialogContent}>
        <Dialog.Title className={classNames.DialogTitle}>
          Kirim Kado
        </Dialog.Title>
        <br />
        <div className={classNames.content}>
          <div className={classNames.desc} onClick={ () => {navigator.clipboard.writeText(config.gift.alamat.reciveAddress);setCopied("copied")}}>
            Penerima : {config.gift.alamat.reciveName} <br />
            No. HP : {config.gift.alamat.reciveNumber} <br />
            Alamat : {config.gift.alamat.reciveAddress} <br />
          </div>
        </div>
        <br />
        <div className={classNames.note}>{ copied==='copied' ? `Address Copied ✅` : `*Tap alamat untuk copy`}</div>
        <Dialog.Close asChild>
          <button className={classNames.IconButton} aria-label="Close" onClick={ () => {setCopied("")}}>
            <XIcon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
};

export default ModalGift;
