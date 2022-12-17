
var textarea = document.getElementById("textarea");
var divtime = document.getElementById('time')
const lyrics = document.getElementById('lyrics');
const lines = document.getElementById('line');
const bytes = document.getElementById('bytes');
const time = document.getElementById('time');
var msg = document.getElementById('msg');

function onTextAreaKeyup() {
  let text = textarea.value;
  let byte = text.length * 1;
  let line = text.split("\n").length;
  let empty = text.split(" ").length;
  bytes.innerHTML = `${byte} bytes`
  lyrics.innerHTML = `${(byte-empty-line)+2} caracteres`
  lines.innerHTML = `${line} linhas`
}

function Validator() {
  let text = textarea.value;
  try {
    const start = performance.now();
    var result = eval(text);
    const end = performance.now();
    msg.innerHTML = `Toma aqui teu 10, vai embora`
    divtime.innerHTML = `${end - start} ms`
  } catch (error) {
    msg.innerHTML = `Cometeu um erro gravissimo, reprovado!<br/> ${error}`;
    divtime.innerHTML = `Não foi executado`
  }
}

function setTextAreaListener() {
  textarea.addEventListener("keyup", onTextAreaKeyup);
}

function setMsgTime(startTime, endTime) {
  const time = endTime - startTime;
  divtime.innerHTML = `${time} ms`
}

function init() {
  setTextAreaListener();
  setMsgTime();
}

init();