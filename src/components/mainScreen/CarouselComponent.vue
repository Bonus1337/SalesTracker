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
import food1 from "../../assets/food1.jpeg";
import food2 from "../../assets/food4.jpeg";
import food3 from "../../assets/food2.jpeg";
import food4 from "../../assets/food3.jpeg";
export default {
  name: "CarouselComponent",
  data() {
    return {
      images: [food1, food2, food3, food4],
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
  width: 98vw;
  height: auto;
  margin: 0 auto;
}

.carousel-inner {
  height: auto;
  display: flex;
  overflow: hidden;
}

.carousel-item {
  flex: 0 0 100%;
}

.carousel-item img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
}
</style>
