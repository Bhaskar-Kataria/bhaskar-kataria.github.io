function toggle_password() {
    const passwordField = document.getElementById("password");
	const showPasswordCheckbox = document.getElementById("show-password");

	showPasswordCheckbox.addEventListener("change", function() {
		if (showPasswordCheckbox.checked) {
			passwordField.type = "text";
		} else {
				passwordField.type = "password";
		}
	});
}