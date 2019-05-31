<template>
    <el-select v-model='value' :disabled="option.disabled" :filterable="option.filterable"
        :clearable="clearable"
        :multiple = "option.multiple"
        @change="changeHandler"
        :placeholder="placeholder"
        :style="widthStyle">
        <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
    </el-select>
</template>
<script>
    import { concats } from '@/utils/lib'
    export default {
        name: 'vselect',
        props: {
            option: {
                type: Object,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                value: '',
                placeholder: '',
                data: []
            }
        },
        mounted () {
            this.value = this.option.value;
            this.groupData(this.option.data);
            this.placeholder = this.option.placeholder ? this.option.placeholder : '请选择'
        },
        watch: {
            'option.data': {
                deep: true,
                handler (newVal) {
                    this.groupData(newVal);
                }
            }
        },
        computed: {
            widthStyle () {
                return {
                    width: this.option.width + 'px'
                }
            }
        },
        methods: {
            changeHandler (value) {
                if (this.option.change && $.isFunction(this.option.change)) {
                    this.option.change(value);
                }
            },
            getValue () {
                return { [this.option.id]: this.value };
            },
            setValue (val) {
                if (val !== undefined) this.value = val;
            },
            groupData (data = []) {
                let list = [];
                if (this.option.isAll) {
                    list.push({
                        name: '全部',
                        value: ''
                    })
                }
                this.data = concats(list, data);
            }
        }
    }
</script>
<style>

</style>
