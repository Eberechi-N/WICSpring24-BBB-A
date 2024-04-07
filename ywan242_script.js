// //Saving responses
// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Collect user responses
//     const skinType = document.getElementById('skinType').value;
//     // Collect other responses as needed

//     // Save responses to local storage
//     const responses = { skinType /* Add other responses here */ };
//     localStorage.setItem('skincareResponses', JSON.stringify(responses));

//     // Redirect to the product page
//     window.location.href = 'products.html';
// });

// // products.js
// document.addEventListener('DOMContentLoaded', function() {
//     // Retrieve saved responses from local storage
//     const savedResponses = JSON.parse(localStorage.getItem('skincareResponses'));

//     // Use the saved responses to determine recommended products
//     const recommendedProducts = getRecommendedProducts(savedResponses);

//     // Display recommended products
//     const productList = document.getElementById('recommendedProducts');
//     recommendedProducts.forEach(product => {
//         const listItem = document.createElement('li');
//         listItem.textContent = product.name; // Example: Display product name
//         productList.appendChild(listItem);
//     });
// });

// // Function to determine recommended products based on user responses
// function getRecommendedProducts(responses) {
//     // Implement logic to determine recommended products based on user responses
//     // You can hard-code the logic for now, but eventually, this should be fetched from the server
//     const skinType = responses.skinType;
//     let recommendedProducts = [];

//     // Example logic:
//     if (skinType === 'normal') {
//         recommendedProducts = [
//             { name: 'Product A' },
//             { name: 'Product B' },
//             // Add more products as needed
//         ];
//     } else if (skinType === 'oily') {
//         recommendedProducts = [
//             { name: 'Product C' },
//             { name: 'Product D' },
//             // Add more products as needed
//         ];
//     } else if (skinType === 'dry') {
//         recommendedProducts = [
//             { name: 'Product E' },
//             { name: 'Product F' },
//             // Add more products as needed
//         ];
//     }

//     return recommendedProducts;
// }













// let questionText = document.getElementById('cd-questions');
// let optiontext = document.querySelectorAll('.optiontext');
// let options = document.querySelectorAll('.options');
// let nextBtn = document.getElementById('next-btn');
// let currentQuestion = 0;
// var score = 0;
// var checkedStatus = false;


// setQuestion(currentQuestion); // set default question




// nextBtn.addEventListener('click', e => {
//   e.preventDefault();
//   if (valForm()) setQuestion(currentQuestion); //validates and next question
// });



// function setQuestion(currentQuestion) {
//   questionText.innerText = questionss[currentQuestion].question; //set current question to the DOM

//   for (let i = 0; i < 3; i++) {
//     options[i].value = questionss[currentQuestion].options[i]; //set options  value for current question

//     optiontext[i].innerText = questionss[currentQuestion].options[i]; //set options for current question

//   }
// }



// function valForm() {
//   for (let i = 0; i < 3; i++) {
//     if (options[i].checked) {
//       let userans = options[i].value;
//       if (questionss[currentQuestion].correctAnswers == userans) {
//         score++;
//       }

//       options[i].checked = false;
//       if (currentQuestion < questionss.length - 1) {

//         currentQuestion++;
//         if (currentQuestion == questionss.length - 1) {
//           nextBtn.innerText = 'Submit';
//         }
//       } else {
//         alert('Your total score is ' + score);
//         currentQuestion = 0;
//         nextBtn.innerText = 'Start';
//       }
//       return true;
//     }
//   }



//   if (checkedStatus == false) {
//     alert('please choose an answer');
//     setQuestion(currentQuestion);
//   }

//   return false;
// }