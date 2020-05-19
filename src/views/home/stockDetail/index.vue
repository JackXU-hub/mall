<template>
    <div class="app-container">
        <xyy-panel title="查询条件" fold>
            <!-- 按钮组 -->
            <btn-group slot="tools" :btn-list="btnList" />
            <el-form ref="formData" :model="formData" label-width="120px">
                <!-- 单据日期 -->
                <el-col :lg="6" :md="6">
                    <xyy-date-form-item
                            title="单据日期"
                            :is-first-day="true"
                            :limit-date="this.orderStartLimitDate"
                            :limit-behind="false"
                            @datePicked="orderStatrtDataPicked"
                            @defalutData='orderStatrtDeafultDate'>
                    </xyy-date-form-item>
                </el-col>
                <!-- 截止日期 -->
                <el-col :lg="6" :md="6">
                    <xyy-date-form-item
                            title="截止日期"
                            :is-first-day="false"
                            :limit-date="this.orderEndLimitDate"
                            :limit-behind="true"
                            :contrast-time="new Date()"
                            @datePicked="orderEndDataPicked"
                            @defalutData="orderEndDeafultDate">
                    </xyy-date-form-item>
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
                            :contrast-time="new Date()"
                            @datePicked="postEndDataPicked"
                            @defalutData="postEndDeafultDate">
                    </xyy-date-form-item>
                </el-col>
                <!-- 商品名称 -->
                <el-col :lg="6" :md="6">
                    <el-form-item label="商品名称">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>

                <!-- 单据号 -->
                <el-col :lg="6" :md="6">
                    <el-form-item label="单据号">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>

                <!--移动类型-->
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
                <!-- 采购订单号 -->
                <el-col :lg="6" :md="6">
                    <el-form-item label="采购订单号">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <!-- 销售订单号 -->
                <el-col :lg="6" :md="6">
                    <el-form-item label="销售订单号">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
            </el-form>
        </xyy-panel>

        <xyy-panel title="查询结果">
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
                <vxe-table-column field="erpOrderCode" title="单据号" width="100"/>
                <vxe-table-column field="orderNumber" title="单据行号" width="100"/>
                <vxe-table-column field="carrierName" title="移动类型编码" width="120"/>
                <vxe-table-column field="carrierTypeName" title="移动类型名称" width="120"/>
                <vxe-table-column field="waybillNumber" title="采购订单号" width="100"/>
                <vxe-table-column field="logisticsStatusName" title="销售订单号" width="100"/>
                <vxe-table-column field="endShipmentData" title="单据日期" width="100"/>
                <vxe-table-column field="userName" title="过账日期" width="100"/>
                <vxe-table-column field="updateTime" title="商品大类编码" width="120"/>
                <vxe-table-column field="ownerCode" title="商品大类名称" width="120"/>
                <vxe-table-column field="buildingCode" title="商品编码" width="100"/>
                <vxe-table-column field="buildingCode" title="数量" width="100"/>
                <vxe-table-column field="buildingCode" title="金额(不含税)" width="130"/>
                <vxe-table-column field="buildingCode" title="货币" width="100"/>
                <vxe-table-column field="buildingCode" title="供应商编码" width="100"/>
                <vxe-table-column field="buildingCode" title="供应商名称" width="100"/>
                <vxe-table-column field="buildingCode" title="客户编码" width="100"/>
                <vxe-table-column field="buildingCode" title="客户名称" width="100"/>
                <vxe-table-column field="buildingCode" title="摘要" width="100"/>
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
            <xyy-label-footer>
                <label-item title="数量" content="1234"></label-item>
                <label-item title="不含税金额" content="1234"></label-item>
            </xyy-label-footer>
        </xyy-panel>
    </div>

</template>

<script>

    import XyyDateFormItem from "../../../components/xyy/xyy-date-form-item/index";
    import XyyPanel from "../../../components/xyy/xyy-panel/index";
    import XYYLabelFooter from '@/components/xyy/xyy-label-footer/index'
    import XyyLabelFooter from "../../../components/xyy/xyy-label-footer/index";
    import labelItem from "../../../components/xyy/xyy-label-footer/components/labelItem";
    export default {
        name: "stockDetail",
        components: {XyyLabelFooter, XyyPanel, XyyDateFormItem, XYYLabelFooter, labelItem},
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
                    sort: 'asc',
                    startOrderDate: '', // 单据日期
                    endOrderDate: '', // 单据截止编号
                    startPostDate: '', // 过账日期
                    endPostDate: '', // 过账截止日期
                    productDesc: '', // 商品名称
                    drugCode: '', //
                    sysOrgCode: '', // 单据号
                    orderCode: '', //
                    moveType: '', //
                    purchaseOrder: '', //
                    storageType: '', //
                    salesOrder: '', //
                    channelId: '', //
                    total: 0
                },
                // 乘运商
                carrierUnits: [
                    {
                        dictCode: '',
                        dictName: '全部'
                    }
                ],

                orderStartLimitDate: null,
                orderEndLimitDate: null,
                postStartLimitDate: null,
                postEndLimitDate: null,
                tableData: [], // 表格数据
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
            orderStatrtDataPicked(startDate) { // 单据时间选择
                console.log('value:' + startDate);
                this.orderEndLimitDate = new Date(startDate)
            },
            orderStatrtDeafultDate(date) {// 单据默认时间
                this.orderEndLimitDate = new Date(date)
            },
            orderEndDataPicked(endDate) {// 单据截止时间选择
                console.log('value:' + endDate);
                this.orderStartLimitDate = new Date(endDate)
            },
            orderEndDeafultDate(date) {// 单据截止默认时间
                this.orderStartLimitDate = new Date(date)
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
            // 分页
            handleSizeChange(val) {
                this.formData.pageSize = val
                console.log(`每页 ${val} 条`)
            },
            handleCurrentChange(val) {
                this.formData.pageNum = val
                console.log(`当前页: ${val}`)
            },


        }
    }
</script>

<style lang="scss" scoped>
    .el-pagination {
        float: right;
        margin-top: 10px;
        margin-right: 60px;
    }
</style>
