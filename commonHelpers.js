import{S as u,i as a}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="41493530-c71176b83a18405cd33ba2537",y="photo",f="horizontal",p="true",g=`${d}?key=${m}&image_type=${y}&orientation=${f}&safesearch=${p}&q=`;function c(o,r){return`
    <div class="info-block">
      <p>${o}</p>
      <p>${r}</p>
    </div>
  `}function h({largeImageURL:o,webformatURL:r,tags:n,likes:i,views:e,comments:t,downloads:s}){return`
    <a href="${o}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${r}" alt="${n}" class="imgStyle" />
        <div class="infoStyle">
          ${c("Likes",i)}
          ${c("Views",e)}
          ${c("Comments",t)}
          ${c("Downloads",s)}
        </div>
      </div>
    </a>
  `}const S=new u(".lightbox-image",{captionsData:"alt",captionDelay:250});function b(o){const r=document.createElement("div");return r.className="gallery custom-gallery-style",o.appendChild(r),r}const $=document.querySelector(".container");document.querySelector("form").addEventListener("submit",function(o){o.preventDefault();const r=document.querySelector(".gallery")||b($);r.innerHTML="";const n=document.querySelector(".loader");n.style.display="block";const i=document.querySelector('input[type="text"]').value;fetch(`${g}${encodeURIComponent(i)}`).then(e=>e.json()).then(e=>{e.hits.length===0?a.warning(l):e.hits.forEach(t=>{const s=h(t);r.insertAdjacentHTML("beforeend",s)}),document.querySelector("form").reset(),S.refresh(),n.style.display="none"}).catch(e=>{console.error("Error:",e),n.style.display="none",a.error({...l,message:"An error occurred. Please try again later."})})});document.querySelector(".search-input");const l={title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",messageSize:"322px"};
//# sourceMappingURL=commonHelpers.js.map
