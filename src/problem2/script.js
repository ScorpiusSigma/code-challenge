document
	.getElementById("transaction-form")
	.addEventListener("submit", function (e) {
		e.preventDefault();

		const data = [
			...e.target.children[0].getElementsByTagName("input"),
		].map((x) => x.value);

		const address = data[0];
		const amount = data[1];

		e.target.children[1].children[0].innerHTML = "SENDING...";
		e.target.disabled = true;
		setTimeout(() => {
			e.target.children[1].children[0].innerHTML = "TOKEN SENT";
			document.getElementById("transaction-alert").innerHTML =
				amount + " token sent to " + address;

			setTimeout(() => {
				e.target.children[1].children[0].innerHTML = "SEND TOKENS";
				e.target.disabled = false;
			}, 2000);
		}, 2000);
	});

let otpClicked = false;
const handleOtpButtonClick = (e) => {
	if (otpClicked) {
		return;
	} else {
		otpClicked = true;
	}

	e.target.innerHTML = "SENT!";

	let countDown = 10;
	e.target.style.backgroundColor = "gray";
	const counter = () => {
		e.target.innerHTML = countDown + "s";
		countDown--;
		if (countDown <= 0) {
			clearInterval(interval);
			e.target.innerHTML = "Send OTP";
			otpClicked = false;
			e.target.style.backgroundColor = "#7e8cff";
		}
	};

	const interval = setInterval(counter, 1000);
	countDown = 10;
};

document
	.getElementById("otp-button")
	.addEventListener("click", handleOtpButtonClick);

const otpChildren = [...document.getElementById("digit-group").children];

otpChildren.forEach((otp, index) => {
	otp.addEventListener("keyup", (e) => {
		if (e.keyCode >= 48 && e.keyCode <= 57 && e.target.value.length <= 1) {
			const len = otpChildren.length;
			const nextIndex = index + 1 >= len ? len - 1 : index + 1;
			otpChildren[nextIndex].select();
		} else if (e.keyCode === 8) {
			const nextIndex = index - 1 < 0 ? 0 : index - 1;
			otpChildren[nextIndex].select();
		} else {
			e.target.value = e.target.value[0];
		}
	});
});
