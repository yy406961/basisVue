<template>
    <div class="yq-form__date" :style = "widthStyle">
        <el-date-picker :format="formatDate" :disabled="option.disabled" :editable=false :default-value="option.defaultVal" v-if="type=='datetime'" v-model="value" type="datetime" @change="changeHandler" :placeholder="placeholder" :picker-options="option.pickOptions"></el-date-picker>
        <el-date-picker :format="formatDate" :disabled="option.disabled" :editable=false :default-value="option.defaultVal" v-if="type=='datetimerange'" v-model="value" type="datetimerange" :placeholder="placeholder" :picker-options="option.pickOptions"></el-date-picker>
        <el-date-picker :format="formatDate" :disabled="option.disabled" :editable=false :default-value="option.defaultVal" v-if="type=='datetimeMinute'" v-model="value" type="datetime" @change="changeHandler" :placeholder="placeholder" :picker-options="option.pickOptions"></el-date-picker>
        <el-date-picker :format="formatDate" :disabled="option.disabled" :editable=false :default-value="option.defaultVal" v-if="type=='date'" v-model="value" type="date" placeholder="选择日期" :picker-options="option.pickOptions"
        @change="changeHandler"></el-date-picker>
        <el-date-picker :format="formatDate" :disabled="option.disabled" :editable=false :default-value="option.defaultVal" v-if="type=='year'" v-model="value" type="year" placeholder="选择年" :picker-options="option.pickOptions"></el-date-picker>
        <el-date-picker :format="formatDate" :disabled="option.disabled" :editable=false :default-value="option.defaultVal" v-if="type=='month'" v-model="value" type="month" placeholder="选择月" :picker-options="option.pickOptions"></el-date-picker>
    </div>
</template>
<script>
    import { isFunction } from '@/utils/lib'
    import dayjs from 'dayjs'
    export default {
        name: 'date',
        props: [
            'option'
        ],
        data () {
            return {
                value: '',
                type: '',
                formatDate: '',
                placeholder: ''
            }
        },
        mounted () {
            this.value = this.option.value
            this.type = this.option.type;
            this.formatFun(this.type)
            this.placeholder = this.option.placeholder ? this.option.placeholder : '选择日期时间'
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
        computed: {
            widthStyle () {
                return {
                    width: this.option.width + 'px'
                }
            }
        },
        methods: {
            formatFun(val) {
                if (this.option.format) {
                    this.formatDate = this.option.format
                } else {
                    this.typeFormat(val)
                }
            },
            getValue () {
                let format;
                switch (this.type) {
                    case 'datetime':
                        format = 'YYYY-MM-DD HH:mm:ss';
                        break;
                    case 'datetimerange':
                        format = 'YYYY-MM-DD HH:mm:ss';
                        break;
                    case 'datetimeMinute':
                        format = 'YYYY-MM-DD HH:mm';
                        break;
                    case 'date':
                        format = 'YYYY-MM-DD';
                        break;
                    case 'year':
                        format = 'YYYY';
                        break;
                    case 'month':
                        format = 'YYYY-MM';
                        break;
                    default:;
                }
                if (this.value) {
                    return { [this.option.id]: dayjs(this.value).format(format) };
                } else {
                    return { [this.option.id]: '' };
                }
            },
            setValue (val) {
                if (val !== undefined) {
                    this.value = val;
                }
            },
            changeHandler (value) {
                if (this.option.change && isFunction(this.option.change)) {
                    this.option.change(value);
                }
            },
            typeFormat(val) {
                switch (val) {
                    case 'datetime':
                        this.formatDate = 'yy-MM-dd HH:mm:ss';
                        break;
                    case 'datetimerange':
                        this.formatDate = 'yy-MM-dd HH:mm:ss';
                        break;
                    case 'datetimeMinute':
                        this.formatDate = 'yy-MM-dd HH:mm';
                        break;
                    case 'date':
                        this.formatDate = 'yy-MM-dd';
                        break;
                    case 'year':
                        this.formatDate = 'yy';
                        break;
                    case 'month':
                        this.formatDate = 'yy-MM';
                        break;
                    default:;
                }
            }
        }
    }
</script>
<style>

</style>
