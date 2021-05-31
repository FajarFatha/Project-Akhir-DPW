function lihatmenu(){
    document.getElementById("content1").style.display="none"
    document.getElementById("content2").style.display="none"
    
    document.getElementById("pembatas1").style.display="block";
    var pilihan = document.getElementsByClassName("js-bg-transisi");
    pilihan[0].style.display="block"
}

function minuman(){
    var pilihan = document.getElementsByClassName("js-bg-transisi");
    pilihan[0].style.display="none"
    pilihan[1].style.display="block"
}

function makanan(){
    var pilihan = document.getElementsByClassName("js-bg-transisi");
    pilihan[0].style.display="none"
    pilihan[2].style.display="block"
}

function sortminuman(){
    var pilihan = document.getElementById("minuman");
    var minuman=document.getElementsByClassName("content-daftar");
    if(pilihan.value=="Dingin"){
        minuman[0].style.display="block"
        minuman[1].style.display="none"
    }else if(pilihan.value=="Hangat"){
        minuman[0].style.display="none"
        minuman[1].style.display="block"
    }
}

function sortmakanan(){
    var pilihan = document.getElementById("mskakanan");
    var makanan=document.getElementsByClassName("content-daftar");
    if(pilihan.value=="Kuah"){
        minuman[0].style.display="block"
        minuman[1].style.display="none"
        minuman[2].style.display="none"
        minuman[3].style.display="none"
        minuman[4].style.display="none"
        minuman[5].style.display="none"
    }else if(pilihan.value=="Nasi"){
        minuman[0].style.display="none"
        minuman[1].style.display="block"
        minuman[2].style.display="none"
        minuman[3].style.display="none"
        minuman[4].style.display="none"
        minuman[5].style.display="none"
    }else if(pilihan.value=="Mie"){
        minuman[0].style.display="none"
        minuman[1].style.display="none"
        minuman[2].style.display="block"
        minuman[3].style.display="none"
        minuman[4].style.display="none"
        minuman[5].style.display="none"
    }else if(pilihan.value=="Panggang"){
        minuman[0].style.display="none"
        minuman[1].style.display="none"
        minuman[2].style.display="none"
        minuman[3].style.display="block"
        minuman[4].style.display="none"
        minuman[5].style.display="none"
    }else if(pilihan.value=="Sayur"){
        minuman[0].style.display="none"
        minuman[1].style.display="none"
        minuman[2].style.display="none"
        minuman[3].style.display="none"
        minuman[4].style.display="block"
        minuman[5].style.display="none"
    }else if(pilihan.value=="Dessert"){
        minuman[0].style.display="none"
        minuman[1].style.display="none"
        minuman[2].style.display="none"
        minuman[3].style.display="none"
        minuman[4].style.display="none"
        minuman[5].style.display="block"
    }
}
