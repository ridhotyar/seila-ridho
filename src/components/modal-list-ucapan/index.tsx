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

export const fetchData = async ():Promise<Ucapan[] | null> => {
  const db = getDatabase(app);
  const dbRef = ref(db, "ucapan");
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    return Object.values(snapshot.val());
  } else {
    return null;
  }
}

function ListUcapan({ refreshData }: { refreshData: boolean }) {

  const [fruitArray, setFruitArray] = useState<Ucapan[]>([]);
  const [visible, setVisible] = useState(false);

  

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();
        if (data) {
          setFruitArray(data);
        } else {
          setVisible(true);
        }
      } catch (error) {
        setVisible(true);
      }
    };

    loadData();
  }, [refreshData]);

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
              {
                item.guestAttendance === "Hadir" ? (
                  <p
                    style={{
                      marginLeft: "5px",
                      fontSize: "9px",
                      color: "green",
                    }}
                  >
                    {item.guestAttendance}
                  </p>
                ) : (
                  <p
                    style={{
                      marginLeft: "5px",
                      fontSize: "9px",
                      color: "red",
                    }}
                  >
                    {item.guestAttendance}
                  </p>
                )
              }
          </div>
          {item.guestRemark}
        </div>
      ))}
    </div>
  )
};

export default ListUcapan;