const msg = document.querySelector(".connection");
const background = document.querySelector(".main");
const image = document.getElementById("image");

const setBackground = (status) => {
  if (status) {
    background.classList.remove("offline");
    background.classList.add("online");
  } else {
    background.classList.add("offline");
    background.classList.remove("online");
  }
};

const finder = async () => {
  try {
    const result = await fetch("https://picsum.photos/200");
    return result.status >= 200 && result.status <= 300;
  } catch (error) {
    return false;
  }
};

const navigator = () => {
    setInterval(async () => {
        const connect = await finder();
        if (connect) {
          setBackground(true);
          msg.textContent = "Connected";
          msg.style.color = "#49FF00";
        } else {
          setBackground(false);
          msg.textContent = "No internet found!!!!";
          msg.style.color = "#FF0000";
        }
      },3000);
}

window.addEventListener("load", navigator);
