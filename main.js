function filterItems(event){
   
let cards=document.getElementsByClassName("sport-col");
console.log(cards);

let value=event.target.innerHTML;
console.log(value);
let parent;
for(i=0;i<cards.length;i++){
    cards[i].style.display="block";
}

for(i=0;i<cards.length;i++){
    let heading=cards[i].querySelector("h4");
    if(value==heading.innerHTML){
        parent=heading.parentElement;
        parent.style.display="block";
        console.log(heading,value);
        
    }
    else if(value==heading.innerHTML){
        parent=heading.parentElement;
        parent.style.display="block";
        console.log(heading,value);
    }
    else if(value==heading.innerHTML){
        parent=heading.parentElement;
        parent.style.display="block";
    }
    else if(value=="SPORTS"){
        cards[i].style.display="block";
    }
    else{
        cards[i].style.display="none";
        
    }
}


}
