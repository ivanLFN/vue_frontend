import { createRouter, createWebHistory } from 'vue-router'
import App from '../src/App.vue'
import AvailableProducts from '../src/components/AvailableProducts.vue'
import MainPage from '../src/components/MainPage.vue'
import AllProductInfo from '../src/components/AllProductInfo.vue'
import SendMessage from '../src/components/SendMessage.vue'
import TypePossibilitiesAll from '../src/components/TypePossibilitiesAll.vue'
import PartnershipPage from '../src/components/PartnershipPage.vue'
import ContactsPage from '../src/components/ContactsPage.vue'
import PersonalData from '../src/components/PersonalData.vue'



const routes = [
  { path: '/', component: App },
  { path: '/store', component: AvailableProducts },
  { path: '/main', component: MainPage },
  { path: '/productDetails/:productId', name: 'productDetails', component: AllProductInfo },
  { path: '/form-message', component: SendMessage },
  { path: '/details/:itemId', component: TypePossibilitiesAll },
  { path: '/partnership', component: PartnershipPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/personal_data', component: PersonalData },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router