class ContadorElement extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        let counter = 0;
        const span = document.createElement('span');
        span.textContent = counter;
        
        const controlsEl = document.createElement('div');

        const incrementButtonEl = document.createElement('button');
        incrementButtonEl.textContent = "Incrementar";
        incrementButtonEl.addEventListener("click", () => {
            counter++;
            span.textContent = counter;
        })

        
        const decrementButtonEl = document.createElement('button');
        decrementButtonEl.textContent = "Decrementar";
        decrementButtonEl.addEventListener("click", () => {
            counter--;
            span.textContent = counter;
        })

        controlsEl.append(incrementButtonEl, decrementButtonEl);

        /*
        const styleEl = document.createElement("style");
        style.textContent = `
            button {
                margin-left: 1em;
            }
        `
        */

        const linkEl = document.createElement('link');
        linkEl.setAttribute('href', 'estilos.css');
        linkEl.setAttribute('rel', 'stylesheet');


        this.shadowRoot.append(linkEl, span, controlsEl);
    }
}

customElements.define('meu-contador', ContadorElement)