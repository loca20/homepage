{
	const button = document.querySelector(".js-button");

	const toggleShadow = () => {
		const table = document.querySelector(".js-table");
		const textButton = document.querySelector(".js-buttonText");

		table.classList.toggle("button__shadow");

		textButton.innerText = table.classList.contains("button__shadow")
			? "Usuń cień z"
			: "Dodaj cień do";

		if (button.classList.contains("button__shadow")) {
			button.classList.remove("button__shadow");
		} else {
			button.classList.add("button__shadow");
		}
	};

	const init = () => {
		button.addEventListener("click", toggleShadow);
	};

	init();
}
