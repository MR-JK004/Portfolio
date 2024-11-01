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



const skills = [
    {
      image: 'https://images.vexels.com/content/166401/preview/java-programming-language-icon-05bb98.png',
      name: 'Java Programming'
    },
    {
      image: 'https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png',
      name: 'HTML and CSS'
    },
    {
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png',
      name:'BootStrap'
    },
    {
      image: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
      name: 'JavaScript'
    },
    {
      image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      name: 'React JS'
    },
    {
      image: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
      name: 'Node JS'
    },
    {
      image:'https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg',
      name:'MongoDB'
    },
    {
        image:'https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png',
        name:'MySQL'
    },
    {
        image:'https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png',
        name:'Git'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        name:'GitHub'
    },
    {
        image:'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png',
        name:'UI/UX Design'
    },
    {
       image:'https://img.icons8.com/color/200/office-365.png',
       name:'MS Office (Excel,ppt,Word...)'
    }
   
  ];

document.addEventListener("DOMContentLoaded", () => {
  const skillsBox = document.getElementById('skills-box');

  
  skills.forEach((skill) => {
    const skillContainer = document.createElement('div');
    skillContainer.classList.add('skill-container');

    const img = document.createElement('img');
    img.classList.add('skill-image');
    img.src = skill.image;

    const p = document.createElement('p');
    p.classList.add('skill');
    p.textContent = skill.name;

    skillContainer.appendChild(img);
    skillContainer.appendChild(p);
    skillsBox.appendChild(skillContainer);
  });

  
  const resetSkills = () => {
    const skillContainers = document.querySelectorAll('.skill-container');
    skillContainers.forEach(container => {
      container.style.opacity = '0'; 
      container.style.transform = 'translateY(20px)';
      container.style.transitionDelay = '0s';
    });
  };

 
  const animateSkills = () => {
    const skillContainers = document.querySelectorAll('.skill-container');
    skillContainers.forEach((container, index) => {
 
      container.offsetHeight; 
      container.style.transitionDelay = `${index * 0.2}s`;
      container.style.opacity = '1'; 
      container.style.transform = 'translateY(0)'; 
    });
  };

  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        resetSkills(); 
        animateSkills();
      } else {
        
        resetSkills();
      }
    });
  }, {
    threshold: 0.1 
  });

  
  const aboutSection = document.getElementById('about');
  observer.observe(aboutSection);
});
  
document.addEventListener("DOMContentLoaded", () => {
    const statsSection = document.getElementById('stats');
    const statElements = document.querySelectorAll('.stat');

    const countUp = (element) => {
        const target = +element.getAttribute('data-target');
        const duration = 2000; 
        const increment = Math.ceil(target / (duration / 100));

        let current = 0;
        const interval = setInterval(() => {
            if (current < target) {
                current += increment;
                if (current > target) current = target; 
                element.innerText = current;
            } else {
                clearInterval(interval);
            }
        }, 100);
    };

    const resetStats = () => {
        statElements.forEach(stat => {
            const numberElement = stat.querySelector('.number');
            numberElement.innerText = '0';
            stat.classList.remove('visible');
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetStats(); // Reset stats before animating
                entry.target.classList.add('visible'); // Add visible class for animation
                const numberElement = entry.target.querySelector('.number');
                countUp(numberElement); // Start counting
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is in view
    });

    // Observe each stat element
    statElements.forEach(stat => {
        observer.observe(stat);
    });

    // Also observe the whole stats section for resetting and counting
    observer.observe(statsSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const certificationsBox = document.getElementById('certificationsCarousel');

  const certificates = [
      { title: "MERN Full Stack Development", issuer: "Guvi", date: "Feb 2024 - Jun 2024", link: "https://www.guvi.in/certificate?id=z122J7697Kl91O49Y7" },
      { title: "HTML 5", issuer: "Guvi", date: "Feb 2024 - Jun 2024", link: "https://www.guvi.in/certificate?id=e6F412YMp9742c1797" },
      { title: "JavaScript", issuer: "Guvi", date: "Feb 2024 - Jun 2024", link: "https://www.guvi.in/certificate?id=1wdi4772p79s1K2V97" },
      { title: "CSS 3", issuer: "Guvi", date: "Feb 2024 - Jun 2024", link: "https://www.guvi.in/certificate?id=BtLk79yp971l22X741" },
      { title: "BootStrap", issuer: "Guvi", date: "Feb 2024 - Jun 2024", link: "https://www.guvi.in/certificate?id=u1P97wI5229v9K7417" },
      { title: "React JS", issuer: "Guvi", date: "Feb 2024 - Jun 2024", link: "https://www.guvi.in/certificate?id=72n7k14899tgK127LB" },
      { title: "Node JS", issuer: "Guvi", date: "Feb 2024 - Jun 2024", link: "https://www.guvi.in/certificate?id=9c52747okv171a92uA" },
      { title: "MySQL", issuer: "Guvi", date: "Feb 2024 - Jun 2024", link: "https://www.guvi.in/certificate?id=7S99vM72Ha7TW2141N" },
      { title: "MongoDB", issuer: "Guvi", date: "Feb 2024 - Jun 2024", link: "https://www.guvi.in/certificate?id=Tz7P9747Z292w1E9d1" },
      { title: "Coding Contest", issuer: "Sudharsan College with E-box", date: "Mar 2023", link: "https://drive.google.com/file/d/1XCpLPqa7VCi-kAGvIQ3jJo8BACU01GHZ/view?usp=sharing" },
      { title: "Cloud Computing Workshop", issuer: "MIT Madras (Inter College Symposium)", date: "Apr 2023", link: "https://drive.google.com/file/d/1XCpLPqa7VCi-kAGvIQ3jJo8BACU01GHZ/view?usp=sharing" }

  ];

  certificates.forEach((cert) => {
    const certCard = document.createElement('div');
    certCard.classList.add('certification-card');

    certCard.innerHTML = `
        <h3>${cert.title}</h3>
        <div class="issuer-date">
            <p>${cert.issuer}</p>
            <span>(${cert.date})</span>
        </div>
        <a href="${cert.link}" target='_blank' class="view-certificate-btn">View Certificate</a>
    `;

    certificationsBox.appendChild(certCard);
  });

  const resetCertifications = () => {
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach(card => {
      card.style.opacity = '0'; 
      card.style.transform = 'scale(0.5) translateY(20px)'; // Reset to initial state
      card.style.animation = 'none'; // Remove the animation
      card.offsetHeight; // Trigger reflow
      card.style.animation = ''; // Re-enable animation
    });
  };

  const animateCertifications = () => {
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`; // Stagger the animation
      card.style.opacity = '1'; 
      card.style.transform = 'scale(1) translateY(0)'; // Final position
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        resetCertifications(); 
        animateCertifications();
      }
    });
  }, {
    threshold: 0.1 
  });

  const certificationsSection = document.getElementById('achievements');
  observer.observe(certificationsSection);
});



function autoScroll() {
const scrollAmount = 1; // Amount to scroll each interval
const scrollSpeed = 30; // Milliseconds between scroll updates
let isScrolling = true;

const scrollInterval = setInterval(() => {
  if (isScrolling) {
      carousel.scrollLeft += scrollAmount;

      // Reset to the start if we reach the end
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0; // Reset scroll to the beginning
      }
  }
}, scrollSpeed);

// Pause scrolling on hover
carousel.addEventListener('mouseenter', () => isScrolling = false);
carousel.addEventListener('mouseleave', () => isScrolling = true);
}


renderCertificates();
autoScroll();