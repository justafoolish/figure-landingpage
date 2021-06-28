const Products = [
    {
    "name": "SHINOBU KOCHO",
    "color": "wrap-color1",
    "buttonColor":"btn-color1",
    "image" : ["Kocho/k1c.png","Kocho/k2c.png","Kocho/k3c.png","Kocho/k4c.png"]
    },
    {
        "name": "SINON",
        "color": "wrap-color2",
        "buttonColor":"btn-color2",
        "image" : ["Sinon/s1.png","Sinon/s2.png","Sinon/s3.png","Sinon/s4.png"]
    }];

const changeImgButton = document.querySelectorAll(".change-img")

const previewImg = document.querySelector("#preview--image")

const changeProduct = document.querySelectorAll(".products")

const changePreviewList = document.querySelectorAll(".preview--list")

const title = document.querySelector(".info--title")

const wrapColor = document.querySelector(".preview--wrap")

const viewButton = $("section main .detail--wrap .info--button button")


const updatePreviewList = (pos) => {
    for(let i = 0; i < changePreviewList.length; i++) {
        changePreviewList[i].src = Products[pos].image[i]
    }

    var image = $("#preview--image");

    image.addClass("fade--image")
    setTimeout(function() {
        previewImg.src = Products[pos].image[0]
        image.removeClass("fade--image")   
    },700)
            
}


for(let i=0; i< changeImgButton.length;i++)
{
    
 
        changeImgButton[i].addEventListener("click",function() {

            var image = $("#preview--image");

            if(previewImg.src !== changePreviewList[i].src) {
                image.addClass("fade--image")
                setTimeout(function() {
                    image.attr("src",changePreviewList[i].src).removeClass("fade--image")   
                },700)
            }   
        
        })
}

const removeActive = () => {
    changeProduct.forEach(button => 
        button.classList.remove("active")
    )
}

for (let i = 0; i < changeProduct.length; i++) {
    changeProduct[i].addEventListener("click", function() {

        if(!changeProduct[i].classList.value.includes("active")) {

            removeActive()

            changeProduct[i].classList.add("active")
    
    

    
            //Update info
    
            $(".info--title").removeClass("fade--left")
            $(".info--description").removeClass("fade--left")
            $(".info--button").removeClass("fade--left").css("opacity","0")
    
            removeSwipe()
    
            setTimeout(function() {
                title.innerHTML = "<h2>"+ Products[i].name +"</h2>"
    
                wrapColor.setAttribute("class","preview--wrap")
                wrapColor.classList.add(Products[i].color)
                
                updatePreviewList(i)
    
    
    
                $(".info--title").addClass("fade--left")
                setTimeout(function() {
                    $(".info--description").addClass("fade--left")
                    setTimeout(function() {
                        $(".info--button").addClass("fade--left").css("opacity","1")
                    },150)
                },250)

                swipeUp()
                
            },1000)
            
    
            viewButton.attr("class",Products[i].buttonColor)
        }
        
        
    })
}

const swipeUp = () => {
    let delay = 0
    for(let i=0; i <= changeImgButton.length; i++) {
        delay += 250

        setTimeout(function() {
            changeImgButton[i].classList.add("bottom-up")
        }, delay)

    }
}
const removeSwipe = () => {
    changeImgButton.forEach(button => {
        button.classList.remove("bottom-up")
    })
}


$(document).ready(function() {
    $(".info--title").addClass("fade--left")
    setTimeout(function() {
        $(".info--description").addClass("fade--left")
        setTimeout(function() {
            $(".info--button").addClass("fade--left")
        },150)
    },250)
    
    swipeUp()
})

