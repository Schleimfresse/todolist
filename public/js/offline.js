let title = document.querySelector("#status");
let icon = document.getElementById('box-connection-status-icon')
let internet_status_icon = document.querySelector("#internet_status_icon");
let check_conn_btn = document.querySelector("#check_conn_btn");

window.addEventListener("load", ()=>{
    if(window.navigator.onLine==true){
        SetOnline();
    }else{
        SetOffline();
    }
});

window.addEventListener("online", ()=>{
    SetOnline();
});

window.addEventListener("offline", ()=>{
    SetOffline();
});

function SetOnline(){
    title.innerHTML = "Status: Online";
    internet_status_icon.innerHTML = '<ion-icon class="icon-size-right" name="cloud-done-outline"></ion-icon>'
    icon.innerHTML = "<i class='bx bx-wifi' ></i>"
    icon.style.backgroundColor = '#00b300'
}

function SetOffline(){
    title.innerHTML = "Status: Offline";
    internet_status_icon.innerHTML = '<ion-icon class="icon-size-right" name="cloud-offline-outline"></ion-icon>'
    icon.innerHTML = "<i class='bx bx-wifi-off' ></i>"
    icon.style.backgroundColor = '#b61e1e'
}

check_conn_btn.addEventListener("click", ()=>{
    if(window.navigator.onLine==true){
        SetOnline();
    }else{
        SetOffline();
    }
});