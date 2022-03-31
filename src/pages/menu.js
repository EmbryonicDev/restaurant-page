const addMenuContent = () => {
  const content = document.getElementById('content'),
    contentDiv = document.createElement('div');
  contentDiv.id = 'menuContent';
  content.append(contentDiv);

  // DOM element creator
  const elFactory = (type, attributes, appendTo, ...children) => {
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

  const menuHeadings = ['Starters', 'Main-Courses', 'Desert', 'Drinks'];

  // create DOM elements (menu items empty at this point)
  (() => {
    for (let i = 0; i < menuHeadings.length; i++) {
      elFactory('div', { class: `subSection ${menuHeadings[i]}` }, contentDiv,
        elFactory('H3', "", "", menuHeadings[i]),
        elFactory('div', { class: 'menuItem' }, '',
          elFactory('div', { class: 'menuIcon' }, '', ""),
          elFactory('div', { class: 'namePrice' }, '',
            elFactory('H4', '', '', ''),
            elFactory('div', '', '', '')),
          elFactory('p', '', '', '')
        ),
      );
      // create 3 additional menu items per subSection
      let item = document.querySelector('.menuItem');
      let section = document.querySelector(`.${menuHeadings[i]}`);
      console.log(item);
      console.log(section);
      for (let i = 0; i < 3; i++) {
        let myClone = item.cloneNode(true);
        section.append(myClone);
      }
    }
  })();

  // let itemCounter = 0;
  // // Add starter info
  // (() => {
  //   // add starter food icons
  //   const starterIcons = ['🧆', '🍿', '🍣', '🥪'];
  //   let starterWrap = document.querySelector('.starters');
  //   starterWrap.querySelectorAll('.menuIcon').forEach(element => {
  //     element.innerText = starterIcons[itemCounter];
  //     itemCounter++;
  //   });

  //   // add starter food names
  //   itemCounter = 0;
  //   const starterName = ['Falafel', 'Popcorn', 'Sushi', 'Sandwidch'];
  //   starterWrap.querySelectorAll('H4').forEach(element => {
  //     element.innerText = starterName[itemCounter];
  //     itemCounter++;
  //   });

  //   // add starter food prices
  //   itemCounter = 0;
  //   const starterPrice = ['$3', '$2', '$5', '$3.50'];
  //   starterWrap.querySelectorAll('span').forEach(element => {
  //     element.innerText = starterPrice[itemCounter];
  //     itemCounter++;
  //   });

  //   // add starter text
  //   itemCounter = 0;
  //   const starterText = [
  //     "Secret Middle Eastern recipe",
  //     "Add your own spices",
  //     "Fresh fish used",
  //     "Ham, cheese, and tomatto"
  //   ];
  //   starterWrap.querySelectorAll('p').forEach(element => {
  //     element.innerText = starterText[itemCounter];
  //     itemCounter++;
  //   });
  // })();

  // // Add main course info
  // (() => {
  //   // add main-course food icons
  //   const mainCourseIcons = ['🍔', '🌭', '🍝', '🥩'];
  //   itemCounter = 0;
  //   let mainCourseWrap = document.querySelector('.main-courses');
  //   mainCourseWrap.querySelectorAll('.menuIcon').forEach(element => {
  //     element.innerHTML = mainCourseIcons[itemCounter];
  //     itemCounter++
  //   });

  //   // add main course food names
  //   itemCounter = 0;
  //   const mainCourseName = ['Burger', 'Hotdog', 'Spaghetti', 'Steak'];
  //   mainCourseWrap.querySelectorAll('H4').forEach(element => {
  //     element.innerText = mainCourseName[itemCounter];
  //     itemCounter++;
  //   });

  //   // add main course food prices
  //   itemCounter = 0;
  //   const mainCoursePrice = ['$7.50', '$6.50', '$7', '$9.50'];
  //   mainCourseWrap.querySelectorAll('span').forEach(element => {
  //     element.innerText = mainCoursePrice[itemCounter];
  //     itemCounter++;
  //   });

  //   // add main course text
  //   itemCounter = 0;
  //   const mainCourseText = [
  //     "Cheese burger with tomatto and lettuce",
  //     "Homemade mustard added",
  //     "With Bolognese sauce",
  //     "500g pure beef"
  //   ];
  //   mainCourseWrap.querySelectorAll('p').forEach(element => {
  //     element.innerText = mainCourseText[itemCounter];
  //     itemCounter++;
  //   });
  // })();

  // // Add desert info
  // (() => {
  //   // Add desert icons
  //   const desertIcons = ['🥞', '🧇', '🍨', '🥧']
  //   itemCounter = 0;
  //   let desertsWrap = document.querySelector('.desert');
  //   desertsWrap.querySelectorAll('.menuIcon').forEach(element => {
  //     element.innerHTML = desertIcons[itemCounter];
  //     itemCounter++
  //   });

  //   // add desert names
  //   itemCounter = 0;
  //   const desertsName = ['Pancakes', 'Waffle', 'Ice Cream', 'Pie'];
  //   desertsWrap.querySelectorAll('H4').forEach(element => {
  //     element.innerText = desertsName[itemCounter];
  //     itemCounter++;
  //   });

  //   // add desert prices
  //   itemCounter = 0;
  //   const desertsPrice = ['$4.50', '$4', '$3.50', '$4'];
  //   desertsWrap.querySelectorAll('span').forEach(element => {
  //     element.innerText = desertsPrice[itemCounter];
  //     itemCounter++;
  //   });

  //   // add desert text
  //   itemCounter = 0;
  //   const desertsText = [
  //     "Drenched in maple syrup",
  //     "Served with ice cream",
  //     "Vanilla, cholocolate, or strawberry",
  //     "Chocolate chip pecan pie"
  //   ];
  //   desertsWrap.querySelectorAll('p').forEach(element => {
  //     element.innerText = desertsText[itemCounter];
  //     itemCounter++;
  //   });
  // })();

  // // Add drinks info
  // (() => {
  //   // Add drinks icons
  //   const drinksIcons = ['🍹', '🍺', '🍷', '☕']
  //   itemCounter = 0;
  //   let drinksWrap = document.querySelector('.drinks');
  //   drinksWrap.querySelectorAll('.menuIcon').forEach(element => {
  //     element.innerHTML = drinksIcons[itemCounter];
  //     itemCounter++
  //   });

  //   // add drinks names
  //   itemCounter = 0;
  //   const drinksName = ['Fruit Coctail', 'Beer', 'Wine', 'Coffee'];
  //   drinksWrap.querySelectorAll('H4').forEach(element => {
  //     element.innerText = drinksName[itemCounter]
  //     itemCounter++;
  //   });

  //   // add drinks prices
  //   itemCounter = 0;
  //   const drinksPrice = ['$2.50', '$3', '$2.50', '$2.50'];
  //   drinksWrap.querySelectorAll('span').forEach(element => {
  //     element.innerText = drinksPrice[itemCounter]
  //     itemCounter++;
  //   });

  //   // add drink text
  //   itemCounter = 0;
  //   const drinksText = [
  //     "Orange, mango, apple",
  //     "Home brewed",
  //     "Red or white",
  //     "Cappuccino or Late Macchiato"
  //   ];
  //   drinksWrap.querySelectorAll('p').forEach(element => {
  //     element.innerText = drinksText[itemCounter];
  //     itemCounter++;
  //   })
  // })();
}

const menu = () => {
  addMenuContent();
};

export {
  menu,
  addMenuContent
};