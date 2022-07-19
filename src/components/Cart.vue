<template>
  <div>
    <section v-if="count > 0"  justify="center">
      <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
        <v-expansion-panel>
          <h2>Your Cart</h2>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Product</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-left">Total</th>
                    <th class="text-left">remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="BookInfos in BookInfo" :key="BookInfos">
                    <td>{{ BookInfos.bookData.bookName }}</td>
                    <td>{{ BookInfos.bookData.price }}</td>
                    <td>
                      <v-btn :disabled="BookInfos.qty===1"
                        small
                        @click="
                          decrement(
                            BookInfos.cartid,
                            BookInfos.qty,
                            BookInfos.bookData.price
                          )
                        "
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      {{ BookInfos.qty }}
                      <v-btn
                        small
                        @click="
                          increment(
                            BookInfos.cartid,
                            BookInfos.qty,
                            BookInfos.bookData.price
                          )
                        "
                      >
                        <v-icon> mdi-plus</v-icon>
                      </v-btn>
                    </td>
                    <td>{{ BookInfos.bookData.price * BookInfos.qty }}</td>
                    <td>
                      <button
                        class="delete-product"
                        @click="remove(BookInfos.cartid)"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>CustomerDetails</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row justify="center">
              <v-col cols="12" sm="10" md="8" lg="6">
                <v-app-bar color="#a03037" dark>
                  
                  <h2>CustomerDetails</h2>
                </v-app-bar>
                <v-card ref="form">
                  <v-card-text>
                    <v-text-field
                      v-model="values.fullname"
                      :rules="[() => !!values.fullname || 'This field is required']"
                      :error-messages="errorMessages"
                      label="FullName"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="values.phone"
                      :rules="[() => !!values.phone || 'This field is required']"
                      :error-messages="errorMessages"
                      label="Phone"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="values.email"
                      label="Email"
                    ></v-text-field>

                    <v-text-field
                      v-model="values.address"
                      :rules="[
                        () => !!address || 'This field is required',
                        () =>
                          !!a & (Address.length <= 25) ||
                          'Address must be less than 25 characters',
                        addressCheck,
                      ]"
                      label="Address Line"
                      placeholder="Snowy Rock Pl"
                      counter="25"
                      required
                    ></v-text-field>
                    
                    <v-container fluid>
                      <v-radio-group v-model="radios">
                        <template v-slot:label>
                          <div><strong>Type</strong></div>
                        </template>
                        <v-row>
                        <v-radio value="Home">
                          <template v-slot:label>
                            <div><strong>Home</strong></div>
                          </template>
                        </v-radio>
                        <v-radio value="Work">
                          <template v-slot:label>
                            <div><strong>Work</strong></div>
                          </template>
                        </v-radio>
                        <v-radio value="Other">
                          <template v-slot:label>
                            <div><strong>Other</strong></div>
                          </template>
                        </v-radio>
                        </v-row>
                      </v-radio-group>
                    </v-container>
                  </v-card-text>

                  <v-btn color="#a03037" text @click="newCustomer"> Continue </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>OrderSummery</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card class="mx-auto" max-width="944" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">Order</div>
                  <div
                    class="col-md-4"
                    v-for="BookInfos in CartData"
                    :key="BookInfos"
                  >
                    <div class="total">
                      <div class="caption">
                        <p>
                          <strong
                            >BookName:{{ BookInfos.bookData.bookName }}</strong
                          >
                        </p>
                        <p>authorName:{{ BookInfos.bookData.authorName }}</p>
                        <p class="golden">Price:RS{{ BookInfos.total }}</p>
                      </div>
                    </div>
                  </div>
                  <v-card-actions>
                    Subtotal:{{ BookInfo.total }}
                  </v-card-actions>

                  <v-list-item-subtitle class="px-2"
                    >Shipping:FreeShipping</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <hr />
              <v-list-item-title class="text-h5 mb-1 px-6">
                Total:{{ BookInfo.total }}
              </v-list-item-title>
                 <v-btn class="px-6"
                color="#a03037"
                text
                type="Submit"
                @click="addToOrder(BookInfo.total)"
              >
                PLACEORDER
              </v-btn>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </section>
    <section v-else>
       <v-card
    class="mx-auto"
    max-width="344"
   
  >
  
