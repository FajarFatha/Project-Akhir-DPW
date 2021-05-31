function lihatmenu(){
    document.getElementById("content1").style.display="none"
    document.getElementById("content2").style.display="none"
    
    document.getElementById("pembatas1").style.display="block";
    var pilihan = document.getElementsByClassName("js-bg-transisi");
    pilihan[0].style.display="block"
}

function home(){
    var pilihan = document.getElementsByClassName("js-bg-transisi");
    pilihan[0].style.display="none"
    pilihan[1].style.display="none"
    pilihan[2].style.display="none"
    document.getElementById("divtabel").style.display="none"
    document.getElementById("divform").style.display="none"
    document.getElementById("pembatas1").style.display="none"
    document.getElementById("content1").style.display="block"
    document.getElementById("content2").style.display="block"
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

function disjum(){
    var jum=document.getElementsByClassName("injum");
    var check = document.getElementsByName("pilihanmenu");
    
    for(var j = 0; j < check.length; j++){
        if(check[j].checked){
            jum[j].style.display="block"
        }
    }
}

var checkbox = document.getElementsByName("pilihanmenu");
var jumlah = document.getElementsByClassName("jum");
var nama = document.getElementsByClassName("nama1");
var harga = document.getElementsByClassName("harga")


totnama=[]
totjumlah=[]
totharga=[]
tothasil=[]

function checkout(){
    var pilihan = document.getElementsByClassName("js-bg-transisi");
    pilihan[0].style.display="none"
    pilihan[1].style.display="none"
    pilihan[2].style.display="none"
    document.getElementById("divform").style.display="block"
    
    for(var i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked){
            var nama1 = nama[i].value;
            var harga1 = harga[i].value;
            var jumlah1 = jumlah[i].value;
            var hasil = jumlah1*harga1;
            totnama.push(nama1)
            totjumlah.push(jumlah1)
            totharga.push(harga1)
            tothasil.push(hasil)
        }
    }

}

function sub(){
    document.getElementById("divtabel").style.display="block"
    var namapsn = document.getElementById("nama-psn").value;
    var tglpsn = document.getElementById("tgl").value;
    var nomeja = document.getElementById("nomor-meja").value;
    var table ="";
    var rows = totnama.length;
    var cols = 4;
    total=0
    for(var i=0;i<tothasil.length;i++){
        total+=tothasil[i]
    }
    table+="<tr><th colspan=4>Waroeng Nusantara</th></tr>"
    table+="<tr><th colspan=4>Jalan Saka Bahari No.117, Indonesia</th></tr>"
    table+="<tr><th colspan=4>Telp. 088 9345 2378</th></tr>"
    table+="<tr><th colspan=4>Nota</th></tr>"
    table+="<tr><th colspan=4>---------------------------------------------------------</th></tr>"
    table+="<tr><td colspan=3>Tanggal</td><td>"+tglpsn+"</td></tr>"
    table+="<tr><td colspan=3>Nama</td><td>"+namapsn+"</td></tr>"
    table+="<tr><td colspan=3>No Meja</td><td>"+nomeja+"</td></tr>"
    table+="<tr><th colspan=4>---------------------------------------------------------</th></tr>"
    table+="<tr>"
    table+="<th>Nama Pesanan</th>"
    table+="<th>Harga@</th>"
    table+="<th>Jumlah</th>"
    table+="<th>Harga</th>"
    table+="</tr>"
    for(var r=0;r<rows;r++){
        table+="<tr>";
        for(var a=0; a<1; a++){
            table += "<td>"+totnama[r]+"</td>";
            table += "<td>"+totharga[r]+"</td>";
            table += "<td>"+totjumlah[r]+"</td>";
            table += "<td>"+tothasil[r]+"</td>";
        }
        table+="</tr>";
    }
    table+="<tr><th colspan=4>---------------------------------------------------------</th></tr>"
    table+="<tr><td colspan=3>Harga Total</td><td>"+total+"</td></tr>"
    table+="<tr><th colspan=4>---------------------------------------------------------</th></tr>"
    table+="<tr><th colspan=4>Terima Kasih Atas Kunjungan Anda</th></tr>"

    document.getElementById("tt").innerHTML=table;
    Event.preventDefault()
    
}

function cetak(){
    window.print()
}

