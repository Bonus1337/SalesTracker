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
        <label for="allProducts" class="p-col-12 p-md-2">Wybierz produkt</label>
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
          <InputNumber id="quantity" v-model="quantity" :min="1" />
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
import { mapGetters, mapActions } from "vuex";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import ButtonComponent from "../shared/ButtonComponent.vue";

export default {
  name: "OrderFormComponent",
  data() {
    return {
      selectedCustomer: null,
      selectedProduct: null,
      quantity: 1,
      products: [],
      clients: [],
    };
  },
  components: {
    Dropdown,
    InputNumber,
    ButtonComponent,
  },
  computed: {
    ...mapGetters(["allProducts", "allClients", "allOrders"]),
    getSelectedProductPrice() {
      if (this.selectedProduct && this.quantity) {
        return this.selectedProduct.unitPrice * this.quantity;
      } else {
        return 0;
      }
    },
  },
  created() {
    this.fetchProducts().then(() => {
      this.products = this.allProducts;
    });
    this.fetchClients().then(() => {
      this.clients = this.allClients;
    });
    this.fetchOrders();
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchClients", "addOrder", "fetchOrders"]),
    createOrder() {
      if (this.selectedCustomer && this.selectedProduct && this.quantity) {
        const maxId = Math.max(...this.allOrders.map((order) => order.id));
        const order = {
          id: maxId + 1,
          date: new Date().toISOString().slice(0, 10),
          client: this.selectedCustomer.name,
          product: this.selectedProduct.name,
          quantity: this.quantity,
          unitPrice: this.selectedProduct.unitPrice,
        };
        this.addOrder(order);
      } else {
        alert("Proszę wybrać klienta, produkt i ilość");
      }
    },
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
