import{S as d,i}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",m="41493530-c71176b83a18405cd33ba2537",f="photo",p="horizontal",g="true",h=`${y}?key=${m}&image_type=${f}&orientation=${p}&safesearch=${g}&q=`;function s(o,r){return`
    <div style="display: flex;
                flex-direction: column;
                align-items: center;">
      <p>${o}</p>
      <p>${r}</p>
    </div>
  `}document.querySelector(".linkStyle");document.querySelector(".cardStyle");document.querySelector(".imgStyle");document.querySelector(".infoStyle");function S({largeImageURL:o,webformatURL:r,tags:n,likes:l,views:e,comments:t,downloads:c}){return`
    <a href="${o}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${r}" alt="${n}" class="imgStyle" />
        <div class="infoStyle">
          ${s("Likes",l)}
          ${s("Views",e)}
          ${s("Comments",t)}
          ${s("Downloads",c)}
  `}const $=new d(".lightbox-image",{captionsData:"alt",captionDelay:250});function u(o){const r=document.createElement("div");return r.className="gallery custom-gallery-style",o.appendChild(r),r}const E=document.querySelector(".container");u(E);document.querySelector("form").addEventListener("submit",function(o){o.preventDefault();const r=document.querySelector(".gallery")||u();r.innerHTML="";const n=document.querySelector(".loader");n.style.display="block";const l=document.querySelector('input[type="text"]').value;fetch(`${h}${encodeURIComponent(l)}`).then(e=>e.json()).then(e=>{e.hits.length===0?i.warning(a):e.hits.forEach(t=>{const c=S(t);r.innerHTML+=c}),b.value="",$.refresh(),n.style.display="none"}).catch(e=>{console.error("Error:",e),n.style.display="none",i.error({...a,message:"An error occurred. Please try again later."})})});const b=document.querySelector(".search-input"),a={title:"",message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",messageSize:"322px"};
//# sourceMappingURL=commonHelpers.js.map
