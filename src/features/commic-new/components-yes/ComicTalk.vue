<!-- 
    时间: 2024-08-21
    操作人: MGRoid
    操作: 这个用户信息可以封装组件，不过暂时先这样
 -->
<template>
  <div class="talk">
    <div class="info">
      <span class="name">用户名是七个字</span>

      <div class="display flex-center">
        <img class="avatar" src="/src/assets/img/temp/avatar.jpg" />
      </div>

      <div class="posts grid-center">
        <div class="flex-center">
          <p>111</p>
          <p>主题</p>
        </div>
        <div class="flex-center">
          <p>2222222</p>
          <p>回复</p>
        </div>
        <div class="flex-center">
          <p>333</p>
          <p>积分</p>
        </div>
      </div>

      <div class="grade grid-center">
        <span>Exの神明</span>
        <div>
          <div style="background-color: red; height: 100%; width: 100px"></div>
        </div>
      </div>

      <div class="attribute grid-center">
        <p>人妖槽:152</p>
        <p>喵玉币:555</p>
        <p>萌度:951</p>
        <p>信仰:11</p>
      </div>

      <div class="exhibit grid-center">
        <template v-for="_ of 12">
          <img class="medal" src="\src\assets\img\temp\10000.gif" alt="" />
        </template>
      </div>

      <div class="domain grid-center">
        <p>QQ交谈</p>
        <p>私信</p>
        <p>关注</p>
        <p>好友</p>
      </div>
    </div>

    <div class="speak flex-center">
      <h1>这是标题</h1>
      <div>这里是内容区,到时候设置为Md渲染方式</div>
    </div>
  </div>
</template>

<style scoped>
.talk {
  box-sizing: border-box;
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
}

.info {
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: wheat;
}
/* 去除p标签上下边距 */
.info p {
  background-color: whitesmoke;
  margin: 0 auto;
}

/* 用户名 */
.name {
  background-color: aliceblue;
  flex: 5;
  font-size: 1rem;
  border-bottom: 0.2rem black solid;
}

/* 头像 */
.display {
  background-color: aquamarine;
  flex: 23;
  overflow: hidden; /* 防止内容溢出 */
}
.avatar {
  max-width: 100%;
  max-height: 95%;
  width: auto;
  height: auto;
  object-fit: contain;
  border: 0.1rem solid black;
  box-shadow: 0.1rem 0.1rem 0.1rem #fff176;
}

/* 贴文属性 */
.posts {
  flex: 8;
  background-color: #fff176;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}
.posts div {
  flex-direction: column;
}

/* 等级 */
.grade {
  background-color: antiquewhite;
  flex: 6;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}
.grade span {
  background-color: yellowgreen;
}
.grade div {
  width: 80%;
  height: 30%;
  background-color: yellow;
  border-radius: 10px;
}

/* 属性 */
.attribute {
  background-color: blue;
  flex: 13;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  flex-wrap: wrap;
}

/* 勋章 */
.exhibit {
  flex: 33;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
.medal {
  width: 40px;
}

/* 功能区 */
.domain {
  flex: 12;
  background-color: aqua;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

/* 发言 */
.speak {
  flex: 8;
  background-color: white;
  flex-direction: column;
}
.speak h1 {
  width: 100%;
  flex: 1;
  background-color: yellow;
  margin: 0 auto;
}
.speak div {
  width: 100%;
  height: 100%;
  flex: 9;
  background-color: orchid;
}
</style>
