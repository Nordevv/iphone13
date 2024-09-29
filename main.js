let parent = document.querySelector(".phones-parent");
let tamplate = document.querySelector(".tamplate");
let images = document.querySelector(".phones").children;
let storage = document.querySelector(".storage").children;
let colors = ["#EBF400", "#BBE2EC","#092635","#C7C8CC","#FE0000"];
for(let i=0 ; i<images.length; i++){
    images[i].addEventListener("click",function(){
        tamplate.src = images[i].src;
        parent.style.backgroundColor=colors[i];
    })
}
for(let i =0 ; i<storage.length; i++){
    storage[i].addEventListener("click",function(){
        for(let j=0; j<storage.length;j++){
            storage[j].style.border=""
            storage[j].style.color=""
        }
        storage[i].style.border="2px solid black";
        storage[i].style.color="black";
    })
}
