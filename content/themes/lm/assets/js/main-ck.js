//
// Main JS
// Date: Dec 2013
// Developers:
// Luis Matute      - luis.matute@me.com
// --------------------------------------------------
function tabs(){$(".tab").on("click",function(e){e.preventDefault();var t=$(this).closest(".section");t.children("header").toggleClass("active");t.children(".section-body").finish().slideToggle();t.attr("id")=="contact"&&$(".googlemaps").children().length==0&&googlemap_init($("#gmap .googlemaps").get(0),"San Pedro Sula, Cortes, Honduras")})}function formValidator(){$("form#contact-form").find("button").on("click",function(){var e=$(this),t=e.closest("form"),n=0,r=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;t.find(".error").removeClass("error");$.each(t.find(".required"),function(e,t){if($(t).val()===""){$(t).addClass("error");n=1}});if(t.find('input[type="email"]').length>0&&!r.test(t.find('input[type="email"]').val())){n=1;t.find('input[type="email"]').addClass("error")}n===0&&$.ajax({url:"/about/contact/",type:"post",data:$("#contact-form").serialize(),dataType:"json",success:function(e){console.log(e)},error:function(e,t,n){console.log(e);console.log(t);console.log(n)}});return!1})}function googlemap_init(e,t,n,r){googlemap_init_obj.dom=e;googlemap_init_obj.point=r;googlemap_init_obj.description=n;googlemap_init_obj.opt={zoom:14,center:new google.maps.LatLng(0,0),scrollwheel:!0,scaleControl:!1,disableDefaultUI:!1,mapTypeId:google.maps.MapTypeId.ROADMAP};var i=new google.maps.Geocoder;i.geocode({address:t},function(e,t){if(t==google.maps.GeocoderStatus.OK){googlemap_init_obj.address=e[0].geometry.location;googlemap_create()}else alert("Geocode was not successful for the following reason: "+t)});jQuery(window).resize(function(){googlemap_init_obj.map&&googlemap_init_obj.map.setCenter(googlemap_init_obj.address_position)})}function googlemap_create(){if(!googlemap_init_obj.address)return!1;googlemap_init_obj.map=new google.maps.Map(googlemap_init_obj.dom,googlemap_init_obj.opt);googlemap_init_obj.map.setCenter(googlemap_init_obj.address);var e=new google.maps.Marker({map:googlemap_init_obj.map,icon:googlemap_init_obj.point,position:googlemap_init_obj.map.getCenter()}),t=new google.maps.InfoWindow({content:googlemap_init_obj.description});google.maps.event.addListener(e,"click",function(){t.open(googlemap_init_obj.map,e)})}function googlemap_refresh(){googlemap_create()}function isotope(){var e=$("#my-projects");e.isotope({animationEngine:"css",masonryHorizontal:{rowHeight:174}});$("#portfolio-nav a").on("click",function(){var t=$(this).attr("data-filter");e.isotope({filter:t});return!1});e.isotope({filter:"*"})}function gaSetup(e){(function(e,t,n,r,i,s,o){e.GoogleAnalyticsObject=i;e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1;s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-40189119-1","luismatute.me");ga("send","pageview")}var googlemap_init_obj={map:null,dom:null,opt:null,address:null,point:null,description:null};$(document).ready(function(){tabs();formValidator();isotope();gaSetup()});