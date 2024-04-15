import{a as L,S as b,i as w}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const S="43236176-8efbdba212834d112cbf0fa21",v="https://pixabay.com/api/?",p=15;async function h(e,r=1){try{return(await L.get(v,{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:p}})).data}catch(o){throw new Error(o.response.statusText)}}const P=new b(".gallery-list a",{captionsData:"alt",captionDelay:250});function g(e,r){e.innerHTML+=q(r),P.refresh()}function q(e){return e.map(({webformatURL:r,largeImageURL:o,tags:a,likes:t,views:s,comments:i,downloads:m})=>` <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <figure class="gallery-figure">
            <img
              class="gallery-image"
              src="${r}"
              alt="${a}"
              width="360"
            />
            <figcaption class="gallery-figcaption">
              <ul class="gallery-text">
                <li>
                  <span>Likes</span>
                  <p>${t}</p>
                </li>
                <li>
                  <span>Views</span>
                  <p>${s}</p>
                </li>
                <li>
                  <span>Comments</span>
                  <p>${i}</p>
                </li>
                <li>
                  <span>Downloads</span>
                  <p>${m}</p>
                </li>
              </ul>
            </figcaption>
          </figure>
        </a>
      </li>`).join("")}const y=document.querySelector(".js-search-form"),E=document.querySelector(".search-input"),d=document.querySelector(".gallery-list"),l=document.querySelector(".loader-wrapper"),u=document.querySelector(".load-more-btn");let c=1,n="";y.addEventListener("submit",M);u.addEventListener("click",$);async function M(e){if(e.preventDefault(),d.innerHTML="",c=1,n=E.value.trim(),u.classList.add("is-hidden"),n===""){f("Please fill out the input field!");return}l.classList.remove("is-hidden");try{const r=await h(n,c);if(r.hits.length===0){f("Sorry, there are no images matching your search query. Please try again!");return}g(d,r.hits),O(r.totalHits)}catch(r){console.error(r)}finally{l.classList.add("is-hidden"),y.reset()}}async function $(){c+=1,l.classList.remove("is-hidden");try{const e=await h(n,c);if(e.hits.length===0){u.classList.add("is-hidden"),f("We're sorry, but you've reached the end of search results.");return}g(d,e.hits),x()}catch(e){console.error(e)}finally{l.classList.add("is-hidden")}}function O(e){e>p&&u.classList.remove("is-hidden")}function x(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const B={title:"",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff",timeout:3e3,pauseOnHover:!1};function f(e){w.error({...B,message:`${e}`})}
//# sourceMappingURL=commonHelpers.js.map
