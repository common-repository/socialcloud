/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


(function(a){function b(){}function c(a){A=[a]}function d(a,b,c,d){try{d=a&&a.apply(b.context||b,c)}catch(e){d=!1}return d}function e(a){return/\?/.test(a)?"&":"?"}function D(l){function V(a){O++||(P(),I&&(y[K]={s:[a]}),E&&(a=E.apply(l,[a])),d(l.success,l,[a,t]),d(D,l,[l,t]))}function W(a){O++||(P(),I&&a!=u&&(y[K]=a),d(l.error,l,[l,a]),d(D,l,[l,a]))}l=a.extend({},B,l);var D=l.complete,E=l.dataFilter,F=l.callbackParameter,G=l.callback,H=l.cache,I=l.pageCache,J=l.charset,K=l.url,L=l.data,M=l.timeout,N,O=0,P=b,Q,R,S,T,U;return l.abort=function(){!(O++)&&P()},d(l.beforeSend,l,[l])===!1||O?l:(K=K||h,L=L?typeof L=="string"?L:a.param(L,l.traditional):h,K+=L?e(K)+L:h,F&&(K+=e(K)+encodeURIComponent(F)+"=?"),!H&&!I&&(K+=e(K)+"_"+(new Date).getTime()+"="),K=K.replace(/=\?(&|$)/,"="+G+"$1"),I&&(N=y[K])?N.s?V(N.s[0]):W(N):(v[G]=c,S=a(s)[0],S.id=k+z++,J&&(S[g]=J),C&&C.version()<11.6?(T=a(s)[0]).text="document.getElementById('"+S.id+"')."+n+"()":S[f]=f,p in S&&(S.htmlFor=S.id,S.event=m),S[o]=S[n]=S[p]=function(a){if(!S[q]||!/i/.test(S[q])){try{S[m]&&S[m]()}catch(b){}a=A,A=0,a?V(a[0]):W(i)}},S.src=K,P=function(a){U&&clearTimeout(U),S[p]=S[o]=S[n]=null,w[r](S),T&&w[r](T)},w[j](S,x),T&&w[j](T,x),U=M>0&&setTimeout(function(){W(u)},M)),l)}var f="async",g="charset",h="",i="error",j="insertBefore",k="_jqjsp",l="on",m=l+"click",n=l+i,o=l+"load",p=l+"readystatechange",q="readyState",r="removeChild",s="<script>",t="success",u="timeout",v=window,w=a("head")[0]||document.documentElement,x=w.firstChild,y={},z=0,A,B={callback:k,url:location.href},C=v.opera;D.setup=function(b){a.extend(B,b)},a.jsonp=D})(jQuery)