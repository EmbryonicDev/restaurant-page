const addMenuContent = () => {
  const menuHeadings = ['Starters', 'Main Courses', 'Desert', 'Drinks']

  // create DOM elements
  const addMenuWraps = (subSection, item, sectionHeading, icon, namePrice, itemHeading, price, itemText) => {
    let counter = 0;
    const content = document.getElementById('content'),
      contentDiv = document.createElement('div');
    contentDiv.id = 'menuContent'

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

    content.append(contentDiv)
    contentDiv.append(subSection);
    subSection.append(sectionHeading, item);
    item.append(icon, namePrice, itemText);
    namePrice.append(itemHeading, price);

    // create 3 additional menu items
    while(counter < 3) {
      let myClone = item.cloneNode(true);
      subSection.append(myClone);
      console.log(myClone);
      counter++;
    }

  }

  for (let i = 0; i < menuHeadings.length; i++) {
    addMenuWraps(menuHeadings[i], [i], [i], [i], [i], [i], [i], [i])
  }

}

const menu = () => {
  addMenuContent();
};

export {
  menu,
  addMenuContent
};