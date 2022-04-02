import { elFactory } from "./menu";

export const addContactContent = () => {
  const content = document.getElementById('content');

  (() => {
    const contentDiv = elFactory('div', { id: "menuContent" }, content);
    elFactory('h1', '', contentDiv, 'Contact us');
    elFactory('p', '', contentDiv, "Fill in the form below or call us on 518-783-7239 to get in touch. We would be happy to answer your questions & assist you in any way we can.");
    elFactory('form', { action: '#' }, contentDiv,
      elFactory('p', "", '',
        elFactory('label', { for: 'name' }, '', "Name: "),
        elFactory('input', { id: 'name', maxlength: '24' }, '')
      ),
      elFactory('p', "", '',
        elFactory('label', { for: 'email' }, '', "Email: "),
        elFactory('input', { id: 'email', type: 'email' }, '')
      ),
      elFactory('p', "", '',
        elFactory('label', { for: 'subject' }, '', "Subject: "),
        elFactory('input', { id: 'subject', maxlength: '32' }, '')
      ),
      elFactory('p', "", '',
        elFactory('label', { for: 'messageArea' }, '', "Message: "),
        elFactory('textarea', { id: 'messageArea', cols: "30", rows: "10", placeHolder: 'Type your message here...' }, '')
      ),
      elFactory('button', {type: 'submit'}, '', 'Submit')
    )
  })();
}

const contact = () => {
  addContactContent();
};