import styles from "./DeliverySchedule.module.scss";
import { Input } from "shared/ui/input/Input";
import { days, hours, months } from "../config";
import { uuidv4 } from "@firebase/util";

export const DeliverySchedule = () => {
  const scheduleDays = [];
  days.forEach((day) => {
    const date = new Date();
    const month = months[date.getMonth()];

    const deliveryDay = `${date.getDate() + day} ${month}`;
    scheduleDays.push({ id: uuidv4(), deliveryDay, hours });
  });

  return (
    <div className={styles.information_schedule}>
      {scheduleDays.map(({ id, deliveryDay, hours }) => (
        <div
          key={id}
          className={styles.information_schedule__block}
        >
          <h3
            className={styles.information_schedule__title}
          >
            {deliveryDay}
          </h3>
          {hours.map((hour) => (
            <div key={hour}>
              <Input
                type="radio"
                name="time"
                id={id + hour}
                classes={styles.information_schedule__input}
              />
              <label
                htmlFor={id + hour}
                className={
                  styles.information_schedule__label
                }
              >
                {hour}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
