/*
 * Modernizr JavaScript library 1.5
 * http://www.modernizr.com/
 *
 * Copyright (c) 2009-2010 Faruk Ates - http://farukat.es/
 * Dual-licensed under the BSD and MIT licenses.
 * http://www.modernizr.com/license/
 *
 * Featuring major contributions by
 * Paul Irish  - http://paulirish.com
 */
window.Modernizr=(function(window,doc,undefined){var version="1.5",ret={},enableHTML5=true,fontfaceCheckDelay=75,docElement=doc.documentElement,mod="modernizr",m=doc.createElement(mod),m_style=m.style,f=doc.createElement("input"),canvas="canvas",canvastext="canvastext",rgba="rgba",hsla="hsla",multiplebgs="multiplebgs",backgroundsize="backgroundsize",borderimage="borderimage",borderradius="borderradius",boxshadow="boxshadow",opacity="opacity",cssanimations="cssanimations",csscolumns="csscolumns",cssgradients="cssgradients",cssreflections="cssreflections",csstransforms="csstransforms",csstransforms3d="csstransforms3d",csstransitions="csstransitions",fontface="fontface",geolocation="geolocation",video="video",audio="audio",input="input",inputtypes=input+"types",svg="svg",smil="smil",svgclippaths=svg+"clippaths",background="background",backgroundColor=background+"Color",canPlayType="canPlayType",localstorage="localStorage",sessionstorage="sessionStorage",applicationcache="applicationCache",webWorkers="webworkers",hashchange="hashchange",crosswindowmessaging="crosswindowmessaging",historymanagement="historymanagement",draganddrop="draganddrop",websqldatabase="websqldatabase",indexedDB="indexedDB",websockets="websockets",smile=":)",tostring=Object.prototype.toString,prefixes=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),tests={},inputs={},attrs={},classes=[],isEventSupported=(function(){var TAGNAMES={"select":"input","change":"input","submit":"form","reset":"form","error":"img","load":"img","abort":"img"},cache={};function isEventSupported(eventName,element){var canCache=(arguments.length==1);if(canCache&&cache[eventName]){return cache[eventName];}element=element||document.createElement(TAGNAMES[eventName]||"div");eventName="on"+eventName;var isSupported=(eventName in element);if(!isSupported&&element.setAttribute){element.setAttribute(eventName,"return;");isSupported=typeof element[eventName]=="function";}element=null;return canCache?(cache[eventName]=isSupported):isSupported;}return isEventSupported;})();var _hasOwnProperty=({}).hasOwnProperty,hasOwnProperty;if(typeof _hasOwnProperty!=="undefined"&&typeof _hasOwnProperty.call!=="undefined"){hasOwnProperty=function(object,property){return _hasOwnProperty.call(object,property);};}else{hasOwnProperty=function(object,property){return((property in object)&&typeof object.constructor.prototype[property]==="undefined");};}function set_css(str){m_style.cssText=str;}function set_css_all(str1,str2){return set_css(prefixes.join(str1+";")+(str2||""));}function contains(str,substr){return(""+str).indexOf(substr)!==-1;}function test_props(props,callback){for(var i in props){if(m_style[props[i]]!==undefined&&(!callback||callback(props[i],m))){return true;}}}function test_props_all(prop,callback){var uc_prop=prop.charAt(0).toUpperCase()+prop.substr(1),props=[prop,"Webkit"+uc_prop,"Moz"+uc_prop,"O"+uc_prop,"ms"+uc_prop,"Khtml"+uc_prop];return !!test_props(props,callback);}tests[canvas]=function(){return !!doc.createElement(canvas).getContext;};tests[canvastext]=function(){return !!(tests[canvas]()&&typeof doc.createElement(canvas).getContext("2d").fillText=="function");};tests[geolocation]=function(){return !!navigator.geolocation;};tests[crosswindowmessaging]=function(){return !!window.postMessage;};tests[websqldatabase]=function(){var result=!!window.openDatabase;if(result){try{result=!!openDatabase("testdb","1.0","html5 test db",200000);}catch(err){result=false;}}return result;};tests[indexedDB]=function(){return !!window[indexedDB];};tests[hashchange]=function(){return isEventSupported(hashchange,window)&&(document.documentMode===undefined||document.documentMode>7);};tests[historymanagement]=function(){return !!(window.history&&history.pushState);};tests[draganddrop]=function(){return isEventSupported("drag")&&isEventSupported("dragstart")&&isEventSupported("dragenter")&&isEventSupported("dragover")&&isEventSupported("dragleave")&&isEventSupported("dragend")&&isEventSupported("drop");};tests[websockets]=function(){return("WebSocket" in window);};tests[rgba]=function(){set_css(background+"-color:rgba(150,255,150,.5)");return contains(m_style[backgroundColor],rgba);};tests[hsla]=function(){set_css(background+"-color:hsla(120,40%,100%,.5)");return contains(m_style[backgroundColor],rgba);};tests[multiplebgs]=function(){set_css(background+":url(//:),url(//:),red url(//:)");return new RegExp("(url\\s*\\(.*?){3}").test(m_style[background]);};tests[backgroundsize]=function(){return test_props_all(background+"Size");};tests[borderimage]=function(){return test_props_all("borderImage");};tests[borderradius]=function(){return test_props_all("borderRadius","",function(prop){return contains(prop,"orderRadius");});};tests[boxshadow]=function(){return test_props_all("boxShadow");};tests[opacity]=function(){set_css_all("opacity:.5");return contains(m_style[opacity],"0.5");};tests[cssanimations]=function(){return test_props_all("animationName");};tests[csscolumns]=function(){return test_props_all("columnCount");};tests[cssgradients]=function(){var str1=background+"-image:",str2="gradient(linear,left top,right bottom,from(#9f9),to(white));",str3="linear-gradient(left top,#9f9, white);";set_css((str1+prefixes.join(str2+str1)+prefixes.join(str3+str1)).slice(0,-str1.length));return contains(m_style.backgroundImage,"gradient");};tests[cssreflections]=function(){return test_props_all("boxReflect");};tests[csstransforms]=function(){return !!test_props(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"]);};tests[csstransforms3d]=function(){var ret=!!test_props(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);if(ret){var st=document.createElement("style"),div=doc.createElement("div");st.textContent="@media ("+prefixes.join("transform-3d),(")+"modernizr){#modernizr{height:3px}}";doc.getElementsByTagName("head")[0].appendChild(st);div.id="modernizr";docElement.appendChild(div);ret=div.offsetHeight===3;st.parentNode.removeChild(st);div.parentNode.removeChild(div);}return ret;};tests[csstransitions]=function(){return test_props_all("transitionProperty");};tests[fontface]=function(){var fontret;if(
/*@cc_on@if(@_jscript_version>=5)!@end@*/
0){fontret=true;}else{var st=doc.createElement("style"),spn=doc.createElement("span"),size,isFakeBody=false,body=doc.body,callback,isCallbackCalled;st.textContent="@font-face{font-family:testfont;src:url('data:font/ttf;base64,AAEAAAAMAIAAAwBAT1MvMliohmwAAADMAAAAVmNtYXCp5qrBAAABJAAAANhjdnQgACICiAAAAfwAAAAEZ2FzcP//AAMAAAIAAAAACGdseWYv5OZoAAACCAAAANxoZWFk69bnvwAAAuQAAAA2aGhlYQUJAt8AAAMcAAAAJGhtdHgGDgC4AAADQAAAABRsb2NhAIQAwgAAA1QAAAAMbWF4cABVANgAAANgAAAAIG5hbWUgXduAAAADgAAABPVwb3N03NkzmgAACHgAAAA4AAECBAEsAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAACAAMDAAAAAAAAgAACbwAAAAoAAAAAAAAAAFBmRWQAAAAgqS8DM/8zAFwDMwDNAAAABQAAAAAAAAAAAAMAAAADAAAAHAABAAAAAABGAAMAAQAAAK4ABAAqAAAABgAEAAEAAgAuqQD//wAAAC6pAP///9ZXAwAAAAAAAAACAAAABgBoAAAAAAAvAAEAAAAAAAAAAAAAAAAAAAABAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEACoAAAAGAAQAAQACAC6pAP//AAAALqkA////1lcDAAAAAAAAAAIAAAAiAogAAAAB//8AAgACACIAAAEyAqoAAwAHAC6xAQAvPLIHBADtMrEGBdw8sgMCAO0yALEDAC88sgUEAO0ysgcGAfw8sgECAO0yMxEhESczESMiARDuzMwCqv1WIgJmAAACAFUAAAIRAc0ADwAfAAATFRQWOwEyNj0BNCYrASIGARQGKwEiJj0BNDY7ATIWFX8aIvAiGhoi8CIaAZIoN/43KCg3/jcoAWD0JB4eJPQkHh7++EY2NkbVRjY2RgAAAAABAEH/+QCdAEEACQAANjQ2MzIWFAYjIkEeEA8fHw8QDxwWFhwWAAAAAQAAAAIAAIuYbWpfDzz1AAsEAAAAAADFn9IuAAAAAMWf0i797/8zA4gDMwAAAAgAAgAAAAAAAAABAAADM/8zAFwDx/3v/98DiAABAAAAAAAAAAAAAAAAAAAABQF2ACIAAAAAAVUAAAJmAFUA3QBBAAAAKgAqACoAWgBuAAEAAAAFAFAABwBUAAQAAgAAAAEAAQAAAEAALgADAAMAAAAQAMYAAQAAAAAAAACLAAAAAQAAAAAAAQAhAIsAAQAAAAAAAgAFAKwAAQAAAAAAAwBDALEAAQAAAAAABAAnAPQAAQAAAAAABQAKARsAAQAAAAAABgAmASUAAQAAAAAADgAaAUsAAwABBAkAAAEWAWUAAwABBAkAAQBCAnsAAwABBAkAAgAKAr0AAwABBAkAAwCGAscAAwABBAkABABOA00AAwABBAkABQAUA5sAAwABBAkABgBMA68AAwABBAkADgA0A/tDb3B5cmlnaHQgMjAwOSBieSBEYW5pZWwgSm9obnNvbi4gIFJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgT3BlbiBGb250IExpY2Vuc2UuIEtheWFoIExpIGdseXBocyBhcmUgcmVsZWFzZWQgdW5kZXIgdGhlIEdQTCB2ZXJzaW9uIDMuYmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhTGlnaHRiYWVjMmE5MmJmZmU1MDMyIC0gc3Vic2V0IG9mIEZvbnRGb3JnZSAyLjAgOiBKdXJhIExpZ2h0IDogMjMtMS0yMDA5YmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhIExpZ2h0VmVyc2lvbiAyIGJhZWMyYTkyYmZmZTUwMzIgLSBzdWJzZXQgb2YgSnVyYUxpZ2h0aHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAQwBvAHAAeQByAGkAZwBoAHQAIAAyADAAMAA5ACAAYgB5ACAARABhAG4AaQBlAGwAIABKAG8AaABuAHMAbwBuAC4AIAAgAFIAZQBsAGUAYQBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAdABlAHIAbQBzACAAbwBmACAAdABoAGUAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALgAgAEsAYQB5AGEAaAAgAEwAaQAgAGcAbAB5AHAAaABzACAAYQByAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAEcAUABMACAAdgBlAHIAcwBpAG8AbgAgADMALgBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQBMAGkAZwBoAHQAYgBhAGUAYwAyAGEAOQAyAGIAZgBmAGUANQAwADMAMgAgAC0AIABzAHUAYgBzAGUAdAAgAG8AZgAgAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAASgB1AHIAYQAgAEwAaQBnAGgAdAAgADoAIAAyADMALQAxAC0AMgAwADAAOQBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQAgAEwAaQBnAGgAdABWAGUAcgBzAGkAbwBuACAAMgAgAGIAYQBlAGMAMgBhADkAMgBiAGYAZgBlADUAMAAzADIAIAAtACAAcwB1AGIAcwBlAHQAIABvAGYAIABKAHUAcgBhAEwAaQBnAGgAdABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAAAgAAAAAAAP+BADMAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQACAQIAEQt6ZXJva2F5YWhsaQ==')}";doc.getElementsByTagName("head")[0].appendChild(st);spn.setAttribute("style","font:99px _,arial,helvetica;position:absolute;visibility:hidden");if(!body){body=docElement.appendChild(doc.createElement(fontface));isFakeBody=true;}spn.innerHTML="........";spn.id="fonttest";body.appendChild(spn);size=spn.offsetWidth*spn.offsetHeight;spn.style.font="99px testfont,_,arial,helvetica";fontret=size!==spn.offsetWidth*spn.offsetHeight;function delayedCheck(){if(!body.parentNode){return;}fontret=ret[fontface]=size!==spn.offsetWidth*spn.offsetHeight;docElement.className=docElement.className.replace(/(no-)?fontface\b/,"")+(fontret?" ":" no-")+fontface;}setTimeout(delayedCheck,fontfaceCheckDelay);setTimeout(delayedCheck,fontfaceCheckDelay*2);addEventListener("load",function(){delayedCheck();(isCallbackCalled=true)&&callback&&callback(fontret);setTimeout(function(){if(!isFakeBody){body=spn;}body.parentNode.removeChild(body);st.parentNode.removeChild(st);},50);},false);}ret._fontfaceready=function(fn){(isCallbackCalled||fontret)?fn(fontret):(callback=fn);};return fontret||size!==spn.offsetWidth;};tests[video]=function(){var elem=doc.createElement(video),bool=!!elem[canPlayType];if(bool){bool=new Boolean(bool);bool.ogg=elem[canPlayType]('video/ogg; codecs="theora"');bool.h264=elem[canPlayType]('video/mp4; codecs="avc1.42E01E"');bool.webm=elem[canPlayType]('video/webm; codecs="vp8, vorbis"');}return bool;};tests[audio]=function(){var elem=doc.createElement(audio),bool=!!elem[canPlayType];if(bool){bool=new Boolean(bool);bool.ogg=elem[canPlayType]('audio/ogg; codecs="vorbis"');bool.mp3=elem[canPlayType]("audio/mpeg;");bool.wav=elem[canPlayType]('audio/wav; codecs="1"');bool.m4a=elem[canPlayType]("audio/x-m4a;")||elem[canPlayType]("audio/aac;");}return bool;};tests[localstorage]=function(){return("localStorage" in window)&&window[localstorage]!==null;};tests[sessionstorage]=function(){try{return("sessionStorage" in window)&&window[sessionstorage]!==null;}catch(e){return false;}};tests[webWorkers]=function(){return !!window.Worker;};tests[applicationcache]=function(){var cache=window[applicationcache];return !!(cache&&(typeof cache.status!="undefined")&&(typeof cache.update=="function")&&(typeof cache.swapCache=="function"));};tests[svg]=function(){return !!doc.createElementNS&&!!doc.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;};tests[smil]=function(){return !!doc.createElementNS&&/SVG/.test(tostring.call(doc.createElementNS("http://www.w3.org/2000/svg","animate")));};tests[svgclippaths]=function(){return !!doc.createElementNS&&/SVG/.test(tostring.call(doc.createElementNS("http://www.w3.org/2000/svg","clipPath")));};function webforms(){ret[input]=(function(props){for(var i=0,len=props.length;i<len;i++){attrs[props[i]]=!!(props[i] in f);}return attrs;})("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));ret[inputtypes]=(function(props){for(var i=0,bool,len=props.length;i<len;i++){f.setAttribute("type",props[i]);bool=f.type!=="text";if(bool){f.value=smile;if(/tel|search/.test(f.type)){}else{if(/url|email/.test(f.type)){bool=f.checkValidity&&f.checkValidity()===false;}else{bool=f.value!=smile;}}}inputs[props[i]]=!!bool;}return inputs;})("search tel url email datetime date month week time datetime-local number range color".split(" "));}for(var feature in tests){if(hasOwnProperty(tests,feature)){classes.push(((ret[feature.toLowerCase()]=tests[feature]())?"":"no-")+feature.toLowerCase());}}if(!ret[input]){webforms();}ret.addTest=function(feature,test){feature=feature.toLowerCase();if(ret[feature]){return;}test=!!(test());docElement.className+=" "+(test?"":"no-")+feature;ret[feature]=test;return ret;};set_css("");m=f=null;if(enableHTML5&&(function(){var elem=doc.createElement("div");elem.innerHTML="<elem></elem>";return elem.childNodes.length!==1;})()){(function(p,e){function q(a,b){if(g[a]){g[a].styleSheet.cssText+=b;}else{var c=r[l],d=e[j]("style");d.media=a;c.insertBefore(d,c[l]);g[a]=d;q(a,b);}}function s(a,b){for(var c=new RegExp("\\b("+m+")\\b(?!.*[;}])","gi"),d=function(k){return".iepp_"+k;},h=-1;++h<a.length;){b=a[h].media||b;s(a[h].imports,b);q(b,a[h].cssText.replace(c,d));}}function t(){for(var a,b=e.getElementsByTagName("*"),c,d,h=new RegExp("^"+m+"$","i"),k=-1;++k<b.length;){if((a=b[k])&&(d=a.nodeName.match(h))){c=new RegExp("^\\s*<"+d+"(.*)\\/"+d+">\\s*$","i");i.innerHTML=a.outerHTML.replace(/\r|\n/g," ").replace(c,a.currentStyle.display=="block"?"<div$1/div>":"<span$1/span>");c=i.childNodes[0];c.className+=" iepp_"+d;c=f[f.length]=[a,c];a.parentNode.replaceChild(c[1],c[0]);}}s(e.styleSheets,"all");}function u(){for(var a=-1,b;++a<f.length;){f[a][1].parentNode.replaceChild(f[a][0],f[a][1]);}for(b in g){r[l].removeChild(g[b]);}g={};f=[];}for(var r=e.documentElement,i=e.createDocumentFragment(),g={},m="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",n=m.split("|"),f=[],o=-1,l="firstChild",j="createElement";++o<n.length;){e[j](n[o]);i[j](n[o]);}i=i.appendChild(e[j]("div"));p.attachEvent("onbeforeprint",t);p.attachEvent("onafterprint",u);})(this,doc);}ret._enableHTML5=enableHTML5;ret._version=version;docElement.className=docElement.className.replace(/\bno-js\b/,"")+" js";docElement.className+=" "+classes.join(" ");return ret;})(this,this.document);