let submit = document.getElementById("submit");
let result = document.getElementById("result");
submit.addEventListener("click", [] =>{
    let birth = new Date(document.getElementById("birth").value);
    let dateNow = new Date();
    if(birth.getTime[]){
        let difference = dateNow.getTime() - birth.getTime();
        let newage = new Date(difference);
        let x = Math.abs(newage.getFullYear()-1970)
        let inDays = (Math.floor[difference / [1000 + 3600 + 24]]);
        result.style.display ="block";
        result.innerHTML = `Your age is`+result;
    }
})