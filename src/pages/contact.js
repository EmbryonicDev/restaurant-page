import { elFactory } from "../functions/globalFuntions";

export const addContactContent = () => {
  const content = document.getElementById('content');

  // add contact content to DOM
  const contentDiv = elFactory('div', { id: "contactContent" }, content);
  (() => {
    const inputPattern = 'pattern="^(?![\s.]+$)[0-9a-zA-Z\s.]*$"';
    elFactory('h1', '', contentDiv, 'Contact us');
    elFactory('p', '', contentDiv, "Fill in the form below or call us on ",
      elFactory('span', '', '', '518-783-7239'),
      "  to get in touch. We would be happy to answer your questions and assist you in any way we can.");
    elFactory('form', { action: '#', id: "form" }, contentDiv,
      elFactory('p', "", '',
        elFactory('label', { for: 'name', class: 'required' }, '', "Name: "),
        elFactory('input', { inputPattern, required: true, id: 'name', maxlength: '24' }, '')
      ),
      elFactory('p', "", '',
        elFactory('label', { for: 'email', class: 'required' }, '', "Email: "),
        elFactory('input', { inputPattern, required: true, id: 'email', type: 'email' }, '')
      ),
      elFactory('p', "", '',
        elFactory('label', { for: 'subject', class: 'required' }, '', "Subject: "),
        elFactory('input', { inputPattern, required: true, id: 'subject', maxlength: '32' }, '')
      ),
      elFactory('p', "", '',
        elFactory('label', { for: 'messageArea', class: 'required' }, '', "Message: "),
        elFactory('textarea', { inputPattern, id: 'messageArea', cols: "30", rows: "10", placeHolder: 'Type your message here...' }, '')
      ),
      elFactory('button', { type: 'submit' }, '', 'Submit')
    )
  })();

  // get data from form inputs
  (() => {
    let name = '';
    let email = '';
    let subject = '';
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault;
      name = form.name.value;
      email = form.email.value;
      subject = form.subject.value;
      displayMessage();
    });

    const displayMessage = () => {
      // clear form except for H1
      const contactHeading = document.querySelector('#contactContent h1');
      while (contactContent.children.length > 1) {
        contactContent.removeChild(contactContent.lastChild);
      }
      // modify H1 & add new paragraph with <span>'s
      contactHeading.innerText = `Thank you for contacting us `;
      elFactory('span', '', contactHeading, name + "!");
      elFactory('p', {style: 'padding-bottom: 60px'}, contentDiv, 'We have received your message with subject: ',
        elFactory('span', '', '', '"' + subject + '"'),
        ' and will respond via ',
        elFactory('span', '', '', email),
        ' within 24 hours.'
      )
    }
  })();
};

const contact = () => {
  addContactContent();
};