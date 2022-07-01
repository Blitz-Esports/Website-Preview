const contact_form_submit = () => {
   // window.alert("Your contact form has been submitted, we will get back to you soon!");

   // get form data
    const data = new FormData(document.getElementById("contact-form"));
   
    window.alert(JSON.stringify(data));

};