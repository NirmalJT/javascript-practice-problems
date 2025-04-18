let terminalText = document.querySelector(".terminalText");

const finalHack = () => {
  let body = document.body;
  let img = document.createElement("img");
  body.appendChild(img);
  img.setAttribute("src", "/HackingDone.gif");
  img.setAttribute("class", "hello");
};
function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.trunc(1 + 6 * Math.random());
    setTimeout(() => {
      resolve();
    }, delay * 1000);
  });
}

const addItem = async (text) => {
  await randomDelay();
  let element = document.createElement("p");
  terminalText.appendChild(element);
  element.innerText = text;
};

async function main() {
  let T = setInterval(() => {
    let last = document.body.querySelector(".terminalText");
    let lastChild = last.lastChild;
    if (lastChild.innerHTML.endsWith(".....")) {
      lastChild.innerHTML = lastChild.innerHTML.slice(
        0,
        lastChild.innerHTML.length - 5
      );
    } else {
      lastChild.innerText = lastChild.innerText + ".";
    }
  }, 200);

  let texts = [
    "  Initializing Hacking",
    "  Reading your Files",
    "  Password files Detected",
    "  Password files Detected",
    "  Sending all passwords and personal files to server",
    "  Cleaning up",
  ];
  for (let text of texts) {
    await addItem(text);
  }
  clearInterval(T);
  finalHack();
}
main();
