<template>
  <div>
    <div class="carousel">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(image, index) in images"
          :key="index"
          v-show="index === currentImage"
        >
          <img :src="image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ads from "../../assets/ads.jpeg";
import food1 from "../../assets/food1.jpeg";
import food2 from "../../assets/food2.jpeg";
import food3 from "../../assets/food3.jpeg";
export default {
  name: "CarouselComponent",
  data() {
    return {
      images: [ads, food1, food2, food3],
      currentImage: 0,
    };
  },
  methods: {
    next() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
  },
  created() {
    setInterval(() => {
      this.next();
    }, 5000);
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
}
.carousel-inner {
  display: flex;
  overflow: hidden;
}
.carousel-item {
  flex: 0 0 100%;
}
.carousel-item img {
  width: 100%;
  height: auto;
  max-width: 600px;
}
</style>
