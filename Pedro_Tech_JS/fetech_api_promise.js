function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // or .text() / .blob() etc.
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
}
  
// Usage
fetchData('https://jsonplaceholder.typicode.com/posts/1')
.then((data) => {
    console.log("Fetched Data:", data);
})
.catch((error) => {
    console.error("Error fetching data:", error);
});