class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <button type="button" class="btn btn-primary">${this.getAttribute('text') ?? ''}</button>
        `;
    }
}

customElements.define('custom-button', CustomButton);