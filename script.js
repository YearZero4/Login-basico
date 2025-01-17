		function loguearse(){
		const username = document.getElementById('input1').value;
		const password = document.getElementById('input2').value;

		if(username === 'PGX' && password === '0000'){
			document.getElementById('info').innerHTML = 'Clave Exitosa';
		}  else {
			document.getElementById('info').innerHTML = 'Contraseña Invalida...';
		}
	}

setTimeout(() => {
document.getElementById('info').innerHTML = '';
}, 3000); 