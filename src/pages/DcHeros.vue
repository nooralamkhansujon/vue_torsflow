<template>
<div class="w-full flex">
    <div class="m-auto">
        <h1 class="text-2xl text-center">DC Heros {{herosCount}}</h1>
        <ul>
            <li v-for="(hero,index) in dcHero" :key="index">
                <div class="flex justify-between">
                    {{hero.name}}
                    <button @click="remove(index)">&times;</button>
                </div>
            </li>
        </ul>

        <form action="" class="mt-10" @submit.prevent="addNewHero">
            <input class="border rounded mr-3" placeholder="Enter Hero Man" v-model.trim="newHero" />
            <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white p-1" type="submit">Add Hero</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
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
        remove(index) {
            this.dcHero = this.dcHero.filter((hero, i) => i !== index)
        }
    },
    computed: {
        herosCount() {
            return this.dcHero.length;
        },
    }
}
</script>

<style >

</style>
