//your JS code here. If required.
function checkExistingUser() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        document.getElementById('existing').style.display = 'block';
    }
}
document.getElementById("form").addEventListener('submit',function(event){
	event.preventDefault()

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const checkvalue = document.getElementById("checkbox").checked;

	alert(`Logged in as ${username}`);

	if (checkvalue) {
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
	}else {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	window.location.reload();
});
document.getElementById('existing').addEventListener('click',function(){
	const starage = localStorage.getItem('username');
	alert(`Logged in as ${starage}`);
});
window.onload = function(){

	checkExistingUser()
}

