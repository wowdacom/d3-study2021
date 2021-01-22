<template>
  <div class="hello">
    <ul class="persons flex">
      <li
        v-for="(person, i) in personlist"
        :ref="
          (el) => {
            if (el) personlistDIV[i] = el;
          }
        "
        :key="i"
        class="person flex-1 border-solid border"
      >
        {{ person.name }}
      </li>
    </ul>
    <svg class="border w-full mt-10" ref="dashboard" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import useDiagram from "../compositions/useDiagram.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const personlist = reactive([
      {
        name: "Jim",
        framework: "Vue",
      },
      {
        name: "Peter",
        framework: "React",
      },
      {
        name: "John",
        framework: "Angular",
      },
      {
        name: "Arora",
        framework: "React Ember",
      },
      {
        name: "Sara",
        framework: "Vue Mithril",
      },
      {
        name: "Alex",
        framework: "React Polymer",
      },
    ]);
    const personlistDIV = ref([]);
    const dashboard = ref(null);

    onMounted(() => {
      const { drawDiagram, resizeDiagram } = useDiagram({
        dashboard,
      });
      window.addEventListener("resize", resizeDiagram);
      drawDiagram();
    });

    onUnmounted(() => {
      // window.removeEventListener("resize", resizeDiagram);
    });

    return {
      dashboard,
      personlist,
      personlistDIV,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