<v-row
    align="center"
     justify="center"
  >
   <v-col
          cols="20"
        >
    <v-card-text>
 
      <h2 color="#a03037" >Your Card</h2>
     
      <v-icon x-large   >mdi-cart-off</v-icon>
     
      <div class="text--primary">
      Your cart is empty, fill it up!
      </div>
     
    </v-card-text>
   </v-col>
     </v-row>
    <v-card-actions>
       <router-link to="/">
        <v-btn color="#a03037"> BackToHome </v-btn></router-link
      >
      
    </v-card-actions>
  
      </v-card>
    </section>
  </div>
</template>
<script>

import CartService from '@/Service/CartService';
import OrderService from '../Service/OrderService';
import CustomerService from '../Service/CustomerService';
export default {
  name: "Cart",

  data() {
    return {
      formValues: {
        userId: "23",
        address: "XYZ",
        price: "",
      },
       
      values:{
        fullname: "",
        phone: "",
        email: "",
        address: ""
      }, 

      count: 0,
      BookInfo: [],
      CartData: [],
      cartTotalPrice: 0,
      CustomerData: []
    };
  },
   methods: {
     
     newCustomer(){
      console.log(this.CustomerData);
      console.log(this.values);
      const data = this.values;
      CustomerService.addCustomer(data)
        .then(
          (response) => {
            console.log(response);
          }
          // () => this.$router.push({ name: "Cart" })
        )
        .catch((error) => {
          console.log(error);
        });
     },
     
    remove(id) {
      console.log(id);
      CartService.deleteContact(id).then((data) => {
        console.log(data);
        window.location.reload();
      });
    },
    deleteAllCart(CartData){
       console.log(CartData);
       CartService.deleteOrder(CartData).then((data) => { 
          console.log(data);
          window.location.reload();
       })
    },
    getBookCart() {
      CartService.getAllCart().then((response) => {
        console.log(response);
        this.BookInfo = response.data.data;
        console.log(this.BookInfo);
        this.count = this.BookInfo.length;
        console.log(this.count);
        this.CartData = response.data.data;
        this.setTotalValue();
      });
    },
    increment(id, Qty, price) {
      console.log(price);
      console.log(id);
      console.log(Qty);
      this.counter = Qty;
      this.counter++;
      this.cartTotalPrice = price * this.counter;
      console.log(this.cartTotalPrice);
      console.log(this.counter);
      this.updateCartQuantity(id, this.counter, this.cartTotalPrice);
    },
    decrement(id, Qty, total) {
      this.counter = Qty;
      this.counter > 0 ? this.counter-- : 0;
      this.cartTotalPrice = total * this.counter;
      console.log(this.cartTotalPrice);
      location.reload();
      console.log(this.counter);
      this.updateCartQuantity(id, this.counter, this.cartTotalPrice);
    },
    updateCartQuantity(id,Qty, total) {
      console.log(total);
      console.log(id, Qty);
      CartService.updateQuantity(id, Qty, total).then((data) => {
        console.log(data);
        this.CartData = data.data.data;
        console.log(this.CartData);
        this.getBookCart();
      });
    },
    setTotalValue() {
      console.log(this.CartData);
      let newVar = this.CartData.map((books, index) => {
        console.log(books.total);
        return books.total;
      });
      this.CartData.total = newVar.reduce((a, b) => a + b);
      console.log(this.CartData.total);
      
    },
    addToOrder(price) {
      console.log(price);
      console.log(this.CartData);
      this.formValues.price = price;
      console.log(this.formValues);
      const data = this.formValues;
      OrderService.addOrder(data)
        .then(
          (response) => {
            console.log(response);
          },
          () => this.$router.push({ name: "Order" })
        )
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getBookCart();
    
  },
};
</script>