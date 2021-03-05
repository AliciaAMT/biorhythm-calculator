import { calculateBiorhythm } from './calculations';

it ('calculates the biorhythm', () => {
    const result = calculateBiorhythm('1995-01-01', '2020-02-18');
    expect (result).toBeCloseTo(0.5196);
});