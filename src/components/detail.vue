<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <!-- 设置轮播图 -->
                <el-carousel>
                  <el-carousel-item v-for="(item,index) in imglist" :key="index">
                    <img :src="item.thumb_path" alt>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <el-input-number
                          v-model="num1"
                          @change="handleChange"
                          :min="1"
                          :max="10"
                          label="描述文字"
                        ></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <!-- tab bar -->
                <ul>
                  <li>
                    <a @click="index=1" :class="{selected:index==1}" href="javascript:;">商品介绍</a>
                  </li>
                  <li>
                    <a @click="index=2" :class="{selected:index==2}" href="javascript:;">商品评论</a>
                  </li>
                </ul>
              </div>
              <!-- 内容 -->
              <div class="tab-content entry" v-show="index==1" v-html="goodsinfo.content">内容</div>
              <div class="tab-content" v-show="index==2">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model="comment"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="postComment"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(item,index) in commentList" :key="index">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{item.uesr_name}}</span>
                          <span>{{item.add_time | globalFormatTime('YYYY-MM-DDTHH:mm:ss')}}</span>
                        </div>
                        <p>{{item.content}}</p>
                      </div>
                    </li>
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                     <!-- 使用饿了么ui的分页组件替换 -->
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="pageIndex"
                      :page-sizes="[10,20, 30, 40]"
                      :page-size="pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalcount"
                    ></el-pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="(item,index) in hotgoodslist" :key="index">
                    <div class="img-box">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                      <router-link :to="'/detail/'+item.id">
                        <img :src="item.img_url">
                      </router-link>
                      <!-- </a> -->
                    </div>
                    <div class="txt-box">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                      <router-link :to="'/detail/'+item.id">{{item.title}}</router-link>
                      <!-- </a> -->
                      <span>{{item.add_time | globalFormatTime('YYYY年MM月DD日')}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入axios
// import axios from "axios";
// import moment from "moment";

export default {
  name: "detail",
  data() {
    return {
      // 商品详情
      goodsinfo: {},
      //推荐商品
      hotgoodslist: {},
      // tab的索引
      index: 1,
      // 计数器绑定的个数
      num1: 1,
      // 图片数组
      imglist: [],
      //评论数组
      comment: "",
      // 页码
      pageIndex:1,
      // 页容量
      pageSize:10,
      // 总条数
      totalcount:0,
      // 评论数组
      commentList:[]
    };
  },
  methods: {
    getDetail() {
      this.$axios
        .get(`/site/goods/getgoodsinfo/${this.$route.params.id}`)
        .then(res => {
          // console.log(res);
          this.goodsinfo = res.data.message.goodsinfo;
          this.hotgoodslist = res.data.message.hotgoodslist;
          

          // 商品图片
          this.imglist = res.data.message.imglist;
        });
    },
    // 计数器的事件
    handleChange() {
      
    },
    //发布评论
    postComment() {
      if (this.comment === "") {
        this.$comment.error("请输入内容");
      } else {
        //调用接口
        this.$axios
          .post(`site/validate/comment/post/goods/${this.$route.params.id}`, {
            commenttxt: this.comment
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 0) {
              this.$message.success(res.data.message);
              this.totalcount = res.data.totalcount;
              // 本地清空
              this.comment = "";
              //默认跳转到第一页
              this.pageIndex =1;
              //重新调用获取评论
               this.getComments();
            }
          });
      }
    },
    // 获取评论的方法
    getComments(){
      this.$axios
      .get(`site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${
            this.pageIndex
          }&pageSize=${this.pageSize}`)
          .then(res=>{
            console.log(res);
            
            this.totalcount = res.data.totalcount;
            this.commentList = res.data.message;
          });
    },
    // 页容量改变
    handleSizeChange(size){
      this.pageSize = size;
      // 重新获取数据
      this.getComments();

    },
    handleCurrentChange(current){
      this.pageIndex = current;
      // 重新获取数据
      this.getComments();
    }
  },

  created() {
    this.getDetail();
    //获取评论
    this.getComments();
  },
  // 侦听器
  watch: {
    $route(value, oldValue) {
      // console.log(value);
      this.getDetail();
    }
  }
};
</script>

<style>
/* 详情页走马灯样式 */
.pic-box {
  width: 395px;
  height: 320px;
}
.pic-box .el-carousel {
  width: 100%;
  height: 100%;
}
.pic-box .el-carousel__container {
  width: 100%;
  height: 100%;
}
.pic-box .el-carousel__container img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>




