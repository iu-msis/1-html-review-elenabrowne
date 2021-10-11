const booktable = {
    data() {
      return {
        booktable: [],
      }
    },

methods: {
fetchbooktableData() {
    fetch('/api/booktable/')
    .then( response => response.json() )
    .then( (responseJson) => {
        console.log(responseJson);
        this.booktable = responseJson;
    })
    .catch( (err) => {
        console.error(err);
    })
 }
},

created() {
    this.fetchbooktableData();
}

}


Vue.createApp(booktable).mount('#booktableApp');
