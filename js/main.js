new Vue({
  el: "#app", //id preso dall'HTML
  data: {
    message:
      "Benvenuto, questo è il primo esercizio che ho realizzato utilizzando Vue.js! Prima di iniziare, inserisci il tuo nome, successivamente premi invio!",
    userName: "",
    imageSet: "https://c.tenor.com/lnzb_NOYs1cAAAAC/baby-yoda.gif",
  },
  methods: {
    submitValue: function (e) {
      this.userName = e.target.value;
      e.target.value = "";

      let outputHtml = document.querySelector(".str1");
      outputHtml.innerHTML = `Ciao ${this.userName}, bella questa gif, vero?`;
    },
  },
});
