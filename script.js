let headerContainer = document.getElementById('header-container');
let hamburger = document.getElementById('hamburger');
let navHamburger = document.getElementById('nav-hamburger');

let about = document.getElementById('about');
let ecosystem = document.getElementById('ecosystem');
let devHub = document.getElementById('devhub');
let community = document.getElementById('community');
let mechanics = document.getElementById('mechanics');
let testnet = document.getElementById('testnet');

let forAbout = document.getElementById('forAbout');
let forEcosystem = document.getElementById('forEcosystem');
let forDevhub = document.getElementById('forDevhub');
let forCommunity = document.getElementById('forCommunity');
let forMechanics = document.getElementById('forMechanics');
let forTestnet = document.getElementById('forTestnet');

hamburger.addEventListener('click', () => {
  headerContainer.classList.toggle('style_activeMega__Veh5T');

  hamburger.classList.toggle('style_active__v2efS');
  navHamburger.classList.toggle('style_active__TEbWu');
});

about.addEventListener('click', () => {
  headerContainer.classList.toggle('style_activeMega__Veh5T');
  forAbout.classList.toggle('style_active__TEbWu');
});
ecosystem.addEventListener('click', () => {
  headerContainer.classList.toggle('style_activeMega__Veh5T');
  forEcosystem.classList.toggle('style_active__TEbWu');
});
devHub.addEventListener('click', () => {
  headerContainer.classList.toggle('style_activeMega__Veh5T');
  forDevhub.classList.toggle('style_active__TEbWu');
});
community.addEventListener('click', () => {
  headerContainer.classList.toggle('style_activeMega__Veh5T');
  forCommunity.classList.toggle('style_active__TEbWu');
});
mechanics.addEventListener('click', () => {
  headerContainer.classList.toggle('style_activeMega__Veh5T');
  forMechanics.classList.toggle('style_active__TEbWu');
});
testnet.addEventListener('click', () => {
  headerContainer.classList.toggle('style_activeMega__Veh5T');
  forTestnet.classList.toggle('style_active__TEbWu');
});

