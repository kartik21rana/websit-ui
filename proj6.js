
let crsr = document.querySelector(".cursor");
let bigcrsr = document.querySelector(".bigcursor");

document.addEventListener("mousemove",(dets)=>{
    crsr.style.left = dets.x + 'px'
    crsr.style.top = dets.y + 'px'
    bigcrsr.style.left = dets.x - 150 + "px"
    bigcrsr.style.top = dets.y - 140 + "px"

});

let list =  document.querySelectorAll("#navlist  ul a ");

list.forEach(anchor =>{
    anchor.addEventListener("mouseenter",()=>{
        crsr.style.transform = "scale(3)"; 
        crsr.style.border = "1px solid #fff"   
    });
    anchor.addEventListener("mouseout",()=>{
        crsr.style.transform = "scale(0)";
    });
});
       
   

gsap.to("ul",{
    backgroundColor:"black",
    duration:"1",
    height:"120px",
    scrollTrigger:{
        trigger:"ul",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top 11% ",
        scrub :2,        
        //  scrub : use to repeat animation
        
    }
})
gsap.to("main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        // markers:true,
        start: "top -25%",
        end: "top -80%",
        scrub: 3
    }
})
gsap.from(".about-us img, .about",{
    y:50,
    duration:1,
    opacity:0,
    stagger:0.4,  // is used to animate one one element
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start: "top 60%",
        end : "top 55%",
        scrub:3
    }
})

gsap.from(".otherimg .img",{
    scale:0.9,
    duration :0.6,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:".otherimg",
        scroller:"body",
        //  markers:true,
        start: "top 70%",
        end : "top 60%",
        scrub:2,
        opacity:100
    }
})
gsap.from(".page3 .colon1",{
   y:-40,
   x: -40,
    duration :1,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        //  markers:true,
        start: "top 60%",
        end : "top 55%",
        scrub:3,
        // opacity:100
    }
})
gsap.from(".page3 .colon2",{
    
    y:80,
    x: 70,
     duration :1,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        //  markers:true,
         start: "top 60%",
         end : "top 55%",
         scrub:3,
        // opacity:100
    }
})

