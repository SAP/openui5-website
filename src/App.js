require('./pages/index.html');
require('./pages/documentation.html');
require('./pages/projects.html');
require('./pages/community.html');
require('./pages/guidelines.html');
require('./pages/releases.html');
require('./pages/ga_disclaimer.html');


var sliderItems = Array.prototype.slice.call(document.getElementsByClassName("slider")[0].querySelectorAll(".slider__item"));

if (sliderItems.length > 1) {
	var activeItem = 0;
	var cls = "state_invisible";

	window.setInterval(function () {
		var nextItem = activeItem + 1;
		if (nextItem >= sliderItems.length) {
			nextItem = 0;
		}
		sliderItems.forEach(function (item, idx) {
			if (nextItem === idx) {
				item.classList.remove(cls);
			} else {
				item.classList.add(cls);
			}
		});
		activeItem = nextItem;
	}, 5000);
}
