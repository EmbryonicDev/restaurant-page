import { addHomeContent } from "../pages/home";
import { addMenuContent } from "../pages/menu";
import { addContactContent } from "../pages/contact";

// DOM element creator
export const elFactory = (type, attributes, appendTo, ...children) => {
  const el = document.createElement(type)

  for (let key in attributes) {
    el.setAttribute(key, attributes[key])
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child))
    } else {
      el.appendChild(child)
    }
  })

  if (appendTo != "") appendTo.append(el);

  return el
};

const addHeader = () => {
  // header
  const header = elFactory('header', { id: 'myHeader' }, '')
  // // insert header as body's first child
  document.body.insertAdjacentElement("afterbegin", header);
  // header wrap
  const headerDiv = elFactory('div', { class: 'headerDiv' }, header,
    elFactory('H1', '', '', "🍔 Master Munchies 🍧"));
  // nav wrap
  const navWrap = elFactory('div', { class: 'navWrap' }, headerDiv);
  // buttons
  const homeBtn = elFactory('button', { style: "border-bottom: solid #f1f5f9" }, navWrap, 'Home')
  const menuBtn = elFactory('button', '', navWrap, 'Menu')
  const contactBtn = elFactory('button', '', navWrap, 'Contact');

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
      addContactContent();
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