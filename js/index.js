/**
 * get the header's id
 */
const header = document.getElementById('header');
const sticky = header.offsetTop;

/**
 * stickTheHeader - sticks the header on scroll.
 */

function stickTheHeader() {
	console.log('scrolling');
	if (window.scrollY > sticky) {
		header.classList.add('sticky');
		console.log('making sticky');
	}
	else {
		header.classList.remove('sticky');
		console.log('removing sticky');
	}
}

window.onscroll = function () {
	stickTheHeader();
};
