import * as Dialog from "@radix-ui/react-dialog";
import XIcon from "../../assets/icons/x-icon.svg?react";
import classNames from "./modal-angpao.module.scss";
import { config } from "../../config";

const ModalAngpao = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={classNames.button}>Kirim Angpao</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={classNames.DialogOverlay} />
      <Dialog.Content className={classNames.DialogContent}>
        <Dialog.Title className={classNames.DialogTitle}>
          Kirim Angpao
        </Dialog.Title>
        <br />
        <div className={classNames.content}>
          <div className={classNames.card}>
            <img src={config.gift.cardImage[2]} alt="" />
            <div className={classNames.desc} onClick={ () => {navigator.clipboard.writeText(config.gift.mandiriNo)}}>
              <>{config.bride.woman.cardName}</>
              <br />
              <>{config.gift.mandiriNo}</>
            </div>
          </div>
          <div className={classNames.card}>
            <img src={config.gift.cardImage[0]} alt="" />
            <div className={classNames.desc} onClick={ () => {navigator.clipboard.writeText(config.gift.bcaNo)}}>
              <>{config.bride.man.cardName}</>
              <br />
              <>{config.gift.bcaNo}</>
            </div>
            
          </div>
          <div className={classNames.card}>
            <img src={config.gift.cardImage[1]} alt="" />
            <div className={classNames.desc} onClick={ () => {navigator.clipboard.writeText(config.gift.bsiNo)}}>
              <>{config.bride.man.cardName}</>
              <br />
              <>{config.gift.bsiNo}</>
            </div>
          </div>
          <div className={classNames.note}> *Tap nama atau nomor untuk copy</div>
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

export default ModalAngpao;
