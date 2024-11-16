import * as Dialog from "@radix-ui/react-dialog";
import XIcon from "../../assets/icons/x-icon.svg?react";
import classNames from "./modal-gift.module.scss";
import { config } from "../../config";

const ModalGift = () => (
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
          <div className={classNames.desc}>
            Penerima : {config.gift.alamat.reciveName} <br />
            No. HP : {config.gift.alamat.reciveNumber} <br />
            Alamat : {config.gift.alamat.reciveAddress} <br />
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
);

export default ModalGift;
