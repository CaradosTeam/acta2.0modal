	window.onload = function() {
  
  if(localStorage.getItem('acta20modal')=="closed") document.getElementById('acta2-modal').style.display = "none"
  
  document.getElementById('acta2-actionbutton').onclick = closeActa2modal;
	
	function closeActa2modal() {
		document.getElementById('acta2-modal').style.opacity = "0";
		setTimeout(function() {
			document.getElementById('acta2-modal').style.display = "none"; 
		}, 1000);
    localStorage.setItem('acta20modal', 'closed');
	}
  
  function openActa2modal() {
      	document.getElementById('acta2-modal').style.opacity = "1";
		setTimeout(function() {
			document.getElementById('acta2-modal').style.display = "block"; 
		}, 1000);
    localStorage.setItem('acta20modal', 'acive');
  }
  
  }
