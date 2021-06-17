<template>
  <div class="container mx-auto py-6 px-4">
    <div class="grid grid-cols-3 grid-flow-col gap-4">
      <div>
        <AccountDetails />
      </div>
      <div class="col-span-2">
        <Transactions />
      </div>
    </div>
  </div>
</template>

<script>
import AccountDetails from '@/components/AccountDetails'
import Transactions from '@/components/Transactions'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
    AccountDetails,
    Transactions
  }

})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
