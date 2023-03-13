/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
    time.sort((a, b) => a - b);

    let sum,
        index,
        middle,
        start = 0,
        answer = time[0] * totalTrips,
        end = time[time.length - 1] * totalTrips;

    if (time.length === 1) return answer;

    while (start < end) {
        middle = Math.floor((start + end) / 2);

        sum = 0;
        index = 0;

        while (time[index] <= middle) {
            sum += Math.floor(middle / time[index]);

            index++;
        }

        if (sum >= totalTrips) {
            end = middle;
            answer = middle;
        } else {
            start = middle + 1;
        }
    }

    return answer;
};
