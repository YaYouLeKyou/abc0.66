function classExist(e, a) {
  return e.classList.contains(a);
}
var body = document.getElementById('body'),
  pageHeaderImage = document.querySelector('.page-header-image'),
  menuBar = document.querySelector('#menu_header'),
  menu_button = document.getElementById('menu_button'),
  nav_items = document.querySelector('.nav-items');
function loading_animation() {
  anime
    .timeline({
      complete: function (e) {
        body.classList.add('loading-completed'),
          console.log('A WEBSITE BY Yayou');
      },
    })
    .add({
      targets: '.curtain-center ',
      opacity: [1, 0],
      easing: 'easeOutCubic',
      duration: 100,
    })
    .add(
      {
        targets: '.curtain-logo-d',
        // translateX: ['-150%', 0],
        translateY: ['150%', 0],
        // rotate: ['-35deg', 0],
        easing: 'easeInOutCubic',
        duration: 900,
        delay: anime.stagger(1000),
      },
      '+=500'
    )
    .add(
      {
        targets: '.curtain-x',
        width: [0],
        easing: 'easeInOutCubic',
        duration: 600,
      },
      '+=500'
    )
    .add(
      {
        targets: '.curtain-y',
        height: [0],
        easing: 'easeInOutCubic',
        duration: 600,
      },
      '-=600'
    )
    .add(
      {
        targets: '.curtain-logo-d',
        opacity: [0],
        easing: 'easeInOutCubic',
        duration: 600,
        delay: anime.stagger(100),
      },
      '-=600'
    )
    .add(
      {
        targets: '#curtain',
        translateY: ['100%'],
        opacity: [1, 0],
        easing: 'easeInOutCubic',
        duration: 600,
      },
      '-=300'
    );
}
function loco() {
  const e = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: !0,
    lerp: 0.1,
    getDirection: !0,
    offset: ['30%', 0],
  });
  e.on('scroll', ({ limit: e, scroll: a, direction: t }) => {
    const s = a.y / e.y,
      n = Math.round((a.y / e.y) * 100);
    var i = t;
    pageHeaderImage && headerImage(s),
      ('down' == i) & (n > 10)
        ? menuBar.classList.add('scrolling_down')
        : menuBar.classList.remove('scrolling_down');
  }),
    e.on('call', (e, a, t) => {
      'pageHeader' == e && menuBar.classList.toggle('secondaryMenu');
    });
}
function headerImage(e) {
  (e = 1 + e / 2) < 2 && (pageHeaderImage.style.transform = 'scale(' + e + ')');
}
function openMenu() {
  anime
    .timeline({
      complete: function (e) {
        menuBar.classList.add('open');
      },
    })
    .add({
      targets: '.nav-items',
      height: ['0', '90vh'],
      easing: 'easeOutCubic',
      duration: 900,
    })
    .add(
      {
        targets: '#menu_header',
        backgroundColor: ['rgb(251 249 247 / 0%)', 'rgb(251 249 247 / 100%)'],
        easing: 'easeOutCubic',
      },
      '-=1100'
    )
    .add(
      {
        targets: '.nav-items ul li a',
        translateY: ['-55px', '0px'],
        easing: 'easeOutCubic',
        duration: 300,
        delay: anime.stagger(180),
      },
      '-=400'
    );
}
function closeMenu() {
  anime
    .timeline({
      begin: function (e) {
        menuBar.classList.remove('open'), menuBar.classList.add('animating');
      },
      complete: function (e) {
        menuBar.classList.remove('animating'),
          menuBar.classList.remove('menu_open'),
          nav_items.classList.remove('show');
      },
    })
    .add({
      targets: '.nav-items ul li a',
      translateY: ['0px', '-55px'],
      easing: 'cubicBezier(0.65, 0.05, 0.36, 1)',
      duration: 300,
      delay: anime.stagger(180),
    })
    .add(
      {
        targets: '.nav-items',
        height: ['90vh', '0'],
        easing: 'easeInQuad',
        duration: 900,
      },
      '-=600'
    )
    .add(
      {
        targets: '#menu_header',
        backgroundColor: ['rgb(251 249 247 / 100%)', 'rgb(251 249 247 / 0%)'],
        easing: 'cubicBezier(0.65, 0.05, 0.36, 1)',
        duration: 900,
      },
      '-=600'
    );
}
function menu() {
  classExist(menuBar, 'menu_open')
    ? closeMenu()
    : (nav_items.classList.add('show'),
      menuBar.classList.add('menu_open'),
      openMenu());
}
(window.onload = function () {
  body && (body.classList.add('body-ready'), loading_animation(), loco());
}),
  menu_button.addEventListener('click', menu);
