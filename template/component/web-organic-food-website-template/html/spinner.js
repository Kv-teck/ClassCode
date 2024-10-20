function SpinnerComponent(){
    return`
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status"></div>
    </div>
    `;
}
var spinners = document.getElementsByTagName('SpinnerComponent');
for(let spin of spinners){
    spin.innerHTML = SpinnerComponent();
}