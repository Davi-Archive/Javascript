function rot13(str) {
    
    var alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var alphabetCode = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var resultArr = [];
    for(let i=0; i<str.length; i++){
        for(let x =0; x<alphabet.length; x++){
            if(str[i] === alphabet[x]){
            resultArr.push(alphabetCode[x]);
            }
        }
    }
    return resultArr.join("");
  };
  rot13("SERR CVMMN!");