import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);

export const formatDate = (maybeUTCDate: string) => {
  const now = dayjs();
  const target = dayjs(maybeUTCDate);
  const hoursAgo24 = now.subtract(1, 'day');
  const minuteDiff = Math.floor(now.diff(target) / 60000); //분

  if (target.isAfter(hoursAgo24)) {
    if (minuteDiff >= 1) {
      //1분 이후부터 -> (1시간 전 ~ 23시간 전, 59분 전 ~ 1분 전)
      return `${target.from(now)}`;
    } else {
      //1분 이내의 시간은 방금 전으로 표시
      return '방금 전';
    }
  }

  if (target.isUTC() === false) target.add(9, 'hour');
  return target.format('MM/DD HH:MM');
};
