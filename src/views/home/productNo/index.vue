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
                    <el-form-item label="批号">
                        <el-input v-model="formData.erpOrderCode" placeholder="请输入商品批号"/>
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="商品大类">
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
                    <el-form-item label="库别">
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
                    <el-form-item label="货主">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="剂型">
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
                    <el-form-item label="批准文号">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="6">
                    <el-form-item label="处方分类">
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
                    <el-form-item label="生产厂家">
                        <el-input v-model="formData.erpOrderCode" />
                    </el-form-item>
                </el-col>
            </el-form>
        </xyy-panel>

        <xyy-panel title="列表信息">
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
                <vxe-table-column field="erpOrderCode" title="商品大类" width="120"/>
                <vxe-table-column field="orderNumber" title="原商品编码" width="120"/>
                <vxe-table-column field="carrierName" title="商品编码" width="120"/>
                <vxe-table-column field="carrierTypeName" title="商品名称" width="120"/>
                <vxe-table-column field="waybillNumber" title="通用名" width="120"/>
                <vxe-table-column field="logisticsStatusName" title="条码" width="120"/>
                <vxe-table-column field="endShipmentData" title="标准库ID" width="120"/>
                <vxe-table-column field="userName" title="规格/型号" width="100"/>
                <vxe-table-column field="money" title="包装单位" width="120"/>
                <vxe-table-column field="ownerCode" title="件包装数量" width="120"/>
                <vxe-table-column field="buildingCode" title="中包装数量" width="120"/>
                <vxe-table-column field="buildingCode" title="商品产地" width="120"/>
                <vxe-table-column field="buildingCode" title="生产厂家" width="130"/>
                <vxe-table-column field="buildingCode" title="批准文号" width="130"/>
                <vxe-table-column field="buildingCode" title="处方分类" width="130"/>
                <vxe-table-column field="buildingCode" title="仓库编码" width="130"/>
                <vxe-table-column field="buildingCode" title="仓库名称" width="130"/>
                <vxe-table-column field="buildingCode" title="库别" width="130"/>
                <vxe-table-column field="buildingCode" title="货主" width="130"/>
                <vxe-table-column field="buildingCode" title="批号" width="130"/>
                <vxe-table-column field="buildingCode" title="生产日期" width="130"/>
                <vxe-table-column field="buildingCode" title="有效期至" width="130"/>
                <vxe-table-column field="buildingCode" title="灭菌批号" width="130"/>
                <vxe-table-column field="buildingCode" title="库存数量" width="130"/>
                <vxe-table-column field="buildingCode" title="可用库存" width="130"/>
                <vxe-table-column field="buildingCode" title="存储条件" width="130"/>
                <vxe-table-column field="buildingCode" title="品类一级分类" width="130"/>
                <vxe-table-column field="buildingCode" title="品类二级分类" width="130"/>
                <vxe-table-column field="buildingCode" title="品类三级分类" width="130"/>
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
        name: "productNo",
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
