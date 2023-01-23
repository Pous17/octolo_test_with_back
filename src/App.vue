<script>

let date = "";
export async function getDate() {
  await fetch('http://localhost:3030/date')
    .then(response => response.json()
      .then(data => ({
        data: data,
        status: response.status,
    }))
      .then(res => {
        console.log(res.status, res.data)
        date = res.data
      }))
}

 setInterval(() => {
   getDate()
 }, 1000)

export default {
  data() {
    return {
      date,
    }
  },
}

</script>

<template>
  <div>
  {{date}}
  </div>
</template>

<style>

</style>
