<template>
<div>
  <v-card class="mx-auto" max-width="550">
    <v-img src="../../public/assets/success.png" height="200px"></v-img>

    <v-card-subtitle>
      Hurry!!!your order is confirmed<br />
      the order id is #123456 save the order id for <br />
      further communication.
    </v-card-subtitle>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Email Us</th>
            <th class="text-left">Contact Us</th>
            <th class="text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>radheshyamb9@gmail.com</td>

            <td>+919468588062</td>
            <td>AT Post Kasare, Tal Sakri, Dist Dhule</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
   
      <v-btn color="#a03037" 
       type="Submit"
       @click="remove()"> 
       Continue Shopping </v-btn>
    
  </v-card>
</div>
</template>
<script>
import CartService from "../Service/CartService"

export default {
  name: "Order",

 methods:{
    remove(){
     
      CartService.deleteOrder()
         .then((data) => {
          console.log(data);
         this.$router.push({ name: "home" })
       
         })
      
          
    },
 },
 };
  
</script>