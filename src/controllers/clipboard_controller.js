import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source" ];
  static classes = [ "supported" ]

  connect() {
    if ("clipboard" in navigator) {
      this.element.classList.add(this.supportedClass);
    }
  }

  copy() {
    console.log("Copying text:", this.sourceTarget.value);
    navigator.clipboard.writeText(this.sourceTarget.value).then(() => {
      console.log("Text copied to clipboard!");
    }).catch((error) => {
      console.error("Clipboard write failed:", error);
    });
  }

}
