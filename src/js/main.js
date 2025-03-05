// Testimonials Slider
new Swiper(".testimonials-swiper", {
	// Optional parameters
	loop: true,
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// when window width is >= 640px
		680: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
	},
})
