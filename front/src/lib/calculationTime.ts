import dayjs, { Dayjs } from "dayjs";

const msToDate = (nowTime: Dayjs, updateTime: Dayjs): number => {
  return Math.floor(nowTime.diff(updateTime) / (24 * 60 * 60 * 1000));
};

const msToHour = (nowTime: Dayjs, updateTime: Dayjs): number => {
  return Math.floor(nowTime.diff(updateTime) / (60 * 60 * 1000));
};

const msToMinutes = (nowTime: Dayjs, updateTime: Dayjs): number => {
  return Math.floor(nowTime.diff(updateTime) / (60 * 1000));
};

export const calculationTime = (update: string): string => {
  const nowTime: Dayjs = dayjs();
  const updateTime: Dayjs = dayjs(update);
  const diffDate = msToDate(nowTime, updateTime);
  const diffHour: number = msToHour(nowTime, updateTime);
  const diffMinutes: number = msToMinutes(nowTime, updateTime);
  let viewTime = "";

  if (diffHour === 0) {
    viewTime = `${diffMinutes}分前`;
  } else if (diffDate < 1) {
    viewTime = `${diffHour}時間前`;
  } else if (diffDate < 8) {
    viewTime = `${diffHour}日前`;
  } else {
    viewTime = updateTime.format("YYYY年M月D日");
  }
  return viewTime;
};
