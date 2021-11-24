
let day;
let menu;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    menu="Today is holiday, closed";
    break;
  case 1:
    day = "Monday";
    menu="Chicken with salad";
    break;
  case 2:
    day = "Tuesday";
    menu="Tacos with vegetable soup";
    break;
  case 3:
    day = "Wednesday";
    menu="Pan cakes";
    break;
  case 4:
    day = "Thursday";
    menu= "Burger with juice";
    break;
  case 5:
    day = "Friday";
    menu="Hot dog";
    break;
  case  6:
    day = "Saturday";
    menu="Today is holiday, closed";
}

document.getElementById("lunchMenu").innerHTML = "To days menu is " + menu;