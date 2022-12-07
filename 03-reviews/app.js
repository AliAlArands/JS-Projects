const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];



// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');

const btns = document.querySelectorAll('.btn');

// const leftArrow = document.getElementById('left');
// const rightArrow = document.getElementById('right');

// console.log(leftArrow, rightArrow);

// console.log(btns);

let img = document.getElementById('person-img');
let person = document.getElementById('person');
let job = document.getElementById('job');
let desc = document.getElementById('who-am-i');


let number = 0;
window.addEventListener('DOMContentLoaded', () => {
  displayReview(number);
})

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.id === 'left') {
      console.log(number);
      if (number <= 0 ) {
        number = 3;
        displayReview(number);
      }
      else {
        displayReview(--number);
        // console.log(number);
      }
    }

    if (btn.id === 'right') {
      console.log(number);
      if (number >= reviews.length - 1) {
        number = 0;
        displayReview(number);
      }
      else {
        displayReview(++number);
      }
    }
  })
})

// leftArrow.addEventListener("click", function() {  
//   if (number =< 0 ) {
//     number = 3;
//     displayReview(number);
//   }
//   else {
//     displayReview(--number);
//   }
// } );

// rightArrow.addEventListener('click', () => {
//   if (number > 3) {
//     number = 0;
//     displayReview(number);
//   }
//   else {
//     displayReview(++number);
//   }
// });


function displayReview (number) {
  person.textContent = reviews[number]['name'];
  job.textContent = reviews[number]['job'];
  desc.textContent = reviews[number]['text'];
  img.setAttribute('src',reviews[number]['img'])
};