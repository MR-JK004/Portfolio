document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");
    const aboutTitle = aboutSection.querySelector("h2");
    const aboutContent = aboutSection.querySelector(".about-content");
    const tabTitles = aboutSection.querySelector(".tab-titles");
    const popupTexts = aboutSection.querySelectorAll(".popup-text");
    const tabContents = aboutSection.querySelectorAll(".tab-contents");
  
    const resetAnimations = () => {
      aboutTitle.style.opacity = 0;
      aboutTitle.style.transform = "scale(0.8)";
      aboutContent.style.opacity = 0;
      aboutContent.style.transform = "translateX(-50px)";
      tabTitles.style.opacity = 0;
      tabTitles.style.transform = "translateX(50px)";
  
      popupTexts.forEach(text => {
        text.style.opacity = 0;
        text.style.transform = "translateY(20px)";
      });
  
      tabContents.forEach(content => {
        content.style.opacity = 0;
        content.style.transform = "translateY(20px)";
      });
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          aboutSection.style.opacity = 1;
  
          
          aboutTitle.style.opacity = 1;
          aboutTitle.style.transform = "scale(1)";
  
          
          aboutContent.style.opacity = 1;
          aboutContent.style.transform = "translateX(0)";
  
          
          tabTitles.style.opacity = 1;
          tabTitles.style.transform = "translateX(0)";
  
          
          popupTexts.forEach((text, index) => {
            setTimeout(() => {
              text.style.opacity = 1;
              text.style.transform = "translateY(0)";
            }, index * 300); 
          });
  
          
          tabContents.forEach((tabContent, index) => {
            setTimeout(() => {
              tabContent.style.opacity = 1;
              tabContent.style.transform = "translateY(0)";
            }, 1000 + index * 300); 
          });
        } else {
          
          resetAnimations();
        }
      });
    });
  
    
    observer.observe(aboutSection);


});

document.addEventListener("DOMContentLoaded", () => {
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const third = document.getElementById("third");
    const btn = document.getElementById("button")

    const resetAnimation = (element) => {
        element.style.opacity = 0;
        element.style.animation = 'none'; 
        element.offsetHeight; 
        element.style.animation = ''; 
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                if (element === first) {
                    element.style.animation = 'left 0.7s forwards 0.6s';
                } else if (element === second) {
                    element.style.animation = 'zoomIn 0.6s forwards 0.5s';
                    element.style.animationDelay = '1s';
                } else if (element === third) {
                    element.style.animation = 'right 0.7s forwards 0.6s';
                } else if(element === btn){
                    element.style.animation = 'popUp 0.32s forwards 0.5s';
                    element.style.animationDelay = '1s';
                }    
                
            } else {
                resetAnimation(entry.target); 
            }
        });
    });

    
    observer.observe(first);
    observer.observe(second);
    observer.observe(third);
    observer.observe(btn)
});

document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.getElementById("contact");
    const contactLeft = contactSection.querySelector(".contact-left");
    const contactRight = contactSection.querySelector(".contact-right");
    const socialIcons = contactSection.querySelectorAll(".social-icons a");

    const resetAnimation = (element) => {
        element.style.opacity = 0;
        element.style.transform = "translateY(20px)";
        element.style.animation = 'none'; 
        element.offsetHeight; 
        element.style.animation = ''; 
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.style.opacity = 1;

                
                contactLeft.style.opacity = 1;
                contactLeft.style.transform = "translateY(0)";
                contactLeft.style.animation = 'fadeInUp 1s forwards';

                
                contactRight.style.opacity = 1;
                contactRight.style.transform = "translateY(0)";
                contactRight.style.animation = 'fadeInUp 1s forwards';

                
                socialIcons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.style.opacity = 1;
                        icon.style.transform = "translateY(0)";
                        icon.style.animation = 'fadeIn 1s forwards'; 
                    }, index * 100);
                });
            } else {
                
                resetAnimation(contactLeft);
                resetAnimation(contactRight);
                socialIcons.forEach(icon => resetAnimation(icon));
            }
        });
    }, {
        threshold: 0.1 
    });

    
    observer.observe(contactSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("home");
    const role = homeSection.querySelector("#role");
    const intro = homeSection.querySelector("#intro");
    const circularImage = homeSection.querySelector(".circular-image");
    const downloadResume = homeSection.querySelector(".download-resume");
    const typewriter = homeSection.querySelector(".typewriter");

    const resetAnimation = (element) => {
        element.style.opacity = 0;
        element.style.animation = 'none'; 
        element.offsetHeight; 
        element.style.animation = ''; 
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                if (element === role) {
                    element.style.opacity = 1;
                    element.style.animation = 'fadeInUp 0.6s forwards';
                } else if (element === intro) {
                    element.style.opacity = 1;
                    element.style.animation = 'zoomIn 0.6s forwards';
                } else if (element === circularImage) {
                    element.style.opacity = 1;
                    element.style.animation = 'rotateIn 1s forwards';
                } else if (element === downloadResume) {
                    element.style.opacity = 1;
                    element.style.animation = 'bounceIn 0.6s forwards';
                } else if (element === typewriter) {
                    element.style.opacity = 1;
                    element.style.animation = 'typing 2s steps(30, end) forwards, blink-caret 0.75s step-end infinite';
                }
            } else {
                resetAnimation(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    
    observer.observe(role);
    observer.observe(intro);
    observer.observe(circularImage);
    observer.observe(downloadResume);
    observer.observe(typewriter);
});

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
