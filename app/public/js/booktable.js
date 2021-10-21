const booktable = {
    data() {
      return {
        booktable: [],
        offers: [],
        bookForm:{},
        selectedBook: null
      }
    },

    methods: {
        fetchbooktableData() {
            fetch('/api/booktable/booktable.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.booktable = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        
    },
postOffer(evt) {
            console.log ("Test:", this.selectedOffer);
          if (this.selectedOffer) {
              this.postEditOffer(evt);
          } else {
              this.postNewOffer(evt);
          }
        },
        postEditOffer(evt) {
          this.offerForm.id = this.selectedOffer.id;
          this.offerForm.studentId = this.selectedStudent.id;        
          
          console.log("Editing!", this.offerForm);
  
          fetch('api/offer/update.php', {
              method:'POST',
              body: JSON.stringify(this.offerForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.offers = json;
              
              // reset the form
              this.handleResetEdit();
            });
        },
        postNewOffer(evt) {
          //this.offerForm.studentId = this.selectedStudent.id;        
          
          console.log("Creating!", this.bookForm);
  
          fetch('api/booktable/create.php', {
              method:'POST',
              body: JSON.stringify(this.bookForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.offers = json;
              
              // reset the form
              this.handleResetEdit();
            });
        },
        postDeleteOffer(o) {  
            if ( !confirm("Are you sure you want to delete the offer from " + o.companyName + "?") ) {
                return;
            }  
            
            console.log("Delete!", o);
    
            fetch('api/offer/delete.php', {
                method:'POST',
                body: JSON.stringify(o),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.offers = json;
                
                // reset the form
                this.handleResetEdit();
              });
          },
        handleEditOffer(offer) {
            this.selectedOffer = offer;
            this.offerForm = Object.assign({}, this.selectedOffer);
        },
        handleResetEdit() {
            this.selectedOffer = null;
            this.offerForm = {};
        }
    },
    
    
    created() {
        this.fetchbooktableData();
    }

}

Vue.createApp(booktable).mount('#booktableApp');
