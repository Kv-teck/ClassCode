function HeaderComponent(){
    return `
        <div class = "container">
            <h1>Header component</h1>
        </div>
    `;
    
}
const headerElement = document.getElementsByTagName('HeaderComponent'); //arry
for(let item of headerElement){
    item.innerHTML = (HeaderComponent());
}