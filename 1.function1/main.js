<script>
function reverseString(message){
    // wirte your code here
    var len = message.length;
    var str = "";
    for (let index = len; index >= 0; index--) {
        str += message.charAt(index);
    }
    console.log(str)
    return str;
}
reverseString('hello'); // should return 'olleh'
</script>