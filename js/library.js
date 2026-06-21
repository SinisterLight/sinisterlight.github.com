(function(){
  var root=document.querySelector('.lib'); if(!root) return;
  var dataEl=document.getElementById('lib-data'); if(!dataEl) return;
  var BK; try{ BK=JSON.parse(dataEl.textContent); }catch(e){ return; }
  root.classList.add('has-js');

  var GC={"Fiction":"#6E3D54","Science":"#2F6B6B","Economics & Finance":"#8A6A2F","Technology & Engineering":"#3C5A78","Philosophy":"#5E6438","Psychology & Behaviour":"#9A5333","History":"#7A3B30","Biography & Memoir":"#44456E","SciFi & Fantasy":"#534379","Spirituality & Religion":"#7A5A2E","Writing, Design & Creativity":"#356A5B","Politics & Society":"#7B3550","Productivity & Self-Help":"#8A7A3A","Health":"#4A7A5E","Business & Management":"#41506B"};
  var LEDE={
    library:"Almost every book I've read — grouped by what it's about. Stroll a shelf; every book tells a story.",
    reading:"What's on my desk right now — a few books I'm tinkering with, pondering, and switching between.",
    anti:"My anti-library: books I own or mean to read but haven't yet — the ones I've collected and keep wanting to get to. The shelf of what I want to read next."
  };
  var shade=function(hex,p){var n=parseInt(hex.slice(1),16),r=n>>16,g=(n>>8)&255,b=n&255;r=Math.round(r*(1-p));g=Math.round(g*(1-p));b=Math.round(b*(1-p));return 'rgb('+r+','+g+','+b+')';};
  var thickOf=function(t){var h=0;for(var i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))%97;return 12+Math.round(h/97*30);};

  var D={library:{},reading:{},anti:{}};
  BK.forEach(function(b){(D[b.w][b.g]=D[b.w][b.g]||[]).push(b);});
  var wing="library",genre=null,idx=0;
  var isTouch=matchMedia("(max-width:860px)").matches||('ontouchstart' in window);
  var $=function(id){return document.getElementById(id);};
  var rail=$("rail"),genresEl=$("genres"),counter=$("counter"),caption=$("caption"),vit=$("vitrine");
  var backdrop=$("libBackdrop"),sheetClose=$("sheetClose");
  function openSheet(){root.classList.add('sheet-open');}
  function closeSheet(){root.classList.remove('sheet-open');}
  var genresOf=function(w){return Object.keys(D[w]);};
  var shelf=function(){return D[wing][genre]||[];};

  function dims(){var vh=vit.clientHeight||440;var H=Math.round(vh*0.36),W=Math.round(H*0.66);return {W:W,H:H};}
  function buildGenres(){
    genresEl.innerHTML="";
    genresOf(wing).forEach(function(g){
      var b=document.createElement("button");
      b.className="genre-tab";b.setAttribute("role","tab");b.setAttribute("aria-current",g===genre?"true":"false");
      b.innerHTML='<span class="dot" style="background:'+(GC[g]||'#999')+'"></span>'+g;
      b.onclick=function(){closeSheet();genre=g;idx=0;render();showCaption();};
      genresEl.appendChild(b);
    });
  }
  function updateGenreFade(){
    if(!genresEl) return;
    var maxS=genresEl.scrollWidth-genresEl.clientWidth;
    genresEl.style.setProperty('--fl', genresEl.scrollLeft>4?'30px':'0px');
    genresEl.style.setProperty('--fr', (maxS>4 && genresEl.scrollLeft<maxS-4)?'30px':'0px');
  }
  function makeBook(b,i){
    var d=dims(),W=d.W,H=d.H,c=GC[b.g]||"#555",grad="linear-gradient(160deg,"+shade(c,.05)+","+shade(c,.42)+")",thick=thickOf(b.t);
    var disp=(b.t.split(':')[0].split('(')[0].trim())||b.t,tlen=disp.length,jf=Math.max(9,Math.round(W*(tlen>30?0.12:tlen>20?0.145:tlen>12?0.17:0.2))),af=Math.max(7,Math.round(W*0.088));
    var el=document.createElement("button");
    el.className="book";el.dataset.i=i;el.setAttribute("aria-label",b.t+" by "+b.a);
    el.innerHTML=
      '<div class="edge" style="width:'+thick+'px;background:linear-gradient(90deg,'+shade(c,.55)+','+shade(c,.32)+')"></div>'+
      '<div class="face" style="width:'+W+'px;height:'+H+'px;background:'+grad+'">'+
        (b.cover
          ? '<img class="cover" src="'+b.cover+'" alt="" loading="lazy" decoding="async" onerror="this.remove()">'
          : '<div class="jacket"><div class="jt" style="font-size:'+jf+'px">'+disp+'</div><div class="ja" style="font-size:'+af+'px">'+b.a+'</div></div>')+
      '</div>'+
      '<div class="reflection" style="width:'+W+'px;height:'+H+'px;background:'+grad+'"></div>';
    el.onclick=function(){
      if(isTouch){ idx=i; layout(); updateCounter(); fillCaption(); openSheet(); }
      else if(i===idx){ showCaption(); }
      else { idx=i; layout(); updateCounter(); showCaption(); }
    };
    return el;
  }
  var bookEls=[];
  // layout(): reposition the EXISTING book elements for the current idx.
  // Called on every swipe/step so the CSS transform-transition animates a smooth glide
  // and the cover <img>s are never recreated (no reload / no placeholder flicker).
  function layout(){
    var N=bookEls.length; if(!N)return;
    var GAP=dims().W*(isTouch?0.84:0.78);
    for(var i=0;i<N;i++){
      var el=bookEls[i],o=i-idx;
      if(N>1){ if(o>N/2)o-=N; else if(o<-N/2)o+=N; }
      var a=Math.abs(o),center=o===0;
      el.classList.toggle("is-center",center);
      if(a>4){el.style.opacity="0";el.style.pointerEvents="none";el.style.zIndex="0";continue;}
      el.style.pointerEvents="auto";
      var cs=isTouch?1.82:1.6, ss=isTouch?0.66:0.8;
      var tx=o*GAP, tz=center?85:-a*150, ry=center?0:(o<0?30:-30), sc=center?cs:(ss-a*0.04);
      el.style.transform="translate(-50%,-50%) translateX("+tx+"px) translateZ("+tz+"px) rotateY("+ry+"deg) scale("+sc+")";
      el.style.opacity=a>3?0:(center?1:0.58-a*0.13);
      el.style.filter=center?"saturate(1.06)":"saturate(.82) blur("+(a>=1?a*0.45:0.3)+"px)";
      el.style.zIndex=100-a;
    }
  }
  function updateCounter(){var list=shelf();counter.textContent=list.length?(idx+1)+" / "+list.length+" · "+genre:"";}
  // render(): full rebuild — only when the shelf (wing/genre) or book sizes change.
  function render(){
    var list=shelf(),N=list.length; rail.innerHTML=""; bookEls=[];
    list.forEach(function(b,i){var el=makeBook(b,i);rail.appendChild(el);bookEls.push(el);});
    layout();
    updateCounter();
    var dis=N<=1,pv=$("prev"),nx=$("next");
    if(pv){pv.disabled=dis;pv.setAttribute("aria-disabled",dis);}
    if(nx){nx.disabled=dis;nx.setAttribute("aria-disabled",dis);}
    document.querySelectorAll(".wing-btn").forEach(function(x){x.setAttribute("aria-selected",x.dataset.wing===wing);});
    buildGenres();
    updateGenreFade();
  }
  var capTimer=null;
  function showCaption(){clearTimeout(capTimer);capTimer=setTimeout(fillCaption,isTouch?40:300);}
  function fillCaption(){
    var b=shelf()[idx]; if(!b)return;
    $("cGenre").textContent=genre;
    $("cTitle").innerHTML="<i>"+b.t+"</i>";
    $("cMeta").textContent=b.a;
    $("cTags").innerHTML=(b.tg||[]).map(function(t){return "<span>"+t+"</span>";}).join("");
    $("cBody").textContent=b.n||"";
    caption.classList.add("show");
  }
  function step(d){var n=bookEls.length;if(!n)return;idx=(idx+d+n)%n;layout();updateCounter();showCaption();}
  function changeGenre(d){var gs=genresOf(wing),i=gs.indexOf(genre);i=Math.max(0,Math.min(gs.length-1,i+d));genre=gs[i];idx=0;render();showCaption();}
  function setWing(w){closeSheet();wing=w;$("lede").textContent=LEDE[w];var gs=genresOf(w);genre=gs[0]||null;idx=0;render();showCaption();}

  document.querySelectorAll(".wing-btn").forEach(function(b){b.onclick=function(){setWing(b.dataset.wing);};});
  $("prev").onclick=function(){step(-1);}; $("next").onclick=function(){step(1);};
  if(backdrop) backdrop.onclick=closeSheet;
  if(sheetClose) sheetClose.onclick=closeSheet;
  var sheetHandle=document.querySelector('.lib .sheet-handle'); if(sheetHandle) sheetHandle.onclick=closeSheet;
  var rightEl=document.querySelector('.lib .right');
  if(rightEl){ var _sy=0;
    rightEl.addEventListener('touchstart',function(e){_sy=e.touches[0].clientY;},{passive:true});
    rightEl.addEventListener('touchmove',function(e){ if(rightEl.scrollTop<=0 && (e.touches[0].clientY-_sy)>60) closeSheet(); },{passive:true});
  }
  addEventListener("keydown",function(e){
    if(e.key==="ArrowRight")step(1);else if(e.key==="ArrowLeft")step(-1);
    else if(e.key==="ArrowUp"){e.preventDefault();changeGenre(-1);}
    else if(e.key==="ArrowDown"){e.preventDefault();changeGenre(1);}
  });
  var wheelLock=false;
  vit.addEventListener("wheel",function(e){
    if(wheelLock)return;var m=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;
    if(Math.abs(m)<6)return;e.preventDefault();wheelLock=true;step(m>0?1:-1);setTimeout(function(){wheelLock=false;},230);
  },{passive:false});
  var dragging=false,startX=0,baseIdx=0;
  function down(x){dragging=true;startX=x;baseIdx=idx;}
  function move(x){
    if(!dragging)return;var n=bookEls.length;if(!n)return;
    var sp=isTouch?56:90,target=((baseIdx+Math.round((startX-x)/sp))%n+n)%n;
    if(target!==idx){idx=target;layout();updateCounter();showCaption();}
  }
  function up(){dragging=false;}
  vit.addEventListener("pointerdown",function(e){down(e.clientX);});
  addEventListener("pointermove",function(e){move(e.clientX);});addEventListener("pointerup",up);
  vit.addEventListener("touchstart",function(e){down(e.touches[0].clientX);},{passive:true});
  vit.addEventListener("touchmove",function(e){move(e.touches[0].clientX);},{passive:true});
  vit.addEventListener("touchend",up);
  if(!isTouch){vit.addEventListener("pointermove",function(e){
    var r=vit.getBoundingClientRect();
    var rx=((e.clientY-r.top)/r.height-0.5)*-4,ry=((e.clientX-r.left)/r.width-0.5)*5;
    rail.style.transform="rotateX("+rx+"deg) rotateY("+ry+"deg)";
  });}
  genresEl.addEventListener("scroll",updateGenreFade,{passive:true});
  addEventListener("resize",function(){render();});
  setWing("library");
})();
