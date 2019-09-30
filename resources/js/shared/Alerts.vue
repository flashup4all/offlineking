<template>
    <div class="row">
        <div class="alert" :class='type' role="alert">
            {{ message }}
        </div>
    </div>
</template>

<script>
    export default {
        name:'alerts',
        props: {
	      message: String,
	      type: String,
		},
        mounted() {

        },
    }
</script>
<style>
    .alert {
        width: 100%;
        padding: 5px;
        text-align: center;
    }
</style>