export default function myAjax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();
    // 返回状态事件监控
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status == 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.responseText);
      }
    };
  });
}
