// let n =5;

// for(let i=0; i<n; i++){
//     console.log("hello",i);
// }

// for(let j=1; j<=n; j++){
//     console.log(n," *", j, "= ",n*j);
// }


let args = process.argv;
for(let i=2; i<args.length; i++){
    console.log("hello to ",args[i]);
}