function FooterComponent(){
    return`
            <div class="container py-4 bg-secondary text-center">
                <p class="m-0 text-white">
                    &copy; <a class="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved.
                    Designed by <a class="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
                </p>
            </div>
    `;
}
var footer = document.getElementsByTagName('FooterComponent');
for(let spin of footer){
    spin.innerHTML = FooterComponent();
}