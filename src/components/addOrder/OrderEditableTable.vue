<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Klient</th>
          <th>Produkt</th>
          <th>Ilość</th>
          <th>Cena jednostkowa</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.date }}</td>
          <td>{{ order.client }}</td>
          <td>{{ order.product }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.unitPrice }}</td>
          <td>
            <button @click="editOrder(order)" class="edit-button">
              Edytuj
            </button>
            <button @click="deleteOrder(order.id)" class="delete-button">
              Usuń
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="editing" class="edit-form">
      <h2>Edytuj zamówienie</h2>
      <form @submit.prevent="updateOrders">
        <label for="date">Data:</label>
        {{ editedOrder.date }}
        <label for="client">Klient:</label>
        {{ editedOrder.client }}
        <label for="product">Produkt:</label>
        <input
          type="text"
          id="product"
          v-model="editedOrder.product"
          required
        />
        <label for="quantity">Ilość:</label>
        <InputNumber id="quantity" v-model="editedOrder.quantity" :min="1" />
        <label for="unitPrice">Cena jednostkowa:</label>
        <input type="number" v-model="editedOrder.unitPrice" step="any" />

        <button type="submit">Zapisz zmiany</button>
        <button @click="cancelEdit">Anuluj</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import InputNumber from "primevue/inputnumber";

export default {
  name: "OrdersTable",
  components: {
    InputNumber,
  },
  data() {
    return {
      editing: false,
      editedOrder: {
        id: null,
        product: "",
        quantity: 0,
        unitPrice: 0,
      },
    };
  },
  computed: {
    ...mapGetters(["allOrders"]),
    orders() {
      return this.allOrders;
    },
  },
  methods: {
    ...mapActions(["deleteOrder", "updateOrder"]),
    editOrder(order) {
      this.editing = true;
      this.editedOrder = { ...order };
    },
    cancelEdit() {
      this.editing = false;
      this.editedOrder = null;
      this.editedOrder = {
        id: null,
        product: "",
        quantity: 0,
        unitPrice: 0,
      };
    },
    updateOrders() {
      this.updateOrder({
        id: this.editedOrder.id,
        date: this.editedOrder.date,
        client: this.editedOrder.client,
        product: this.editedOrder.product,
        quantity: this.editedOrder.quantity,
        unitPrice: this.editedOrder.unitPrice,
      });
      this.editing = false;
      this.editedOrder = null;
    },
  },
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 5rem;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

button {
  cursor: pointer;
  padding: 8px 16px;
}

button:hover {
  background-color: #ddd;
}
.edit-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.delete-button {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

/* CSS dla widoku edycji */
.edit-form {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  margin-bottom: 10rem;
}
.edit-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
.edit-form form {
  display: flex;
  flex-direction: column;
}
.edit-form label {
  margin-top: 10px;
  margin-bottom: 5px;
}

.edit-form input[type="text"] {
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.edit-form button {
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: #4caf50;
  cursor: pointer;
}
.edit-form button:hover {
  background-color: #3e8e41;
}

.edit-form button[type="submit"] {
  background-color: #008cba;
}

.edit-form button[type="submit"]:hover {
  background-color: #00738e;
}

.edit-form button[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.edit-form button[type="submit"]:disabled:hover {
  background-color: #ccc;
  cursor: not-allowed;
}

/* CSS dla widoku responsywnego */
@media screen and (max-width: 768px) {
  table {
    font-size: 12px;
  }

  th,
  td {
    padding: 6px;
  }

  button {
    padding: 6px 12px;
  }

  .edit-form {
    padding: 10px;
  }

  .edit-form input[type="text"],
  .edit-form input[type="number"] {
    padding: 6px;
  }

  .edit-form button {
    margin-top: 6px;
  }
  .edit-form {
    margin-bottom: 10rem;
  }
}
</style>
