// Error Handling : try-catch; 
// Just like .then which have .catch error handling way;
// How to catch error from Promises if passed in await...Every await should have a catch block


const isFakeData1 = true;
const isFakeData2 = false;

function getFakeData(data) {
    if(data){
        return Promise.resolve("Congratulation! No Fake Data")
    } else{
        return Promise.reject("Connection lost!");
    }
}

async function loadData(value) {
  try {                                         // Try to run this line
    const data = await getFakeData(value);
    console.log(data); 
  } catch (error) {
    console.log("Error caught: " + error);      // If the line above fails, this block runs automatically
  }
}

loadData(isFakeData1);
loadData(isFakeData2);
