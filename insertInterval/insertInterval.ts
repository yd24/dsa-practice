export default function insertInterval(intervals: number[][], newInterval: number[]): number[][] {
  return [[]];
}

export const mergeIntervals = (intervals: number[][]): number[][] => {
  //first be able to merge intervals
  //assuming that intervals are sorted in ascending order
  let mergedIntervals = [intervals[0]];
  let prevEnd = mergedIntervals[0][1];
  let start, end;
  for (let i = 1; i < intervals.length; i++) {
    start = intervals[i][0];
    end = intervals[i][1];
    if (start <= prevEnd) {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(prevEnd, end);
    } else {
      mergedIntervals.push(intervals[i]);
    }
    prevEnd = mergedIntervals[mergedIntervals.length - 1][1];
  }
  return mergedIntervals;
}