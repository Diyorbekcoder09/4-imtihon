const bodyEl = document.querySelector(".container");
const formEl = document.querySelector(".form");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const input5 = document.querySelector(".input5");
const btnEl = document.querySelector(".btn");


btnEl.addEventListener("click", (e) => {
    e.preventDefault();

    let date = new Date();

    let soat = date.getDay()
    let minut = date.getMonth()
    let secund = date.getFullYear()

    let vaqt = soat + "/" + minut + "/" + secund



    const divEl = document.createElement("div");
    const pEl1 = document.createElement("p");
    const pEl2 = document.createElement("p");
    const imgEl = document.createElement("img");
    const pEl4 = document.createElement("p");
    const pEl5 = document.createElement("p");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    const btnDiv = document.createElement("div")




    pEl1.innerText = " Taom nomi : " + input1.value;
    pEl2.innerText = " Taom narxi :$" + input2.value;
    imgEl.src = input3.value;
    pEl4.innerText = " Taom oshpazi : " + input4.value;
    pEl5.innerText = " Taom restarani nomi : " + input5.value;
    pEl1.style.paddingLeft = "260px"
    pEl2.style.paddingLeft = "260px"
    pEl4.style.paddingLeft = "260px"
    pEl5.style.paddingLeft = "260px"
    pEl1.style.position = "absolute"
    pEl2.style.position = "absolute"
    pEl4.style.position = "absolute"
    pEl5.style.position = "absolute"
    pEl1.style.paddingTop = "10px"
    pEl2.style.paddingTop = "50px"
    pEl4.style.paddingTop = "90px"
    pEl5.style.paddingTop = "130px"


    btn1.innerHTML = "Taomni o'chirish";
    btn2.innerHTML = vaqt;
    btn3.innerHTML = 'Taom tugagan'  ;





    divEl.className = "fox"
    pEl1.className = "text"
    pEl2.className = "text"
    pEl4.className = "text"
    pEl5.className = "text"
    imgEl.className = "img"
    btn1.className = "btn1"
    btn2.className = "btn2"
    btn3.className = "btn3"
    btnDiv.className = "ota"



    btnDiv.appendChild(btn1);
    btnDiv.appendChild(btn2);
    btnDiv.appendChild(btn3);
    divEl.appendChild(pEl1);
    divEl.appendChild(pEl2);
    divEl.appendChild(pEl4);
    divEl.appendChild(pEl5);
    divEl.appendChild(btnDiv);
    divEl.appendChild(imgEl);
    bodyEl.prepend(divEl);


    btn1.addEventListener("click", () => {
        const close = confirm("rostdan o'chirilsinmi")

        if (close === true) {
            divEl.remove()
        }
    })

    btn3.addEventListener("click", () => {
        divEl.classList.toggle("rang");
    });

})