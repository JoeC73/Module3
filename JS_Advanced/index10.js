// // import fetch from "node-fetch";
// // globalThis.fetch = fetch;
//  function fetchURLData(url) {
//   let fetchPromise = fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   });
//   return fetchPromise;
// }
// fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

// a) Write a new version of this function using async/await

const fetchURLData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!response.ok) {
    throw new Error("user data not found...");
  }

  const data = await response.json();

  console.log(data);
};

fetchURLData();
