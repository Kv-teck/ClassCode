function InformationComponent(){
    return `
        <div class="contact-info">
            <div class="info-item">
                <span class="icon">&#x1F4CD;</span>
                <p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div class="info-item">
                <span class="icon">&#x260E;</span>
                <p>Phone: + 1235 2355 98</p>
            </div>
            <div class="info-item">
                <span class="icon">&#x2709;</span>
                <p>Email: info@yoursite.com</p>
            </div>
            <div class="info-item">
                <span class="icon">&#x1F4E7;</span>
                <p>Website: yoursite.com</p>
            </div>
        </div>
    `;
    
}
const headerElement = document.getElementsByTagName('InformationComponent'); //arry
for(let item of headerElement){
    item.innerHTML = (InformationComponent());
}