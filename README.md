# Acta 2.0 Modal
Modal with information about acta 2.0. Can you add this to your website to make more strong opportunities. 

# Version ENG

# Wersja PL

Głosuj przeciwko artykułowi 11 i 13 UE dodając do swojej strony alert modal.

Instrukcja:

Wybierz pasujący sposób dodania:

1. Javascript i HTML

HTML:

<style>
  #acta2-modal {
	max-width: 600px;
	max-height: 600px;
	display: block;
	margin: auto;
	position: fixed;
	  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	box-shadow: 0 0 6px 2px black;
	background: #e2e2e2;
	font-size: 17px;
	transition: 1s ease;
}

#acta2-modal h1{ 
	margin: 0;
}

#acta2-modal div {
	padding: 10px;
}

#acta2-modal span#acta2-actionbutton {
	font-size: 35px;
	font-weight: bolder;
	position: absolute;
	right: 3px; top: 3px;
	border-radius: 50%;
	width: 42px; height: 39px;
	text-align: center;
}

#acta2-modal #acta2-actionbutton:hover {
	cursor: pointer;
	color: #824343;
}

#acta2-modal  #acta2-modal-header {
	background: #bf7878;
	
}

#acta2-modal button {
	border: 0;
	background: #9b4545;
	color: white;
	padding: 10px;
	font-weight: bold;
	transition: 0;
	margin: 5px;
}

#acta2-modal button:hover {
   	background: #bc5151;
	cursor: pointer;
}
</style>
<div id="acta2-modal">
<span id="acta2-actionbutton">
&times;
</span>
<div id="acta2-modal-header">
<h1>Wolność internetu jest teraz bardzo zagrożona!
	Natchodzi Acta 2.0
</h1>
</div>
<div id="acta2-modal-container">
	Niestety artykuł 11 i 13 zyskał poparcie większości w głosowaniu parlamentu europejskiego 10:15. Oznacza to cenzurę w internecie w tym filtrowanie i sprawdzanie treści przez algorytmy w tym weryfikację wstępną przed publikacją co może oznaczać że zamieszczony przez nas post zostanie usunięty lub dodany po jakimś czasie. W internecie może zniknąć wiele treści. Wiele kanałów na Youtube czy takie serwisy jak Wykop czy Reddit mogą stracić na znaczeniu. Również płatne linki.<br>
	Brzmi gnębiąco? Walcz z nami o wolny internet! Liczy się głos każdego w tej sprawie. Protestuj póki czas!<br>
	<center><button>Napisz email do europosłów</button><button>Śledź fanpage i eventy</button></center>
</div>
</div>

Javascript

<script type="text/javascript">
	document.getElementById('acta2-actionbutton').onclick = closeActa2modal;
	
	function closeActa2modal() {
		document.getElementById('acta2-modal').style.opacity = "0";
		setTimeout(function() {
			document.getElementById('acta2-modal').style.display = "none"; 
		}, 1000);
	}

	
</script>

