let container = document.getElementById("container");

const resCodes = [
  100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 208, 214, 226, 300,
  301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407,
  408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423,
  424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502,
  503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 530, 599,
];

resCodes.map((code) => {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let cardTitle = document.createElement("h5");
  card.className = "card p-3 shadow-lg p-3 mb-5 bg-body rounded";
  img.className = "card-img-top";
  cardTitle.className = "card-title text-center";
  cardTitle.innerText = "";
  img.src = `https://http.cat/${code}`;

  card.appendChild(cardTitle);
  card.appendChild(img);

  container.appendChild(card);
});
