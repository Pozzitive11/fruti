import styles from "./DeliveryShedule.module.scss";
import { Input } from "shared/ui/input/Input";

const months = [
  "Січня",
  "Лютого",
  "Березня",
  "Квітня",
  "Травня",
  "Червня",
  "Липня",
  "Серпня",
  "September",
  "Жовтня",
  "Листопада",
  "Грудня",
];

const time = [
  "time1",
  "time2",
  "time3",
  "time4",
  "time5",
  "time6",
  "time7",
  "time8",
  "time9",
];
export const DeliveryShedule = () => {
  const sheduleDays = ["Завтра"];

  for (let i = 0; i < 3; i++) {
    const d = new Date();
    let month = months[d.getMonth()];
    let day = `${d.getDate() + i} ${month}`;
    sheduleDays.push(day);
  }
  return (
    <div className={styles.information_shedule}>
      {sheduleDays.map((day) => (
        <div key={day} className={styles.information_shedule__block}>
          <h3 className={styles.information_shedule__title}>{day}</h3>
          <Input
            type="radio"
            name="time"
            id="time1"
            classes={styles.information_shedule__input}
          />
          <label htmlFor="time1" className={styles.information_shedule__label}>
            11:00 - 14:00
          </label>
          <Input
            type="radio"
            name="time"
            id="time2"
            classes={styles.information_shedule__input}
          />
          <label htmlFor="time2" className={styles.information_shedule__label}>
            14:00 - 17:00
          </label>
          <Input
            type="radio"
            name="time"
            id="time3"
            classes={styles.information_shedule__input}
          />
          <label htmlFor="time3" className={styles.information_shedule__label}>
            17:00 - 20:00
          </label>
        </div>
      ))}
    </div>
  );
};
