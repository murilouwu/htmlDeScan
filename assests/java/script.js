//scroll
function scroll(x, y){
	window.scrollTo(x, y);
}

//mostrar e ocutar divs, em array
function mostrar(ocu, chave){
    for (var i=0; i<ocu.length; i++){	
		if (i<chave){
			ocultar(ocu[i], 0);	
		}else{
			ocultar(ocu[i], 1);
		};
	};
};

//ocultar e mostra div
function ocultar(obj, es){
	let div = document.querySelector(obj);
	if(es==1){
		div.style.display = 'flex';
	}else{
		div.style.display = 'none';
	};
};

//redirecionar pagina
function redirect(page) {
    window.location.href = page;
}

//minha função favorita:
function adamCendler(btn){
	btn.click();
}

function subir(){
	scroll(0, 0);
}

function redirectNewPage(link){
    window.open(link, '_blank');
}

function drop(btn, id, fun, textId, texts){
	let es = fun==0? 1:0;
	ocultar(id, es);
	let div = document.querySelector(textId);
	div.innerHTML = texts[0];
	
	let newTexts = [texts[1], texts[0]];
	let fun2 = fun==0? 1:0;
	let onclick = "drop(this, '"+id+"', "+fun2+", '"+textId+"',['"+newTexts[0]+"', '"+newTexts[1]+"'])";
	btn.setAttribute("onclick", onclick);
}
