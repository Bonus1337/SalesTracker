<template>
  <div>
    <form @submit.prevent="addNewProduct">
      <label for="product-name">Nazwa produktu:</label>
      <input type="text" id="product-name" v-model="productName" />
      <br />
      <label for="unit-price">Cena jednostkowa:</label>
      <input type="text" id="unit-price" v-model.number="unitPrice" />
      <br />
      <button type="submit">Dodaj</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddProductForm",
  data() {
    return {
      productName: "",
      unitPrice: "",
    };
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["addProduct"]),
    addNewProduct() {
      if (this.productName && this.unitPrice) {
        if (!/^\d+(\.\d+)?$/.test(this.unitPrice)) {
          alert("Proszę podać poprawną cenę jednostkową");
          return;
        }
        if (this.unitPrice < 0) {
          alert("Cena jednostkowa nie może być ujemna");
          return;
        }
        const product = {
          id: this.allProducts.length + 1,
          name: this.productName,
          unitPrice: parseFloat(this.unitPrice),
        };
        this.addProduct(product);
      } else {
        alert("Proszę podać nazwę produktu i cenę jednostkową");
      }
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 5rem;
}

label {
  font-size: 18px;
  margin-bottom: 10px;
}

input {
  font-size: 18px;
  padding: 5px;
  margin-bottom: 20px;
}

button {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
}
</style>
