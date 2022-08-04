let renderContainer= (data) => {
  let contianer = document.querySelector(`main .container`)
  console.log(data)
  data.forEach((ele) => {
    contianer.appendChild(renderNode(ele, data));
  });
};

let renderNode = (node, data) => {
  let random = Math.floor(Math.random() * 100)
  const card= document.createElement(`div`);
  card.classList.add(`card`);
  let div = document.createElement(`div`);
  
  let h2 = document.createElement(`h2`);
  let p = document.createElement(`p`);

  div.appendChild(h2)
  div.appendChild(p)
  h2.textContent = node.name;
  p.textContent = random;
  let button = document.createElement(`button`);
  button.setAttribute(`data-id`, node.id)
  button.textContent = `Watch trailer`;
  card.style.backgroundImage = `url(${node.img})`
  div.appendChild(button);
  card.appendChild(div);

  button.addEventListener(`click`, () => popup(node.id, data))
  return card;
};

function popup(id, data) {
  let pop = document.createElement(`div`);
  pop.classList.add(`pop`);
  let h1 = document.createElement(`h1`);
  h1.textContent = data[id][`name`];
  let h3 = document.createElement(`h3`);
  h3.textContent = `facts`;
  let u

  console.log(data)
}