let word = "алгоритм"
let letters = []
let attempts = 8
document.querySelector('.word').disabled = true
document.querySelector(".start").onclick = function(){
    let out = ""
    for (let i = 0;i < word.length;i++) {
        out = out +'*'
    }
    attempts = 8
    document.querySelector('.attempts').innerHTML = attempts
    letters = []
    
    document.querySelector('.check').disabled = false
    document.querySelector('.word').disabled = false
    document.querySelector('.letter').disabled = false
    // document.querySelector('.out').disabled = false
    document.querySelector('.letter').value = ''
    document.querySelector('.word').value = out
}
document.querySelector(".check").onclick = function(){

    let letter = document.querySelector(".letter").value;
    let inGame = document.querySelector('.word').value;
    if (inGame != ''){
        letters.push(letter)
        console.log(letters);
        let out = ""
        for (let i = 0;i < word.length;i++) {
            let char = word[i]
            if (letters.indexOf(char) != -1){
                out = out + word[i]
            }
            else{
                out = out + "*"
            }
        }
            if(word.indexOf(letter) == -1){
            attempts = attempts - 1;
            document.querySelector('.attempts').innerHTML = attempts
           
            }
            document.querySelector('.word').value = out
            if(word == out){
                document.querySelector('.check').disabled = true
                document.querySelector('.letter').disabled = true
            }
        
    } 
    else{
        document.querySelector('.attempts').innerHTML = 'Нажми кнопку начать игру'
    }

    if (attempts == 0) {
        
        document.querySelector('.check').disabled = true
        document.querySelector('.letter').disabled = true
        

    }
    document.querySelector('.letter').value = ''
}
