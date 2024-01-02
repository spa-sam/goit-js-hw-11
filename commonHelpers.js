import{S as u,i as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="41493530-c71176b83a18405cd33ba2537",y="photo",f="horizontal",p="true",g=`${d}?key=${m}&image_type=${y}&orientation=${f}&safesearch=${p}&q=`;function a(r,o){return`
    <div class="info-block">
      <p>${r}</p>
      <p>${o}</p>
    </div>
  `}function h({largeImageURL:r,webformatURL:o,tags:n,likes:i,views:e,comments:t,downloads:s}){return`
    <a href="${r}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${o}" alt="${n}" class="imgStyle" />
        <div class="infoStyle">
          ${a("Likes",i)}
          ${a("Views",e)}
          ${a("Comments",t)}
          ${a("Downloads",s)}
        </div>
      </div>
    </a>
  `}const S=new u(".lightbox-image",{captionsData:"alt",captionDelay:250});function b(r){const o=document.createElement("div");return o.className="gallery custom-gallery-style",r.appendChild(o),o}const $=document.querySelector(".container"),l={title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",messageSize:"322px"};document.querySelector("form").addEventListener("submit",function(r){r.preventDefault();const o=document.querySelector(".gallery")||b($);o.innerHTML="";const n=document.querySelector(".loader");n.style.display="block";const i=document.querySelector('input[type="text"]').value;fetch(`${g}${encodeURIComponent(i)}`).then(e=>e.json()).then(e=>{e.hits.length===0?c.warning(l):e.hits.forEach(t=>{const s=h(t);o.insertAdjacentHTML("beforeend",s)}),document.querySelector("form").reset(),S.refresh(),n.style.display="none"}).catch(e=>{console.error("Error:",e),n.style.display="none",c.error({...l,message:"An error occurred. Please try again later."})})});
//# sourceMappingURL=commonHelpers.js.map
