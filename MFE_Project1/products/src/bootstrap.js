import faker from 'faker';


// # Context/Situation1
//     Ruuning file in development isolaton
//     we use local index.html
//     which definetly have element with required id
//     we want immediatly render app into that id
 

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();

        products += `<div>${name}</div>`

        el.innerHTML = products

    }
}


// # Context/Situation2
//     we are running file in dev and prod
//     through container app
//     No gurrenty that an element with id present into index.html of comtainer
//     We do not want to try immediatly render app  

if(process.env.NODE_ENV == 'development') {
    const el = document.querySelector('#dev-products')

    if(el) {
        mount(el)
    }
}

export {mount}
