document.oncontextmenu = function(e) {
  var target = e.target || e.srcElement;
  if (target.tagName == 'IMG') {
    return false;
  }
};

document.onkeydown = function(e) {
  if (e.ctrlKey && 
     (e.keyCode === 67 || 
      e.keyCode === 86 || 
      e.keyCode === 85 || 
      e.keyCode === 117)) {
    return false;
  } else {
    return true;
  }
};
