console.log("π μλνμΈμ λ°μ ν μλλ€ λ°κ°μ΅λλ€.!!!!!!")


const modalSpan = document.getElementById('modal_span');
const modalP = document.getElementById('modal_p');
const mainPage = document.getElementById('main');
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
            modalSpan.innerText = "λ°μ ν μκ°"
            modalP.innerText = "μ΄μ μ μΈ λ¨μ. κ°λ°μ μ’μνλ λ¨μ"
            this.sectionElement.pointer
        }else if(this.id=='section2'){
            modalSpan.innerText = "λ°μ ν μ±μ₯"
            modalP.innerText = "κ²½λ¨ λ§μ°μμ μλμ΄μ. μ¬ν¬λ¦¬ μμ°λ κ²½μλ μ¬λμ΄"
        }else if(this.id == 'section3'){
            modalSpan.innerText = "λ°μ ν κ²½λ ₯"
            modalP.innerText = "λ¬Όλ₯ μλ¬΄λ₯Ό μ€λ«λμ ν΄μμ΄μ"
        }else if(this.id=='section4'){
            modalSpan.innerText = "λ°μ ν κ°μ "
            modalP.innerText = "κ°λ°μ μ¬λ―Έμμ΄ν©λλ€. κ°λ°μ μ΄μ μ μΌλ‘ ν©λλ€."
        }else if(this.id = 'section5'){
            modalSpan.innerText = "λ°μ ν λ€μ§"
            modalP.innerText = "λλ κ°λ°μ νλ©΄μ λ¨Ήκ³  μ΄κ² λ€!!"
        }
    }

    paintModal=()=>{
        this.modalId.style.display='flex'
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