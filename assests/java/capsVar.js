const Manga = {
    'cap41Pags':{
        0:{
            'src':'imgs/cap41_img1.jpg',
        },
        1:{
            'src':'imgs/cap41_img2.jpg',
            'spans':{
                0:{
                    'width': 'auto',
                    'height': 'auto',
                    'rotate': '335deg',
                    'color': '#000000',
                    'fontSize': '10vh',
                    'BgColor': '#ffffff',
                    'margin': '46% 7%',
                    'conttend': '*Olhar*'
                },
                1:{
                    'width': 'auto',
                    'height': 'auto',
                    'rotate': '350deg',
                    'color': '#000000',
                    'fontSize': '12vh',
                    'BgColor': '#ffffff',
                    'margin': '87% 55%',
                    'conttend': '*Piscar*'
                }
            }
        },
    }
};

function WriteManga(divManga, Data, capNum) {
    let cap = 'cap' + capNum + 'Pags';
    let arg = Object.keys(Data[cap]).length;

    for (let i=3; i<arg; i++) {
        let img = Data[cap][i]['src'];
        let spans = Data[cap][i]['spans'];

        let spansHTML = '';

        if (spans) {
            Object.keys(spans).forEach((key) => {
                let span = spans[key];
                spansHTML += `
                    <span onclick="updateEditSpanForm(this)" class="interect" style="margin: ${span.margin}; width: ${span.width}; height: ${span.height}; rotate: ${span.rotate}; color: ${span.color}; font-size: ${span.fontSize}; background-color: ${span.BgColor};">${span.conttend}</span>
                `;
            });
        }

        divManga.innerHTML += `
            <div class="page">
                <div class="spans">
                    ${spansHTML}
                </div>
                <img id="imgPage1" src="${img}" class="imgPage">
            </div>
        `;
    }
}

function updateEditSpanForm(span) {
    spanAtual = span;
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const rotateInput = document.getElementById('rotate');
    const fontSizeInput = document.getElementById('fontSize');
    const marginInput = document.getElementById('margin');
    const colorInput = document.getElementById('color');
    const bgColorInput = document.getElementById('BgColor');
    const conttendTextarea = document.getElementById('conttend');
    
    widthInput.value = span.style.width;
    heightInput.value = span.style.height;
    rotateInput.value = parseFloat(span.style.rotate) || 0;
    fontSizeInput.value = span.style.fontSize;
    marginInput.value = span.style.margin;
    colorInput.value = rgbToHex(span.style.color);
    bgColorInput.value = rgbToHex(span.style.backgroundColor);
    conttendTextarea.value = span.innerHTML;

    // Atualizar o bloco de resultados
    updateResultBlock();
}

function updateResultBlock() {
    const resultBlock = document.querySelector('.result');
    
    const selectedSpan = spanAtual;
    let rotateValue = parseFloat(document.getElementById('rotate').value) || 0;

    selectedSpan.style.width = document.getElementById('width').value;
    selectedSpan.style.height = document.getElementById('height').value;
    selectedSpan.style.rotate = rotateValue+'deg';
    selectedSpan.style.color = document.getElementById('color').value;
    selectedSpan.style.fontSize = document.getElementById('fontSize').value;
    selectedSpan.style.backgroundColor = document.getElementById('BgColor').value;
    selectedSpan.style.margin = document.getElementById('margin').value;
    selectedSpan.innerHTML = document.getElementById('conttend').value;

    resultBlock.innerHTML = `
        'width': '${document.getElementById('width').value}',<br>
        'height': '${document.getElementById('height').value}',<br>
        'rotate': '${rotateValue}deg',<br>
        'color': '${document.getElementById('color').value}',<br>
        'fontSize': '${document.getElementById('fontSize').value}',<br>
        'BgColor': '${document.getElementById('BgColor').value}',<br>
        'margin': '${document.getElementById('margin').value}',<br>
        'conttend': '${document.getElementById('conttend').value}'
    `;
}