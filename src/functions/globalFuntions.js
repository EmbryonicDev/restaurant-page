import { addHomeContent } from "../pages/home";
import { addMenuContent } from "../pages/menu";

const addHeader = () => {
  // header
  const header = document.createElement('header');
  header.id = "myHeader";
  // insert header as body's first child
  document.body.insertAdjacentElement("afterbegin", header);

  // header wrap
  const headerWrap = document.createElement('div');
  headerWrap.classList.add('headerDiv');
  header.appendChild(headerWrap);
  // header Title
  const headerTitle = document.createElement('H1');
  headerTitle.innerText = "🍔 Master Munchies 🍧";
  // nav wrap
  const navWrap = document.createElement('div');
  navWrap.classList.add('navWrap');
  headerWrap.append(headerTitle, navWrap)

  // buttons
  const homeBtn = document.createElement('button'),
    menuBtn = document.createElement('button'),
    contactBtn = document.createElement('button');

  homeBtn.innerText = 'Home';
  menuBtn.innerText = 'Menu';
  contactBtn.innerText = 'Contact';
  navWrap.append(homeBtn, menuBtn, contactBtn);
  homeBtn.style.cssText = "border-bottom: solid #f1f5f9";

  // eListerners
  (() => {
    // update button styling when page is selected
    const selectedBtnBorder = (btnOn, btnOff, btnTwoOff) => {
      btnOn.style.cssText = "border-bottom: solid #f1f5f9";
      btnOff.style.cssText = "border-bottom: solid transparent";
      btnTwoOff.style.cssText = "border-bottom: solid transparent";
    }
    
    // display home page
    homeBtn.onclick = () => {
      selectedBtnBorder(homeBtn, menuBtn, contactBtn);
      clearContent();
      addHomeContent();
    }

    // display menu page
    menuBtn.onclick = () => {
      selectedBtnBorder(menuBtn, homeBtn, contactBtn);
      clearContent();
      addMenuContent();
    }

    // display contact page
    contactBtn.onclick = () => {
      selectedBtnBorder(contactBtn, menuBtn, homeBtn);
      clearContent();
    }
  })();
}

const addFooter = () => {
  const footer = document.createElement('FOOTER');
  footer.id = "Myfooter";
  footer.innerText = "© Embryonic Dev 2022";
  const footerSpan = document.createElement('span'),
    footerLogo = document.createElement('img');
  footerLogo.src = "../src/assets/icons/tree-logo.svg";

  document.body.appendChild(footer);
  footer.append(footerSpan);
  footerSpan.append(footerLogo);
}

const clearContent = () => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

export {
  addHeader,
  addFooter,
  clearContent,
}