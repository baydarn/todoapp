(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{27:function(t,e,n){t.exports=n(40)},32:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(12),a=n.n(r),c=(n(32),n(13)),l=n(1),s=n(2),u=n(4),d=n(3),p=n(6),f=n(5),b=n(19),h=n(8),O="SET_FILTER",m="SET_TODOS",v="ADD_TODO",g="REMOVE_TODO",j="SHOW_NOTIFICATION",y="HIDE_NOTIFICATION";function T(t){return function(e){var n;e({type:v,todo:t}),e((n="Eklendi",function(t){t({type:j,text:n}),setTimeout((function(){t({type:y})}),2e3)}))}}function k(){var t=Object(b.a)(["\n    background: red;\n    position: relative;\n    > span {\n        position: absolute;\n    } \n"]);return k=function(){return t},t}var E=n(21).a.div(k());var w=Object(h.b)(null,(function(t){return{removeTodo:function(e){t(function(t){return{type:g,id:t}}(e))}}}))((function(t){var e=t.content,n=t.id,o="todo-item";return t.checked&&(o+=" checked"),i.a.createElement(E,{className:o,onClick:function(){t.onCheckedToggle(n)}},e,i.a.createElement("span",{className:"remove-todo",onClick:function(e){e.stopPropagation(),t.removeTodo(n)}},"X"))})),S=function(t){function e(t){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).call(this,t))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"todo-list"},i.a.createElement("h3",null,this.props.title," ",i.a.createElement("span",null,this.props.todos.length)),this.props.todos.map((function(e){return i.a.createElement(w,Object.assign({},e,{key:e.id,onCheckedToggle:t.props.onCheckedToggle}))})))}}]),e}(i.a.Component);S.defaultProps={title:"Ba\u015fl\u0131k"};var C=S,P=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={inputVal:""},n.changeInput=n.changeInput.bind(Object(p.a)(n)),n.addTodo=n.addTodo.bind(Object(p.a)(n)),n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"changeInput",value:function(t){var e=t.target.value;this.setState({inputVal:e})}},{key:"addTodo",value:function(t){t.preventDefault(),this.props.onTodoAdd(this.state.inputVal),this.setState({inputVal:""})}},{key:"render",value:function(){this.props.onAdd;return i.a.createElement("form",{onSubmit:this.addTodo},i.a.createElement("input",{type:"text",value:this.state.inputVal,onChange:this.changeInput}),i.a.createElement("button",null,"Ekle"))}}]),e}(i.a.Component),D=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("button",{className:"remove-all",onClick:function(){t.props.onRemoveAll()}},"T\xfcm\xfcn\xfc Sil")}}]),e}(i.a.Component),I=(n(39),[{label:"Hepsi",labelKey:"all"},{label:"Tamamlanm\u0131\u015f",labelKey:"completed"},{label:"Tamamlanmam\u0131\u015f",labelKey:"uncompleted"}]),N=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props),i.a.createElement("div",null,I.map((function(e){return i.a.createElement("div",{onClick:function(){t.props.changeFilter(e.labelKey)}},e.label)})))}}]),e}(o.Component),x=Object(h.b)((function(t){return{activeFilter:t.activeFilter}}),(function(t){return{changeFilter:function(e){t(function(t){return{type:O,activeFilter:t}}(e))}}}))(N);function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}var F=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).filterTodos=function(t,e){return"all"===e?t:"completed"===e?t.filter((function(t){return t.checked})):t.filter((function(t){return!t.checked}))},n.addTodo=n.addTodo.bind(Object(p.a)(n)),n.removeAllTodos=n.removeAllTodos.bind(Object(p.a)(n)),n.toggleCompleteStatus=n.toggleCompleteStatus.bind(Object(p.a)(n)),n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){console.log("G\xdcncel proplar",this.props);var t=window.localStorage.getItem("todos");t&&(t=JSON.parse(t)),this.props.addTodos(t||[])}},{key:"componentDidUpdate",value:function(t,e,n){JSON.stringify(t.todos)!==JSON.stringify(this.props.todos)&&window.localStorage.setItem("todos",JSON.stringify(this.props.todos))}},{key:"addTodo",value:function(t){this.props.addTodo({content:t,id:Math.random(),checked:!1})}},{key:"removeAllTodos",value:function(){this.setState({todos:[]},(function(){window.localStorage.removeItem("todos")}))}},{key:"toggleCompleteStatus",value:function(t){var e=this,n=this.state.todos.map((function(e){if(t===e.id){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e);return n.checked=!n.checked,n}return e}));this.setState({todos:n},(function(){window.localStorage.setItem("todos",JSON.stringify(e.state.todos))}))}},{key:"render",value:function(){return console.log("App props",this.props),i.a.createElement("div",{className:"App",id:"todo"},this.props.notificationVisibility&&i.a.createElement("div",{style:{background:"black",color:"white",padding:"15px",fontSize:"20px"}},this.props.notificationText),i.a.createElement("div",{className:"todo-list todo-list-add"},i.a.createElement("h3",null,"Todo Ekle / Sil"),i.a.createElement("div",null,i.a.createElement(P,{onTodoAdd:this.addTodo}),i.a.createElement(D,{onRemoveAll:this.removeAllTodos}),i.a.createElement(x,null))),i.a.createElement(C,{todos:this.filterTodos(this.props.todos,this.props.activeFilter),onCheckedToggle:this.toggleCompleteStatus}))}}]),e}(o.Component),V=Object(h.b)((function(t){return{activeFilter:t.activeFilter,todos:t.todos,notificationVisibility:t.notificationVisibility,notificationText:t.notificationText}}),(function(t){return{addTodos:function(e){t(function(t){return{type:m,todos:t}}(e))},addTodo:function(e){t(T(e))}}}))(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(11),_=n(24);function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{activeFilter:"all",todos:[],notificationVisibility:!1,notificationText:""},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return R({},t,{activeFilter:e.activeFilter});case m:return R({},t,{todos:e.todos});case v:return R({},t,{todos:t.todos.concat([e.todo])});case g:var n=t.todos.filter((function(t){return t.id!==e.id}));return R({},t,{todos:n});case j:return R({},t,{notificationVisibility:!0,notificationText:e.text});case y:return R({},t,{notificationVisibility:!1,notificationText:""});default:return t}},H=Object(J.d)(B,Object(J.c)(Object(J.a)(_.a),window.devToolsExtension?window.devToolsExtension():function(t){return t}));a.a.render(i.a.createElement((function(t){return i.a.createElement(h.a,{store:H},i.a.createElement(V,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4f2d32c1.chunk.js.map