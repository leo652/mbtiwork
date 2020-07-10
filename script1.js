

var mbti = ["ISTJ","ISFJ","INFJ","INTJ","ISTP","ISFP","INFP","INTP","ESTP","ESFP","ENFP","ENTP","ESTJ","ESFJ","ENFJ","ENTJ"];

let e, i, s, n, t, f, j, p;
let type;

function resetScores() {
  e = i = s = n = t = f = j = p = 0;
  type = "";
}

function scoreFunction(){
  const inputs = document.getElementsByTagName("input");
  Array.prototype.forEach.call(inputs, function(input) {
    if (input.checked) {
      switch(input.value) {
        case 'e': e++; break;
        case 'i': i++; break;
        case 's': s++; break;
        case 'n': n++; break;
        case 't': t++; break;
        case 'f': f++; break;
        case 'j': j++; break;
        case 'p': p++; break;
      }
    }
  });
}

function resultFunction(){
  type += (e >= i) ? "E" : "I";
  type += (s >= n) ? "S" : "N";
  type += (t >= f) ? "T" : "F";
  type += (j >= p) ? "J" : "P";

  if(type==mbti[0]){

  location.href="https://mbtiwork.ga/resultes/istj";
}
  else {
    document.getElementById("demo").innerHTML = "Hello World";
  }
}


function startFunction(){
resetScores();
scoreFunction();
resultFunction();
}
