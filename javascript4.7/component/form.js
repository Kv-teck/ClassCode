function ContactFormComponent(){
    return `
            <div class="form-left">
                <h2>Contact Us</h2>
                <form>
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Name">

                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Email">

                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject">

                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Message"></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
    `;
    
}
const formElement = document.getElementsByTagName('ContactFormComponent'); //arry
for(let item of formElement){
    item.innerHTML = (ContactFormComponent());
}