<template>
  <div>
    <q-layout style="height: 100%" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>

          <q-toolbar-title>Quasar Framework</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem
            consequatur optio voluptates asperiores pariatur eos numquam rerum
            delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import ListarPokemons from "../assets/api/api.js";
export default {
  name: "ListaPokemon",
  components: {},

  props: {},
  data() {
    return {};
  },
  created() {
    ListarPokemons.ListarPokemons(151, 200).then((response) => {
      console.log(response);
    });
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
