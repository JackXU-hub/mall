<template>
    <el-form-item :label='title' :isFirstDay="isFirstDay" :contrastTime="contrastTime">
        <el-date-picker
                v-model="date"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                @change="valueChange">

        </el-date-picker>
    </el-form-item>
</template>

<script>
    export default {
        name: "XyyDateFormItem",
        props: {
            title : {// 标题
                type: String,
                deafult: ''
            },
            isFirstDay: { // 是否是每月的第一天
                type: Boolean,
                default: true
            },
            contrastTime: { //比对时间
                type: Date,
                default: null
            },
            limitDate: {// 限制时间
                type: Date,
                deafult: null
            },
            limitBehind: {// 是否限制选择时间后面的时间 当有limitDate时 此属性必须设置
                type: Boolean,
                default: true
            }
        },

        data () {
            return {
                date: this.currentMonthFirstDay(),
                pickerOptions: {},
            }
        },

        created () {

            let self = this
            console.log('contrastTime111:' + self.contrastTime);
            this.pickerOptions = {
                disabledDate(time) {
                    if (self.limitDate === null){
                        return false
                    }else {
                        if (self.limitBehind){
                            return time.getTime() < new Date(self.limitDate).getTime()
                        }else {
                            return time.getTime() > new Date(self.limitDate).getTime()
                        }

                    }

                }
            }
        },

        methods: {
            currentMonthFirstDay () {
                let self = this
                var now = new Date(); //当前日期
                var nowMonth = now.getMonth(); //当前月
                var nowYear = now.getFullYear(); //当前年
                //本月的开始时间
                console.log(this.isFirstDay);
                var monthStartDate = new Date(nowYear, nowMonth, 1);
                if (this.isFirstDay===false){
                    monthStartDate = new Date(nowYear, nowMonth, 15);
                }
                this.$emit('defalutData', monthStartDate)//默认时间传给父组件的目的是默认添上limit属性
                return monthStartDate
            },
            valueChange (value) {
                console.log('contrastTime' + this.contrastTime)
                console.log(this.compareDate(value, this.contrastTime));
                this.$emit('datePicked', value)
                if (this.contrastTime !== null) { //如果比对时间不为空 提交比对结果给父组件
                    this.$emit('contrastTime', this.compareDate(value, this.contrastTime))
                }
            },
            compareDate(date1,date2) {
                console.log( new Date(date1).getTime() )
                console.log( date2)
                return new Date(date1).getTime() > new Date(date2).getTime();
            }

        }
    }
</script>

<style scoped>

</style>
