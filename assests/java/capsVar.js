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
                    'color': '#000000',
                    'fontSize': '4vh',
                    'BgColor': '#ffffff',
                    'margin': '48% 8%',
                    'conttend': 'Sondar'
                }
            }
        },
        2:{
            'src':'imgs/cap41_img3.jpg',
        },
        3:{
            'src':'imgs/cap41_img4.jpg',
        },
        4:{
            'src':'imgs/cap41_img5.jpg',
        },
        5:{
            'src':'imgs/cap41_img6.jpg',
        },
        6:{
            'src':'imgs/cap41_img7.jpg',
        },
    }
};

function WriteManga(divManga, Data, capNum) {
    let cap = 'cap' + capNum + 'Pags';
    //let arg = Object.keys(Data[cap]).length;

    for (let i = 0; i < 2; i++) {
        let img = Data[cap][i]['src'];
        let spans = Data[cap][i]['spans'];

        let spansHTML = '';

        if (spans) {
            Object.keys(spans).forEach((key) => {
                let span = spans[key];
                spansHTML += `
                    <span onclick="updateEditSpanForm(this)" class="interect" style="margin: ${span.margin}; width: ${span.width}; height: ${span.height}; color: ${span.color}; font-size: ${span.fontSize}; background-color: ${span.BgColor};">${span.conttend}</span>
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