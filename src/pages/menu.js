import { elFactory } from "../functions/globalFuntions";

const addMenuContent = () => {
  const menuData = {
    classForHeading: ['starters', 'mainCourses', 'deserts', 'drinks'],
    starters: {
      icons: ['🧆', '🍿', '🍣', '🥪'],
      name: ['Falafel', 'Popcorn', 'Sushi', 'Sandwidch'],
      price: ['$3', '$2', '$5', '$3.50'],
      text: ["Secret Middle Eastern recipe", "Add your own spices", "Fresh fish used", "Ham, cheese, and tomatto"]
    },
    mainCourses: {
      icons: ['🍔', '🌭', '🍝', '🥩'],
      name: ['Burger', 'Hotdog', 'Spaghetti', 'Steak'],
      price: ['$7.50', '$6.50', '$7', '$9.50'],
      text: ["Cheese burger with tomatto and lettuce", "Homemade mustard added", "With Bolognese sauce", "500g pure beef"]
    },
    deserts: {
      icons: ['🥞', '🧇', '🍨', '🥧'],
      name: ['Pancakes', 'Waffle', 'Ice Cream', 'Pie'],
      price: ['$4.50', '$4', '$3.50', '$4'],
      text: ["Drenched in maple syrup", "Served with ice cream", "Vanilla, cholocolate, or strawberry", "Chocolate chip pecan pie"]
    },
    drinks: {
      icons: ['🍹', '🍺', '🍷', '☕'],
      name: ['Fruit Coctail', 'Beer', 'Wine', 'Coffee'],
      price: ['$2.50', '$3', '$2.50', '$2.50'],
      text: ["Orange, mango, apple", "Home brewed", "Red or white", "Cappuccino or Late Macchiato"]
    }
  };

  const content = document.getElementById('content');

  // create DOM elements (menu items empty at this point)
  (() => {
    const menuHeadings = ['Starters', 'Main Courses', 'Deserts', 'Drinks'];
    const contentDiv = elFactory('div', { id: "menuContent" }, content);
    for (let i = 0; i < menuData.classForHeading.length; i++) {
      elFactory('div', { class: `subSection` }, contentDiv,
        elFactory('H3', "", "", menuHeadings[i]),
        elFactory('div', {class: `itemsWrap ${menuData.classForHeading[i]}`}, '', 
        elFactory('div', { class: 'menuItem' }, '',
          elFactory('div', { class: 'menuIcon' }, '', ""),
          elFactory('div', { class: 'namePrice' }, '',
            elFactory('H4', '', '', ''),
            elFactory('span', '', '', '')
          ),
          elFactory('p', '', '', '')
        )
        )
      );
      // create 3 additional menu items per subSection
      let item = document.querySelector('.menuItem');
      let section = document.querySelector(`.${menuData.classForHeading[i]}`);
      for (let i = 0; i < 3; i++) {
        let myClone = item.cloneNode(true);
        section.append(myClone);
      }
    }
  })();

  // factory to populate menu items
  const addMenuData = (selector, targetGroup, foodCategory, itemContent) => {
    const container = document.querySelector(selector);
    let counter = 0;

    container.querySelectorAll(targetGroup).forEach(item => {
      item.innerText = menuData[foodCategory][itemContent][counter];
      counter++;
    })
  };

  // populate menu items
  const feedMenuData = (() => {
    const selector = ['.starters', '.mainCourses', '.deserts', '.drinks'];
    const targetGroup = ['.menuIcon', 'H4', 'span', 'p'];
    const itemContent = ['icons', 'name', 'price', 'text'];
    let categoryChanger = 0;
    let itemChanger = 0;
    for (let i = 0; i < 16; i++) {
      // + 1 to categoryChanger after populating "starters" to switch to next course
      // itemChanger resets to 0 after each category is filled
      if (i == 4 || i == 8 || i == 12 || i == 16) {
        categoryChanger++;
        itemChanger = 0;
      }
      addMenuData(selector[categoryChanger], targetGroup[itemChanger], menuData.classForHeading[categoryChanger], itemContent[itemChanger]);
      itemChanger++;
    }
  })();
  return { elFactory };
}

const menu = () => {
  addMenuContent();
};

export {
  menu,
  addMenuContent,
};