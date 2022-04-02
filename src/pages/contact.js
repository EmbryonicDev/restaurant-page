import { elFactory } from "./menu";

export const addContactContent = () => {
  const content = document.getElementById('content');

  // add contact content to DOM
  (() => {
    const inputPattern = 'pattern="^(?![\s.]+$)[0-9a-zA-Z\s.]*$"';
    const contentDiv = elFactory('div', { id: "contactContent" }, content);
    elFactory('h1', '', contentDiv, 'Contact us');
    elFactory('p', '', contentDiv, "Fill in the form below or call us on 518-783-7239 to get in touch. We would be happy to answer your questions & assist you in any way we can.");
    elFactory('form', { action: '#' }, contentDiv,
      elFactory('p', "", '',
        elFactory('label', { for: 'name', class: 'required' }, '', "Name: "),
        elFactory('input', { inputPattern, required: true,  id: 'name', maxlength: '24' }, '')
      ),
      elFactory('p', "", '',
        elFactory('label', { for: 'email', class: 'required' }, '', "Email: "),
        elFactory('input', { inputPattern, required: true,  id: 'email', type: 'email' }, '')
      ),
      elFactory('p', "", '',
        elFactory('label', { for: 'subject', class: 'required' }, '', "Subject: "),
        elFactory('input', { inputPattern, required: true,  id: 'subject', maxlength: '32' }, '')
      ),
      elFactory('p', "", '',
        elFactory('label', { for: 'messageArea', class: 'required' }, '', "Message: "),
        elFactory('textarea', { inputPattern, id: 'messageArea', cols: "30", rows: "10", placeHolder: 'Type your message here...' }, '')
      ),
      elFactory('button', {type: 'submit'}, '', 'Submit')
    )
  })();
}

const contact = () => {
  addContactContent();
};