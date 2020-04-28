<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" class="tab-control-item" :class="{active: index===curentIndex}" @click="tabClick(index)">
             <span>
            {{item}}
             </span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TabBarControl",
        data(){
            return {
                curentIndex:0
            }
        },
        props: {
            titles: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods:{
            tabClick(index){
                this.curentIndex = index;
            }
        }
    }
</script>

<style scoped>
     .tab-control {
         display: flex;
         text-align: center;
         font-size: 15px;
         background-color: white;

     }
    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }

     .tab-control-item span{
         padding: 5px;
     }

    .active {
        color: var(--color-high-text);

    }

    .active span {
        border-bottom:3px solid var(--color-high-text);
    }

</style>
