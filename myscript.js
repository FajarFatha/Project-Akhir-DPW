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
    var minuman=document.getElementsByClassName("content-daftar1");
    if(pilihan.value=="Dingin"){
        minuman[0].style.display="block"
        minuman[1].style.display="none"
    }else if(pilihan.value=="Hangat"){
        minuman[0].style.display="none"
        minuman[1].style.display="block"
    }
}

function sortmakanan(){
    var pilihan = document.getElementById("makanan");
    var makanan=document.getElementsByClassName("content-daftar");
    if(pilihan.value=="Kuah"){
        makanan[0].style.display="block"
        makanan[1].style.display="none"
        makanan[2].style.display="none"
        makanan[3].style.display="none"
        makanan[4].style.display="none"
        makanan[5].style.display="none"
    }else if(pilihan.value=="Nasi"){
        makanan[0].style.display="none"
        makanan[1].style.display="block"
        makanan[2].style.display="none"
        makanan[3].style.display="none"
        makanan[4].style.display="none"
        makanan[5].style.display="none"
    }else if(pilihan.value=="Mie"){
        makanan[0].style.display="none"
        makanan[1].style.display="none"
        makanan[2].style.display="block"
        makanan[3].style.display="none"
        makanan[4].style.display="none"
        makanan[5].style.display="none"
    }else if(pilihan.value=="Panggang"){
        makanan[0].style.display="none"
        makanan[1].style.display="none"
        makanan[2].style.display="none"
        makanan[3].style.display="block"
        makanan[4].style.display="none"
        makanan[5].style.display="none"
    }else if(pilihan.value=="Sayur"){
        makanan[0].style.display="none"
        makanan[1].style.display="none"
        makanan[2].style.display="none"
        makanan[3].style.display="none"
        makanan[4].style.display="block"
        makanan[5].style.display="none"
    }else if(pilihan.value=="Dessert"){
        makanan[0].style.display="none"
        makanan[1].style.display="none"
        makanan[2].style.display="none"
        makanan[3].style.display="none"
        makanan[4].style.display="none"
        makanan[5].style.display="block"
    }
}
