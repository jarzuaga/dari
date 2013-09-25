CodeMirror.defineMode("r",function(a){function b(a){var b=a.split(" "),c={};for(var d=0;d<b.length;++d)c[b[d]]=!0;return c}function i(a,b){h=null;var i=a.next();if(i=="#")return a.skipToEnd(),"comment";if(i=="0"&&a.eat("x"))return a.eatWhile(/[\da-f]/i),"number";if(i=="."&&a.eat(/\d/))return a.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(i))return a.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if(i=="'"||i=='"')return b.tokenize=j(i),"string";if(i=="."&&a.match(/.[.\d]+/))return"keyword";if(/[\w\.]/.test(i)&&i!="_"){a.eatWhile(/[\w\.]/);var k=a.current();return c.propertyIsEnumerable(k)?"atom":e.propertyIsEnumerable(k)?(f.propertyIsEnumerable(k)&&(h="block"),"keyword"):d.propertyIsEnumerable(k)?"builtin":"variable"}return i=="%"?(a.skipTo("%")&&a.next(),"variable-2"):i=="<"&&a.eat("-")?"arrow":i=="="&&b.ctx.argList?"arg-is":g.test(i)?i=="$"?"dollar":(a.eatWhile(g),"operator"):/[\(\){}\[\];]/.test(i)?(h=i,i==";"?"semi":null):null}function j(a){return function(b,c){if(b.eat("\\")){var d=b.next();return d=="x"?b.match(/^[a-f0-9]{2}/i):(d=="u"||d=="U")&&b.eat("{")&&b.skipTo("}")?b.next():d=="u"?b.match(/^[a-f0-9]{4}/i):d=="U"?b.match(/^[a-f0-9]{8}/i):/[0-7]/.test(d)&&b.match(/^[0-7]{1,2}/),"string-2"}var e;while((e=b.next())!=null){if(e==a){c.tokenize=i;break}if(e=="\\"){b.backUp(1);break}}return"string"}}function k(a,b,c){a.ctx={type:b,indent:a.indent,align:null,column:c.column(),prev:a.ctx}}function l(a){a.indent=a.ctx.indent,a.ctx=a.ctx.prev}var c=b("NULL NA Inf NaN NA_integer_ NA_real_ NA_complex_ NA_character_"),d=b("list quote bquote eval return call parse deparse"),e=b("if else repeat while function for in next break"),f=b("if else repeat while function for"),g=/[+\-*\/^<>=!&|~$:]/,h;return{startState:function(b){return{tokenize:i,ctx:{type:"top",indent:-a.indentUnit,align:!1},indent:0,afterIdent:!1}},token:function(a,b){a.sol()&&(b.ctx.align==null&&(b.ctx.align=!1),b.indent=a.indentation());if(a.eatSpace())return null;var c=b.tokenize(a,b);c!="comment"&&b.ctx.align==null&&(b.ctx.align=!0);var d=b.ctx.type;return(h==";"||h=="{"||h=="}")&&d=="block"&&l(b),h=="{"?k(b,"}",a):h=="("?(k(b,")",a),b.afterIdent&&(b.ctx.argList=!0)):h=="["?k(b,"]",a):h=="block"?k(b,"block",a):h==d&&l(b),b.afterIdent=c=="variable"||c=="keyword",c},indent:function(b,c){if(b.tokenize!=i)return 0;var d=c&&c.charAt(0),e=b.ctx,f=d==e.type;return e.type=="block"?e.indent+(d=="{"?0:a.indentUnit):e.align?e.column+(f?0:1):e.indent+(f?0:a.indentUnit)}}}),CodeMirror.defineMIME("text/x-rsrc","r");