	
function masukBelajar() {
	var player = prompt('Masukkan nama Kamu :');

	var body = document.body;
	var mulai = document.getElementById('mulai');
	body.removeChild(mulai);

	var suaraAngka = [];
	for (var j = 0; j < 10; j++) {
		suaraAngka.push(document.createElement('audio'));
		var indeks = j + 1;
		suaraAngka[j].setAttribute('id', `suara${indeks}`);
		suaraAngka[j].setAttribute('src', `num/0${indeks}.mp3`);
		suaraAngka[j].setAttribute('preload', 'auto');
		body.appendChild(suaraAngka[j]);	
	}

	if (player != null) {
		var divData = document.createElement('div');
		var divDataId = document.createAttribute('id');
		divDataId.value = 'data';
		divData.setAttributeNode(divDataId);
		body.appendChild(divData);

			var divNama = document.createElement('div');
			divNama.setAttribute('id', 'nama');
			divData.appendChild(divNama);
			divNama.innerHTML = `Selamat datang ${player}. Selamat belajar mengenal angka`

		var divAngka = document.createElement('div');
		divAngka.setAttribute('id', 'angka');
		body.appendChild(divAngka);		

			var divAnchor = [];
			var divImg = [];
			for (var i = 0; i < 10; i++) {
				divAnchor.push(document.createElement('a'));
				var indeks = i + 1;
				divAnchor[i].setAttribute('id', `${indeks}`);
				// divButton[i].setAttribute('onClick', `pembanding(${indeks}, ${nomor}, ${nilai})`);
				divAnchor[i].setAttribute('onClick', `suara${indeks}.play()`);
				divAngka.appendChild(divAnchor[i]);
				divAnchor[i].innerHTML = `<img src="img/0${indeks}.png" style="width: 104px; height: 160px" display="inline-block">`;		

			}

		var divReset = document.createElement('div');
		divReset.setAttribute('id', 'reset');
		body.appendChild(divReset);		

			var reset = document.createElement('button');
			reset.setAttribute('id', `${indeks}`);
			reset.setAttribute('onClick', 'window.location.reload()');
			divReset.appendChild(reset);
			reset.innerHTML = 'Ulangi';	
			
	} else{
		alert('Kamu belum memasukkan nama Kamu');
		window.location.reload();
	}
}