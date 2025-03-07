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

// Training Slider & Thumbs
// Thumbs
const trainingSliderThumbs = new Swiper(".swiper-training-thumbs", {
	slidesPerView: 4,
	spaceBetween: 12,
	loop: true,
	touchMoveStopPropagation: false,
	passiveListeners: false,
	navigation: {
		nextEl: ".swiper-training-next",
		prevEl: ".swiper-training-prev",
	},
	breakpoints: {
		600: {
			spaceBetween: 16,
		},
	},
})
// Slider
new Swiper(".swiper-training", {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	thumbs: {
		swiper: trainingSliderThumbs,
	},
})

// Datapicker
const fp = flatpickr("#datepicker", {
	dateFormat: "d M Y",
	defaultDate: new Date(),
	disableMobile: true,
	onOpen: function (selectedDates, dateStr, instance) {
		const overlay = document.querySelector(".datapicker-overlay")
		const body = document.body

		overlay.classList.add("visible")
		body.style.overflow = "hidden"
	},

	onClose: function (selectedDates, dateStr, instance) {
		const overlay = document.querySelector(".datapicker-overlay")
		const body = document.body
		body.style.overflow = ""
		overlay.classList.remove("visible")
	},
})

const plusButtons = document.querySelectorAll(".plus-day")
const minusButtons = document.querySelectorAll(".minus-day")

function changeDate(days) {
	const currentDate = fp.selectedDates[0] || new Date()
	const newDate = new Date(currentDate)
	newDate.setDate(currentDate.getDate() + days)
	fp.setDate(newDate)
}

plusButtons.forEach((plusBtn) => {
	plusBtn.addEventListener("click", () => changeDate(1))
})

minusButtons.forEach((minusBtn) => {
	minusBtn.addEventListener("click", () => changeDate(-1))
})

// Move Form
const form = document.querySelector(".form")
const desktopContainer = document.querySelector(".desktop-container")
const mobileForm = document.querySelector(".mobile-form")
let isMoved = false

function moveForm() {
	if (window.innerWidth < 1280 && !isMoved) {
		mobileForm.appendChild(form)
		isMoved = true
	} else if (window.innerWidth >= 1280 && isMoved) {
		desktopContainer.appendChild(form)
		isMoved = false
	}
}

moveForm()
window.addEventListener("resize", moveForm)
