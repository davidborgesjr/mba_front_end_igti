class MeuRelogioElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.spanEl = document.createElement("span");
        this.shadowRoot.append(this.spanEl);
    }

    connectedCallback(){
        this.spanEl.textContent = getHMS();
        this.timer = setInterval(() => {
            this.spanEl.textContent = getHMS();            
        }, 1000)
    }
    
    disconnectedCallback(){
        clearInterval(this.timer);
    }
}

function getHMS() {
    const dh = new Date();
    const h = formtNumber(dh.getHours());
    const m = formtNumber(dh.getMinutes());
    const s = formtNumber(dh.getSeconds());
    return `${h}:${m}:${s}`;
}

function formtNumber(n) {
    return String(n).padStart(2, "0");
}

customElements.define("meu-relogio", MeuRelogioElement);