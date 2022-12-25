const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const menuItems = document.querySelector('.menu');
// console.log(menuItems);
// console.log(menu[0]['id']);
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let category = event.currentTarget.dataset.id;
    let items = filterMenuItemsByCategories(category);
    let nodes = convertItemsToNodes(items);
    let content = displayNodes(nodes);
    menuItems.innerHTML = content;
  });
});


function filterMenuItemsByCategories (category){
  let filterMuenItems = menu.filter((menuItem) => {
    if (category === 'all') {
      return menu;
    }
    if (menuItem.category === category){
      return menuItem;
    }
  });
  return filterMuenItems;

}

function convertItemsToNodes (menuFilteredItems) {
  let items = menuFilteredItems.map((menuItem) => {
    return `<article class="menu-item">
    <div class="menu-item-img"><img src="${menuItem["img"]}" class="img" alt=""></div>
    <div class="menu-item-body">
    <div class="menu-item-header">
        <h5 class="menu-item-title">${menuItem["title"]}</h5>
        <p class="menu-item-price">$${menuItem["price"]}</p>
    </div>
    <p class="menu-item-desc">
    ${menuItem["desc"]}
    </p>
    </div>
  </article>`
  });

  return items
}


function displayNodes (Nodes) {
  let htmlSyntax = ``;
  Nodes.forEach((Node) => {
    htmlSyntax += Node
  });
  return htmlSyntax;
}

let content = ``;
window.addEventListener("DOMContentLoaded", () => {
  let allItems = filterMenuItemsByCategories('all');
  let items = convertItemsToNodes(allItems);
 
  content = displayNodes(items);
  menuItems.innerHTML = content;
})
