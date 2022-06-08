<script>
function palindrome(message){
    // wirte your code here
    var left = 0;
    var right = message.length - 1;
    while (left <= right){
        if (message.charAt(left) != message.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true
</script>