document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('#ground', {
    scrollTrigger: {
      trigger: '#ground',
      start: 'top 60%',
      end: '+=100',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
  });

  gsap.to('#join', {
    scrollTrigger: {
      trigger: '#join',
      start: 'top 40%',
      end: '+=100',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
  });

  gsap.to('#raisedOne', {
    scrollTrigger: {
      trigger: '#raisedOne',
      start: 'top 40%',
      end: '+=100',
      scrub: 1,
    },
    rotateY: 0,
    opacity: 1,
  });

  gsap.to('#raisedTwo', {
    scrollTrigger: {
      trigger: '#raisedTwo',
      start: 'top 40%',
      end: '+=100',
      scrub: 1,
    },
    rotateY: 0,
    opacity: 1,
  });

  gsap.to('#imageThreeD', {
    scrollTrigger: {
      trigger: '#imageThreeD',
      start: 'top 70%',
      end: '+=100',
      scrub: 1,
    },
    y: 10,
    opacity: 1,
  });

  gsap.to('#presale', {
    scrollTrigger: {
      trigger: '#presale',
      start: 'top 90%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
  });

  gsap.to('#howTo', {
    scrollTrigger: {
      trigger: '#howTo',
      start: 'top 90%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
  });

  gsap.to('#aboutText', {
    scrollTrigger: {
      trigger: '#aboutText',
      start: 'top 80%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#blockdagText', {
    scrollTrigger: {
      trigger: '#blockdagText',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#represents', {
    scrollTrigger: {
      trigger: '#represents',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#poweredBy', {
    scrollTrigger: {
      trigger: '#poweredBy',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#OpenAI', {
    scrollTrigger: {
      trigger: '#OpenAI',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#Gemini', {
    scrollTrigger: {
      trigger: '#Gemini',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#ASUS', {
    scrollTrigger: {
      trigger: '#ASUS',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#GitHub', {
    scrollTrigger: {
      trigger: '#GitHub',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#google', {
    scrollTrigger: {
      trigger: '#google',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#bing', {
    scrollTrigger: {
      trigger: '#bing',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#mysql', {
    scrollTrigger: {
      trigger: '#mysql',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#cloudflare', {
    scrollTrigger: {
      trigger: '#cloudflare',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#ethereum', {
    scrollTrigger: {
      trigger: '#ethereum',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#tether', {
    scrollTrigger: {
      trigger: '#tether',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#binance', {
    scrollTrigger: {
      trigger: '#binance',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#trust', {
    scrollTrigger: {
      trigger: '#trust',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#aviva', {
    scrollTrigger: {
      trigger: '#aviva',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#analytics', {
    scrollTrigger: {
      trigger: '#analytics',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#microsoft', {
    scrollTrigger: {
      trigger: '#microsoft',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#adobe', {
    scrollTrigger: {
      trigger: '#adobe',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#coinstats', {
    scrollTrigger: {
      trigger: '#coinstats',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#telegram', {
    scrollTrigger: {
      trigger: '#telegram',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#gmail', {
    scrollTrigger: {
      trigger: '#gmail',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#moonpay', {
    scrollTrigger: {
      trigger: '#moonpay',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#visa', {
    scrollTrigger: {
      trigger: '#visa',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#mastercard', {
    scrollTrigger: {
      trigger: '#mastercard',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#gpay', {
    scrollTrigger: {
      trigger: '#gpay',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#applepay', {
    scrollTrigger: {
      trigger: '#applepay',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    x: 0,
    opacity: 1,
    ease: 'elastic.inOut',
  });

  gsap.to('#features', {
    scrollTrigger: {
      trigger: '#features',
      start: 'top 95%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
  });

  gsap.to('#Attributes', {
    scrollTrigger: {
      trigger: '#Attributes',
      start: 'top 80%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
    z: 0,
  });

  gsap.to('#fast', {
    scrollTrigger: {
      trigger: '#fast',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#Decentralized', {
    scrollTrigger: {
      trigger: '#Decentralized',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#Secure', {
    scrollTrigger: {
      trigger: '#Secure',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#Compatible', {
    scrollTrigger: {
      trigger: '#Compatible',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#Drag', {
    scrollTrigger: {
      trigger: '#Drag',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#Innovative', {
    scrollTrigger: {
      trigger: '#Innovative',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#teamd-sm-p', {
    scrollTrigger: {
      trigger: '#teamd-sm-p',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#teamd-sm-strength', {
    scrollTrigger: {
      trigger: '#teamd-sm-strength',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#teamd-md', {
    scrollTrigger: {
      trigger: '#teamd-md',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#antony-turner', {
    scrollTrigger: {
      trigger: '#antony-turner',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#Jeremy', {
    scrollTrigger: {
      trigger: '#Jeremy',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#Youssef', {
    scrollTrigger: {
      trigger: '#Youssef',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#Clarke', {
    scrollTrigger: {
      trigger: '#Clarke',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#Herlihy', {
    scrollTrigger: {
      trigger: '#Herlihy',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#PARTNERSHIP', {
    scrollTrigger: {
      trigger: '#PARTNERSHIP',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#OurPartners', {
    scrollTrigger: {
      trigger: '#OurPartners',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#Dortmund', {
    scrollTrigger: {
      trigger: '#Dortmund',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });
  gsap.to('#DortmundPartner', {
    scrollTrigger: {
      trigger: '#DortmundPartner',
      start: 'top 90%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });
  gsap.to('#Inter', {
    scrollTrigger: {
      trigger: '#Inter',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });
  gsap.to('#InterPartner', {
    scrollTrigger: {
      trigger: '#InterPartner',
      start: 'top 90%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#Pereira', {
    scrollTrigger: {
      trigger: '#Pereira',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#PereiraPartner', {
    scrollTrigger: {
      trigger: '#PereiraPartner',
      start: 'top 90%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#KEYNOTE', {
    scrollTrigger: {
      trigger: '#KEYNOTE',
      start: 'top 80%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#WatchKeynote', {
    scrollTrigger: {
      trigger: '#WatchKeynote',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#WATCHNOW', {
    scrollTrigger: {
      trigger: '#WATCHNOW',
      start: 'top 55%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#Partnersss', {
    scrollTrigger: {
      trigger: '#Partnersss',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#mediaPartners', {
    scrollTrigger: {
      trigger: '#mediaPartners',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#across', {
    scrollTrigger: {
      trigger: '#across',
      start: 'top 50%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#bloomberg', {
    scrollTrigger: {
      trigger: '#bloomberg',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#coin-telegraph', {
    scrollTrigger: {
      trigger: '#coin-telegraph',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#coindesk', {
    scrollTrigger: {
      trigger: '#coindesk',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#ibt', {
    scrollTrigger: {
      trigger: '#ibt',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#dailycoin', {
    scrollTrigger: {
      trigger: '#dailycoin',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#yahoo', {
    scrollTrigger: {
      trigger: '#yahoo',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#newsbtc', {
    scrollTrigger: {
      trigger: '#newsbtc',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#FastestGrowing', {
    scrollTrigger: {
      trigger: '#FastestGrowing',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#decentralizedtechnology', {
    scrollTrigger: {
      trigger: '#decentralizedtechnology',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#Connectwithus', {
    scrollTrigger: {
      trigger: '#Connectwithus',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#telegramIcon', {
    scrollTrigger: {
      trigger: '#telegramIcon',
      start: 'top 90%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
    ease: 'elastic.out(1, 0.9)',
  });

  gsap.to('#xIcon', {
    scrollTrigger: {
      trigger: '#xIcon',
      start: 'top 85%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
    ease: 'elastic.out(1, 0.9)',
  });

  gsap.to('#discordIcon', {
    scrollTrigger: {
      trigger: '#discordIcon',
      start: 'top 80%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
    ease: 'elastic.out(1, 0.9)',
  });

  gsap.to('#youtubeIcon', {
    scrollTrigger: {
      trigger: '#youtubeIcon',
      start: 'top 75%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
    ease: 'elastic.out(1, 0.9)',
  });

  gsap.to('#facebookIcon', {
    scrollTrigger: {
      trigger: '#facebookIcon',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
    ease: 'elastic.out(1, 0.9)',
  });

  gsap.to('#instagramIcon', {
    scrollTrigger: {
      trigger: '#instagramIcon',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
    ease: 'elastic.out(1, 0.9)',
  });

  gsap.to('#mediumIcon', {
    scrollTrigger: {
      trigger: '#mediumIcon',
      start: 'top 62%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
    ease: 'elastic.out(1, 0.9)',
  });

  gsap.to('#linkedlnIcon', {
    scrollTrigger: {
      trigger: '#linkedlnIcon',
      start: 'top 55%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
    ease: 'elastic.out(1, 0.9)',
  });

  gsap.to('#theReviews', {
    scrollTrigger: {
      trigger: '#theReviews',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#iframeAnimOne', {
    scrollTrigger: {
      trigger: '#iframeAnimOne',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
  });

  gsap.to('#iframeAnimTwo', {
    scrollTrigger: {
      trigger: '#iframeAnimTwo',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#updates', {
    scrollTrigger: {
      trigger: '#updates',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#latestUpdates', {
    scrollTrigger: {
      trigger: '#latestUpdates',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#JoinTheGround', {
    scrollTrigger: {
      trigger: '#JoinTheGround',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#LearnMore', {
    scrollTrigger: {
      trigger: '#LearnMore',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#ReleasedOne', {
    scrollTrigger: {
      trigger: '#ReleasedOne',
      start: 'top 70%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#ReleasedTwo', {
    scrollTrigger: {
      trigger: '#ReleasedTwo',
      start: 'top 65%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });

  gsap.to('#ReleasedThree', {
    scrollTrigger: {
      trigger: '#ReleasedThree',
      start: 'top 60%',
      end: '+=200',
      scrub: 1,
    },
    opacity: 1,
    x: 0,
    y: 0,
  });
});
