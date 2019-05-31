<template>
    <el-input v-model.number="value" type="number"
              :disabled="option.disabled" placeholder="请输入数字"
              :style = "widthStyle"></el-input>
</template>
<script>
    export default {
        name: 'vtextNum',
        props: [
            'option'
        ],
        data () {
            return {
                value: ''
            }
        },
        mounted () {
            this.value = this.option.value;
        },
        computed: {
            widthStyle () {
                return {
                    width: this.option.width + 'px'
                }
            }
        },
        methods: {
            getValue () {
                return { [this.option.id]: this.value };
            },
            setValue (val) {
                if (val) {
                    this.value = val;
                }
            }
        }
    }
</script>
<style>

</style>
