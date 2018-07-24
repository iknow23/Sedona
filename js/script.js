	var link = document.querySelector(".button-search");
	var close = popup.querySelector(".modal-close");
	var form = popup.querySelector("form");
	var in = popup.querySelector("[name=date-on]");
	var out = popup.querySelector("[name=date-off]");

	var isStorageSupport = true;
	var storage = "";

	try {
		storage = localStorage.getItem("in");
	} catch (err) {
		isStorageSupport = false;
	}

	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");

		if (storage) {
			in.value = storage;
			out.focus();
		} else {
			in.focus();
		}
	});

	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function (evt) {
		if (!in.value || !out.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		} else {
			if (isStorageSupport) {
				localStorage.setItem("in", in.value);
			}
		}
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			}
		}
	});