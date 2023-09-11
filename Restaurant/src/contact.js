import { generateBanner } from "./homecontent";
export {generateContact as default};

function generateContact(){
    let contact = document.createElement('div');
    contact.id = "Contact";

    contact.appendChild(generateBanner());

    let contactUs = document.createElement('div');
    
    let contactHead = document.createElement('div');
    contactHead.classList.add("contactHead");
    contactHead.innerHTML = "Questions? Comments? Hit us up!";

    let contactBody = document.createElement('div');
    
    let faxNumber = document.createElement('div');
    faxNumber.innerHTML = "Fax: (541)476-6751";

    let pagerNumber = document.createElement('div');
    pagerNumber.innerHTML = "Beeper: (541)955-7295";
    
    let mailAddress = document.createElement('div');
    mailAddress.innerHTML = "Snail mail: 4595 Wharf Ave, Grants Pass, OR 97527";

    contactBody.appendChild(faxNumber);
    contactBody.appendChild(pagerNumber);
    contactBody.appendChild(mailAddress);

    contactUs.appendChild(contactHead);
    contactUs.appendChild(contactBody);

    
    contact.appendChild(contactUs);

    return contact;
}