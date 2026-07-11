// ==========================
// FADE-IN AO ROLAR
// ==========================

const sections =
document.querySelectorAll(".section");

sections.forEach(section => {
    section.classList.add("hidden");
});

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},
{
    threshold:0.15
}

);

sections.forEach(section => {

    observer.observe(section);

});

// ==========================
// PARTÍCULAS
// ==========================

function createParticle(){

    const particle =
    document.createElement("div");

    particle.classList.add(
        "particle"
    );

    const size =
    Math.random() * 12 + 4;

    particle.style.width =
    `${size}px`;

    particle.style.height =
    `${size}px`;

    let x =
    Math.random() *
    window.innerWidth;

    particle.style.left =
    `${x}px`;

    particle.style.bottom =
    "-20px";

    const opacity =
    Math.random() * 0.25 + 0.05;

    particle.style.opacity =
    opacity;

    const colors = [

        "rgba(149,213,178,.4)",
        "rgba(116,198,157,.4)",
        "rgba(183,228,199,.3)"

    ];

    particle.style.background =
    colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];

    document.body.appendChild(
        particle
    );

    let position = -20;

    const speed =
    Math.random() * 2 + 0.5;

    const drift =
    (Math.random() - 0.5) * 1.2;

    const interval =
    setInterval(() => {

        position += speed;

        x += drift;

        particle.style.bottom =
        `${position}px`;

        particle.style.left =
        `${x}px`;

        particle.style.transform =
        `rotate(${position}deg)`;

        if(
            position >
            window.innerHeight + 100
        ){

            clearInterval(
                interval
            );

            particle.remove();

        }

    },16);

}

setInterval(
    createParticle,
    9999
);

// ==========================
// NAVBAR SCROLL
// ==========================

const navbar =
document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if(!navbar) return;

        if(window.scrollY > 80){

            navbar.style.padding =
            "12px 40px";

            navbar.style.background =
            "rgba(0,0,0,.35)";

        }else{

            navbar.style.padding =
            "18px 40px";

            navbar.style.background =
            "rgba(0,0,0,.15)";

        }

    }
);

// ==========================
// EFEITO DIGITAÇÃO
// ==========================

const title =
document.getElementById(
    "typing-title"
);

if(title){

    const originalText =
    title.textContent;

    title.textContent = "";

    let index = 0;

    function typeWriter(){

        if(index < originalText.length){

            title.textContent +=
            originalText.charAt(index);

            index++;

            setTimeout(
                typeWriter,
                150
            );

        }

    }

    window.addEventListener(
        "load",
        typeWriter
    );

}

// ==========================
// GRÁFICOS ANIMADOS
// ==========================

const bars =
document.querySelectorAll(".bar");

const chartObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const value =
            entry.target.dataset.width;

            entry.target.style.width =
            value + "%";

            entry.target.style.boxShadow =
            "0 0 20px rgba(255,255,255,.25)";

            chartObserver.unobserve(
                entry.target
            );

        }

    });

},
{
    threshold:0.4
}

);

bars.forEach(bar=>{

    chartObserver.observe(bar);

});

// ==========================
// LIXEIRAS ANIMADAS
// ==========================

const schoolBins =
document.querySelectorAll(".bin");

const binObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show-bin"
            );

            binObserver.unobserve(
                entry.target
            );

        }

    });

},
{
    threshold:0.3
}

);

schoolBins.forEach(bin=>{

    binObserver.observe(bin);

});

const backTop =
document.getElementById("backTop");

if(backTop){

    backTop.addEventListener("click", (e)=>{

        e.preventDefault();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}