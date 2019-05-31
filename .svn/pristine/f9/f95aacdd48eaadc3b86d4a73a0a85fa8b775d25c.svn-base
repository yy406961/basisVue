<template>
    <el-autocomplete
        class="inline-input"
        v-model="value"
        :placeholder="placeholder"
        :style="widthStyle"
        :disabled="option.disabled"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
    ></el-autocomplete>
</template>

<script>
    export default {
        name: 'autoComplete',
        props: [
            'option'
        ],
        data () {
            return {
                autoList: [],
                value: '',
                placeholder: ''
            };
        },
        computed: {
            widthStyle () {
                return {
                    width: this.option.width + 'px'
                }
            }
        },
        methods: {
            querySearch (queryString, cb) {
                let autoList = this.autoList;
                let results = queryString ? autoList.filter(this.createFilter(queryString)) : autoList;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter (queryString) {
                return (autoList) => {
                    return (autoList.value.indexOf(queryString.toLowerCase()) === 0);
                };
            },
            getValue () {
                return { [this.option.id]: this.value || '' };
            },
            setValue (val) {
                if (val !== undefined) this.value = val;
            }
        },
        watch: {
            'option.data' (val) {
                this.autoList = [];
                for (let i = 0; i < val.length; i++) {
                    for (var key in val[i]) {
                        val[i][key] = String(val[i][key]);
                        if ((val[i][key].length === 13) && (val[i][key].slice(0, 2) === '86')) {
                            val[i][key] = val[i][key].slice(2)
                            this.autoList.push({ 'value': val[i][key] });
                        } else {
                            this.autoList.push({ 'value': val[i][key] });
                        }
                    }
                }
            }
        },
        mounted () {
            let val = this.option.data;
            for (let i = 0; i < val.length; i++) {
                for (var key in val[i]) {
                    val[i][key] = String(val[i][key]);
                }
                this.autoList.push({ 'value': val[i][key] });
            }
            this.placeholder = this.option.placeholder ? this.option.placeholder : '请输入内容'
        }
    }
</script>

<style>
</style>
