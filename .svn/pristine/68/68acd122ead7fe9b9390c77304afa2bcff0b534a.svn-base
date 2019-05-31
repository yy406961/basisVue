<template>
    <el-button :type = "option.btnType ? option.btnType : 'primary'"
               :size="option.size ? option.size : 'medium'"
        :style = "widthStyle"
        v-if="option.popover"
        v-popover:option.popover
        :disabled="option.disabled"
        @click.native="clickHandler">
        {{option.value}}
    </el-button>
    <el-button :type="option.btnType ? option.btnType : 'primary'"
               :size="option.size ? option.size : 'medium'"
            :style = "widthStyle"
        v-else
        :disabled="option.disabled"
        @click.native="clickHandler">
        {{option.value}}
    </el-button>
</template>
<script>
    import { isFunction } from '@/utils/lib'
    export default {
        name: 'vbutton',
        props: [
            'option'
        ],
        data () {
            return {}
        },
        computed: {
            widthStyle () {
                return {
                    width: this.option.width + 'px'
                }
            }
        },
        created () {
        },
        mounted () {

        },
        components: {},
        watch: {},
        methods: {
            clickHandler () {
                if (this.option.click && isFunction(this.option.click)) {
                    this.option.click();
                }
            },
            getValue () {
                return { [this.option.id]: this.option.value };
            }
        }
    }
</script>
<style>

</style>
