import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime);
dayjs.extend(utc);

const MINUTE = 60000;

export const formatDate = (maybeUTCDate: string) => {
  let target = dayjs(maybeUTCDate);
  const now = dayjs();
  const hoursAgo24 = now.subtract(1, 'day');

  if (target.isUTC() === false) {
    target = target.add(9, 'hour');
  }

  if (target.isAfter(hoursAgo24)) {
    if (Math.floor(now.diff(target) / MINUTE) >= 1) {
      //1분 이후부터 -> (1시간 전 ~ 23시간 전, 59분 전 ~ 1분 전)
      return `${target.from(now)}`;
    } else {
      //1분 이내의 시간은 방금 전으로 표시
      return '방금 전';
    }
  }

  return target.format('MM/DD HH:mm');
};
