// card-1-button-----------------------------
document
  .getElementById("card-1-btn")
  .addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const task = convertTextToNumber("task");
    const checkBox = convertTextToNumber("check-box");
    const negative = task - 1;
    setInnerText("task", negative);
    const sum = checkBox + 1;
    setInnerText("check-box", sum);
    const historyContainer = document.getElementById("history-container");
    const cardTitle = document.getElementById("card-title").innerText;
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    const p = document.createElement("p");
    p.classList.add(
      "bg-[#f4f6ff]",
      "px-2",
      "mb-4",
      "rounded-lg",
      "pt-0",
      "pb-3"
    );
    p.innerText = `
    You have completed the task ${cardTitle} at ${time}
    `;
    historyContainer.appendChild(p);
    const btn = document.getElementById("card-1-btn");
    btn.disabled = true;
    btn.classList.add(
      "bg-[#dce3ff]",
      "text-[#5661ae]",
      "rounded-lg",
      "px-4",
      "py-2"
    );
  });
// card-2-button----------------------------------------
document
  .getElementById("card-2-btn")
  .addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const task = convertTextToNumber("task");
    const checkBox = convertTextToNumber("check-box");
    const negative = task - 1;
    setInnerText("task", negative);
    const sum = checkBox + 1;
    setInnerText("check-box", sum);
    const historyContainer = document.getElementById("history-container");
    const cardTitle = document.getElementById("title-2").innerText;
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    const p = document.createElement("p");
    p.classList.add(
      "bg-[#f4f6ff]",
      "px-2",
      "mb-4",
      "rounded-lg",
      "pt-0",
      "pb-3"
    );
    p.innerText = `
    You have completed the task ${cardTitle} at ${time}
    `;
    historyContainer.appendChild(p);
    const btn = document.getElementById("card-2-btn");
    btn.disabled = true;
    btn.classList.add(
      "bg-[#dce3ff]",
      "text-[#5661ae]",
      "rounded-lg",
      "px-4",
      "py-2"
    );
  });
// card-3-button-----------------------------------------------
document
  .getElementById("card-3-btn")
  .addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const task = convertTextToNumber("task");
    const checkBox = convertTextToNumber("check-box");
    const negative = task - 1;
    setInnerText("task", negative);
    const sum = checkBox + 1;
    setInnerText("check-box", sum);
    const historyContainer = document.getElementById("history-container");
    const cardTitle = document.getElementById("title-3").innerText;
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    const p = document.createElement("p");
    p.classList.add(
      "bg-[#f4f6ff]",
      "px-2",
      "mb-4",
      "rounded-lg",
      "pt-0",
      "pb-3"
    );
    p.innerText = `
    You have completed the task ${cardTitle} at ${time}
    `;
    historyContainer.appendChild(p);
    const btn = document.getElementById("card-3-btn");
    btn.disabled = true;
    btn.classList.add(
      "bg-[#dce3ff]",
      "text-[#5661ae]",
      "rounded-lg",
      "px-4",
      "py-2"
    );
  });
// card-4-button----------------------------------------------------
document
  .getElementById("card-4-btn")
  .addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const task = convertTextToNumber("task");
    const checkBox = convertTextToNumber("check-box");
    const negative = task - 1;
    setInnerText("task", negative);
    const sum = checkBox + 1;
    setInnerText("check-box", sum);
    const historyContainer = document.getElementById("history-container");
    const cardTitle = document.getElementById("title-4").innerText;
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    const p = document.createElement("p");
    p.classList.add(
      "bg-[#f4f6ff]",
      "px-2",
      "mb-4",
      "rounded-lg",
      "pt-0",
      "pb-3"
    );
    p.innerText = `
    You have completed the task ${cardTitle} at ${time}
    `;
    historyContainer.appendChild(p);
    const btn = document.getElementById("card-4-btn");
    btn.disabled = true;
    btn.classList.add(
      "bg-[#dce3ff]",
      "text-[#5661ae]",
      "rounded-lg",
      "px-4",
      "py-2"
    );
  });
// card-5-button--------------------------------------------------
document
  .getElementById("card-5-btn")
  .addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const task = convertTextToNumber("task");
    const checkBox = convertTextToNumber("check-box");
    const negative = task - 1;
    setInnerText("task", negative);
    const sum = checkBox + 1;
    setInnerText("check-box", sum);
    const historyContainer = document.getElementById("history-container");
    const cardTitle = document.getElementById("title-5").innerText;
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    const p = document.createElement("p");
    p.classList.add(
      "bg-[#f4f6ff]",
      "px-2",
      "mb-4",
      "rounded-lg",
      "pt-0",
      "pb-3"
    );
    p.innerText = `
    You have completed the task ${cardTitle} at ${time}
    `;
    historyContainer.appendChild(p);
    const btn = document.getElementById("card-5-btn");
    btn.disabled = true;
    btn.classList.add(
      "bg-[#dce3ff]",
      "text-[#5661ae]",
      "rounded-lg",
      "px-4",
      "py-2"
    );
  });
//   card-6-button-------------------------------------------
document
  .getElementById("card-6-btn")
  .addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const task = convertTextToNumber("task");
    const checkBox = convertTextToNumber("check-box");
    const negative = task - 1;
    setInnerText("task", negative);
    const sum = checkBox + 1;
    setInnerText("check-box", sum);
    const historyContainer = document.getElementById("history-container");
    const cardTitle = document.getElementById("title-6").innerText;
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    const p = document.createElement("p");
    p.classList.add(
      "bg-[#f4f6ff]",
      "px-2",
      "mb-4",
      "rounded-lg",
      "pt-0",
      "pb-3"
    );
    p.innerText = `
    You have completed the task ${cardTitle} at ${time}
    `;
    historyContainer.appendChild(p);
    const btn = document.getElementById("card-6-btn");
    btn.disabled = true;
    btn.classList.add(
      "bg-[#dce3ff]",
      "text-[#5661ae]",
      "rounded-lg",
      "px-4",
      "py-2"
    );
  });

// clear button--------------------------------------
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerText = "";
});
// ----big btn -------------------------
document.getElementById("big-btn").addEventListener("click", function () {
  window.location.href = "back-part.html";
});
// ----------------back btn---------------------
//  ----------date time----------------------
const date = new Date();
const day = date.toLocaleString("en-US", { weekday: "short" });
const fulldate = date.toLocaleString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
document.getElementById("week").innerText = day;
document.getElementById("year").innerText = fulldate;
