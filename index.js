console.log("😁 안녕하세요 박정훈 입니다 반갑습니다.!!!!!!")


const modalSpan = document.getElementById('modal_span');
const modalP = document.getElementById('modal_p');
const main = document.querySelector('main');
const progress =document.querySelector('progress');

class Modal{
    constructor({sectionId,modalId,button}){
         this.sectionElement = document.getElementById(sectionId);
         this.modalId = document.getElementById(modalId);
         this.button = document.getElementById(button);
         this.addListener(this.sectionElement);
         this.id = sectionId;
         this.count = 0;
    }

    addListener(){
        this.sectionElement.addEventListener("click",this.insertModal)
        this.button.addEventListener("click",this.deleteModal)
    }

     insertModal=()=>{
        this.sectionElement.classList.add('disable')
        this.paintModal(this.modalId)
        if(this.id=="section1"){
            modalSpan.innerText = "박정훈 소개"
            modalP.innerText = "열정적인 남자. 개발을 좋아하는 남자"
            this.sectionElement.pointer
        }else if(this.id=='section2'){
            modalSpan.innerText = "박정훈 성장"
            modalP.innerText = "경남 마산에서 자랐어요. 사투리 안쓰는 경상도 사나이"
        }else if(this.id == 'section3'){
            modalSpan.innerText = "박정훈 경력"
            modalP.innerText = "물류 업무를 오랫동안 해왔어요"
        }else if(this.id=='section4'){
            modalSpan.innerText = "박정훈 강정"
            modalP.innerText = "개발을 재미있어합니다. 개발을 열정적으로 합니다."
        }else if(this.id = 'section5'){
            modalSpan.innerText = "박정훈 다징"
            modalP.innerText = "나는 개발을 하면서 먹고 살겠다!!"
        }
    }

    paintModal=()=>{
        this.modalId.style.display ="flex";
        this.modalId.style.opacity=1;
    }

    deleteModal = ()=>{
        this.modalId.style.display = "none"
        this.count+=1
        progress.value=this.count

    }
}

const modal = new Modal({modalId:"modal",sectionId:"section1",button:"modal_btn"})
const modal1 = new Modal({modalId:"modal",sectionId:"section2",button:"modal_btn"})
const modal2 = new Modal({modalId:"modal",sectionId:"section3",button:"modal_btn"})
const modal3 = new Modal({modalId:"modal",sectionId:"section4",button:"modal_btn"})
const modal4 = new Modal({modalId:"modal",sectionId:"section5",button:"modal_btn"})