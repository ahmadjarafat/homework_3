const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here

// header //
const navigation = document.getElementsByTagName("nav");
const link_new_1 = document.createElement("a");
const link_new_2 = document.createElement("a");
const text_1 = document.createTextNode("Ahmad");
const text_2 = document.createTextNode("Arafat");
link_new_1.appendChild(text_1);
link_new_2.appendChild(text_2);
navigation[0].appendChild(link_new_1);
navigation[0].appendChild(link_new_2);
const header = document.querySelectorAll("a");
for (let i = 0;i < header.length -2; i++)
{
  header[i].textContent = siteContent.nav['nav-item-' + i];
  header[i].style.color = "#339900";
}
document.getElementById("logo-img").src = "img/logo.png";

 // cta //

const headOneText = document.getElementsByTagName("h1");
headOneText[0].textContent = 'DOM Is Awesome';
const buttonText = document.getElementsByTagName('button');
buttonText[0].textContent = "Get Started";


document.getElementById("cta-img").src = "img/header-img.png";

//main content//

const text_Content_h4 = document.querySelectorAll(".text-content h4");
const text_Content_p = document.querySelectorAll(".text-content p");
const text_Content_img = document.querySelectorAll("img");
const mainContent = siteContent["main-content"];
const array = Object.keys(siteContent["main-content"]);
let count_h4 = 0;
let count_p = 0;

for (let j = 0;j < array.length; j++)
{
  if (j === 4)
  {
    text_Content_img[2].src = mainContent[array[j]];
  } else if(array[j].split("-")[1] === "h4") {

    text_Content_h4[count_h4].textContent = mainContent[array[j]];
    count_h4++;
} else 
{
  text_Content_p[count_p].textContent = mainContent[array[j]];
  count_p++;
}

}

// Contact //

 const contact_p = document.querySelectorAll(".contact p");
 const contact_h4 = document.querySelectorAll(".contact h4");
 contact_h4[0].textContent = siteContent.contact['contact-h4'];
 contact_p[0].textContent = siteContent.contact.address;
 contact_p[1].textContent = siteContent.contact.phone;
 contact_p[2].textContent = siteContent.contact.email;

 // footer //

 document.querySelector("footer > p").textContent = 'Copyright Great Idea! 2020';









   





 

 
 
