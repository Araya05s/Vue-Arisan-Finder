const app = Vue.createApp({
    data() {
        return {
            state: false,
            inputName: '',
            names: [],
            error: '',
            showError: false,
            result: 'Mira'
        }
    },
    computed: {
      isReady() {
        return this.names.length > 1;
      }  
    },
    methods: {
        addNameToList() {
            const userName = this.inputName;
            if (this.validate(userName)) {
                this.names.push(userName);
                this.inputName = '';
                this.showError = false;
            } else {
                this.showError = true;
            }
        },
        validate(value) {

            this.error = '';

            if (this.inputName=='') {
                this.error = "Sorry! name can't be empty";
                return false;
            }
            if (this.names.includes(value)) {
                this.error = "Sorry! that name already exists!";
                return false;
            }

            return true;
        },
        removeName(index) {
            this.names.splice(index, 1);
        },
        showResult() {
            this.state = false;
            this.getResult();
        },
        getRandomName() {
            return this.names[Math.floor(Math.random() * this.names.length)];
        },
        getResult() {
            let randName = this.getRandomName();
            this.result = randName;
        },
        backToHome() {
            this.state = true;
            this.names = [];
            this.inputName = '';
            this.error = ';'
        }
    },
}).mount("#app")