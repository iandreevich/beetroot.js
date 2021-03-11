var app = new Vue({
  el: "#app",
  data: {
    isShown: false,
    isTimeContent: null,
    showModal: false,
    btn: "",
  },
});

Vue.component("modal", {
  template: `
      <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
         
            <div class="modal-body">
              <slot name="body">
                <p v-html="modalContent"> </p>
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
      `,
  computed: {
    modalContent() {
      if (app.isTimeContent) {
        const today = new Date();
        return `Текущее время: ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
      } else {
        return app.btn === "Колесо"
          ? `${app.btn} мыши в полном порядке`
          : `${app.btn} кнопка мыши в полном порядке`;
      }
    },
  },
});

document.addEventListener("click", () => {
  app.isShown = "true";
});
