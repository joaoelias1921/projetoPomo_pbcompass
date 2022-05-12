const radioButtons = document.querySelectorAll('input');
const img = document.querySelector("img");
const p = document.querySelector("p");

function nextPage() {
    if(radioButtons[2].checked){
        window.location.href = "signup.html";
    }

    if(radioButtons[0].checked){
        img.setAttribute("src", "./images/img-screen2.png");
        img.setAttribute("alt", "Productivity tracking & insights");
        p.innerHTML = "Track your producitvity & gain insights";
        radioButtons[0].checked = false;
        radioButtons[1].checked = true; 
        radioButtons[2].checked = false;
    }else if(radioButtons[1].checked){
        img.setAttribute("src", "./images/img-screen3.png");
        img.setAttribute("alt", "Productivity boost");
        p.innerHTML = "Boost your productivity now & be successful";
        radioButtons[0].checked = false;
        radioButtons[1].checked = false;
        radioButtons[2].checked = true;         
        document.querySelector("button").innerHTML = "Get Started";              
    }
}

function changePage() {
    for (const radioButton of radioButtons) {
        radioButton.addEventListener("change", () => {
            if(radioButton.getAttribute("name") == "screen1"){
                img.setAttribute("src", "./images/img-screen1.png");
                img.setAttribute("alt", "Tasks & Work Management");
                p.innerHTML = "Easy task & work management with pomo";
                radioButtons[0].checked = true;
                radioButtons[1].checked = false; 
                radioButtons[2].checked = false;
            }else if(radioButton.getAttribute("name") == "screen2"){
                img.setAttribute("src", "./images/img-screen2.png");
                img.setAttribute("alt", "Productivity tracking & insights");
                p.innerHTML = "Track your producitvity & gain insights";
                radioButtons[0].checked = false;
                radioButtons[1].checked = true;
                radioButtons[2].checked = false;                       
            }else if(radioButton.getAttribute("name") == "screen3"){
                img.setAttribute("src", "./images/img-screen3.png");
                img.setAttribute("alt", "Productivity boost");
                p.innerHTML = "Boost your productivity now & be successful";
                radioButtons[0].checked = false;
                radioButtons[1].checked = false;
                radioButtons[2].checked = true;
                document.querySelector("button").innerHTML = "Get Started";
            }
        });                           
    }   
}