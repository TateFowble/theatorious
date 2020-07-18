// Just for Mobile Navigation!
var changeBurgerNum = 0;

mobileNapMap();

function changeBurger(x) {
    switch (changeBurgerNum){
        case 0:
            changeBurgerNum++;
            break;
        case 1:
            changeBurgerNum++;
            break;
        case 2:
            changeBurgerNum = 0;
            break;
        default:
            console.log('Value not represented');
            break;
    }
    console.log(changeBurgerNum);


    // Changes the Burger Stack
    
    x.classList.toggle('change');
    x.classList.toggle('change2');

    // Changes classes to use mobile navigation
    if (changeBurgerNum === 1){
        // document.getElementById('navigation').classList.add('mobilenav1');
        // document.getElementById('navigation').classList.remove('mobilenav0');
        // document.getElementByClassName('mobilenav1').style.height = "2000px";
    }
    else {
        changeBurgerNum = 0;
        // document.getElementById('navigation').classList.add('mobilenav0');
        // document.getElementById('navigation').classList.remove('mobilenav1');
    }



}