function saveToCrud(event){
    event.preventDefault();

    var itemName = event.target.itemName.value;
    var desc = event.target.desc.value;
    var price =event.target.price.value;
    var quantity = event.target.quantity.value;

    let obj ={
        itemName,
        desc,
        price,
        quantity
    }

    axios.post('https://crudcrud.com/api/c75110496e134a3c8b37ee7edfe7b971/data',obj)
    .then(res=>{
        showUserOnScreen(res.data);
    })
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML+"<h4>Something went wrong</h4>"
    })
   console.log('his');

}
//show data after refereshing the page
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/c75110496e134a3c8b37ee7edfe7b971/data')
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
            showUserOnScreen(res.data[i]);
        }
    })
    .catch(err=>console.log(err))
})


function showUserOnScreen(obj){
    const parentElement = document.getElementById('listOfItems');
    const childElement = document.createElement('li');

//     //Add text to li
      childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity; 

    //create buy button
    var btn1 = document.createElement('button');
    btn1.textContent='buy1';
    var btn2 = document.createElement('button')
    btn2.textContent='buy2';
    var btn3 = document.createElement('button')
    btn3.textContent='buy3';



    btn1.onclick=()=>{
    //     const id = obj._id;
    //    obj.quantity = obj.quantity-1;
    //    childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price + "-" + obj.quantity;
    //    childElement.appendChild(btn1);
    //    childElement.appendChild(btn2);
    //    childElement.appendChild(btn3); 
    const id = obj._id;
    obj.quantity=obj.quantity-1;
    updateQuantity(id, obj.quantity);
    
    }

    btn2.onclick = ()=>{
    //   obj.quantity = obj.quantity-2;
    //    childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity;
    //    childElement.appendChild(btn1);
    //    childElement.appendChild(btn2);
    //    childElement.appendChild(btn3); 
    const id = obj._id;
    obj.quantity=obj.quantity-2;
    updateQuantity(id, obj.quantity);
    }

    btn3.onclick=()=>{
    //    obj.quantity = obj.quantity-3;
    //     childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity;
    //     childElement.appendChild(btn1);
    //     childElement.appendChild(btn2);
    //     childElement.appendChild(btn3);
    const id = obj._id;
    obj.quantity=obj.quantity-3;
    updateQuantity(id, obj.quantity);
    }

//     //appned btn to childElement
    childElement.appendChild(btn1);
    childElement.appendChild(btn2);
    childElement.appendChild(btn3);

  //hii

   //Append li to ul
  parentElement.appendChild(childElement)

  
}
function updateQuantity(itemId, quantityToBuy) {
    // Make a PUT request to update the quantity
    axios.put(`https://crudcrud.com/api/c75110496e134a3c8b37ee7edfe7b971/data/${itemId}`, {
      quantity: quantityToBuy
    })
    .then(response => {
      // Update the displayed information on the page
      obj.quantity = response.data.quantity;
      showUserOnScreen();
    })
    .catch(error => {
      console.error('Error updating quantity:', error);
    });
  }


  
