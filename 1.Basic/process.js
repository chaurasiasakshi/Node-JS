// console.log("process.argv returns array containing command-line arguments");
// version, release and  memory location
// console.log(process.argv);

let args = process.argv;

for(let i = 2; i<args.length; i++){
  console.log("Hey!!" , args[i])    ;
}