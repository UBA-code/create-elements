function create() {
    let form = document.forms[0],
        numOfEle= document.querySelector("[name='elements']").value,
        textInpt = document.querySelector("[name='texts']").value,
        select = document.forms[0].querySelector("[name = 'type']").value,
        subBtn = document.forms[0].querySelector("[name='create']"),
        createdEle ,
        result = document.querySelector(".results");
    document.querySelectorAll(`.box`).forEach((e) => e.remove());
    for (let i = 0; i < numOfEle; i++) {
        createdEle = document.createElement(`${select}`);
        createdEle.className = "box";
        createdEle.title = "Element";
        createdEle.id = `id-${i+1}`;
        createdEle.textContent = textInpt;
        result.appendChild(createdEle);
    }
    return result;
}
document.forms[0].querySelector("[name='create']").onclick = e => e.preventDefault() || create();