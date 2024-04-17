import{a as b,S,i as g}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const w="43236176-8efbdba212834d112cbf0fa21",v="https://pixabay.com/api/?",f=15;async function P(t,r=1){try{return(await b.get(v,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:f}})).data}catch(o){throw new Error(o.response.statusText)}}const q=new S(".gallery-list a",{captionsData:"alt",captionDelay:250});function h(t,r){t.innerHTML+=M(r),q.refresh()}function M(t){return t.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:s,comments:a,downloads:L})=>` <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <figure class="gallery-figure">
            <img
              class="gallery-image"
              src="${r}"
              alt="${i}"
              width="360"
            />
            <figcaption class="gallery-figcaption">
              <ul class="gallery-text">
                <li>
                  <span>Likes</span>
                  <p>${e}</p>
                </li>
                <li>
                  <span>Views</span>
                  <p>${s}</p>
                </li>
                <li>
                  <span>Comments</span>
                  <p>${a}</p>
                </li>
                <li>
                  <span>Downloads</span>
                  <p>${L}</p>
                </li>
              </ul>
            </figcaption>
          </figure>
        </a>
      </li>`).join("")}const m=document.querySelector(".js-search-form"),E=document.querySelector(".search-input"),u=document.querySelector(".gallery-list"),d=document.querySelector(".loader-wrapper"),l=document.querySelector(".load-more-btn");let n=1,c="";m.addEventListener("submit",$);l.addEventListener("click",H);async function $(t){if(t.preventDefault(),u.innerHTML="",n=1,c=E.value.trim(),l.classList.add("is-hidden"),c===""){p("Please fill out the input field!");return}d.classList.remove("is-hidden");try{const r=await P(c,n);if(r.hits.length===0){p("Sorry, there are no images matching your search query. Please try again!");return}h(u,r.hits),O(r.totalHits)}catch(r){console.error(r)}finally{d.classList.add("is-hidden"),m.reset()}}async function H(){n+=1,d.classList.remove("is-hidden"),h(u,data.hits),x();const t=Math.ceil(data.totalHits/f);n>=t&&(l.classList.add("is-hidden"),g.info({...y,message:"We're sorry, but you've reached the end of search results.,"}))}function O(t){t>f&&l.classList.remove("is-hidden")}function x(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const y={title:"",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff",timeout:3e3,pauseOnHover:!1};function p(t){g.error({...y,message:`${t}`})}
//# sourceMappingURL=commonHelpers.js.map
