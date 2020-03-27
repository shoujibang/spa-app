/**
 * directive，自定义拖拽指令
 * @param {Object} el 指令所绑定的元素，可以用来直接操作DOM
 * @param {Object} binding 一个对象，包含指令的很多信息
 * @param {Object} vnode VUE编译生成的虚拟节点
 * @return {Object} 无
 */
export default function(el) {
  el.style.position = "absolute";
  el.style.cursor = "move";
  el.onmousedown = function(e) {
    var disx = e.pageX - el.offsetLeft;
    var disy = e.pageY - el.offsetTop;
    document.onmousemove = function(e) {
      el.style.left = e.pageX - disx + "px";
      el.style.top = e.pageY - disy + "px";
    };
    document.onmouseup = function() {
      // console.log(el.style.left);
      document.onmousemove = document.onmouseup = null;
    };
    e.preventDefault();
  };
}
