<template>
 <div class="text-white ">
  <Form  edit :note="note" />
 </div>
</template>
<script>
import Form from '@/components/Form.vue'
export default {
    name: "Edit",
    data() {
        return {
            note: {}
        };
    },
    methods: {
        goToHomePage() {
            this.router.push("/");
        }
    },
    mounted() {
        if (this.$route.query.id) {
            const note = this.$store.getters.getNote(this.$route.query.id);
            if (note) {
                this.note = note;
            }
            else {
                this.goToHomePage();
            }
        }
        else {
            this.goToHomePage();
        }
    },
    components: { Form }
}
</script>
<style>

</style>
