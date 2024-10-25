function SidenarComponent(){
    return `
        <SidenarComponent class="col-3">
        xin chao
        </SidenarComponent>
    `;
    
}
const sidenarElement = document.getElementsByTagName('SidenarComponent'); //arry
for(let item of sidenarElement){
    item.innerHTML = (SidenarComponent());
}