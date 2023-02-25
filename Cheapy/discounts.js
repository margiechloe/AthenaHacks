
document.querySelector("#naturalhistorymuseum").addEventListener("mouseover",function(){
    document.querySelector("#naturalhistorymuseum").style.backgroundColor = 'gold';
});
document.querySelector("#naturalhistorymuseum").addEventListener("mouseover",function(){
    document.querySelector("#discount1").innerHTML = "Free for L.A. County residents, Mon–Fri 3–5pm (closed first Tue of the month).";
});
document.querySelector("#naturalhistorymuseum").addEventListener("mouseout",function(){
    document.querySelector("#naturalhistorymuseum").style.backgroundColor = 'white';
});
document.querySelector("#naturalhistorymuseum").addEventListener("mouseout",function(){
    document.querySelector("#discount1").innerHTML = "";
});
