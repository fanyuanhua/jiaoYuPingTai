<template>
  
  <div>
    <!-- 幻灯片 开始 -->
  <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper ">

          <div v-for="banner in bannerList" :key="banner.id" class="swiper-slide" style="background: rgb(175 196 255);">
              <a target="_blank" :href="banner.linkUrl" >
                  <!-- <img src="../assets/img/lun2.jpg" :alt="banner.title" class="tu"> -->
                  <img :src="banner.imageUrl" :alt="banner.title" class="tu">
              </a>
          </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </div>
  <!-- 幻灯片 结束 -->
    
     <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="course in eduList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        class="img-responsive"
                        :alt="course.title"
                        style="width: 267px;height: 167px;"
                      >
                      <div class="cc-mask">
                        <router-link :to="`/course/${course.id}`" title="开始学习" class="comm-btn c-btn-1">开始学习</router-link>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <div :title="course.title" class="course-title fsize18 c-333">{{course.title}}</div>
                      <!-- <a href="#" :title="course.title" class="course-title fsize18 c-333">{{course.title}}</a> -->
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green" v-if="Number(course.price) === 0">
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">9634人学习</i>
                        |
                        <i class="c-999 f-fA">9634评论</i>
                      </span>
                    </section>
                  </div>
                </li>
               
              </ul>
              <div class="clear"></div>
            </article>
            <!-- <section class="tac pt20"> -->
            <router-link class="tac pt20" to="/course" tag="li" active-class="current">
              <a href="#" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </router-link>
            <!-- </section> -->
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">名师大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="teacher in teacherList" :key="teacher.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <router-link :to="`/teacher/${teacher.id}`" :title="teacher.name">
                        <img :alt="teacher.name" :src="teacher.avatar">
                      </router-link>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a href="javascript: void(0)" :title="teacher.name" class="fsize18 c-666">{{teacher.name}}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{teacher.career}}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p
                        class="c-999 f-fA"
                      >{{teacher.intro}}</p>
                    </div>
                  </section>
                </li>
                
              </ul>
              <div class="clear"></div>
            </article>
            <!-- <section class="tac pt20"> -->
            <router-link class="tac pt20" to="/teacher" tag="li" active-class="current">
              <a href="#" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </router-link>
            <!-- </section> -->
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>

<script>
import banner from '@/api/banner'
import index from '@/api/index'
// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
// import VueQriously from 'vue-qriously'
// import ElementUI from 'element-ui' //element-ui的全部组件
// import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
// Vue.use(ElementUI) //使用elementUI
// Vue.use(VueQriously)
// Vue.use(VueAwesomeSwiper)

export default {
  data () {
    return {

      swiperOption: {
        //配置分页
        pagination: {
          el: '.swiper-pagination'//分页的dom节点
        },
        //配置导航
        navigation: {
          nextEl: '.swiper-button-next',//下一页dom节点
          prevEl: '.swiper-button-prev'//前一页dom节点
        }
      },
      //banner数组
      bannerList:[],
      eduList:[],
      teacherList:[]
    }
  },
  created() {
    //调用查询banner的方法
    this.getBannerList()
    //调用查询热门课程和名师的方法
    this.getHotCourseTeacher()
    setTimeout(()=>{
      console.log(this.bannerList,this.eduList);
    },3000)
    
  },
  methods:{
    //查询热门课程和名师
    getHotCourseTeacher() {
      index.getIndexData()
        .then(response => {
          this.eduList = response.data.data.eduList
          this.teacherList = response.data.data.teacherList
          console.log(this.teacherList);
        })
    },
    //查询banner数据
    getBannerList() {
      banner.getListBanner()
        .then(response => {
          this.bannerList = response.data.data.list
        })
    }
  }
}
</script>
<style scoped>

  .cer{
    /* display: flex;
    justify-content: center; */
  }
  .tu{
    width: 1200px;
    height: 100%;
  }
</style>