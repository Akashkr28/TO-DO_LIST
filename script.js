const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
            alert("Please enter a task!");
        }
        else{
            let li = document.createElement("li");          // Create <li>
            li.innerHTML = inputBox.value;                  // Set text of <li> to input
            listContainer.appendChild(li);                  // Append <li> to <ul> with id="list-container"
            let span = document.createElement("span");      // create <span> element
            span.innerHTML = "\u00d7";                      // set the text inside of <span>
            li.appendChild(span);                           // append <span> to <li>
    }
    inputBox.value = "";                                     // Clear the box for next entry
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");       // Change class of clicked item to 'checked' or remove it
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();