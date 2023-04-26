import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

interface Option {
  utc?: boolean;
  tz?: boolean;
}

export default function convertDate(
  date: dayjs.ConfigType,
  format: string,
  option?: Option
) {
  if (option?.tz) {
    dayjs.tz.setDefault("Etc/Universal");
    if (typeof date === "string") {
      return dayjs.tz(date).local().format(format);
    }
    return dayjs
      .tz((date as Dayjs).format("YYYY-MM-DD HH:00"))
      .local()
      .format(format);
  }
  if (option?.utc) {
    return dayjs(date).tz().format(format);
  }

  return dayjs(date).format(format);
}
