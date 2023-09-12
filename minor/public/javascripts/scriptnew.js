 window.addEventListener('resize', function (){ 
 'use strict';
 window.location.reload(); 
})
function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#whole'),
        smooth: true
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('#whole', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('#whole').style.transform ? 'transform' : 'fixed'
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}
init()

const a = new SplitType("#bestselling,#explore");
gsap.to("#main", {
  stagger: 1,
});
gsap.fromTo(
  ".char",
  {
    y: "20px",
    opacity: 0,
  },
  {
    delay: .2,
    y: 0,
    duration: 0.25,
    stagger: 0.05,
    opacity: 1,
  }
);
gsap.fromTo(
  "#centercontainer",
  {
    y: "100px",
    backgroundColor: "transparent",
    opacity: 0,
  },
  {
    delay: .5,
    y: "0%",
    stagger: 0.5,
    opacity: 1,
    duration: 0.5,
    backgroundColor: "#c7aaa7cd",
    ease: "ease-out",
  }
);
gsap.fromTo(
  "#explorebutton",
  {
    y: "20px",
    opacity: 0,
    scale: 0,
  },
  {
    y: 0,
    delay: .7,
    duration: 0.5,
    stagger: 0.05,
    opacity: 1,
    scale: 1,
  }
);
gsap.fromTo(
  "#left1",
  {
    x: "-100px",
    opacity: 0,
  },
  {
    x: "0%",
    opacity: 1,
    duration: 0.5,
    delay: 1.5,
    ease: "ease-out",
  }
);
gsap.fromTo(
  "#right1",
  {
    x: "200px",
    opacity: 0,
  },
  {
    x: "0%",
    stagger: 0.5,
    opacity: 1,
    duration: 0.5,
    delay: 1.3,
    ease: "ease-out",
  }
);

gsap.fromTo(
  "#rotate",
  {
    // x:"10%",
    opacity: 0,
  },
  {
    // x:0,
    opacity: 1,
    delay: 2,

  }
);
gsap.fromTo(
  "#nav1,#nav2,#nav2b a,#nav2c i",
  {
    y: "-100px",
    opacity: 0,
  },
  {
    stagger: 0.4,
    y: "0px",
    delay: .5,
    opacity: 1,
    duration: 1,
  }
);



var cursor = document.querySelector("#cursor");
var shop = document.querySelector("#shop");
shop.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
document.querySelector("#shop1").addEventListener("mousemove", function (dets) {
  document.querySelector("#gif1").style.scale = 1;
  document.querySelector("#gif1").style.opacity = 1;
  document.querySelector("#gif1").style.left = dets.x - 270 + "px";
  document.querySelector("#gif1").style.top = dets.y - 230 + "px";
});
document
  .querySelector("#shop1")
  .addEventListener("mouseleave", function (dets) {
    document.querySelector("#gif1").style.scale = 0;
    document.querySelector("#gif1").style.opacity = 0;
    document.querySelector("#gif1").style.left = dets.x - 230 + "px";
    document.querySelector("#gif1").style.top = dets.y - 230 + "px";
  });
document.querySelector("#shop2").addEventListener("mousemove", function (dets) {
  document.querySelector("#gif2").style.scale = 1;
  document.querySelector("#gif2").style.opacity = 1;
  document.querySelector("#gif2").style.left = dets.x - 480 + "px";
  document.querySelector("#gif2").style.top = dets.y - 230 + "px";
});
document
  .querySelector("#shop2")
  .addEventListener("mouseleave", function (dets) {
    document.querySelector("#gif2").style.scale = 0;
    document.querySelector("#gif2").style.opacity = 0;
    document.querySelector("#gif2").style.left = dets.x - 500 + "px";
    document.querySelector("#gif2").style.top = dets.y - 230 + "px";
  });
document.querySelector("#shop3").addEventListener("mousemove", function (dets) {
  document.querySelector("#gif3").style.scale = 1;
  document.querySelector("#gif3").style.opacity = 1;
  document.querySelector("#gif3").style.left = dets.x - 670 + "px";
  document.querySelector("#gif3").style.top = dets.y - 250 + "px";
});
document
  .querySelector("#shop3")
  .addEventListener("mouseleave", function (dets) {
    document.querySelector("#gif3").style.scale = 0;
    document.querySelector("#gif3").style.opacity = 0;
    document.querySelector("#gif3").style.left = dets.x - 500 + "px";
    document.querySelector("#gif3").style.top = dets.y - 230 + "px";
  });
document.querySelector("#shop4").addEventListener("mousemove", function (dets) {
  document.querySelector("#gif4").style.scale = 1;
  document.querySelector("#gif4").style.opacity = 1;
  document.querySelector("#gif4").style.left = dets.x - 870 + "px";
  document.querySelector("#gif4").style.top = dets.y - 250 + "px";
});
document
  .querySelector("#shop4")
  .addEventListener("mouseleave", function (dets) {
    document.querySelector("#gif4").style.scale = 0;
    document.querySelector("#gif4").style.opacity = 0;
    document.querySelector("#gif4").style.left = dets.x - 500 + "px";
    document.querySelector("#gif4").style.top = dets.y - 230 + "px";
  });
document.querySelector("#shop5").addEventListener("mousemove", function (dets) {
  document.querySelector("#gif5").style.scale = 1;
  document.querySelector("#gif5").style.opacity = 1;
  document.querySelector("#gif5").style.left = dets.x - 1050 + "px";
  document.querySelector("#gif5").style.top = dets.y - 250 + "px";
});
document
  .querySelector("#shop5")
  .addEventListener("mouseleave", function (dets) {
    document.querySelector("#gif5").style.scale = 0;
    document.querySelector("#gif5").style.opacity = 0;
    document.querySelector("#gif5").style.left = dets.x - 500 + "px";
    document.querySelector("#gif5").style.top = dets.y - 230 + "px";
  });

var filter = document.querySelector("#filter");
var products = document.querySelector("#products");
var flag = 0;
document
.querySelector("#sellnav1 button")
.addEventListener("click", function () {
  if (flag == 0) {
    filter.style.opacity = 1;
    filter.style.left = "-2%";
    flag = 1;
  } else {
    filter.style.opacity = 0;
    filter.style.left = "-100%";
    flag = 0;
  }
});

var featured = document.querySelector("#featured");
var fea = 0;
document
  .querySelector("#featuredbutton")
  .addEventListener("click", function () {
    if (fea == 0) {
      featured.style.display="flex";
      fea = 1;
    } else {
      featured.style.display="none";
      fea = 0;
    }
  });


