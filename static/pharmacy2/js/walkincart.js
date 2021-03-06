var updateBtns = document.getElementsByClassName('update-cart-walkin')

for(i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        
        console.log('USER:', user)
        if(user == 'AnonymousUser'){
            console.log('user not auth')
        }else{
            updateUserOrder(productId,action)
        }
    
    })
}

function updateUserOrder(productId,action){
    

    var url='/pharmacy/update_item_walkin/'

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId':productId,'action':action})
    })

    .then((response) => {
        return response.json();
    })

    .then((data)=>{
        
        location.reload()
    });
}








var updateBtns = document.getElementsByClassName('update-cart-walkin-pathology')

for(i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        
        console.log('USER:', user)
        if(user == 'AnonymousUser'){
            console.log('user not auth')
        }else{
            updateUserOrderpath(productId,action)
        }
    
    })
}

function updateUserOrderpath(productId,action){
    

    var url='/pathology/update_item_walkin/'

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId':productId,'action':action})
    })

    .then((response) => {
        return response.json();
    })

    .then((data)=>{
        
        location.reload()
    });
}
