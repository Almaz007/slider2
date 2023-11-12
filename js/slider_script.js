
let index = -1;
let flag = 0;

let slider_img = document.querySelector('.slider_img_elem');
let img_items = document.querySelectorAll('.img_items');
let data_persons = document.querySelectorAll('.form_data_persona .input');

let btn_right = document.querySelector('.btn_right');
let btn_left = document.querySelector('.btn_left');

let array_person = [['Картина 1', 'FIO1', 'Group1', 'Style1'],
                    ['Картина 2', 'FIO2', 'Group2', 'Style2'],
                    ['Картина 3', 'FIO3', 'Group3', 'Style3'],
                    ['Картина 4', 'FIO4', 'Group4', 'Style4'],
                    ['Картина 5', 'FIO5', 'Group5', 'Style5']];


for(let i = 0; i < img_items.length; i++) {
    img_items[i].addEventListener('click', function() {
        slider_img.setAttribute('src', img_items[i].getAttribute('src'));

        index = i;
        flag = 1;

        for(let j = 0; j < data_persons.length; j++) {
            data_persons[j].value = array_person[i][j];
        }

        stopp();
    })
}

btn_right.addEventListener('click', function() {
    if(index == img_items.length-1 ){ 
        index = 0;
        stopp();
        change_img_btn();
    }
    else {
        index++;
        stopp();
        change_img_btn();
    }

})

btn_left.addEventListener('click', function() {
    if(index == 0 ){ 
        index = 4;
        stopp();
        change_img_btn();
    }
    else {
        index--;
        stopp();
        change_img_btn();
    }

})

change_img();
start();


function start(){

    window.timerId = window.setInterval(change_img, 2000);

}
   
function stopp(){

    window.clearInterval(window.timerId);

}

function change_img_btn()
{
    for(let i = 0; i < data_persons.length; i++) {
        data_persons[i].value = array_person[index][i];
    }

    slider_img.setAttribute('src', img_items[index].getAttribute('src'));
    if(flag == 0) {
        start();
    }
}

function change_img() {
    index++;
    if(index == img_items.length ){ 
        index = 0;
    }

    for(let i = 0; i < data_persons.length; i++) {
        data_persons[i].value = array_person[index][i];
    }

    slider_img.setAttribute('src', img_items[index].getAttribute('src'));
}