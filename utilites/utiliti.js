function convertTextToNumber(id) {
  const value = document.getElementById(id).innerText;
  const result = parseInt(value);
  return result;
}
function setInnerText(id, value) {
  const getId = (document.getElementById(id).innerText = value);
}

document.getElementById("button").addEventListener("click", function () {
  window.location.href = "index.html";
});
