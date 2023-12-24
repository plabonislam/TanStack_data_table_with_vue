<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import DragAndDrop from './components/DragAndDrop.vue'
import { h } from 'vue'

import EditButton from '@/components/EditButton.vue'

import TableOriginal from '@/components/TableOriginal.vue'
import TableTanstack from '@/components/TableTanstack.vue'

import people from '@/components/mocDataPeople.json'
import cars from '@/components/mocDataCras.json'

const columnsPeople = [
  {
    accessorKey: 'id',
    header: 'ID',
    enableSorting: false
  },
  {
    accessorKey: 'first_name',
    header: 'First name'
  },
  {
    accessorKey: 'last_name',
    header: 'Last name'
  },
  // {
  //   accessorFn: row => `${row.first_name} ${row.last_name}`,
  //   header: 'Name',
  // },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: (info) => info.getValue()
  },
  {
    accessorKey: 'created_at',
    header: 'Created',
    cell: (info) => info.getValue()
  },
  {
    accessorKey: 'edit',
    header: ' ',
    cell: ({ row }) => h(EditButton, { id: row.original.id }),
    enableSorting: false
  }
]

const columnsCars = [
  {
    accessorKey: 'id',
    header: 'ID',
    enableSorting: false
  },
  {
    accessorKey: 'car_make',
    header: 'Car Make'
  },
  {
    accessorKey: 'car_model',
    header: 'Car Model'
  },
  {
    accessorKey: 'car_year',
    header: 'Year'
  },
  {
    accessorKey: 'price',
    header: 'Price'
  }
]
</script>

<template>
  <div class="container mx-auto px-8 py-8">
    <!-- <TableOriginal /> -->
    <TableTanstack :data="people" :columns="columnsPeople" />

    <div class="my-8">
      <TableTanstack :data="cars" :columns="columnsCars" />
    </div>
  </div>
</template>
