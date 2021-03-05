import dayjs from 'dayjs';

function calculateBiorhythm(birthdate, targetDate, cycle) {
    const birthday = dayjs(birthdate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthday, 'days');
    return Math.sin(2 * Math.PI * diff / cycle);
}
export function calculateBiorhythms(birthdate, targetDate) {
    return {
        physical: calculateBiorhythm(birthdate, targetDate, 23),
        emotional: calculateBiorhythm(birthdate, targetDate, 28),
        intellectual: calculateBiorhythm(birthdate, targetDate, 33)
    };
}