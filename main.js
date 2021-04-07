/****************************************************************
 * HAMBURGER MENU
***************************************************************/

//REFERENZE
var openIcon = $(".fa-bars");
var closeIcon = $(".fa-times");
var hamburgerMenu = $(".hamburger-menu");

//Open Menu
openIcon.click( function () {
    hamburgerMenu.show();
});

//Close Menu
closeIcon.click( function () {
    hamburgerMenu.hide();
});