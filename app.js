window.addEventListener("load" ,()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visuals = document.querySelector(".visual");
    const colors = [
        "#ff0707",
        "#2bff00",
        "#00b7ff",
        "#003cff",
        "#ff03d5",
        "#fff200"
    ];
    pads.forEach((pad, index)=> {
        pad.addEventListener("click", function(){
            pad.currentTime = 0;
            sounds[index].play();
            createBubles(index);
        });

    });
    const createBubles = index =>{
        const buble = document.createElement("div");
        visuals.appendChild(buble);
        buble.style.backgroundColor = colors[index];
        buble.style.animation = "jump 1s ease";
        buble.addEventListener("animationend", function(){
            visuals.removeChild(this);
        })
    };
});