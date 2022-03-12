let count=1;
let div=document.getElementById("container");
function getdata(){
    for(let i=0;i<25;i++){
       let h1=document.createElement("h1");
       h1.textContent=`Masai Student ${count++}`;
       div.append(h1);
    }
}
getdata();
const showData=()=>{
    setTimeout(()=>{
        getdata();
    },400)
}
div.addEventListener("scroll",()=>{
    const {scrollTop,scrollHeight,clientHeight}=div;
    if(scrollTop+clientHeight>=scrollHeight){
        showData();
    }
})