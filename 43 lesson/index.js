// 1. Реализуйте форму, в которой пользователь может в текстовое поле вводить цвет – и при нажатии на кнопку подтверждения - отображается – на странице – данный текст данным цветом.
// Список цветов создайте с помощью массива.

var myApp = new Vue({
  el: "#myApp",

  data: {
    colors: [
      "black",
      "gray",
      "fuchsia",
      "orange",
      "red",
      "maroon",
      "yellow",
      "olive",
      "lime",
      "green",
      "aqua",
      "teal",
      "blue",
      "navy",
    ],

    colorText: "",
    result: "",
    awesome: false,
    error: false,
  },
  methods: {
    getTextColor() {
      this.awesome = false;
      this.error = false;

      if (this.colors.includes(this.colorText.toLowerCase()) === true) {
        this.result = this.colorText;
        this.awesome = true;
      } else this.error = true;
      this.colorText = "";
    },
  },
});
