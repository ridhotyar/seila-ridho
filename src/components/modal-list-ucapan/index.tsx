import { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../../firebaseConfig";
import classNames from "./modal-list-ucapan.module.scss";

interface Ucapan {
  guestName: string;
  guestAttendance: string;
  guestCount: string;
  guestRemark: string;
}

function ListUcapan() {

  let [fruitArray, setFruitArray] = useState<Ucapan[]>([]);
  const [visible, setVisible] = useState(false);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "ucapan");
    const snapshot = await get(dbRef);
    if(snapshot.exists()) {
      setFruitArray(Object.values(snapshot.val()));
    } else {
      setVisible(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classNames.listUcapan}>
      {visible && <div></div>}
      {fruitArray.map( (item, index) => (
        <div className={classNames.listItem} key={index}>
          
          <div className={classNames.Header}>
            <p style={{
              fontSize: "16px",
              fontWeight: "500",
            }}>{item.guestName}</p>
            <p style={{
              marginLeft: "5px",
              fontSize: "9px",
            }}>{item.guestAttendance}</p>
          </div>
          {item.guestRemark}
        </div>
      ))}
    </div>
  )
};

export default ListUcapan;