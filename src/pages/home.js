import { addHeader } from "../functions/globalFuntions";
import { addFooter } from "../functions/globalFuntions";
import { elFactory } from "../functions/globalFuntions";

const addHomeContent = () => {
  // main content
  const content = document.getElementById('content');

  elFactory('div', { id: 'homeContent' }, content,
    elFactory('p', '', '', "Congratulations! Your search is over, you've just found the best joint to cure your munchies! Our tasty food & beverages are sure to tantalize your tastebuds..."),
    elFactory('img', { src: "../src/assets/images/meat-on-grill.jpg", alt: "Meat on Grill" }, ''),
    elFactory('p', '', '', "Visit us to feast like a king or place your order online now...")
  )
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