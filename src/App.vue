<template>
<Header></Header>
<div class='w-full flex'>
    <router-view></router-view>
</div>
</template>

<script>
import Header from "./components/AppHeader";
export default {
    components: {
        Header,
    },
    data() {
        return {
            newHero: "",
            dcHero: [{
                    name: "superGirl"
                },
                {
                    name: "spidarMan"
                },
                {
                    name: "sujat"
                },
                {
                    name: "Flash"
                },
                {
                    name: "BatMan"
                }
            ],
            fname: "nooralam",
            lname: "khan"

        }
    },
    methods: {

        addNewHero() {
            if (this.newHero !== '') {
                this.dcHero.unshift({
                    name: this.newHero
                });
            }
            this.newHero = ''
        },
        ranM() {
            return Math.random();
        },
        remove(index) {
            this.dcHero = this.dcHero.filter((hero, i) => i !== index)
        }
    },
    computed: {
        herosCount() {
            return this.dcHero.length;
        },
        renc() {
            return this.dcHero.length + Math.random();
        },
        fullname() {
            return this.fname + " " + this.lname;
        }
    }
}
</script>

<style >
  
</style>
