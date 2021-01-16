// Добавить в корзину
const headBtn1 = document.querySelectorAll('.head_btn');
const inn = ['fas fa-balance-scale-right', 'fas fa-check'];
[].forEach.call(headBtn1, function (elem) {
    elem.onclick = function () {
        let id = this.getAttribute("id").slice(1);
        let i = document.getElementById(`${id}`);
        i.className = (i.className == inn[0] ? inn[1] : inn[0]);
    } 
})

// Выбор цвета 
const sel = document.querySelectorAll('.sp_color');
let arr = ['Желтый', 'Красный', 'Зеленый'];
const color = document.querySelectorAll('.color');

[].forEach.call(color, (col) => { 
        col.onclick = () => {               
            let id = +col.getAttribute('id').slice(1);
            let sp1 = document.querySelector(`#r01`);     
            let sp2 = document.querySelector(`#r02`);     
            let sp3 = document.querySelector(`#r03`); 
            
            if (id === 1) {
               sp1.innerHTML = arr[0];
            } 
            if (id === 2) {
               sp1.innerHTML = arr[1];
            } 
            if (id === 3) {
               sp1.innerHTML = arr[2];
            } 
            if (id === 4) {
               sp2.innerHTML = arr[0];
            } 
            if (id === 5) {
               sp2.innerHTML = arr[1];
            } 
            if (id === 6) {
               sp2.innerHTML = arr[2];
            }
            if (id === 7) {
               sp3.innerHTML = arr[0];
            } 
            if (id === 8) {
               sp3.innerHTML = arr[1];
            } 
            if (id === 9) {
               sp3.innerHTML = arr[2];
            }  
        }
 }) 




// Количество
const min = document.querySelectorAll('.min');
const plus = document.querySelectorAll('.plus');

[].forEach.call(min, (el) => {    
    el.onclick = () => {       
        let ind = el.getAttribute("id").slice(1);
        let num = document.getElementById(`n${ind}`);   
        let n = +document.getElementById(`n${ind}`).innerHTML;  
        if(n > 1){   
        num.innerHTML = --n;      
        }  
    }
});

[].forEach.call(plus, (el) => {    
    el.onclick = () => {
        console.log(el);
        let ind = el.getAttribute("id").slice(1);
        let num = document.getElementById(`n${ind}`);
        let n = +document.getElementById(`n${ind}`).innerHTML;
        num.innerHTML = ++n; 

    }
})


// Купить
const btnBuy = document.querySelectorAll('.btn_buy');
[].forEach.call(btnBuy, function (elem) {
    elem.onclick = function () {
        this.classList.toggle('click');
    } 
})