import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import rTime from 'dayjs/plugin/relativeTime';

dayjs.locale('zh-cn');
dayjs.extend(rTime);

export function relativeTime(val) {
  return dayjs().to(dayjs(val));
}

export function formatTime(val, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(val).format(format);
}