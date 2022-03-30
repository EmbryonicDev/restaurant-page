const addMenuContent = () => {
  const content = document.getElementById('content'),
    contentDiv = document.createElement('div');
  contentDiv.id = 'menuContent'
  content.append(contentDiv);

  const menuHeadings = ['Starters', 'Main-Courses', 'Desert', 'Drinks'];
  let counterTwo = 0;

  // create DOM elements
  const addMenuWraps = (subSection, item, sectionHeading, icon, namePrice, itemHeading, price, itemText) => {
    let counter = 0;

    sectionHeading = document.createElement('H3')
    sectionHeading.innerText = subSection

    subSection = document.createElement('div');
    subSection.classList.add('subSection', menuHeadings[counterTwo].toLowerCase());

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

    // create 3 additional menu items
    while (counter < 3) {
      let myClone = item.cloneNode(true);
      subSection.append(myClone);
      counter++;
    }

    counterTwo++;
  }

  for (let i = 0; i < menuHeadings.length; i++) {
    addMenuWraps(menuHeadings[i], [i], [i], [i], [i], [i], [i], [i])
  }

  let itemCounter = 0;

  // Add starter info
  (() => {
    // add starter food icons
    const starterIcons = ['🧆', '🍿', '🍣', '🥪'];
    let starterWrap = document.querySelector('.starters');
    starterWrap.querySelectorAll('.menuIcon').forEach(element => {
      element.innerText = starterIcons[itemCounter];
      itemCounter++;
    })

    // add starter food names
    itemCounter = 0;
    const starterName = ['Falafel', 'Popcorn', 'Sushi', 'Sandwidch'];
    starterWrap.querySelectorAll('H4').forEach(element => {
      element.innerText = starterName[itemCounter]
      itemCounter++;
    })

    // add starter food prices
    itemCounter = 0;
    const starterPrice = ['$3', '$2', '$5', '$2.50'];
    starterWrap.querySelectorAll('span').forEach(element => {
      element.innerText = starterPrice[itemCounter]
      itemCounter++;
    })
  })();

  // Add main course info
  (() => {
    // add main-course food icons
    const mainCourseIcons = ['🍔', '🌭', '🍝', '🥩'];
    itemCounter = 0;
    let mainCourseWrap = document.querySelector('.main-courses');
    mainCourseWrap.querySelectorAll('.menuIcon').forEach(element => {
      element.innerHTML = mainCourseIcons[itemCounter];
      itemCounter++
    })

    // add main course food names
    itemCounter = 0;
    const mainCourseName = ['Burger', 'Hotdog', 'Spaghetti Bolognese', 'Steak'];
    mainCourseWrap.querySelectorAll('H4').forEach(element => {
      element.innerText = mainCourseName[itemCounter]
      itemCounter++;
    })

    // add main course food prices
    itemCounter = 0;
    const mainCoursePrice = ['$7.50', '$6.50', '$7', '$9.50'];
    mainCourseWrap.querySelectorAll('span').forEach(element => {
      element.innerText = mainCoursePrice[itemCounter]
      itemCounter++;
    })
  })();

  // Add desert info
  (() => {
    // Add desert icons
    const desertIcons = ['🥞', '🧇', '🍨', '🥧']
    itemCounter = 0;
    let desertsWrap = document.querySelector('.desert');
    desertsWrap.querySelectorAll('.menuIcon').forEach(element => {
      element.innerHTML = desertIcons[itemCounter];
      itemCounter++
    })

    // add desert names
    itemCounter = 0;
    const desertCourseName = ['Pancakes', 'Waffle', 'Ice Cream', 'Choc Chip Pecan Pie'];
    desertsWrap.querySelectorAll('H4').forEach(element => {
      element.innerText = desertCourseName[itemCounter]
      itemCounter++;
    })

    // add desert prices
    itemCounter = 0;
    const desertCoursePrice = ['$4.50', '$.4', '$.350', '$4'];
    desertsWrap.querySelectorAll('span').forEach(element => {
      element.innerText = desertCoursePrice[itemCounter]
      itemCounter++;
    })
  })();

  // Add drinks info
  (() => {
    // Add drinks icons
    const drinksIcons = ['🍹', '🍺', '🍷', '☕']
    itemCounter = 0;
    let drinkssWrap = document.querySelector('.drinks');
    drinkssWrap.querySelectorAll('.menuIcon').forEach(element => {
      element.innerHTML = drinksIcons[itemCounter];
      itemCounter++
    })

    // add drinks names
    itemCounter = 0;
    const drinksName = ['Fruit Coctail', 'Beer', 'Wine', 'Coffee'];
    drinkssWrap.querySelectorAll('H4').forEach(element => {
      element.innerText = drinksName[itemCounter]
      itemCounter++;
    })

    // add drinks prices
    itemCounter = 0;
    const drinksPrice = ['$2.50', '$3', '$2.50', '$2.50'];
    drinkssWrap.querySelectorAll('span').forEach(element => {
      element.innerText = drinksPrice[itemCounter]
      itemCounter++;
    })
  })()

}

const menu = () => {
  addMenuContent();
};

export {
  menu,
  addMenuContent
};