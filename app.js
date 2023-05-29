
let id = document.getElementById("bits_id")
let body = document.getElementById("background")
let button = document.getElementById("Go_Bt")
let cell = document.getElementsByTagName("td")
let toogle = document.getElementById("DarkModei")
let titlebar = document.getElementById("title_b")
let tab = document.getElementById("main_table")
let th = document.getElementsByTagName("th")
let td = document.getElementsByClassName("class_box")
let title_heading = document.getElementById("title_heading");
let img_c = document.getElementById('img_change');
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
function SearchHandler() {
    var tt = []
    id_no = id.value
    fetch('https://raw.githubusercontent.com/tanish111/BPGC-Time-Table/main/final_data.json')
.then(results => results.json())
.then(responseJSON => {
    for(let i = 0;i<996;i++){
    if(responseJSON.time_table[i].ID == id.value){
        tt.push(responseJSON.time_table[i].M)
        tt.push(responseJSON.time_table[i].T)
        tt.push(responseJSON.time_table[i].W)
        tt.push(responseJSON.time_table[i].TH)
        tt.push(responseJSON.time_table[i].F)
        tt.push(responseJSON.time_table[i].S)
        for (let j = 0;j<6;j++){
            let period = tt[j].split(",");
            for(let k = 0;k<10;k++){
                if(period[k+1].substr(2) != "'"){
                cell[j+k*6].innerHTML = '<button class="class_box">'+toTitleCase(period[k+1].substr(2,(period[k+1].length-3)))+'</button>'
            }else{
              cell[j+k*6].innerHTML = ''
            }
            }
        }
    }
}
}).catch(error => console.error(error));
console.log(tt,id_no)
}
button.addEventListener("click",SearchHandler)
toogle.addEventListener("change",function(){
  if(this.checked){
    id.style.backgroundColor = "white";
    id.style.color = "black";
    body.style.backgroundColor = "black";
    tab.style.border = "2px solid white";
    Array.from(th).forEach(function (element) {
      element.style.border = "2px solid white";
      element.style.color = 'white';
  });
  Array.from(td).forEach(function (element) {
    element.style.backgroundColor = "rgba(146, 154, 171, .3)";
    element.style.color = 'white';
});
title_heading.style.color = 'white';
img_c.src = 'assets/moon.svg';
img_c.style.left = '60px';
  }else {
    id.style.backgroundColor = "#E6EEFD";
    id.style.color = "black";
    body.style.backgroundColor = "white"
    tab.style.border = "2px solid black";
    Array.from(th).forEach(function (element) {
      element.style.border = "2px solid black";
      element.style.color = 'black';
  });
  Array.from(td).forEach(function (element) {
    element.style.backgroundColor = "rgba(0, 0, 0, .3)";
    element.style.color = 'black';
});
title_heading.style.color = 'black';
img_c.src = 'assets/sun.svg';
img_c.style.left = '8px';
  }
})