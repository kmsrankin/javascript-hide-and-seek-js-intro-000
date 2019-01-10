function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const nes = document.querySelector('#nested .target')
  return nes
}

function increaseRankBy(n) {
  var list = document
  .querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node')
  var queue = [grandNode]
  while (queue.length > 0) {
    var deepestNode = queue.shift()
    for (let i = 0; i < deepestNode.length; i++) {
      if (queue.length === 0) {
        return deepestNode;
      }
      queue.push(deepestNode[i]);
    }
  }
}
