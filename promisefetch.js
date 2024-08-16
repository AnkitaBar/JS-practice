
// Write two functions stepOne and stepTwo that return Promises. stepOne should resolve with "Step One Complete" after 1 second, and stepTwo should resolve with "Step Two Complete" after another second. Chain these functions so that stepTwo runs after stepOne completes.

// Modify the fetchData function so that it sometimes rejects with an error message "Error fetching data!". Use a random boolean to decide whether to resolve or reject.

// function stepOne() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Step One Complete");
//         }, 1000);
//     });
// }

// function stepTwo() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Step Two Complete");
//         }, 1000);
//     });
// }

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         const success = Math.random() >= 0.5; 
//         setTimeout(() => {
//             if (success) {
//                 resolve("Data fetched successfully!");
//                 console.log(success);
//             } else {
//                 reject("Error fetching data!");
//                 console.log(success);
//             }
//         }, 1000);
//     });
// }


// stepOne()
//     .then((result) => {
//         console.log(result); 
//         return stepTwo();
//     })
//     .then((result) => {
//         console.log(result);
//         return fetchData();
//     })
//     .then((result) => {
//         console.log(result); 
//     })
//     .catch((error) => {
//         console.error(error);
//     });




// Write two functions fetchUser and fetchPosts that return Promises. fetchUser should resolve with "User fetched" after 1 second, and fetchPosts should resolve with "Posts fetched" after 2 seconds. Use Promise.all to run these functions in parallel and log the results once both are complete.

// Modify the previous example using Promise.allSettled so that it handles both resolved and rejected Promises. Introduce a possibility for fetchUser to reject with "Failed to fetch user" and fetchPosts to reject with "Failed to fetch posts".


    // function fetchUser() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve("User fetched");
    //         }, 1000);
    //     });
    // }
    
    // function fetchPosts() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve("Posts fetched");
    //         }, 2000);

    //     });
    // }
    
    // Promise.all([fetchUser(), fetchPosts()])
    //     .then((results) => {
    //         console.log(results); 
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    

        function fetchUser() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve("User fetched");
                    } else {
                        reject("Failed to fetch user");
                    }
                }, 1000);
            });
        }
        
        function fetchPosts() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve("Posts fetched");
                    } else {
                        reject("Failed to fetch posts");
                    }
                }, 2000);
            });
        }
        
        Promise.allSettled([fetchUser(), fetchPosts()])
            .then((results) => {
                results.forEach((result) => {
                    if (result.status === "fulfilled") {
                        console.log(result.value);
                    } else {
                        console.error(result.reason);
                    }
                });
            });
        