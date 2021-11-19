export default (id) => {
  let node = document.getElementById(id);

  if (!node) {
    node = document.createElement("div");
    node.setAttribute("id", id);
    document.body.appendChild(node);
  }

  return node;
};