var service_slider = new Swiper('.abcServicesSlider', {
    speed: 1e3,
    parallax: !0,
    pagination: { el: '.swiper-pagination', type: 'fraction' },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: !0,
  }),
  homepageProjects = new Swiper('.homePageProjects', {
    slidesPerView: 1.5,
    spaceBetween: 5,
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 10 },
      576: { slidesPerView: 2.5, spaceBetween: 25 },
      992: { slidesPerView: 2.5, spaceBetween: 50 },
      1200: { slidesPerView: 2.5, spaceBetween: 100 },
    },
    parallax: !0,
    watchSlidesVisibility: !0,
    pagination: { el: '.swiper-pagination', type: 'progressbar' },
    grabCursor: !0,
    keyboard: !0,
  }),
  multifamilyNextProject = new Swiper('.multifamilyproject-next', {
    slidesPerView: 1,
    centeredSlides: !0,
    spaceBetween: 30,
    parallax: !0,
    speed: 1200,
    loop: !0,
    watchSlidesVisibility: !0,
    keyboard: !0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
jQuery(document).ready(function (e) {
  var a,
    t = 15;
  e(document).mousemove(function (a) {
    var s = a.clientX,
      n = a.clientY,
      i = s - t,
      r = n - t;
    e('.circle').css('transform', 'translate3d(' + i + 'px,' + r + 'px,0px)');
  }),
    (a = e('.circle')),
    e('a:not(".project_link")').on('mouseenter', function () {
      a.addClass('active');
    }),
    e('a:not(".project_link")').on('mouseleave', function () {
      a.removeClass('active');
    }),
    e('.sliderHand .swiper-slide').on('mouseenter', function () {
      a.addClass('active slider'),
        (t = 25),
        e('.circle .soul').append(
          "<span class='action'><span class='symbol'><= =></span><span class='text'>DRAG</span></span>"
        );
    }),
    e('.sliderHand .swiper-slide').on('mouseleave', function () {
      (t = 15),
        a.removeClass('active slider'),
        e('.circle .soul span').remove();
    }),
    e('.swiper-button-next').on('mouseenter', function () {
      a.addClass('active slider'),
        (t = 25),
        e('.circle .soul').append(
          "<span class='action click'><span class='symbol'>=></span><span class='text'>NEXT</span></span>"
        );
    }),
    e('.swiper-button-next').on('mouseleave', function () {
      (t = 15),
        a.removeClass('active slider'),
        e('.circle .soul span').remove();
    }),
    e('.swiper-button-prev').on('mouseenter', function () {
      a.addClass('active slider'),
        (t = 25),
        e('.circle .soul').append(
          "<span class='action click'><span class='symbol'><=</span><span class='text'>PREV</span></span>"
        );
    }),
    e('.swiper-button-prev').on('mouseleave', function () {
      (t = 15),
        a.removeClass('active slider'),
        e('.circle .soul span').remove();
    }),
    e('a.project_link').on('mouseenter', function () {
      e('.circle .soul span').remove(),
        a.addClass('active slider project'),
        (t = 15),
        e('.circle .soul').append("<span class='action'></span>");
    }),
    e('a.project_link').on('mouseleave', function () {
      a.removeClass('project'),
        (t = 25),
        e('.circle .soul span').remove(),
        e(this).hasClass('multifamily')
          ? a.removeClass('active slider')
          : e('.circle .soul').append(
              "<span class='action'><span class='symbol'>ðŸ¤šðŸ»</span><span class='text'>DRAG</span></span>"
            );
    }),
    e('a.marquee').on('mouseenter', function () {
      a.addClass('active slider'),
        (t = 25),
        e('.circle .soul').append(
          "<span class='action click'><span class='symbol'>âœï¸</span><span class='text'>CONTACT</span></span>"
        );
    }),
    e('a.marquee').on('mouseleave', function () {
      (t = 15),
        a.removeClass('active slider'),
        e('.circle .soul span').remove();
    }),
    e('.multifamilyproject-images-individual').on('mouseenter', function () {
      a.addClass('active slider'),
        (t = 25),
        e('.circle .soul').append(
          "<span class='action click'><span class='symbol'>ðŸ‘ï¸</span><span class='text'>VIEW</span></span>"
        );
    }),
    e('.multifamilyproject-images-individual').on('mouseleave', function () {
      (t = 15),
        a.removeClass('active slider'),
        e('.circle .soul span').remove();
    }),
    service_slider.on('slideChange', function () {
      var a = e('.swiper-slide').eq(this.realIndex).find('.hidden').text();
      if (service_slider.activeIndex > service_slider.previousIndex)
        var t = '-100%',
          s = '100%';
      else (t = '100%'), (s = '-100%');
      anime({
        targets: '.swiper-slider-title h2',
        translateX: [0, t],
        opacity: 0,
        easing: 'easeInCubic',
        duration: 450,
        begin: function (e) {},
        complete: function (t) {
          e('.swiper-slider-title h2').text(a),
            anime({
              targets: '.swiper-slider-title h2',
              translateX: [s, 0],
              opacity: 1,
              easing: 'easeOutCubic',
              duration: 450,
            });
        },
      });
    }),
    multifamilyNextProject.on('slideNextTransitionStart', function () {
      e('.swiper-slide').removeClass('backward'),
        e('.swiper-slide').addClass('forward');
    }),
    multifamilyNextProject.on('slidePrevTransitionStart', function () {
      e('.swiper-slide').removeClass('forward'),
        e('.swiper-slide').addClass('backward');
    });
  var s = e('.multifamilyproject-next .swiper-slide.nextProject').data(
    'swiper-slide-index'
  );
  s && multifamilyNextProject.slideTo(s + 1),
    e('.project_category').mouseenter(function () {
      if (
        (e('.project_category').removeClass('active'),
        e(this).addClass('active'),
        ($current_image = e('.project_category_bg').attr('src')),
        ($new_image = e(this).attr('data-img-src')),
        $current_image != $new_image)
      ) {
        e('.project_category').addClass('animating'),
          e('.project_categories').append(
            '<img src="' +
              $new_image +
              '" alt="" class="project_category_bg next">'
          );
        anime
          .timeline({
            complete: function (a) {
              e('.project_category_bg.current').remove(),
                e('.project_category_bg.next')
                  .addClass('current')
                  .removeClass('next'),
                e('.project_category').removeClass('animating');
            },
          })
          .add({
            targets: '.project_category_bg.next',
            opacity: [0, 1],
            scale: [1.05, 1],
            easing: 'easeInOutCubic',
            duration: 650,
          })
          .add(
            {
              targets: '.project_category_bg.current',
              opacity: [1, 0],
              easing: 'easeInOutCubic',
              duration: 650,
            },
            '-=550'
          );
      }
    });
  const n = document.querySelectorAll('.split_text h1'),
    i = document.querySelectorAll('.split_text p');
  function r(e) {
    e.forEach(function (e) {
      e.setAttribute('data-scroll', '');
    });
  }
  Splitting({ target: n, by: 'lines' }),
    Splitting({ target: i, by: 'lines' }),
    r(n),
    r(i),
    e('.picture').each(function () {
      var a = e(this),
        t = (function () {
          var t = [];
          return (
            a.find('a').each(function () {
              var a = e(this).attr('href'),
                s = e(this).data('size').split('x'),
                n = { src: a, w: s[0], h: s[1] };
              t.push(n);
            }),
            t
          );
        })(),
        s = e('.pswp')[0];
      a.on('click', 'figure', function (a) {
        a.preventDefault();
        var n = e(this).index();
        new PhotoSwipe(s, PhotoSwipeUI_Default, t, {
          index: n,
          bgOpacity: 0.7,
          showHideOpacity: !0,
        }).init();
      });
    });
});
