const EventEmitter = require("events");

const event = new EventEmitter();

event.on('sayMyName',()=>{
    console.log("My name is sakshi ");
});
// event.on('sayMyName',()=>{
//     console.log("My name is sushil ");
// });
// event.on('sayMyName',()=>{
//     console.log("My name is sharmila ");
// });
// event.on('sayMyName',()=>{
//     console.log("My name is chausrasia ");
// });

 event.emit("sayMyName");
 // Async way of listening to an event 
 event.once('sayMyAge',(data)=>{
    setTimeout(() => {
        console.log(`I am ${data} years old`);
    },1000)
})
event.emit('sayMyAge',5);

event.on("checkPage", (sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);

});

event.emit("checkPage",200,"ok");
