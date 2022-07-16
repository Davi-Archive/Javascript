function palindrome(str) {
    str = str.toLowerCase().replace(/[\W\s_]/gi,""); //lowercase
    console.log(str)
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let firstChar = str[i] ;//first character
      let lastChar = str[j-i];//last character
      if( firstChar != lastChar)
      {
        // return false if not match
        return false;
      }
    }
    /// return true if string is palindrome
    return true;
}
palindrome("eye");
palindrome('1 eye for of 1 eye.');