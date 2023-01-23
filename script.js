let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.onclick = () => {
  worker.postMessage(""); 
}

btn2.onclick = () => {
  if (document.body.style.background !== 'yellow') {
    document.body.style.background = 'yellow';
  }
  else {
    document.body.style.background = 'white';
  }
}
let worker = new Worker("worker.js"); 
worker.onmessage = (message) => {
  console.log(message);
  alert(message.data)
}