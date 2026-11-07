// // const myPromise = Promise.resolve(100);

// // myPromise
// //          .then((number) => {
// //             return number*2;
// //          })
// //          .then((number)=>{
// //             return number+50;
// //          })
// //          .then((result) => {
// //            return result-25;
// //          })
// //          .then((finalResult)=>{
// //             console.log("Final Number is: ",finalResult);
// //          })
// //          .catch((error)=>{
// //             console.log(error);
// //          })
// //          .finally(()=>{
// //             console.log("promise process finished");
// //          })

// // //----promise.all()-----//
// // // Definition: Promise.all() takes multiple Promises and fulfills when all of them fulfill. If even one rejects, the combined Promise rejects.
// // const promise1 = Promise.resolve("Student Profile");
// // const promise2 = Promise.resolve("Student Marks");
// // const promise3 = Promise.resolve("Student Attendance");

// // Promise.all([promise1, promise2, promise3])
// //     .then((results) => {
// //         console.log(results);
// //     })
// //     .catch((error) => {
// //         console.log(error);
// //     });
// // //----promise.allSettled----	Waits for all Promises and reports every result---//
// // const p1 = Promise.resolve("A");
// // const p2 = Promise.reject("Error!");
// // const p3 = Promise.resolve("C");

// // Promise.allSettled([p1, p2, p3])
// //     .then((results) => {
// //         console.log(results);
// //     });

// // const p11 = Promise.resolve(100);
// // const p22 = Promise.reject("Failed");
// // const p33 = Promise.resolve(300);

// // Promise.allSettled([p11, p22, p33])
// //     .then((results) => {
// //         console.log(results[1].status);
// //         console.log(results[1].reason);
// //     });

// ///-----Promise.race() returns the result of the first Promise to settle. Settled means either fulfilled or rejected.

// // const p1 = new Promise(resolve => {
// //     setTimeout(() => resolve("First"), 2000);
// // });

// // const p2 = new Promise(resolve => {
// //     setTimeout(() => resolve("Second"), 1000);
// // });

// // Promise.race([p1, p2])
// //     .then(result => console.log(result));
// //////////////////////////////////////////////////////
// const promise1 = Promise.resolve("Login successful!");

// promise1
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// //////////////////////

// // const promise2 = new Promise((resolve,reject)=>{
// //    resolve("Payment successful!");
// // })

// // promise2
// //        .then((result)=>{
// //          console.log(result);
// //        })
// //       .catch((error)=>{
// // console.log(error);
// //       })

// // const promise21 = new Promise((resolve,reject)=>{
// //    reject("Payment failed!");
// // })

// // promise21
// //        .then((result)=>{
// //          console.log(result);
// //        })
// //       .catch((error)=>{
// // console.log(error);
// //       })

// //---promise chaining----//
// // const promise = Promise.resolve(100);
// // promise
// //        .then((number)=>{
// //          return number*2;
// //        })
// //       .then((number)=>{
// //          return number+50;
// //       })
// //       .then((result)=>{
// //          return result-25;
// //       })
// //       .then((finalResult)=>{
// //          console.log(finalResult);
// //       })
// //      .catch((error)=>{
// //       console.log(error);
// //      })

// const productPrice=Promise.resolve(2000);

// productPrice
//             .then((price)=>{
//                let discount=price*10/100;
//                let discountedPrice=price-discount;
//                return discountedPrice+150;
//             })
//            .then((finalAmount)=>{
//             console.log("Final Amount: ",finalAmount);
//            })
//           .catch((error)=>{
//             console.log(error);
//           })



// const marks = 80;

// const result = new Promise((resolve, reject) => {
//     if (marks >= 50) {
//         resolve("You passed!");
//     } else {
//         reject("You failed!");
//     }
// });

// result
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// const username = "Asad";
// const password = "123";

// const login= new Promise((resolve, reject) => {
//    if(username==='Asad'&& password==='12345'){
//       resolve("login successful!")
//    }else{
//       reject("Invalid username or password!");
//    }
// })

// login
// .then((result)=>{
//    console.log(result);
// })
// .catch((error)=>{
//    console.log(error);
// })

// ////////async/await//----//

// async function getUser() {
//     return "Welcome Asad!";
// }

// async function showUser() {
//     const result= await getUser();
// console.log(result);
// }


// showUser();


// async function getPrice() {
//     let price=2500;
//     let discount = price * 20 / 100;
//     let finalPrice = price - discount;
//     return finalPrice;
// }

// async function calculatePrice() {

// const result=await getPrice();
// console.log("Final Price:", result);
// }

// calculatePrice();


// async function checkResult() {
//     let marks=85;
//     if(marks>=50){
//         return 'You passed!';
//     }else{
//         return 'You failed!';
//     }
    
// }

//  async function showResult(){
//         const result=await checkResult();
//         console.log(result);
//     }
//     showResult();


// async function loginUser() {
//     try{
//    const login= await Promise.reject("Payment failed!");
//    console.log(login);
// }catch(error){
//     console.log(error);
// }
// }

// loginUser();

// function getData(){
//  return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Data loaded successfully!');
//         },3000);
// })
// }
// async function showData(){
//    console.log('loading data....');
//    const result = await getData();
//    console.log(result);
//    console.log('process completed!');
//     }

// showData();

// async function getUser() {
//     try{
//         const user = await Promise.reject("User not found!");
//     }catch(error){
//         console.log('Error: ',error);
//     }
    
// }
// getUser();



async function checkPayment() {
    try{
        const payment = await Promise.resolve("Payment successful!");
        console.log(payment);
    }catch(error){
        console.log('Error: ',error);
    }
    
}
checkPayment();




async function processOrder() {
    try{
        const order=await Promise.resolve("Order placed!");
        console.log(order);
    }catch(error){
        console.log(error);
    }finally{
 console.log('Order processing completed!')
    }
}

processOrder();

///---throw new Error----//



async function checkMarks(){
    let marks=30;
    if(marks<40){
        throw new Error("You failed the exam!");
    }
   return 'You passed the exam!';
}
async function showResult() {
    try{
        const result = await checkMarks();
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    
}
showResult();


 function getMarks() {
    let marks=85;
    return marks;
    
}
async function showMarks() {
    try{
        const result=await getMarks();
        console.log('Your marks: ',result);
    }catch(error){
        console.log(error);
    }finally{
        console.log('Task completed dear chatgpt');
    }
}
showMarks();


