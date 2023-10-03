let first = document.getElementById("first");
let sec = document.getElementById("sec");
// Escaping string
const escaping = () => {
  let myString = first.value;
  let myJsonString = JSON.stringify(myString);
  let last = myJsonString.length;
  const unquotedString = myJsonString.slice(1, last - 1);
  unquotedString.replace(/\\n/g, "\\n")
  .replace(/\\'/g, "\\'")
  .replace(/\\"/g, '\\"')
  .replace(/\\&/g, "\\&")
  .replace(/\\r/g, "\\r")
  .replace(/\\t/g, "\\t")
  .replace(/\\b/g, "\\b")
  .replace(/\\f/g, "\\f");
  sec.value = unquotedString;  
}
//Unescaping string
const unesceping = () => {
  let escString = sec.value;
  unEscString = escString.replaceAll("\\n", '\n')
  .replace("\\'", "'")
  .replace('\\"', '"')
  .replace('\\\\', '\\');
  first.value = unEscString;
}