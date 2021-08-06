(() => {
    const chamber = [
        {
            //header
        },
        {
            //text-section
            objs: {
                textSection: document.querySelector(".text-section"),
                textCirlcle: document.querySelector(".text-circle"),
                textInput: document.querySelector(".text-input"),
                textBtn: document.querySelector(".text-btn"),
            }
        },
        {
            //list-section
            objs: {
                listBox: document.querySelector(".list-box")
            }
        }
    ];

    chamber[1].objs.textBtn.addEventListener("click", () => {
        const makeList = document.createElement("li");
        const BTN = document.createElement('button');

        makeList.innerText = chamber[1].objs.textInput.value;
        chamber[2].objs.listBox.appendChild(makeList);
        chamber[2].objs.listBox.appendChild(BTN);

        chamber[1].objs.textInput.value = "";


    })
  

    
})();