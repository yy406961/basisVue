<script>
    import textComp from '@/components/Form/text'
    import textNumberComp from '@/components/Form/textNumber'
    import dateComp from '@/components/Form/date'
    import selectComp from '@/components/Form/select'
    import radioComp from '@/components/Form/radio'
    import checkBoxComp from '@/components/Form/checkbox'
    import switchComp from '@/components/Form/switch'
    import buttonComp from '@/components/Form/button'
    import keywordComp from '@/components/Form/keyWord'
    import autoCompleteComp from '@/components/Form/autoComplete'
    import keywordSelectComp from '@/components/Form/keyWordSelect'
    import keywordAutoComp from '@/components/Form/keyWordAuto'
    import { cloneDeeps, isFunction, isArray, assigns } from '@/utils/lib'
    export default {
        name: 'vform',
        props: [
            'option'
        ],
        data () {
            return {
                // form label标签默认居右
                labelPos: '',
                labelWidth: null,
                temArray: [],
                sliderUp: false,
                wrapIndex: [],
                btnIndex: []
            }
        },
        created () {
            if (this.option.canSlider && this.option.items.length >= 3) {
                this.option.items.map((item, index) => {
                    if (item.wrap) {
                        this.wrapIndex.push(index)
                    }
                    if (item.type === 'button') {
                        this.btnIndex.push(index)
                    }
                })
                this.slider()
            }
        },
        mounted () {
            this.labelPos = this.option.labelPos || 'right';
            this.items = cloneDeeps(this.formOpt.items) || [];
            // this.sliderUp = this.formOpt.defaultSlide || false;
            if (this.option.labelWidth) {
                this.labelWidth = this.option.labelWidth + 'px'
            }
        },
        computed: {
            formOpt () {
                return this.option;
            },
            sliderClass () {
                return !this.sliderUp ? 'slider-up el-icon-caret-bottom' : 'slider-up el-icon-caret-top'
            },
            btnsStyle () {
                let r = 10;
                if (this.formOpt.canSlider) {
                    r = 60;
                }
                return {
                    right: r + 'px'
                }
            }
        },
        components: {
            textComp,
            textNumberComp,
            dateComp,
            selectComp,
            radioComp,
            checkBoxComp,
            switchComp,
            buttonComp,
            keywordComp,
            autoCompleteComp,
            keywordSelectComp,
            keywordAutoComp
        },
        /* eslint-disable no-unused-vars */
        render (h) {
            let elItems, elBtns;
            let elSlider;
            let me = this;
            let br = <br />;
            elItems = me.formOpt.items.map((it, index) => {
                let comp;
                let ref = 'comp' + index;
                switch (it.type) {
                    case 'text':
                        comp = <textComp option={it.comOpt} ref={ref}></textComp>
                        break;
                    case 'textNumber':
                        comp = <textNumberComp option={it.comOpt} ref={ref}></textNumberComp>
                        break;
                    case 'date':
                        comp = <dateComp option={it.comOpt} ref={ref}></dateComp>
                        break;
                    case 'select':
                        comp = <selectComp option={it.comOpt} ref={ref}></selectComp>
                        break;
                    case 'radio':
                        comp = <radioComp option={it.comOpt} ref={ref}></radioComp>
                        break;
                    case 'checkbox':
                        comp = <checkBoxComp option={it.comOpt} ref={ref}></checkBoxComp>
                        break;
                    case 'switch':
                        comp = <switchComp option={it.comOpt} ref={ref}></switchComp>
                        break;
                    case 'keyWord':
                        comp = <keywordComp option={it.comOpt} ref={ref}></keywordComp>
                        break;
                    case 'keyWordSelect':
                        comp = <keywordSelectComp option={it.comOpt} ref={ref}></keywordSelectComp>
                        break;
                    case 'keyWordAuto':
                        comp = <keywordAutoComp option={it.comOpt} ref={ref}></keywordAutoComp>
                        break;
                    case 'button':
                        comp = <buttonComp option={it.comOpt} ref={ref}></buttonComp>
                        break;
                    case 'autoCompletet':
                        comp = <autoCompleteComp option={it.comOpt} ref={ref}></autoCompleteComp>
                        break;
                    default:break;
                }
                let formBox;
                let required;
                let divarrow;
                if (it.comOpt.show === undefined || it.comOpt.show) {
                    if (it.required) {
                        required = <span class='rormRequired'>*</span>;
                    }
                    if (it.type === 'text' || it.type === 'date' || it.type === 'autoCompletet') {
                        divarrow = <div class='formArrow'>
                        <span class='arrowLeftTop'></span>
                        <span class='arrowRightBottom'></span>
                        </div>
                    }
                    formBox = <el-form-item label={it.label}>
                        {comp}{divarrow} {required}
                    </el-form-item>
                }
                if (it.wrap) {
                    return <span>{formBox} {br}</span>
                }
                return formBox
            })
            if (me.formOpt.btns && isArray(me.formOpt.btns)) {
                elBtns = me.formOpt.btns.map((it, index) => {
                    let comp, formBox;
                    let ref = 'btn' + index;
                    comp = <buttonComp option={it.comOpt} ref={ref}></buttonComp>
                    if (it.comOpt.show === undefined || it.comOpt.show) {
                        formBox = <el-form-item label={it.label}>
                        {comp}
                    </el-form-item>
                    }
                    if (it.wrap) {
                        return <span>{formBox} {br}</span>
                    }
                    return formBox
                });
                if (this.formOpt.btnPos === 'right') {
                    elBtns = <div class='formBtns' style = {this.btnsStyle}>{elBtns}</div>
                }
            }
            elSlider = me.formOpt.canSlider ? <i class={this.sliderClass} onClick={this.slider}></i> : ''
            return (
                <div class='form'>
                     {elSlider}
                    <el-form inline={this.formOpt.inline} label-position={this.labelPos}
                        label-width={this.labelWidth} ref='form' >
                        {elItems}
                        {elBtns}
                    </el-form>
                </div>
            )
        },
        methods: {
            getValue () {
                let me = this;
                let returnData = {};
                me.formOpt.items.forEach((it, index) => {
                    if (it.show === undefined || it.show) {
                        if (me.$refs['comp' + index]) {
                            if (isFunction(me.$refs['comp' + index].getValue)) {
                                assigns(returnData, me.$refs['comp' + index].getValue());
                            }
                        }
                    }
                });
                return returnData;
            },
            // data: [{id: 'text1', value: '22'},{id: 'checkbox1', value: ['1', '2']}]
            setValue (data) {
                let me = this;
                this.formOpt.items.forEach((it, index) => {
                    data.forEach(d => {
                        if (it.comOpt.id === d.id) {
                            me.$nextTick(() => {
                                me.$refs['comp' + index].setValue(d.value);
                            })
                        }
                    })
                });
            },
            // 清空value
            clearValue () {
                this.formOpt.items.forEach((it, index) => {
                    let vm = this.$refs['comp' + index];
                    if (vm && isFunction(vm.setValue)) {
                        vm.setValue('')
                    }
                });
            },
            // 获得当前form容器的高度
            getContainerHeight () {
                return $(this.$el).outerHeight(true)
            },
            setItemData (id, data) {
                let me = this;
                this.formOpt.items.forEach(it => {
                    if (it.comOpt.id === id) {
                        it.comOpt.data = data;
                    }
                });
            },
            setShow (data) {
                let me = this;
                this.formOpt.items.forEach((item) => {
                    data.forEach(d => {
                        if (item.comOpt.id === d.id) {
                            item.comOpt.show = d.value;
                        }
                    })
                });
            },
            // 设置form元素item属性
            setOtherAttribute (id, attr, data) {
                let me = this;
                this.formOpt.items.forEach(it => {
                    if (it.comOpt.id === id) {
                        it.comOpt[attr] = data;
                    }
                });
            },
            slider () {
                const LEN = this.formOpt.items.length
                let btnLen = this.btnIndex.length
                let INDEX = this.wrapIndex[0] + 1
                if (this.sliderUp) {
                    this.temArray = this.formOpt.items.slice(INDEX, LEN - btnLen)
                    this.formOpt.items.splice(INDEX, LEN - INDEX - btnLen)
                    this.formOpt.items[INDEX - 1].wrap = false
                } else {
                    this.formOpt.items.splice(INDEX, 0, ...this.temArray)
                    this.formOpt.items[INDEX - 1].wrap = true
                }
                this.sliderUp = !this.sliderUp
                this.$nextTick(() => {
                    this.$emit('formSlideChange', this.sliderUp);
                })
            }
        }
    }
</script>
<style scoped>
    .form{
        /* margin : 10px 0; */
        text-align: left;
        position: relative;
    }
    .el-form-item{
        margin:4px;
    }
    .formBtns{
        position: absolute;
        right: 10px;
        bottom: 0;
    }
    .rormRequired{
        color: #f00;
        position: absolute;
        top: 2px;
        right: -12px;
    }
    .arrowSpan{
        position: absolute;
        padding: 4px 5px;
        border-style: solid;
        border-color: #55A6EF;
    }
    .arrowLeftTop{
        border-width: 2px 0 0 2px;
        top: -1px;
        left: -1px;
    }
    .arrowRightBottom{
        border-width: 0 2px 2px 0;
        bottom: -1px;
        right: -1px;
    }
    .slider-up {
       display: block;
       position: absolute;
       top: 10px;
       right: 30px;
       width: 20px;
       height: 20px;
       color: #4c84e0;
       font-size: 20px;
       z-index: 10;
   }
</style>
