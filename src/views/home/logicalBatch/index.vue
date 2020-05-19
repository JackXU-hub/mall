<template>
    <div class="app-container">
        <xyy-panel title="查询条件" fold>
            <!-- 按钮组 -->
            <btn-group slot="tools" :btn-list="btnList" />
            <el-form ref="formData" :model="formData" label-width="120px">
                <el-col :lg="6" :md="6">
                    <el-form-item label="商品编码">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="商品名称">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="原商品编码">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="批号">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="逻辑批次号">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="货主">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="往来单位名称">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="生产厂家">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="移动类型">
                        <el-select v-model="formData.buildingCode" placeholder="全部">
                            <el-option
                                    v-for="item in mobileTypes"
                                    :key="item.dictCode"
                                    :label="item.dictName"
                                    :value="item.dictCode"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="单据编号">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <!-- 过账日期 -->
                <el-col :lg="6" :md="6">
                    <xyy-date-form-item
                            title="过账日期"
                            :is-first-day="true"
                            :limit-date="this.postStartLimitDate"
                            :limit-behind="false"
                            @datePicked="postStatrtDataPicked"
                            @defalutData='postStartDeafultDate'>
                    </xyy-date-form-item>
                </el-col>
                <!-- 过账截止日期 -->
                <el-col :lg="6" :md="6">
                    <xyy-date-form-item
                            title="截止日期"
                            :is-first-day="false"
                            :limit-date="this.postEndLimitDate"
                            :limit-behind="true"
                            @datePicked="postEndDataPicked"
                            @defalutData="postEndDeafultDate">
                    </xyy-date-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="商品大全">
                        <el-select v-model="formData.buildingCode" placeholder="全部">
                            <el-option
                                    v-for="item in mobileTypes"
                                    :key="item.dictCode"
                                    :label="item.dictName"
                                    :value="item.dictCode"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-form>
        </xyy-panel>

        <xyy-panel title="列表信息">
            <div class="elTabsContainer">
                <el-tabs type="border-card" @tab-click="tabSClick">
                    <el-tab-pane label="出入库流水"></el-tab-pane>
                    <el-tab-pane label="入库流水"></el-tab-pane>
                    <el-tab-pane label="出库流水"></el-tab-pane>
                </el-tabs>
            </div>
            <!-- 按钮组 -->
            <btn-group slot="tools" :btn-list="settingBtnList" />
            <!--table-->
            <vxe-table
                    ref="xTable"
                    stripe
                    resizable
                    highlight-current-row
                    highlight-hover-row
                    height="500"
                    align="center"
                    class="mytable-style"
                    row-id="lineNumber"
                    :data="tableData">
                <vxe-table-column type="seq" title="序号" width="60"/>
                <vxe-table-column field="erpOrderCode" title="调整单号" width="120"/>
                <vxe-table-column field="orderNumber" title="行号" width="120"/>
                <vxe-table-column field="carrierName" title="原采购退补单号" width="120"/>
                <vxe-table-column field="carrierTypeName" title="退补单行号" width="120"/>
                <vxe-table-column field="waybillNumber" title="商品编号" width="120"/>
                <vxe-table-column field="logisticsStatusName" title="商品名称" width="120"/>
                <vxe-table-column field="endShipmentData" title="商品规格" width="120"/>
                <vxe-table-column field="userName" title="单位" width="100"/>
                <vxe-table-column field="money" title="调整金额" width="120"/>
                <vxe-table-column field="ownerCode" title="移动类型" width="120"/>
                <vxe-table-column field="buildingCode" title="调整类型" width="120"/>
                <vxe-table-column field="buildingCode" title="制单日期" width="120"/>
                <vxe-table-column field="buildingCode" title="金额(过账日期)" width="130"/>
            </vxe-table>
            <el-pagination
                    :current-page="currentPage"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="this.formData.pageSize"
                    :page-count="getPageNum"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="this.formData.total"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
            />
        </xyy-panel>
    </div>

</template>

<script>

    import XyyDateFormItem from "../../../components/xyy/xyy-date-form-item/index";
    import XyyPanel from "../../../components/xyy/xyy-panel/index";
    export default {
        name: "logicalBatch",
        components: { XyyPanel, XyyDateFormItem},
        data () {
            return {
                btnList: [
                    {
                        label: '查询',
                        type: 'primary',
                        shortkey: '',
                        clickEvent: this.query
                    },
                    {
                        label: '导出',
                        type: 'primary',
                        shortkey: '',
                        clickEvent: this.exportData
                    },
                ],
                settingBtnList: [
                    {
                        label: '设置显示列',
                        type: 'primary',
                        shortkey: '',
                        clickEvent: this.setting
                    }
                ],
                // 建筑物
                mobileTypes: [
                    {
                        dictCode: '',
                        dictName: '全部'
                    }
                ],

                // 表单数据:作为主表单上传的数据
                formData: {
                    pageNum: 1,
                    pageSize: 10,
                    sortname: '',
                    sorttype: '',
                    sort: 'asc',
                    carrier: '', // 承运单位
                    erpOrderCode: '', // 订单编号
                    waybillNumber: '', // 运单编号
                    logisticsStatus: '', // 订单状态
                    isTemperature: '', // 是否冷藏冷冻
                    ownerCode: '', // 业主
                    buildingCode: '', // 建筑物
                    total: 0
                },
                // 乘运商
                carrierUnits: [
                    {
                        dictCode: '',
                        dictName: '全部'
                    }
                ],
                postStartLimitDate: null,
                postEndLimitDate: null,
                tableData: [{'money':100.18},{'money':100.58}], // 表格数据
                currentPage: 0, // 分页索引
                result: null, // 后台返回数据

            }
        },
        computed: {
            getPageNum() {
                return this.formData.total / this.formData.pageSize
            }
        },
        methods: {
            query() { //查询

            },

            exportData() { //导出

            },
            setting() { //设置显示列

            },
            // 分页
            handleSizeChange(val) {
                this.formData.pageSize = val
                console.log(`每页 ${val} 条`)
            },
            handleCurrentChange(val) {
                this.formData.pageNum = val
                console.log(`当前页: ${val}`)
            },
            postStatrtDataPicked(startDate) { //过账日期
                this.postEndLimitDate = new Date(startDate)
            },
            postStartDeafultDate(date) {// 过账默认日期
                this.postEndLimitDate = new Date(date)

            },
            postEndDataPicked(endDate) {// 过账截止日期
                this.postStartLimitDate = new Date(endDate)
            },
            postEndDeafultDate(endDate) {// 过账截止默认日期
                this.postStartLimitDate = new Date(endDate)
            },
            tabSClick(tabs) { // 选项卡选择回调
                console.log(tabs.index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-pagination {
        float: right;
        margin-top: 10px;
        margin-right: 60px;
    }
    .el-tabs {
        background-color: orange;
        position: relative;
        margin-top: 0px;
    }
    .el-tabs__content {
        background-color: red;
        height: 0px;
    }
</style>
