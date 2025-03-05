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

// FAQ Accordion
function accordion() {
	const items = document.querySelectorAll(".accordion-item")
	const triggers = document.querySelectorAll(".accordion-trigger")
	const contents = document.querySelectorAll(".accordion-content")
	triggers.forEach((trigger) => {
		if (items[0].classList.contains("active")) {
			contents[0].classList.add("active")
		}
		trigger.addEventListener("click", () => {
			const parent = trigger.parentNode
			if (!parent.classList.contains("active")) {
				// If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
				// items.forEach((item, i) => {
				// 	if (i !== idx && item.classList.contains('active')) {
				// 		item.classList.remove('active')
				// 	}
				// })
				// Open the current accordion item
				parent.classList.add("active")
			} else {
				// Close the current accordion item
				parent.classList.remove("active")
			}
		})
	})
}
accordion()
