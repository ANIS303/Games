import  {liveGame , gameCategory,platApi} from "./apiGames.js";
import { idApi,targetId } from "./searchingApi.js";






let navss =$(".navbar").offset().top+100

$(window).scroll(function(){
    let winScroll= $(window).scrollTop()
if(winScroll > navss ){
    $('nav').css({"position":"fixed","top":"0" ,"left":"5%"});
} else {
$('nav').css({"position":"static","top":"auto"});}
console.log(winScroll);
})
console.log(navss);