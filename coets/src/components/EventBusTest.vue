
<script lang="ts">
// myEventBus.ts

import Vue from 'vue';

export enum MyEventBusEvents {
  MyTestEvent = 'my_test_event',
}

export const myEventBus = new Vue();
</script>