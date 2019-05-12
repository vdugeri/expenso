<template>
  <div class="table-box">
    <table class="table">
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
      <tr v-for="(entry, index) in data" :key="index">
        <td>{{ entry[headers[0].toLowerCase()] }}</td>
        <td>{{ entry[headers[1].toLowerCase()] }}</td>
        <td>{{ entry[headers[2].toLowerCase()] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.table-box {
  display: flex;
  margin-top: 1rem;
}

.table {
  width: 80vw;

  & td,
  & th {
    padding: 8px;
  }

  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & tr:hover {
    background-color: #ddd;
  }

  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #8c7ae6;
    color: #fff;
  }
}
</style>
