import faker from 'faker';


const mount = (el) => {
  const cartText = `<div>
    <span>You have ${faker.random.number()} items in your cart</span>
    <a target="_blank" href="http://${window.location.hostname}:8082/">Go to Micro-frontend app 2</a> 
  </div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');

  if (el) {
    mount(el);
  }
}

export { mount };
