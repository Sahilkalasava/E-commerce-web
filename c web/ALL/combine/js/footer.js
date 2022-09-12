const createFooter = () => {
    let footer = document.querySelector( 'footer' );

    footer.innerHTML = `
        <div class="footer-content">
            <img src="img/dark-logo.png" class="logo" alt="" />
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">ELCTRONIC</li>
                    <li><a href="#" class="footer-link">LEPTOP</a></li>
                    <li><a href="#" class="footer-link">T.V</a></li>
                    <li><a href="#" class="footer-link">FRIDGE</a></li>
                    <li><a href="#" class="footer-link">A.C</a></li>
                    <li><a href="#" class="footer-link">MIXER</a></li>
                    <li><a href="#" class="footer-link">FAN</a></li>
                    <li><a href="#" class="footer-link">TOSTER</a></li>
                    <li><a href="#" class="footer-link">STOVES</a></li>
                    <li><a href="#" class="footer-link">IRON</a></li>
                    <li><a href="#" class="footer-link">CEMERA</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">MENS</li>
                    <li><a href="#" class="footer-link">SHIRTS</a></li>
                    <li><a href="#" class="footer-link">T-SHIRTS</a></li>
                    <li><a href="#" class="footer-link">JEANS</a></li>
                    <li><a href="#" class="footer-link">SPORTS</a></li>
                    <li><a href="#" class="footer-link">SHOES</a></li>
                    <li><a href="#" class="footer-link">FORMAL</a></li>
                    <li><a href="#" class="footer-link">CAUSAL</a></li>
                    <li><a href="#" class="footer-link">WATCH</a></li>
                    <li><a href="#" class="footer-link">CAPS</a></li>
                    <li><a href="#" class="footer-link">JECKET</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">WOMEN</li>
                    <li><a href="#" class="footer-link">SHIRTS</a></li>
                    <li><a href="#" class="footer-link">T-SHIRTS</a></li>
                    <li><a href="#" class="footer-link">JEANS</a></li>
                    <li><a href="#" class="footer-link">SPORTS</a></li>
                    <li><a href="#" class="footer-link">SHOES</a></li>
                    <li><a href="#" class="footer-link">FORMAL</a></li>
                    <li><a href="#" class="footer-link">CAUSAL</a></li>
                    <li><a href="#" class="footer-link">WATCH</a></li>
                    <li><a href="#" class="footer-link">DREES</a></li>
                    <li><a href="#" class="footer-link">SHARE</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">About Company</p>
        <p class="info">we provide the best products on cost efficint price at your door steps.</p>
        <p class="info">support emails - help@kalasava's.com, customersupport@kalasava's.com</p>
        <p class="info">telephone - 000 00 00 00, 000 00 00 000</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();