function twoSum(nums, target) {
    let hashMap = {}  // Declaring storage hash
    for (const num of nums) {
        const targetSum = target - num

        if (targetSum in hashMap) {

            return [targetSum, num] // Return the expected array

        } else {

            hashMap[num] = true  // Storing the integer in the hash

        }
    }

    return [] // Return an empty array if no number is matched
}
console.log(twoSum([9,5,4,6,2,1], 3))