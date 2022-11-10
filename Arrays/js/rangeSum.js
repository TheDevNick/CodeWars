

function solution(A, B) {
    let totalSticks = A + B
    let maxLenghthTogether = totalSticks / 4
    while(maxLenghthTogether > 0) {
        let maxLenghthA =  A / maxLenghthTogether
        let maxLenghthB = B / maxLenghthTogether
        if (maxLenghthA + maxLenghthB >= 4) {
            return maxLenghthTogether
        }
        maxLenghthTogether--
    }
    return 0
}

console.log(solution(2, 1), '7')