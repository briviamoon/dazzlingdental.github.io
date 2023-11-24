/**
 * get the header's id
 */
const header = document.getElementById("Header");
const sticky = header.offsetTop;

/**
 * stickTheHeader - sticks the header on scroll.
 */

function stickTheHeader() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	}
	else {
		header.classList.remove("sticky");
	}
}

window.onscroll = function() {stickTheHeader()};
