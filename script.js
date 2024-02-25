document.addEventListener('DOMContentLoaded', function () {
    let menu = document.getElementsByClassName("menu");
    let open_ = document.getElementsByClassName("open");
    let body = document.getElementsByTagName("body");
    let clickToGo = document.getElementsByClassName("clickToGo");
    let F = document.getElementsByClassName("F");
    let portfolio2 = document.getElementsByClassName("portfolio2");
    let element1 = document.getElementsByClassName("element1");
    let element2 = document.getElementsByClassName("element2");
    let element3 = document.getElementsByClassName("element3");
    let element4 = document.getElementsByClassName("element4");
    let Bar = document.getElementsByClassName("Bar");
    let line = document.getElementsByClassName("line");
    let start = document.getElementsByClassName("start");
    let text = document.getElementsByClassName("text");
    let svgiat = document.getElementsByClassName("svgiat");
    let textbar1 = document.getElementsByClassName("textbar1");
    let textbar2 = document.getElementsByClassName("textbar2");
    let textbar3 = document.getElementsByClassName("textbar3");
    let textbar4 = document.getElementsByClassName("textbar4");
    let containerTitleAfter = document.getElementById("containerTitleAfter");
    let containerMenu = document.getElementById("containerMenu");
    let containerTitle = document.getElementById("containerTitle");
    let goToTheTop = document.getElementById("goToTheTop");
    let Ftop = document.getElementById("Ftop");
    let closeButton = document.getElementById("closeButton");
    let delay = 0.1;
    for (let i = 0; i < menu.length; i++) {
        open_[i].style.transitionDelay = `${delay * i}s`;
        menu[i].style.transitionDelay = `${delay * i}s`;
    }
    for (let i = 0; i < start.length; i++) {
        start[i].style.left = `${(i + 1) * 10}%`;
    }
    // --------------------------------------------------
    document.addEventListener('scroll', function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        // console.log(element1);
        console.log(scrollTop - 3 * window.innerHeight);
        if (scrollTop < 2 * window.innerHeight) {
            containerTitle.style.transform = `translateY(${scrollTop}px)`;
        }
        if (scrollTop < window.innerHeight) {
            for (let i = 0; i < start.length / 2; i++) {
                let variable = `${scrollTop * 0.03 * (i + 1)}px`;
                start[i].style.top = variable;
                start[start.length - i - 1].style.top = variable;
            }
        }
        if (scrollTop < window.innerHeight) {
            goToTheTop.style.opacity = 0;
        } else {
            goToTheTop.style.opacity = 1;
        }
        if (scrollTop > 4 * window.innerHeight && scrollTop < 11 * window.innerHeight) {
            let variable = scrollTop - 4 * window.innerHeight;
            text[0].style.transform = `translateY(${variable}px)`;
            svgiat[0].style.transform = `translateY(${variable}px)`;
            svgiat[0].style.left = `${window.innerWidth - variable}px`;
        }
        if (scrollTop >= 11 * window.innerHeight && scrollTop < 14 * window.innerHeight) {
            let variable = scrollTop - 12 * window.innerHeight;
            for (let i = 0; i < element1.length; i++) {
                element1[i].style.transform = `translateY(${- variable * 0.9}px)`;
            }
            for (let i = 0; i < element2.length; i++) {
                element2[i].style.transform = `translateY(${- variable * 0.2}px)`;
            }
            for (let i = 0; i < element3.length; i++) {
                element3[i].style.transform = `translateY(${- variable * 0.7}px)`;
            }
            for (let i = 0; i < element4.length; i++) {
                element4[i].style.transform = `translateY(${- variable * 0.4}px)`;
            }
        }
        if (scrollTop >= 14 * window.innerHeight + 100 && scrollTop < 18 * window.innerHeight) {
            let variable = scrollTop - 14 * window.innerHeight;
            let SubVariable = variable;
            Bar[0].style.top = 0;
            line[0].style.width = `${variable / 2}px`;
            if (scrollTop >= 14 * window.innerHeight + variable && scrollTop < 15 * window.innerHeight) {
                textbar2[0].style.transform = `translateY(${-26}vh)`;
                textbar2[0].style.opacity = 1;
                textbar1[0].style.transform = `translateY(${8}vh)`;
                textbar1[0].style.opacity = 1;
            }else if (scrollTop >= 15 * window.innerHeight && scrollTop < 16 * window.innerHeight) {
                textbar3[0].style.transform = `translateY(${-24}vh)`;
                textbar3[0].style.opacity = 0;
                textbar2[0].style.transform = `translateY(${6}vh)`;
                textbar2[0].style.opacity = 1;
                textbar1[0].style.transform = `translateY(${28}vh)`;
                textbar1[0].style.opacity = 0;
            }else if (scrollTop >= 16 * window.innerHeight && scrollTop < 17 * window.innerHeight) {
                textbar4[0].style.transform = `translateY(${2}vh)`;
                textbar4[0].style.opacity = 0;
                textbar3[0].style.transform = `translateY(${4}vh)`;
                textbar3[0].style.opacity = 1;
                textbar2[0].style.transform = `translateY(${26}vh)`;
                textbar2[0].style.opacity = 0;
            }else if (scrollTop >= 17 * window.innerHeight && scrollTop < 18* window.innerHeight + 1400) {
                textbar4[0].style.transform = `translateY(${2}vh)`;
                textbar4[0].style.opacity = 1;
                textbar3[0].style.transform = `translateY(${24}vh)`;
                textbar3[0].style.opacity = 0;
            }
        } else {
            Bar[0].style.top = "-18vh";
        }

        //  body color change
        if (scrollTop < 2 * window.innerHeight) {
            body[0].style.backgroundColor = "var(--bgc1)";
            goToTheTop.style.backgroundColor = "var(--bgc2)";
            Ftop.style.fill = "var(--bgc1)";
        }
        if (scrollTop >= 2 * window.innerHeight && scrollTop < 4 * window.innerHeight) {
            body[0].style.backgroundColor = "var(--bgc2)";
            goToTheTop.style.backgroundColor = "var(--bgc1)";
            Ftop.style.fill = "var(--bgc2)";

        }
        if (scrollTop >= 4 * window.innerHeight && scrollTop < 11 * window.innerHeight) {
            body[0].style.backgroundColor = "var(--bgc1)";
            goToTheTop.style.backgroundColor = "var(--bgc2)";
            Ftop.style.fill = "var(--bgc1)";
        }
        if (scrollTop >= 12 * window.innerHeight) {
            body[0].style.backgroundColor = "var(--bgc2)";
            goToTheTop.style.backgroundColor = "var(--bgc1)";
            Ftop.style.fill = "var(--bgc2)";
        }
        if (scrollTop >= 14 * window.innerHeight) {
            body[0].style.backgroundColor = "var(--bgc1)";
            goToTheTop.style.backgroundColor = "var(--bgc2)";
            Ftop.style.fill = "var(--bgc1)";
        }
        // ----------------------
    });
    containerMenu.addEventListener('mouseover', function () {
        for (let i = 0; i < menu.length; i++) {
            open_[i].style.opacity = 1;
            open_[i].style.zIndex = 1;
            open_[i].style.transform = "translateY(-23px)";
            menu[i].style.transform = "translateY(23px)";
            menu[i].style.opacity = 0;
            menu[i].style.zIndex = 0;
        }
    });
    containerMenu.addEventListener('mouseout', function () {
        for (let i = 0; i < menu.length; i++) {
            menu[i].style.opacity = 1;
            open_[i].style.opacity = 0;
            menu[i].style.zIndex = 1;
            open_[i].style.zIndex = 0;
            open_[i].style.transform = "translateY(-83px)";
            menu[i].style.transform = "translateY(0)";
        }
    });
    containerMenu.addEventListener('click', function () {
        containerTitleAfter.style.opacity = 1;
        containerTitleAfter.style.zIndex = 1;
        containerMenu.style.opacity = 0;
    });
    closeButton.addEventListener('click', function () {
        containerTitleAfter.style.opacity = 0;
        containerTitleAfter.style.zIndex = -1;
        containerMenu.style.opacity = 1;
    });
    for (let i = 0; i < clickToGo.length; i++) {
        clickToGo[i].addEventListener('mouseover', function () {
            F[i].setAttribute('d', "M16.01,11 C16.01,11,15.0926,11.8385,13.2767,11.6965 C10.9999,11.5185,12.172,10.0369,9.75733,10.1448 C7.12893,10.2622,7.81048,11.2865,5.60692,12.4013 C3.74833,13.3416,1.69428,10.9413,1.69428,10.9413 C1.69428,11.608,1.84075,11.9945,1.84075,12.6612 C1.84075,12.6612,3.96577,14.9283,5.83537,14.095 C8.30507,12.9943,7.27249,12,9.71987,12 C12.2402,12,10.8471,13.4396,13.1305,13.5601 C15.0771,13.6627,16.01,13,16.01,13 C16.01,14,16.01,15,16.01,16 C16.01,16,20,12,20,12 C18.67,10.6667,17.34,9.33333,16.01,8 z");
        });

        clickToGo[i].addEventListener('mouseout', function () {
            F[i].setAttribute('d', "M16.01 11H4v2h12.01v3L20 12l-3.99-4z");
        });
    }
});