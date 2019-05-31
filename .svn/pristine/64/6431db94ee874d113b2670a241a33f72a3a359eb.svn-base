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
                    <span v-if="required" class="ga-keyWord__required">*</span>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="ga-keyWord__contents">
                    <div v-if="selected === '1'" class="ga-keyWord__contents--item">
                        <span>&nbsp;</span>
                        <el-select  v-model="ipt1" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select >
                    </div>
                    <div v-if="selected === '2'" class="ga-keyWord__contents--item">
                        <span>&nbsp;</span>
                        <el-select v-model="ipt1" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>AND</span>
                        <el-select v-model="ipt2" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div v-if="selected === '3'" class="ga-keyWord__contents--item">
                        <span>&nbsp;</span>
                        <el-select v-model="ipt1" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>OR</span>
                        <el-select v-model="ipt2" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div v-if="selected === '4'" class="ga-keyWord__contents--item">
                        <span>&nbsp;</span>
                        <el-select v-model="ipt1" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>AND</span>
                        <el-select v-model="ipt2" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>AND</span>
                        <el-select v-model="ipt3" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div v-if="selected === '5'" class="ga-keyWord__contents--item">
                        <!--<span>&nbsp;</span>-->
                        <span>（</span>
                        <el-select v-model="ipt1" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>AND</span>
                        <el-select v-model="ipt2" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>）</span>
                        <span>OR</span>
                        <el-select v-model="ipt3" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div v-if="selected === '6'" class="ga-keyWord__contents--item">
                        <!--<span>&nbsp;</span>-->
                        <span>（</span>
                        <el-select v-model="ipt1" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>OR</span>
                        <el-select v-model="ipt2" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>）</span>
                        <span>AND</span>
                        <el-select v-model="ipt3" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div v-if="selected === '7'" class="ga-keyWord__contents--item">
                        <el-select v-model="ipt1" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>OR</span>
                        <el-select v-model="ipt2" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                        <span>OR</span>
                        <span>&nbsp;</span>
                        <el-select v-model="ipt3" placeholder="请选择" :style="widthStyle" filterable>
                            <el-option v-for="item in data" :key="item.name" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'keyWordSelect',
        props: ['option'],
        data () {
            return {
                selected: '',
                transVal: [],
                ipt1: '',
                ipt2: '',
                ipt3: '',
                required: false,
                data: []
            }
        },
        computed: {
            wrapStyle () {
                return {
                    width: (this.option.width ? this.option.width : 150) + 'px'
                }
            },
            widthStyle () {
                return {
                    width: '130px'
                }
            }
        },
        mounted () {
            this.data = this.option.data
            this.required = this.option.required
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
                position: relative;
            };
            @e required {
                color: #f00;
                position: absolute;
                top: 2px;
                right: -12px;
            }
            @e contents {
                display: inline-block;
                height: 40px;
                /*padding-left: 60px;*/
                padding-left: 40px;
                line-height: 20px;
                font-size: 12px;
                width : 600px;
                @m item {
                    display: inline-block;
                & .el-select {
                      /*margin :0 10px 20px;*/
                      margin :0 5px 20px;
                      width : 180px;
                  }
                }
            & .el-input {
                  width : 130px
              }
            }
        }
    }
</style>


