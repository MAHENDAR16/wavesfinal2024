const rushinit=(function(){"use strict";var body=document.querySelector('body');var header=document.getElementById('wrap-header');var wrapload=document.querySelector('.loading');var glass=document.querySelector('.glasseffect');var GL=document.querySelectorAll(".gl");var menubar=document.querySelector('.menu-bar');var closemenu=document.querySelector('.wrap-close')
var mobilenav=document.querySelector('.mobile-navwrap');var mobilelink=document.querySelectorAll('.navigation-listmobile li a');var testimonials=document.getElementById("wrap-testimonial");var buttonsubmit=document.getElementById('submitbutton');var formcontact=document.getElementById('formcontact');var allinputs=formcontact.querySelectorAll('.input-control');var information=document.querySelector('.contactform__loader');var inputelement=document.querySelector('.inputtext');var textareaelement=document.querySelector('.comentarea');var glassx=true;var glassonmobile=true;var isMobile={Android:function(){return navigator.userAgent.match(/Android/i);},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},Windows:function(){return navigator.userAgent.match(/IEMobile/i);},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows());}};const loadder=function(e){setTimeout(()=>{fadeOut(wrapload)},1000);};const testimonialslider=function(e){new KeenSlider(testimonials,{loop:true,mode:"free-snap",breakpoints:{"(min-width: 320px)":{slides:{perView:1,spacing:5},},"(min-width: 400px)":{slides:{perView:1,spacing:5},},"(min-width: 1000px)":{slides:{perView:1,spacing:20},},},slides:{perView:2,spacing:15,}});};const tiltinit=function(e){VanillaTilt.init(GL,{max:10,speed:400});};const fadeIn=function(el){el.classList.add('show');el.classList.remove('hide');};const fadeOut=function(el){el.classList.add('hide');el.classList.remove('show');};const posttheform=function(e){formcontact.onsubmit=async(e)=>{e.preventDefault();var valid=[];allinputs.forEach(function(i,j){if(i.getAttribute('data-name')){var checkAttr=i.getAttribute('data-name');}else{var checkAttr=i.tagName;}
var thisvalue=i.value;switch(checkAttr){case 'name':if(thisvalue==''){i.classList.add("error");valid.push('<li>Please check your input name</li>');}else if(thisvalue.length<3){valid.push('<li>Sorry your name char is to short</li>');}else{i.classList.remove("error");}
break;case 'email':var regEmail=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;if(i.value==''||!regEmail.test(i.value)){i.classList.add("error");valid.push('<li>Please check your mail address input</li>');}else{i.classList.remove("error");}
break;case 'comment':if(thisvalue==''){i.classList.add("error");valid.push('<li>Please write something</li>');}else{i.classList.remove("error");}
break;default:if(i.value==''){valid.push('<li>Something was wrong</li>');i.classList.add("error");}else{i.classList.remove("error");}
break;};});if(valid.length){information.innerHTML=`<div class="alert alert-danger" role="alert"><h4 class="alert-heading">There is something wrong !</h4> <hr><p class="mb-0"><ul class="errorlist">`+valid.join('')+`</ul></p></div>`;}else{information.innerHTML=`<div class="d-flex align-items-center"><strong class="font-weight-normal">Please wait...</strong><div class="spinner-border spinner-border-sm ml-auto" role="status" aria-hidden="true"></div></div>`;inputelement.setAttribute("readonly","true");textareaelement.setAttribute("readonly","true");buttonsubmit.setAttribute("disable","true");let response=await fetch('https://mail-sage.vercel.app/mail',{method:'POST',body:new FormData(formcontact)}).then((response)=>response.text()).then((data)=>{if(data==='your message send'){formcontact.reset();inputelement.removeAttribute("readonly");textareaelement.removeAttribute("readonly");buttonsubmit.removeAttribute("disable");information.innerHTML=`<div class="alert alert-success  " role="alert"><h4 class="alert-heading">Message send successful !</h4> <hr><p class="mb-0">I will reply to your message soon thank you</p></div>`;}}).catch((error)=>{formcontact.reset();inputelement.removeAttribute("readonly");textareaelement.removeAttribute("readonly");buttonsubmit.removeAttribute("disable");information.innerHTML=`<div class="alert alert-danger " role="alert"><h4 class="alert-heading">There is something wrong !</h4> <hr><p class="mb-0">Sorry, your message failed to be sent due to an unknown error</p></div>`;});}
return false;};};const buttonclick=function(e){menubar.addEventListener("click",function(e){this.style.display='none';mobilenav.style.display='block';mobilenav.classList.remove('closemenu');mobilenav.classList.add('showmenu');closemenu.style.display='block';body.classList.add('fixed');e.preventDefault();},false);closemenu.addEventListener("click",function(e){this.style.display='none';mobilenav.classList.remove('showmenu');mobilenav.classList.add('closemenu');body.classList.remove('fixed');menubar.style.display='block';e.preventDefault();},false);for(var i=0;i<mobilelink.length;i++){mobilelink[i].addEventListener('click',function(e){closemenu.style.display='none';mobilenav.classList.remove('showmenu');mobilenav.classList.add('closemenu');body.classList.remove('fixed');menubar.style.display='block';},false);};};const bindEvents=function(e){window.onbeforeunload=function(e){window.scrollTo(0,0);};window.addEventListener('load',(e)=>{loadder();});window.addEventListener('DOMContentLoaded',(e)=>{buttonclick();new bootstrap.ScrollSpy(document.body,{target:'*',offset:1});if(!isMobile.any()){tiltinit();};testimonialslider();GLightbox();AOS.init({disable:function(){var maxWidth=999;return window.innerWidth<maxWidth;},once:false});posttheform();});window.addEventListener("scroll",(e)=>{if(window.pageYOffset>10){header.classList.add('fixi');}else{header.classList.remove('fixi');};});window.addEventListener("activate.bs.scrollspy",(e)=>{var index=document.querySelector('nav a.active').getAttribute('href');if(index=='#home'){fadeOut(glass);};if(isMobile.any()){if(glassonmobile){if(index=='#home'){fadeOut(glass);}else{fadeIn(glass);}};};if(!isMobile.any()){if(glassx){if(index=='#home'||index=='#contact-section'){fadeOut(glass);}else{fadeIn(glass);}};};});};const Init=function(e){bindEvents();};return{Init:Init};}());rushinit.Init();