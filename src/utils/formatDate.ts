import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export const formatDate = (stringDate: string) => {
  const now = dayjs();
  const target = dayjs(stringDate);
  const hoursAgo24 = now.subtract(1, 'day');
  const timeDiff = Math.floor(now.diff(target) / 60000); //분

  if (target.isAfter(hoursAgo24)) {
    if (1 < timeDiff) {
      //1분 이후부터 -> (1시간 전 ~ 23시간 전, 59분 전 ~ 2분 전)
      return `${target.from(now)}`;
    } else {
      //1분 이내의 시간은 방금 전으로 표시
      return '방금 전';
    }
  }
  return target.format('MM/DD HH:MM');
};
