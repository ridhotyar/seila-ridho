// import * as Dialog from "@radix-ui/react-dialog";
// import XIcon from "../../assets/icons/x-icon.svg?react";
// import classNames from "./modal-ucapan.module.scss";
// import { config } from "../../config";
import { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../../firebaseConfig";

interface Ucapan {
  guestName: string;
  guestAttendance: string;
  guestCount: string;
  guestRemark: string;
}

function ListUcapan() {

  let [fruitArray, setFruitArray] = useState<Ucapan[]>([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "ucapan");
    const snapshot = await get(dbRef);
    if(snapshot.exists()) {
      setFruitArray(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {fruitArray.map( (item, index) => (
          <li key={index}>
            {item.guestName},{item.guestAttendance},{item.guestCount},{item.guestRemark}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ListUcapan;