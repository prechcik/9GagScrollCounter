let lastScroll = 0;
let cookieScroll = parseInt(getCookie('9gagScrolled'));
let totalScroll = lastScroll + cookieScroll;
var scrollDiv = document.createElement('DIV');
scrollDiv.classList.add('general-function');
scrollDiv.innerHTML = '<p><b>Total Scrolled: </b> <span id="scrollAmount">0</span></p>';

let header = document.getElementsByClassName('function-wrap')[0];
header.prepend(scrollDiv);
document.getElementById('scrollAmount').innerHTML = length(toCm(parseInt(getCookie('9gagScrolled'))));
document.addEventListener('scroll', (e) => {
  totalScroll += Math.abs(window.scrollY - lastScroll);
  lastScroll = window.scrollY;
  document.cookie = "9gagScrolled=" + totalScroll + "; expires=Tue, 19 Jan 2038 03:14:07 UTC";
  //console.log("Total Scrolled: " + length(toCm(parseInt(getCookie('9gagScrolled')))));
  document.getElementById('scrollAmount').innerHTML = length(toCm(parseInt(getCookie('9gagScrolled'))));
});




function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

function toCm(pixels) {
  return pixels * 2.54 / 96;
}

function length(cm) {
  let m, km, rkm, rcm;
  km = Math.floor(cm / 100000);
  rkm = cm % 100000;
  m = Math.floor(rkm / 100);
  rcm = rkm % 100;
  return km + 'km, ' + m + 'm, ' + rcm.toFixed(2) + 'cm';
}
