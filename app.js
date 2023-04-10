
let id = document.getElementById("bits_id")
let button = document.getElementById("Go_Bt")
let cell = document.getElementsByTagName("td")
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
button.addEventListener('click',SearchHandler)