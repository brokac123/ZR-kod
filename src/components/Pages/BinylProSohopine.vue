<template>
    <div class="egger--card">
      <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
          :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />
          <img src="../../assets/binyl_uvecano/binylprosohopine.jpg" alt="BINYL PRO-SOHOPINE">
          <div class="egger--card-description">
        <h1>BINYL PRO-SOHOPINE</h1>
        <div class="quantity-control">
          <button class="quantity-button" @click="decrementQuantity" :disabled="quantity === 1">-</button>
          <span class="quantity-value">{{ quantity }}</span>
          <button class="quantity-button" @click="incrementQuantity">+</button>
        </div>
        <button class="add-to-cart-button" @click="submit">
          Dodaj u košaricu
        </button>
      </div>
    </div>
  </template>
  <script>
  import { StripeCheckout } from '@vue-stripe/vue-stripe';
  
  export default {
    components: {
      StripeCheckout,
    },
    data() {
      this.publishableKey = 'pk_test_51NivsYAZiXL1qk5NMxdvGMF8b22FZ0XH8kLQczhwYvf3nUpCjBPnObMe1afSwoAYgZa9Qusx7bFb7j2HzX2ux8vg00NOn9634q';
      return {
        loading: false,
        quantity: 1, // Initialize quantity to 1
        lineItems: [
          {
            price: 'price_1NlEw6AZiXL1qk5NCDIz1pTq',
            quantity: 1, // Initialize quantity to 1
          }
        ],
        successURL: 'http://localhost:8080/success',
        cancelURL: 'http://localhost:8080/error',
      };
    },
    methods: {
      submit() {
        // Update the quantity in lineItems
        this.lineItems[0].quantity = this.quantity;
  
        // You will be redirected to Stripe's secure checkout page
        this.$refs.checkoutRef.redirectToCheckout();
      },
      incrementQuantity() {
        // Increase the quantity
        this.quantity += 1;
      },
      decrementQuantity() {
        // Decrease the quantity, but ensure it never goes below 1
        if (this.quantity > 1) {
          this.quantity -= 1;
        }
      },
    },
  };
  </script>
<style scoped>
.egger--container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;
    width: 90%;
    margin: auto;
    padding-bottom: 3rem;
}

.egger--card-description {
    display: flex;
    padding: 2rem 1rem;
}

.egger--card-description h1 {
    font-size: 1.2rem;
}

.egger--card {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    width: 100%;
}

/*button {
    border: none;
    border-radius: 1rem;
    background: #86b278;
    width: 60%;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    
}*/

span {
    color: #86b278;
}

.landing--slang {
    font-size: 1.5rem;
    margin: 5vw 10vh;
    line-height: 166%;
}

img {
    height: 100%;
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}
.quantity-control {
  display: flex;
  align-items: center;
}

.quantity-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 1.2rem;
  cursor: pointer;
}

.quantity-value {
  font-size: 1.2rem;
  margin: 0 10px;
}

/* Style for the "Dodaj u košaricu" button */
.add-to-cart-button {
  background-color: #86b278;
  color: #fff;
  border: none;
  padding: 0.3em 0.5em;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 0.5em;
  border-radius: 1rem;
}



/* Responsive styles */
@media (max-width: 768px) {
  .quantity-button,
  .quantity-value,
  .add-to-cart-button {
    font-size: 1rem;
  }}
</style>
