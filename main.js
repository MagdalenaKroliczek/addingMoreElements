let size = 10;
letOrderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btn.textContent = "Add 10 elements to list";
    btnReset.textContent = "Clear all";
    btn.style.fontSize = "28px";
    btnReset.style.fontSize = "28px";
    btn.style.backgroundColor = "green";
    btnReset.style.backgroundColor = "red";
    btn.style.color = "black";
    btnReset.style.color = "black";
    btn.style.borderRadius = "40px";
    btnReset.style.borderRadius = "40px";
    btnReset.style.marginLeft = "10px";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const ul = document.createElement('ul');
    ul.style.listStyle = "none";
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);

}

const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${letOrderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);

    }

}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1; 
}

init()