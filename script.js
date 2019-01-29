//Get Input element
let filterInput = document.getElementById('filterInput');
//Add event listener
filterInput.addEventListener('keyup', filterNames); 
//"keyupp" is a type of event.

function filterNames(){
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    //get names ul
    let ul = document.getElementById('names');
    //Get li from ul
    let li = ul.querySelectorAll('li.collection-item');
    //querySelectoryall() can select anything 

    //loop through collection-item lis
    for(let i = 0;i < li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none;'
        }
    }
}