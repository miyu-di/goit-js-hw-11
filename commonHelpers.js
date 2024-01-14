import{S as d,i as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerpolicy&&(e.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?e.credentials="include":s.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(s){if(s.ep)return;s.ep=!0;const e=a(s);fetch(s.href,e)}})();const n=document.querySelector(".form"),f=document.querySelector(".inputsrc"),i=document.querySelector(".loader"),c=document.querySelector(".gallery"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",l=>{l.preventDefault();const t=new URLSearchParams({key:"41766309-9b727aff341ca6e5a641aa2fb",q:f.value,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?${t}`).then(a=>{if(i.classList.remove("hide"),!a.ok)throw new Error(a.status);return a.json()}).then(a=>{setTimeout(()=>{if(i.classList.add("hide"),c.innerHTML="",a.hits.length>0){const r=a.hits.reduce((s,e)=>s+`<li>
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image">
          </a>
          <div class="info">
            <div class="field">
              <span class="label">Likes</span>
              <span class="value">${e.likes}</span>
            </div>
            <div class="field">
              <span class="label">Views</span>
              <span class="value">${e.views}</span>
            </div>
            <div class="field">
              <span class="label">Comments</span>
              <span class="value">${e.comments}</span>
            </div>
            <div class="field">
              <span class="label">Downloads</span>
              <span class="value">${e.downloads}</span>
            </div>
          </div>
          </li>`,"");c.insertAdjacentHTML("beforeend",r),p.refresh()}else u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},2e3)}).catch(a=>{console.log(a)}).finally(()=>{n.reset()})});
//# sourceMappingURL=commonHelpers.js.map
