<template>
    <div class="ga-keyWord" >
        <el-row>
            <el-col :span="6">
                <div class="ga-keyWord__selects" :style="wrapStyle">
                    <el-select name="keyWords" v-model="selected" @change="changeSelect(selected)">
                        <el-option value="-1" label="请选择"></el-option>
                        <el-option value="1" label="A"></el-option>
                        <el-option value="2" label="A and B"></el-option>
                        <el-option value="3" label="A or B"></el-option>
                        <el-option value="4" label="A and B and C"></el-option>
                        <el-option value="5" label="(A and B) or C"></el-option>
                        <el-option value="6" label="(A or B) and C"></el-option>
                        <el-option value="7" label="A or B or C"></el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="ga-keyWord__contents">
                    <div v-if="selected === '1'" class="ga-keyWord__contents--item">
                        <span>&nbsp;</span>
                        <el-input v-model="ipt1" auto-complete="on" ></el-input>
                    </div>
                    <div v-if="selected === '2'" class="ga-keyWord__contents--item">
                        <span>&nbsp;</span>
                        <el-input v-model="ipt1" auto-complete="on" ></el-input>
                        <span>AND</span>
                        <el-input v-model="ipt2" auto-complete="on" ></el-input>
                    </div>
                    <div v-if="selected === '3'" class="ga-keyWord__contents--item">
                        <span>&nbsp;</span>
                        <el-input v-model="ipt1" auto-complete="on" ></el-input>
                        <span>OR</span>
                        <el-input v-model="ipt2" auto-complete="on" ></el-input>
                    </div>
                    <div v-if="selected === '4'" class="ga-keyWord__contents--item">
                        <span>&nbsp;</span>
                        <el-input v-model="ipt1" auto-complete="on" ></el-input>
                        <span>AND</span>
                        <el-input v-model="ipt2" auto-complete="on" ></el-input>
                        <span>AND</span>
                        <el-input v-model="ipt3" auto-complete="on" ></el-input>
                    </div>
                    <div v-if="selected === '5'" class="ga-keyWord__contents--item">
                        <span>（</span>
                        <el-input v-model="ipt1" auto-complete="on" ></el-input>
                        <span>AND</span>
                        <el-input v-model="ipt2" auto-complete="on" ></el-input>
                        <span>）</span>
                        <span>OR</span>
                        <el-input v-model="ipt3" auto-complete="on" ></el-input>
                    </div>
                    <div v-if="selected === '6'" class="ga-keyWord__contents--item">
                        <span>（</span>
                        <el-input v-model="ipt1" auto-complete="on" ></el-input>
                        <span>OR</span>
                        <el-input v-model="ipt2" auto-complete="on" ></el-input>
                        <span>）</span>
                        <span>AND</span>
                        <el-input v-model="ipt3" auto-complete="on" ></el-input>
                    </div>
                    <div v-if="selected === '7'" class="ga-keyWord__contents--item">
                        <el-input v-model="ipt1" auto-complete="on" ></el-input>
                        <span>OR</span>
                        <el-input v-model="ipt2" auto-complete="on" ></el-input>
                        <span>OR</span>
                        <el-input v-model="ipt3" auto-complete="on" ></el-input>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'keyWord',
        props: {
            option: Object
        },
        data () {
            return {
                selected: '',
                transVal: [],
                ipt1: '',
                ipt2: '',
                ipt3: ''
            }
        },
        computed: {
            wrapStyle () {
                return {
                    width: (this.option.width ? this.option.width : 150) + 'px'
                }
            }
        },
        methods: {
            changeSelect () {
                this.ipt1 = ''
                this.ipt2 = ''
                this.ipt3 = ''
            },
            getValue () {
                let type = this.selected;
                let arr = [];
                if (this.ipt1 !== '') {
                    arr.push(this.ipt1)
                }
                if (this.ipt2 !== '') {
                    arr.push(this.ipt2)
                }
                if (this.ipt3 !== '') {
                    arr.push(this.ipt3)
                }
                return {
                    [this.option.id]: {
                        'wordsType': type,
                        'words': arr
                    }
                }
            },
            setValue (val) {
                if (val.wordsType) {
                    this.selected = val.wordsType
                } else {
                    this.selected = ''
                }
            }
        }
    }
</script>

<style scoped>
    @component-namespace ga {
        @b keyWord {
            width : 600px;

            @e selects {
                display: inline-block;
             };
            @e contents {
                display: inline-block;
                height: 20px;
                margin-left:20px;
                padding-left: 40px;
                line-height: 20px;
                font-size: 12px;
                width : 700px;
                @m item {
                    display: inline-block;
                }
                & .el-input {
                    width : 130px
                }
             }
        }
    }
</style>
