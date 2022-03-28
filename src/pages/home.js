import { addHeader } from "../functions/globalFuntions";
import { addFooter } from "../functions/globalFuntions";

const home = (() => {
  addHeader();

  // main content
  const content = document.getElementById('content'),
    textOne = document.createElement('p');
  textOne.innerText = "Congratulations! Your search is over, you've \njust found the best joint to cure your munchies! \nOur tasty food & beverages are sure to tantalize \nyour tastebuds...";

  const homeImg = document.createElement('img');
  homeImg.src = "../src/assets/images/meat-on-grill.jpg";
  homeImg.alt = "Meat on Grill";
  homeImg.classList.add("homeImg");

  const textTwo = document.createElement('p');
  textTwo.innerText = "Visit us to feast like a king or place your order \n online now...";

  content.append(textOne, homeImg, textTwo);

  addFooter();
})();

export { home };