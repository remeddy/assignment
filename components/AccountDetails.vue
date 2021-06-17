<template>
  <div v-if="isLoaded" class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-gray-200">
    <img src="/images/startWars.jpg" class="w-full">
    <div class="flex justify-center -mt-8">
      <img :src="'/images/' + account.logo" class="rounded-full border-solid border-white border-2 -mt-3 w-28">
    </div>
    <div class="text-center px-3 pb-6 pt-2">
      <h3 class="text-blue-900 text-sm bold font-sans">
        {{ account.firstName }} {{ account.lastName }}
      </h3>
      <p class="mt-2 font-sans font-light text-blue-900">
        {{ account.phone }} | {{ account.email }}
      </p>
    </div>
    <div>
      <div class="bg-white flex justify-center items-center">
        <div class="space-y-8">
          <div class="w-80 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img class="relative object-cover w-full h-full rounded-xl" src="/images/card.png">
            <div class="w-full px-8 absolute top-8">
              <div class="flex justify-between">
                <div class="">
                  <p class="font-light">
                    Name
                  </p>
                  <p class="font-medium tracking-widest">
                    {{ account.mainCard.firstName }} {{ account.mainCard.lastName }}
                  </p>
                </div>
                <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png">
              </div>
              <div class="pt-1">
                <p class="font-light" /><h1>
                  Card Number
                  <p class="font-medium tracking-more-wider">
                    {{ account.mainCard.number }}
                  </p>
                </h1>
              </div>
              <div class="pt-6 pr-6">
                <div class="flex justify-between">
                  <div class="">
                    <p class="font-light text-xs">
                      Valid
                    </p><p class="font-medium tracking-wider text-sm">
                      {{ account.mainCard.valid }}
                    </p>
                  </div>
                  <div class="">
                    <p class="font-light text-xs text-xs">
                      Expiry
                    </p><p class="font-medium tracking-wider text-sm">
                      {{ account.mainCard.expiry }}
                    </p>
                  </div>

                  <div class="">
                    <p class="font-light text-xs">
                      CVV
                    </p><p class="font-bold tracking-more-wider text-sm">
                      ···
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center pb-3 text-blue-900 pt-6">
      <div class="text-center mr-3 border-r pr-3">
        <h2 :class="(account.balance > 0 ? 'text-green-800' : 'text-red-800') + ' ' + 'font-semibold'">
          ${{ account.balance }}
        </h2>
        <span>Balance</span>
      </div>
      <div class="text-center">
        <h2>{{ account.transactions }}</h2>
        <span>Transactions</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup (props, { root }) {
    const
      account = computed(() => root.$store.state.account),
      isLoaded = computed(() => !!account.value.id)

    root.$store.dispatch('getAccountDetails', 1) // get account with id = 1

    return {
      isLoaded,
      account
    }
  }
})
</script>
