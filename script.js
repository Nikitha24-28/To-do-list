function add(){
    const texttag=document.querySelector(".inputtask");
    const text =texttag.value.trim();

    if(text){
        const l=document.querySelector(".tasklist");
        const le=document.createElement("li");

        le.textContent=text;

        le.addEventListener("click",()=>{
            le.classList.toggle("completed");
        });

        const del=document.createElement("button");
        del.textContent="Delete";
        del.classList.add("delete");

        del.addEventListener("click",()=>{
            l.removeChild(le);
        });

        l.append(le);
        le.append(del);

        texttag.value="";
    }else{
        alert("Enter a task");
    }
}