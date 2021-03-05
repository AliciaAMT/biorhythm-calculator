import dayjs from 'dayjs';

export function calculateBiorhythm(birthdate, targetDate) {
    const birthday = dayjs(birthdate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthday, 'days');

    return Math.sin(2 * Math.PI * diff / 23);

}
