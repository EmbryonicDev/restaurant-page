const home = (() => {

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

  // footer
  const footer = document.createElement('FOOTER');
  footer.id = "Myfooter";
  footer.innerText = "© Embryonic Dev 2022";
  const footerSpan = document.createElement('span'),
    footerLogo = document.createElement('img');
  footerLogo.src = "../src/assets/icons/tree-logo.svg";

  document.body.appendChild(footer);
  footer.append(footerSpan);
  footerSpan.append(footerLogo);

})();

export { home };