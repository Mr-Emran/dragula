// let li = document.querySelectorAll('li')
// let st_order
// for(let item of li){
//     item.draggable = 'true'
//     item.style.cursor = " grabbing"

//     item.addEventListener("dragstart" , ()=> {
//         item.style.color = 'red'
//          st_order = item.style.order 
    
//     })
//     item.addEventListener("dragend" , ()=> {
//         item.style.color = 'black'
//     })

//     item.addEventListener("dragover" , ()=> {
//         item.style.fontSize = '50px'
//     })
   
//     item.addEventListener("dragleave" , ()=> {
//         item.style.fontSize = '30px'
//     })
//     item.addEventListener("drop" , ()=> {
//         item.style.order =  st_order
//     })


   


// }


// let li = document.querySelectorAll('li')
// let st_order
// let st_item
// let cur_item
// for(let item of li){
//     item.draggable = 'true'
//     item.style.cursor = " grabbing"

//     item.addEventListener("dragstart" , ()=> {
//         item.style.color = 'red'
//         st_order = item.style.order
//         st_item = item
//         console.log(item)
//     })
//     item.addEventListener("dragend" , ()=> {
//         item.style.color = 'black'
//     })

//     item.addEventListener("dragover" , (event)=> {
//         event.preventDefault()
//         item.style.fontSize = '50px'
//     })
   
//     item.addEventListener("dragleave" , ()=> {
//         item.style.fontSize = '30px'
//     })
//     item.addEventListener("drop", ()=> {
//         cur_item = item
//         let cur_order = item.style.order
//         item.style.order = st_order
        
//         st_item.style.order = cur_order
//         console.log(st_item.style.order)
//     })
//     item.addEventListener('dragend', () => {
//         cur_item.style.fontSize = '30px'
//     })
// }



const namesContainer = document.querySelector('.names');
let draggedName = null;
namesContainer.addEventListener('dragstart', (event) => {
    draggedName = event.target;
    event.target.style.color = 'red';
});
namesContainer.addEventListener('dragend', (event) => {
    event.target.style.color = 'black';
   
});
namesContainer.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.target.style.fontSize = '30px';
});
namesContainer.addEventListener('dragleave', (event) => {
    event.target.style.fontSize = '25px';
});
namesContainer.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('name')) {
        const droppedName = event.target;
        const temp = document.createElement('div');
        draggedName.parentNode.insertBefore(temp, draggedName);
        droppedName.parentNode.insertBefore(draggedName, droppedName);
        temp.parentNode.insertBefore(droppedName, temp);
        temp.parentNode.removeChild(temp);
    }
});



// let form_reg = document.forms.form
// console.log(form_reg);

// let pas = form.elements.pass
// console.log(pas);

// let radio = form.elements.rad
// let text = form.elements    .txt

// form.addEventListener("submit", () =>{
//     event.preventDefault()
//     let obj = {
// name: text.value,
// pass: pas.value,
// ismarid: radio.checked
//     }
//     console.log(obj);
// })