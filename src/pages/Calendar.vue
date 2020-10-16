<template>
<div class="m-auto text-center">
    <h1 class="text-2xl my-2 text-center">Vue Calender</h1>
    <section class="mx-2 flex justify-between">
        <h2 class="font-bold">{{ getCurrentMonthName}}</h2>
        <h2 class="font-bold">{{currentYear}}</h2>
    </section>

    <section class="flex justify-center">
        <p style="width:14.28%" class="text-center my-2" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="flex flex-wrap justify-start">
        <p style="width:14.28%" class="text-center my-2" v-for="num in startDay()" :key="num"></p>
        <p style="width:14.28%" class="text-center my-2" v-for="num in daysInMonth()" :key="num" :class="currentDateClass(num)">{{num}}</p>
    </section>
    <section class="flex justify-between my-2">
        <button class="border rounded" @click="PrevMonth">Prev</button>
        <button class="border rounded" @click="NextMonth">Next</button>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            currentMonth: new Date().getMonth(),
            currentMonthName: new Date().toLocaleString('default', {
                month: "long"
            }),
            currentDate: new Date().getDate(),
            currentYear: new Date().getFullYear(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', "Sat"]
        }
    },
    methods: {
        daysInMonth() {
            return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        PrevMonth() {
            this.currentMonth--
            if (this.currentMonth == -1) {
                this.currentMonth = 11
                this.currentYear--;
            }
            this.currentMonthName = new Date(this.currentYear, this.currentMonth).toLocaleString('default', {
                month: "long"
            });
        },
        NextMonth() {
            this.currentMonth++;
            if (this.currentMonth == 12) {
                this.currentMonth = 0;
                this.currentYear++;
            }
            this.currentMonthName = new Date(this.currentYear, this.currentMonth).toLocaleString('default', {
                month: "long"
            });

        },
        currentDateClass(num) {
            const calenderFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
            const currentFullDate = new Date().toDateString();
            return calenderFullDate == currentFullDate ? 'text-yellow-600' : "";
        }
    },
    computed: {
        getCurrentMonthName() {
            return this.currentMonthName
        }
    }
}
</script>

<style scoped>

</style>
