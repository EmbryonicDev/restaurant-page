const addMenuContent = () => {
  // main content
  const content = document.getElementById('content'),
    contentDiv = document.createElement('div');
  contentDiv.id = 'menuContent'

  // menu headings
  const menuHeadings = ['Starters', 'Main Courses', 'Desert', 'Drinks']

  const addMenuWraps = (subSection, item, sectionHeading, icon, namePrice, itemHeading, price, itemText) => {
    sectionHeading = document.createElement('H3')
    sectionHeading.innerText = subSection

    subSection = document.createElement('div');
    subSection.classList.add('subSection');

    item = document.createElement('div');
    item.classList.add('menuItem');

    icon = document.createElement('div');
    icon.classList.add('menuIcon');

    namePrice = document.createElement('div');
    namePrice.classList.add('namePrice');

    itemHeading = document.createElement('H4');
    price = document.createElement('span');
    itemText = document.createElement('p');

    contentDiv.append(subSection);
    subSection.append(sectionHeading, item);
    item.append(icon, namePrice, itemText);
    namePrice.append(itemHeading, price);
  }

  for(let i = 0; i < menuHeadings.length; i++) {
    addMenuWraps(menuHeadings[i], [i], [i], [i], [i], [i], [i], [i])
  }

  content.append(contentDiv)
}

const menu = (() => {
  addMenuContent();
})();

export {
  menu,
  addMenuContent
};