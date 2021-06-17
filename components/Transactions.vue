<template>
  <div v-if="isLoaded" class="table w-full p-2">
    <table class="w-full border">
      <thead>
        <tr class="bg-gray-50 border-b">
          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
            <div class="flex items-center justify-center">
              Description
            </div>
          </th>
          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
            <div class="flex items-center justify-center">
              Balance
            </div>
          </th>
          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
            <div class="flex items-center justify-center">
              Date
            </div>
          </th>
          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
            <div class="flex items-center justify-center">
              Action
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(transaction, index) in transactions"
          :key="index"
          :class="(transaction.type === transactionTypes.CREDIT ? 'text-green-800' : 'text-red-800') + ' '
            + 'bg-gray-100 text-center border-b text-sm text-gray-600'"
        >
          <td class="p-2 border-r">
            {{ transaction.description }}
          </td>
          <td class="p-2 border-r">
            {{ transaction.balance }}
          </td>
          <td class="p-2 border-r">
            {{ transaction.date }}
          </td>
          <td>
            <input :checked="transaction.fake" type="checkbox" class="form-checkbox" @change="onSet($event, transaction.id, 'fake')">
            <span class="ml-1 mr-2 text-gray-600 hover:shadow-lg">Fake</span>
            <input :checked="transaction.spam" type="checkbox" class="form-checkbox" @change="onSet($event, transaction.id, 'spam')">
            <span class="ml-1 mr-2 text-gray-600 hover:shadow-lg">Spam</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import { transactionTypes } from '@/constants/transactionTypes'
export default defineComponent({
  setup (props, { root, emit }) {
    const
      transactions = computed(() => root.$store.state.transactions),
      transactionModel = ref(transactions.value),
      isLoaded = computed(() => transactions.value.length > 0)

    root.$store.dispatch('getTransactions')

    const
      onSet = async (event, id, field) => {
        const isChecked = event.target.checked
        await root.$store.dispatch('updateTransaction', { [field]: isChecked, id })
      }

    return {
      isLoaded,
      transactions,
      transactionTypes,
      transactionModel,
      onSet
    }
  }
})
</script>
