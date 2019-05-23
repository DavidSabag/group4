// function StringUtils(){
var _this = this;
//         this.getVowels = function(str){
//             count = 0;
//             var vowels = "aeiou";
//             var res = str.toLowerCase();
//             for(var i=0; i< res.length; i++){
//                 if(vowels.includes(res[i]))
//                     count++;
//             }
//             return count;
//         }
//         this.removeChar = function(str, pos){
//             var newStr = str.replace(str[pos],'');
//             return newStr;
//         }
//         this.incrementLetters = function(str){
//             var newStr = "";
//             for(var i=0; i<str.length; i++){
//                 if(str[i] === " ")
//                     newStr += " ";
//                 else
//                     newStr += String.fromCharCode(str.charCodeAt(i) + 1);
//             }
//             return newStr;
//         }
//     }
// function Word(chars){
//     //this.length;
//     this.setLength = function(){
//         this.length = chars.length;
//     }
// }
// function findLongestString(sentence){
//     var arr = sentence.split(' ');
//     var wordsArr = [];
//     var max = {maxLength: 0, theString: ''};
//     arr.forEach((value, index) => {
//         wordsArr.push(new Word(value));
//         wordsArr[index].setLength();
//         if (wordsArr[index].length > max.maxLength){
//             max.maxLength = wordsArr[index].length;
//             max.theString = value;
//         }
//     });
//     return max.theString;
// }
// var strMaxLength = findLongestString('Web Development Tutorial');
var StringUtils = function () {
    _this.getVowels = function (str) {
        var count = 0;
        var vowels = "aeiou";
        var res = str.toLowerCase();
        for (var i = 0; i < res.length; i++) {
            if (vowels)
                count++;
        }
        return count;
    };
    return "sdf";
};
