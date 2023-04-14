<template>
  <div>
    <form @submit.prevent="addNewProduct">
      <label for="product-name">Nazwa produktu:</label>
      <input type="text" id="product-name" v-model="productName" />
      <br />
      <label for="unit-price">Cena jednostkowa:</label>
      <input
        type="number"
        id="unit-price"
        v-model.number="unitPrice"
        step="any"
      />
      <br />
      <button type="submit">Dodaj</button>
      <InlineMessage v-if="orderSuccess" severity="success"
        >Produkt został dodany pomyślnie!</InlineMessage
      >
      <InlineMessage v-if="error" severity="error"
        >Wystąpił problem z dodaniem</InlineMessage
      >
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InlineMessage from "primevue/inlinemessage";

export default {
  name: "AddProductForm",
  components: {
    InlineMessage,
  },
  data() {
    return {
      productName: "",
      unitPrice: "",
      orderSuccess: false,
      error: false,
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
        this.orderSuccess = true;
        setTimeout(() => {
          this.orderSuccess = false;
        }, 1000);
        this.addProduct(product);
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 1000);
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
