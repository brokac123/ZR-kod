<template>
    <div class="wrapper">
      <h3 class="description">Kalkulator računa okvirnu potrebnu kvadraturu lajsni na temelju kvadrature laminata</h3>
      <div class="container">
      <form @submit.prevent="calculate">
        <div class="form-group">
          <label for="width">Širina prednje i stražnje strane sobe u metrima:</label>
          <input type="number" id="width" v-model="width" required>
        </div>
        <div class="form-group">
          <label for="height">Širina lijeve i desne strane sobe u metrima:</label>
          <input type="number" id="height" v-model="height" required>
        </div>
        <div class="form-group">
          <button type="submit">Izračunaj</button>
        </div>
      </form>
  
      <!-- Display the result here -->
      <div v-if="result !== null">
        <p class="result">Otprilike je potrebno {{ result }} m lajsni za dimenzije sobe {{ width }}x{{ height }} m,odnosno površine sobe {{ width*height }}m kvadratnih</p>
      </div>
    </div>

    </div>
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        width: null,
        height: null,
        result: null
      };
    },
    methods: {
      calculate() {
        // Call your calculation function here and update 'result'
        // You can replace the following line with your actual calculation logic
        this.result = (this.width *2+ this.height*2);
      }
    }
  };
  </script>
  
  <style scoped>

.wrapper{
  margin: 2rem 5rem;
}
.description{
  text-align: center;
  margin: 1rem;
}
.container {
  max-width: 450px;
  margin:auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  
}


.form-group {
  margin-bottom: 0.3rem;
  
  
}

label {
  font-weight: bold;
  margin-right: 10px;
}

input[type="number"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}


.result {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 18px;
} 
</style>