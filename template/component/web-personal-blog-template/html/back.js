function BackComponent(){
    return`
    <a href="#" class="back-to-top"><i class="fa fa-angle-double-up"></i></a>
    `;
}
var back = document.getElementsByTagName('BackComponent');
for(let spin of back){
    spin.innerHTML = BackComponent();
}