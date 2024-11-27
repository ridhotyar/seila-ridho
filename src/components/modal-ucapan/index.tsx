import * as Dialog from "@radix-ui/react-dialog";
import XIcon from "../../assets/icons/x-icon.svg?react";
import classNames from "./modal-ucapan.module.scss";
import { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { app } from "../../firebaseConfig";

interface ModalUcapanProps {
  onSubmit: () => void;  // Callback to refresh data
}

function ModalUcapan({ onSubmit }: ModalUcapanProps) {

  let [name, setName] = useState("");
  let [attendance, setAttendance] = useState("");
  let [guest, setGuest] = useState("");
  let [remark, setRemark] = useState("");
  const [open, setOpen] = useState(false);
  const timestamp = new Date().toISOString();

  const validateForm = () => {
    if (name===("") || attendance===("") || remark===("")){
      alert("Nama, Kehadiran, dan Ucapan tidak boleh kosong")
    } else {
      saveData();
    }
  }

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "ucapan"))
    set(newDocRef, {
      guestName: name,
      guestAttendance: attendance,
      guestCount: guest,
      guestRemark: remark,
      timestamp: timestamp
    }).then( () => {
      alert("Terima kasih banyak atas ucapan dan doa yang telah diberikan")
      setOpen(false);
      onSubmit();
    }).catch( () => {
      alert("error");
    })
  }

  const setEmpty = () => {
    setName("")
    setGuest("")
    setAttendance("")
    setRemark("")
  }

  return (
  <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild>
      <button className={classNames.button} onClick={setEmpty}>Kirim Ucapan dan Doa</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={classNames.DialogOverlay} />
      <Dialog.Content className={classNames.DialogContent}>
        <Dialog.Title className={classNames.DialogTitle}>
          Kirim Ucapan
        </Dialog.Title>
        <br />
        <div className={classNames.form}>
          <input type="text" value={name}
          onChange={(e) => setName(e.target.value)} placeholder="Nama"/>
          
          <select 
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}>
            <option value="" disabled hidden>Pilih Kehadiran</option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
          
          {(attendance==="Hadir" || attendance==="") &&
            <select 
              value={guest}
              onChange={(e) => setGuest(e.target.value)}>
              <option value="" disabled hidden>Jumlah Tamu</option>
              <option value="1 Orang">1 Orang</option>
              <option value="2 Orang">2 Orang</option>
            </select>
          }

          <textarea value={remark} onChange={(e) => setRemark(e.target.value)} placeholder="Ucapan" maxLength={300} rows={4}/>

          <button onClick={validateForm}> Kirim </button>
        </div>
        
        <Dialog.Close asChild>
          <button className={classNames.IconButton} aria-label="Close" onClick={setEmpty}>
            <XIcon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
};

export default ModalUcapan;