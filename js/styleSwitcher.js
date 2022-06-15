const   links = document.querySelectorAll('.alternate-style'),
        totalLiinks = links.length;
        function setAvtiveStyle(color) {
            for(let i = 0; i < totalLiinks; i++) {
                if(color === links[i].getAttribute("title")){
                    links[i].removeAttribute("disabled")
                }
                else {
                    links[i].setAttribute("disabled","true");
                }
            }
        }


    // Body-skin

    const   bodySkin = document.querySelectorAll(".body-skin"),
            totalBodySkin = bodySkin.length;
            
            for(let i = 0; i<totalBodySkin; i++) {
                bodySkin[i].addEventListener("change", function(){
                    if(this.value == "dark") {
                        document.body.className = "dark";
                    }
                    else {
                        document.body.className = "";
                    }
                })
            } 

// JavaScript
// document.querySelector('.toggle-style-switcher').addEventListener("click", function() {
//     console.log('hi')
// })


// EcmaScript 6
document.querySelector('.toggle-style-switcher').addEventListener("click", () => {
    document.querySelector('.style-switcher').classList.toggle("open");    
})
