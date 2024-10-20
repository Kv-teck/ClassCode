function FooterComponent(){
    return `
        ket thuc
    `;
    
}
const footerElement = document.getElementsByTagName('FooterComponent'); //arry
for(let item of footerElement){
    item.innerHTML = (FooterComponent());
}