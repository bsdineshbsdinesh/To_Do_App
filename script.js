// Short Code
// let myForm = document.getElementById("myForm");
// let myInput = document.getElementById("myInput");
// let myList = document.getElementById("myList");

// myForm.addEventListener("submit",
//     (data) => {
//         data.preventDefault();
//         // console.log(myInput.value)
//         var myTemplate = ` <li>${myInput.value}                                   <button>Delete</button></li>`;
//         myList.insertAdjacentHTML("beforeend", myTemplate);
// myInput.value = "";
// myInput.focus();
//     });


// Long Code
let myForm = document.getElementById("myForm");
let myInput = document.getElementById("myInput");
// objectname.addEventListener("What Type of Evenet" , "What Event (function or arrow function or function name or arrow function name)");
// myForm.addEventListener("click" , () => console.log("Hi"));
myForm.addEventListener("submit",
    (data) => {
        // This Method is used to stop the next page navigation
        data.preventDefault();
        // console.log(myInput.value);
        // This Function call is Used To Insert the input value dynamically
        createItem(myInput.value);
        // myList.insertAdjacentHTML("beforeend" , myInput.value);
    });

createItem = (input_value) => {
    let myTemplate = `<li>${input_value}<button onclick="deleteItem(this)">Delete</button></li>`;
    // myList.insertAdjacentHTML("beforeend" , myInput.value);
    // This Function is Used To Insert the input value dynamically
    // myList.insertAdjacentHTML("position" , values)
    //  myList.insertAdjacentHTML("beforeend" , input_value);
    myList.insertAdjacentHTML("beforeend", myTemplate + "<br>");

    myInput.value = "";
    myInput.focus();
};

function deleteItem(deleteData) {
    // console.log("Delete Item");
    deleteData.parentElement.remove();
}
