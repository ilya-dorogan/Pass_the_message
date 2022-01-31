"use strict";

console.log("www");

window.addEventListener('DOMContentLoaded', () => {

	const messageInput = document.getElementById("message-input"),
		messageOutput = document.getElementById("message-output"),
		btn = document.querySelector('.submit-btn');

	console.log(messageOutput);
	console.log(messageInput);
	console.log(btn);




	function getMessage() {
		messageOutput.innerHTML = messageInput.value;
		console.log(messageOutput);
		messageInput.value = "";
	}

	btn.addEventListener('click', getMessage);

	messageInput.addEventListener('keydown', (e) => {
		if (e.key == 'Enter') {
			getMessage();
		}
	});

});