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


    // 리스트 생성 이벤트 정리
    chamber[1].objs.textBtn.addEventListener("click", () => {
        
        const listContainer = document.createElement("li");
        const makeList = document.createElement("p");
        const BTN = document.createElement('button');

        // input 내용을  makeList 에 입력.
        makeList.innerText = chamber[1].objs.textInput.value;


        chamber[2].objs.listBox.appendChild(listContainer);
        listContainer.appendChild(makeList);
        listContainer.appendChild(BTN);

        chamber[1].objs.textInput.value = "";
        BTN.innerText = "X";

        BTN.addEventListener("click", () => {
            if (confirm("정말로 삭제 하모니카?")) {
                chamber[2].objs.listBox.removeChild(listContainer);
            } else {
                return;
            }
        })

        // 완료 리스트 확인 기능
        makeList.addEventListener("click", () => {
            if(makeList.classList.contains("selected")) {
                makeList.classList.remove("selected");
            } else {
                makeList.classList.add("selected");
            }
        });


    })
  

    
})();