<template>
    <el-input v-model="value"
              :disabled="option.disabled"
              :placeholder="placeholder"
              auto-complete="on"
              :style = "widthStyle"
              :type = "option.iptType"
              :rows = "option.rows"
              @change="changeEvent"></el-input>
</template>
<script>
    import { isFunction } from '@/utils/lib'
    export default {
        name: 'vtext',
        props: [
            'option'
        ],
        data () {
            return {
                value: '',
                placeholder: ''
            }
        },
        watch: {
            'option.value': {
                deep: true,
                handler (newVal) {
                    this.value = newVal;
                }
            },
            'option.placeholder': {
                deep: true,
                handler (newVal) {
                    this.placeholder = newVal;
                }
            }
        },
        mounted () {
            this.value = this.option.value;
            this.placeholder = this.option.placeholder ? this.option.placeholder : '请输入内容'
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
                return { [this.option.id]: this.value || '' };
            },
            setValue (val) {
                this.value = val;
            },
            changeEvent (val) {
                if (this.option.changeEvent && isFunction(this.option.changeEvent)) {
                    this.option.changeEvent(val)
                }
            }
        }
    }
</script>
<style>

</style>
