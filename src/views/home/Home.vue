<template>
   <div id="home">
       <nav-bar class="home-nav"><div slot="center"><p>购物街</p></div></nav-bar>
       <home-swiper :banners="banners"></home-swiper>
       <recomment-view :recommends="recommends"></recomment-view>
       <feature-view></feature-view>
       <tab-bar-control class="home-tab" :titles="['流行','新款','精选']"></tab-bar-control>
       <ul>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li> <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>
           <li>fjdkfjfjd</li>



       </ul>
   </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import TabBarControl from "components/content/tabbarControl/TabBarControl";

    import  {getHomeMultidata, getHomeGoods} from "network/home";

    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommentView from "./childComps/RecommentView";
    import FeatureView from "./childComps/FeatureView";

    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            RecommentView,
            FeatureView,
            TabBarControl
        },


        data(){
          return {
              banners: [],
              recommends: [],
              goods: {
                  'pop': {page: 0, list: []},
                  'new': {page: 0, list: []},
                  'sell': {page: 0, list: []}
              }
          }
        },
        created() {
             this.getHomeMultidata()
             this.getHomeGoods('pop')
        },
        methods: {
            getHomeMultidata(){
                getHomeMultidata().then(res => {
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                }, err => {

                })
            },

            getHomeGoods(type){
                const  page  =  this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    console.log('getHomeGoods'+res);
                }).catch(err => {

                })
            }
        }
    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }
  .home-nav {
      background-color: var(--color-tint);
      color: white;
  }

    .home-tab {
        position: sticky;
        top: 44px;
    }

</style>
