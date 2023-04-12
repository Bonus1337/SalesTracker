<template>
  <div id="app">
    <div class="card p-fluid">
      <h5>Formularz zamówienia</h5>
      <div class="p-field p-grid">
        <label for="customers" class="p-col-12 p-md-2">Wybierz klienta</label>
        <div class="p-col-12 p-md-10">
          <Dropdown
            id="customers"
            v-model="selectedCustomer"
            :options="clients"
            optionLabel="name"
            placeholder="Wybierz klienta"
          />
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="products" class="p-col-12 p-md-2">Wybierz produkt</label>
        <div class="p-col-12 p-md-10">
          <Dropdown
            id="products"
            v-model="selectedProduct"
            :options="products"
            optionLabel="name"
            placeholder="Wybierz produkt"
          />
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="quantity" class="p-col-12 p-md-2">Ilość</label>
        <div class="p-col-12 p-md-10">
          <InputNumber id="quantity" v-model="quantity" min="1" />
        </div>
      </div>
      <h5>Cena</h5>
      <div class="p-field p-grid">
        <div class="p-col-12 p-md-10">
          <div id="price">{{ getSelectedProductPrice }} PLN</div>
        </div>
      </div>
      <ButtonComponent text="Dodaj zamówienie" @click="createOrder" />
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import { mapGetters, mapMutations } from "vuex";
import ButtonComponent from "@/components/shared/ButtonComponent.vue";

export default {
  name: "OrderFormComponent",
  data() {
    return {
      selectedCustomer: null,
      selectedProduct: null,
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters(["getProducts", "getClients", "getOrders"]),
    products() {
      return this.getProducts;
    },
    clients() {
      return this.getClients;
    },
    getSelectedProductPrice() {
      if (this.selectedProduct) {
        const selectedProduct = this.products.find(
          (p) => p.name === this.selectedProduct.name
        );
        return selectedProduct.unitPrice * this.quantity;
      }
      return 0;
    },
  },
  methods: {
    ...mapMutations(["addOrder"]),
    createOrder() {
      if (this.selectedCustomer && this.selectedProduct && this.quantity > 0) {
        const order = {
          date: new Date().toISOString().slice(0, 10),
          client: this.selectedCustomer.name,
          items: [
            {
              product: this.selectedProduct.name,
              quantity: this.quantity,
              unitPrice: this.selectedProduct.unitPrice,
            },
          ],
        };
        this.addOrder(order);
        alert(
          `Zamówienie dodane:\nKlient: ${this.selectedCustomer.name}\nProdukt: ${this.selectedProduct.name}\nIlość: ${this.quantity}\nData: ${order.date}\nCena: ${this.getSelectedProductPrice} PLN`
        );
      } else {
        alert("Proszę wybrać klienta, produkt i ilość");
      }
    },
  },

  components: {
    Dropdown,
    InputNumber,
    ButtonComponent,
  },
};
</script>

<style scoped>
.card {
  max-width: 600px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.p-col-12.p-md-10 {
  display: flex;
  justify-content: center;
}

#quantity {
  width: 100px;
}
</style>
