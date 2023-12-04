function saveToCrud(event){
  event.preventDefault();

  var itemName = event.target.itemName.value;
  var desc = event.target.desc.value;
  var price =event.target.price.value;
  var quantity = event.target.quantity.value;

  const obj ={
      itemName,
      desc,
      price,
      quantity
  }

  axios.post('https://crudcrud.com/api/c73eda41b0b943fc81c39097b9910364/UserData',obj)
  .then(res=>{
      showUserOnScreen(res.data);
  })
  .catch(err=>{
      document.body.innerHTML = document.body.innerHTML+"<h4>Something went wrong</h4>"
  })


}
//show data after refereshing the page
window.addEventListener('DOMContentLoaded',()=>{
  axios.get('https://crudcrud.com/api/c73eda41b0b943fc81c39097b9910364/UserData')
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

  //Add text to li
childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity; 

  //create buy button
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  const btn3 = document.createElement('button');


  btn1.textContent ='buy1'
  btn2.textContent='buy2'
  btn3.textContent ='buy3'

  btn1.onclick=()=>{
     const id =obj._id;
     const updatedValues={
      itemName:obj.itemName,
      desc:obj.desc,
      price:obj.price,
      quantity:obj.quantity-1
     }
     console.log(updatedValues);
     axios.put(`https://crudcrud.com/api/c73eda41b0b943fc81c39097b9910364/UserData/${id}`,updatedValues)
     .then(()=>{
      obj.quantity=obj.quantity-1;
      childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity;
      childElement.appendChild(btn1);
      childElement.appendChild(btn2);
      childElement.appendChild(btn3); 
     })
     .catch(err=>console.log(err))
   

  }

  btn2.onclick = ()=>{
    const id =obj._id;
    const updatedValues={
     itemName:obj.itemName,
     desc:obj.desc,
     price:obj.price,
     quantity:obj.quantity-2
    }
    console.log(updatedValues);
    axios.put(`https://crudcrud.com/api/c73eda41b0b943fc81c39097b9910364/UserData/${id}`,updatedValues)
    .then(()=>{
     obj.quantity=obj.quantity-2;
     childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity;
     childElement.appendChild(btn1);
     childElement.appendChild(btn2);
     childElement.appendChild(btn3); 
    })
    .catch(err=>console.log(err))
  }

  btn3.onclick=()=>{
    const id =obj._id;
     const updatedValues={
      itemName:obj.itemName,
      desc:obj.desc,
      price:obj.price,
      quantity:obj.quantity-3
     }
     console.log(updatedValues);
     axios.put(`https://crudcrud.com/api/c73eda41b0b943fc81c39097b9910364/UserData/${id}`,updatedValues)
     .then(()=>{
      obj.quantity=obj.quantity-3;
      childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity;
      childElement.appendChild(btn1);
      childElement.appendChild(btn2);
      childElement.appendChild(btn3); 
     })
     .catch(err=>console.log(err))
  }

  //appned btn to childElement
  childElement.appendChild(btn1);
  childElement.appendChild(btn2);
  childElement.appendChild(btn3);



 //Append li to ul
parentElement.appendChild(childElement)


}
