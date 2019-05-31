<template>
    <div :style = "widthStyle">
        <el-checkbox-group v-model="value" :disabled="option.disabled" @change="changeHandler">
            <el-checkbox v-for="item in option.data" :key="item.name" :disabled="item.disabled" :label="item.value" name="type">{{item.name}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
    import { isFunction } from '@/utils/lib'
    export default {
        name: 'checkbox',
        props: [
            'option'
        ],
        data () {
            return {
                value: []
            }
        },
        created () {
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
        components: {},
        watch: {},
        methods: {
            changeHandler (value) {
                if (this.option.change && isFunction(this.option.change)) {
                    this.option.change(value);
                }
            },
            getValue () {
                return { [this.option.id]: this.value };
            },
            setValue (val) {
                this.value = val;
            }
        }
    }
</script>
<style>

</style>
