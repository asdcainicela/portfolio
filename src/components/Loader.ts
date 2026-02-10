export class Loader {
    private element: HTMLElement;
    private textElement: HTMLElement;
    private fullText: string = "GERALD CAINICELA";
    private currentText: string = "";
    private index: number = 0;

    constructor() {
        this.element = document.querySelector('.loader') as HTMLElement;
        this.textElement = document.querySelector('.loader-text') as HTMLElement;

        if (this.element && this.textElement) {
            console.log('Loader elements found, starting typewriter...');
            this.startTypewriter();

            // Failsafe: Force finish after 5 seconds if typing gets stuck
            setTimeout(() => {
                if (!this.element.classList.contains('hidden')) {
                    console.warn('Loader timed out, forcing finish.');
                    this.finish();
                }
            }, 5000);
        } else {
            console.error('Loader elements NOT found. Check HTML classes .loader and .loader-text');
            // Fail safe: verify if we should just remove loader overlay if it exists
            if (this.element) this.element.classList.add('hidden');
        }
    }

    private startTypewriter() {
        // console.log('Typing...', this.index, this.currentText); 
        if (this.index < this.fullText.length) {
            this.currentText += this.fullText.charAt(this.index);
            this.textElement.innerText = this.currentText;
            this.index++;
            setTimeout(() => this.startTypewriter(), 100); // Typing speed
        } else {
            // Typing finished, wait then fade out
            setTimeout(() => {
                this.finish();
            }, 1000);
        }
    }

    public finish() {
        this.element.classList.add('hidden');
        // Dispatch event for Scene to start if needed
        window.dispatchEvent(new Event('intro-complete'));
    }
}
