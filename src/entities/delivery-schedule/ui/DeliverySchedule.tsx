import styles from "./DeliverySchedule.module.scss";
import { Input } from "shared/ui/input/Input";
import { days, hours, months } from "../config";
import { uuidv4 } from "@firebase/util";
import { FC } from "react";

interface ScheduleDays {
  id: string;
  deliveryDay: string;
  hours: string[];
}

export const DeliverySchedule: FC = () => {
  const scheduleDays: ScheduleDays[] = [];
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
          {hours?.map((hour: any) => (
            <div key={hour}>
              <Input
                type="radio"
                name="time"
                defaultChecked={true}
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
