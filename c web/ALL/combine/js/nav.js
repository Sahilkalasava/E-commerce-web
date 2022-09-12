 const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML= 
    
  `
   <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt=""/>
            <h2 class="companyname">Seashore</h2>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search"/>
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/cart.png" alt=""/></a>
                <a href="#"><img src="img/user logo.png" alt=""/></a>
            </div>
        </div>
      <section>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Cloths</a></li>
            <li class="link-item"><a href="#" class="link">Electronic</a></li>
            <li class="link-item"><a href="#" class="link">Shoes</a></li>
            <li class="link-item"><a href="#" class="link">Watches</a></li>
            <li class="link-item"><a href="#" class="link">Toys</a></li>
            <li class="link-item"><a href="#" class="link">Other Product</a></li>
        </ul>
    </section>
    
    `
    ;
}

createNav();