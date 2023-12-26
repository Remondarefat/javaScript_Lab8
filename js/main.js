
var allItems ;
async function getItems(){
    //? fetch by default used Get Method ----
    var apiResponse= await fetch(`https://reqres.in/api/users?page=2`)
    allItems = (await apiResponse.json()).data; 
    displayItems();
};
getItems();


//? fuction to display items
function displayItems(){
    var cartona="";
    for (var i=0 ; i<allItems.length;i++){
        cartona+=`
        <div class="col-md-3">
        <div class="item">
        <img class="w-100" src="${allItems[i].avatar}"/>
            <h4>${allItems[i].email}</h4>
        </div>
        </div>`
    }
    document.getElementById('rowData').innerHTML=cartona;
}
