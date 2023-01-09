
var itemList = document.getElementById('items');
// Delete Event
itemList.addEventListener('click', removeItem)
// remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

