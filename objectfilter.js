const buttonFilter = document.querySelectorAll('.buttonFilter')

buttonFilter.forEach(boton => {
    boton.addEventListener("click", (e) =>{
    
    if(e.currentTarget.id !="All"){
        const chossenProducts = stockProducts.filter(stockProducts => stockProducts.category.id === e.currentTarget.id);
        loadProducts(chossenProducts);
    }else {
        loadProducts(stockProducts);
    }
    })
});





