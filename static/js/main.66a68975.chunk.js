(this.webpackJsonpsnakegame=this.webpackJsonpsnakegame||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),c=a.n(o),i=(a(13),a(1)),r=a(4),h=a(5),l=a(7),u=a(6),d=function(e){return s.a.createElement("div",null,e.snakeDots.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return s.a.createElement("div",{className:"snake-dot",key:t,style:a}," ")})))},k=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return s.a.createElement("div",{className:"snake-food",style:t})},f=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},v={food:f(),speed:200,direction:"RIGHT",snakeDots:[[0,0],[2,0]]},m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state=v,e.onKeyDown=function(t){switch((t=t||window.event).keyCode){case 38:e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"})}},e.moveSnake=function(){var t=Object(i.a)(e.state.snakeDots),a=t[t.length-1];switch(e.state.direction){case"RIGHT":a=[a[0]+2,a[1]];break;case"LEFT":a=[a[0]-2,a[1]];break;case"DOWN":a=[a[0],a[1]+2];break;case"UP":a=[a[0],a[1]-2]}t.push(a),t.shift(),e.setState({snakeDots:t})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(){this.checkIfOutOfBorders(),this.checkIfCollapsed(),this.checkIfEatsFood()}},{key:"checkIfEatsFood",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]===t[0]&&e[1]===t[1]&&(this.setState({food:f()}),this.increaseLength(),this.increaseSpeed())}},{key:"increaseLength",value:function(){var e=Object(i.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"checkIfOutOfBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(i.a)(this.state.snakeDots),a=t[t.length-1];t.pop(),t.forEach((function(t){a[0]==t[0]&&a[1]==t[1]&&e.onGameOver()}))}},{key:"onGameOver",value:function(){alert("Game Over. Snake length is ".concat(this.state.snakeDots.length)),this.setState(v)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"Current score is ",s.a.createElement("span",{style:{color:"Red",fontSize:40}},this.state.snakeDots.length," ")),s.a.createElement("div",{className:"game-area"},s.a.createElement(d,{snakeDots:this.state.snakeDots}),s.a.createElement(k,{dot:this.state.food})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.66a68975.chunk.js.map