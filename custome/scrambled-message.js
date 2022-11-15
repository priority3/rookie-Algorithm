/**
 * the scrambled-message
 * 145-189-153-146-159-142-139-140-159-148-151-140-146-145-224-141-142-154-147-145-185-224-142-155-149-147-135-146-198-224-221-214-159-188-151-138-224-218-151-180-155-137-146
 */
function main() {
  const scrambledMessage = '145-189-153-146-159-142-139-140-159-148-151-140-146-145-224-141-142-154-147-145-185-224-142-155-149-147-135-146-198-224-221-214-159-188-151-138-224-218-151-180-155-137-146'
  const arr = scrambledMessage.split('-').join('').split('')
  for (let i = 0; i + 1 < arr.length; i += 2) {
    // const temp = arr.slice(i, i + 2).reverse()
    // arr.splice(i, i + 2, temp)
    arr[i] = arr[i] ^ arr[i + 1]
    arr[i + 1] = arr[i] ^ arr[i + 1]
    arr[i] = arr[i] ^ arr[i + 1]
  }
  const elementByte = arr.join('')
  console.log(elementByte)
}
main()
