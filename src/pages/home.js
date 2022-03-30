import { addHeader } from "../functions/globalFuntions";
import { addFooter } from "../functions/globalFuntions";

const addHomeContent = () => {
  // main content
  const content = document.getElementById('content'),
    contentDiv = document.createElement('div');
  contentDiv.id = 'homeContent'

  const textOne = document.createElement('p');
  textOne.innerText = "Congratulations! Your search is over, you've just found the best joint to cure your munchies! Our tasty food & beverages are sure to tantalize your tastebuds...";

  const homeImg = document.createElement('img');
  homeImg.src = "../src/assets/images/meat-on-grill.jpg";
  homeImg.alt = "Meat on Grill";
  homeImg.classList.add("homeImg");

  const textTwo = document.createElement('p');
  textTwo.innerText = "Visit us to feast like a king or place your order online now...";

  content.append(contentDiv)
  contentDiv.append(textOne, homeImg, textTwo);
}

const home = (() => {
  addHeader();
  addHomeContent();
  addFooter();
})();

export { 
  home,
  addHomeContent
};