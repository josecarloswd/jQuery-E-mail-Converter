/*
*
* E-Mail Converter
*
* Author: José Carlos Araújo < jcwd at josecarloswd dot com >
* Website: www.josecarloswd.com
*
* Usage:
* <span class="email">your-name at servername dot com</span>
* The script will convert to: <span class="email"><a href="mailto:your-name@servername.com">your-name@servername.com</a></span>
*
* You can set false the 'mailTo' parameter to remove the link address.
* Result: <span class="email">your-name@servername.com</span>
*
*/
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(3($){$.7.6=3(c){0 d={\'5\':9};0 e=$.l({},d,c);8 1.h(3(){0 a=$(1).2().4(/\\s+f/g,\'@\').4(/\\i/g,\'.\').4(/\\s+/g,\'\').j();k(e.5){0 b=\'m:\'+a;$(1).n($(\'<a></a>\').o(\'p\',b).2(a))}q{$(1).2(a)}})}})(r);',29,29,'var|this|text|function|replace|mailTo|emailConverter|fn|return|true||||||at||each|sdot|toLowerCase|if|extend|mailto|html|attr|href|else|jQuery|'.split('|'),0,{}))