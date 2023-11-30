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

    axios.post('https://crudcrud.com/Dashboard/42ee6bc1b1ea42d5b07fe19d75808257/storeData',obj)
    .then(res=>{
        showUserOnScreen(res.data);
    })
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML+"<h4>Something went wrong</h4>"
    })
   

}
//show data after refereshing the page
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/Dashboard/78b3a264b7634d25a1dcfb268f5ce9dd/GeneralStoreData')
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
       obj.quantity = obj.quantity-1;
       childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity;
       childElement.appendChild(btn1);
       childElement.appendChild(btn2);
       childElement.appendChild(btn3); 
    
    }

    btn2.onclick = ()=>{
      obj.quantity = obj.quantity-2;
       childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity;
       childElement.appendChild(btn1);
       childElement.appendChild(btn2);
       childElement.appendChild(btn3); 
    }

    btn3.onclick=()=>{
       obj.quantity = obj.quantity-3;
        childElement.textContent = obj.itemName + "-" + obj.desc +"-"+ obj.price+ "-" + obj.quantity;
        childElement.appendChild(btn1);
        childElement.appendChild(btn2);
        childElement.appendChild(btn3);
    }

    //appned btn to childElement
    childElement.appendChild(btn1);
    childElement.appendChild(btn2);
    childElement.appendChild(btn3);

  

   //Append li to ul
  parentElement.appendChild(childElement)

  
}

