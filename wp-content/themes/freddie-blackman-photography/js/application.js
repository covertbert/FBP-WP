/* jshint devel:true */

// jQuery No Conflict
if (!window.jQuery) {
	console.log('Error: jQuery not found, check script loader dependencies in functions.php');
} else {
	var $ = jQuery.noConflict();
}

// Top level namespace
var FBP = {};

// Global Variables
var mobileNavOpen,
	mobileNavClose,
	mobileNavOverlay,
	mobileNavMenu,
	galleryGrid;

FBP.mobileNav = {

	open: function () {
		"use strict";
		mobileNavOpen.addClass('navigation--mobile__open-button--active');
		mobileNavOverlay.removeClass('navigation--mobile__overlay--inactive').addClass('navigation--mobile__overlay--active');
		mobileNavMenu.removeClass('navigation--mobile__overlay__menu--inactive').addClass('navigation--mobile__overlay__menu--active');
	},

	close: function () {
		"use strict";
		mobileNavOpen.removeClass('navigation--mobile__open-button--active');
		mobileNavOverlay.addClass('navigation--mobile__overlay--inactive').removeClass('navigation--mobile__overlay--active');
		mobileNavMenu.removeClass('navigation--mobile__overlay__menu--active').addClass('navigation--mobile__overlay__menu--inactive');
		setTimeout(function () {
			mobileNavMenu.removeClass('navigation--mobile__overlay__menu--inactive');
		}, 400);
	}

};

//FBP.gallery = {
//	isotopeSettings: {
//		// options
//		itemSelector: '.gallery__grid__item',
//		layoutMode: 'fitRows'
//	}
//};


FBP.init = function () {
	"use strict";
	mobileNavOpen = $('.navigation--mobile__open-button');
	mobileNavClose = $('.navigation--mobile__close-button');
	mobileNavOverlay = $('.navigation--mobile__overlay');
	mobileNavMenu = $('.navigation--mobile__overlay__menu');
	galleryGrid = $('.gallery__grid');

	//galleryGrid.isotope(FBP.gallery.isotopeSettings);
	mobileNavOpen.on('click', FBP.mobileNav.open);
	mobileNavClose.on('click', FBP.mobileNav.close);
};

$(function () {
	"use strict";
	FBP.init();
});

