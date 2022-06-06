<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="example">
      <div class="page-1 page">
        <p class="part-1" v-animate="{ value: 'bounceInLeft', delay: 0 }">
          yellow
        </p>
      </div>
      <div class="page-2 page">
        <p class="part-2" v-animate="{ value: 'bounceInLeft', delay: 0 }">
          blue
        </p>
      </div>
      <div class="page-3 page">
        <p class="part-3" v-animate="{ value: 'bounceInLeft', delay: 0 }">
          gray
        </p>
      </div>

      <div class="page-4 page">
        <p class="part-4" v-animate="{ value: 'bounceInLeft', delay: 0 }">
          red
        </p>
      </div>
    </div>
    <ul class="gnb">
      <li
        v-for="(btn, index) in pageNum"
        :key="index"
        :class="{ active: index == btn }"
        @click="moveTo(btn)"
      >
        page {{ btn }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      pageNum: 4,
      opts: {
        start: 0,
        dir: "v",
        duration: 500,
        beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
        afterChange: function(currentSlideEl, currenIndex) {}
      }
    };
  },

  methods: {
    moveTo(btn) {
      this.$refs.example.$fullpage.moveTo(btn - 1, true, true);
    },
    moveNext() {
      this.$refs.example.$fullpage.moveNext(); //다음페이지
    },

    movePrev() {
      this.$refs.example.$fullpage.movePrev(); //이전페이지
    },

    showPage() {
      this.pageNum++;
      this.$refs.fullpage.$fullpage.$update();
    }
  }
};
</script>

<style lang="css" scoped>
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.page-1 {
  background-color: yellow;
}
.page-2 {
  background-color: blue;
}
.page-3 {
  background-color: gray;
}

.page-4 {
  background-color: red;
}

.gnb {
  position: fixed;
  top: 50%;
  right: 0%;
  background-color: transparent;
}

.gnb li {
  list-style: none;
  cursor: pointer;
}
</style>
