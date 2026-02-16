function first(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                console.log("First function executed");
                resolve("First function result");
            } catch (error) {
                reject(error);

            }
        }, 4000);
    });
}

function second(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            try{
                console.log("Second function executed");
                resolve("Second function result");
            } catch (error) {
                reject(error);
            }   
        }, 4000);
    });
}