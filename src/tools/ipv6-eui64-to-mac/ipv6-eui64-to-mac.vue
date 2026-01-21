<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCopy } from '@/composable/copy';

const ipv6Eui64 = ref('');

const macAddress = computed(() => {
  const eui64 = ipv6Eui64.value;
  const parts = eui64.split(':');
  if (parts.length < 4) {
    return '';
  }

  const iid = parts.slice(-4).join('');
  const raw = iid.replace('fffe', '');
  if (raw.length !== 12) {
    return '';
  }

  const firstByte = Number.parseInt(raw.slice(0, 2), 16) ^ 0x02;
  const mac = `${firstByte.toString(16).padStart(2, '0')}${raw.slice(2)}`;
  return mac.match(/.{1,2}/g)?.join(':') || '';
});

const { copy: _copy } = useCopy({ source: macAddress, text: 'MAC address copied to the clipboard' });
</script>

<template>
  <div>
    <c-input-text
      v-model:value="ipv6Eui64"
      label="IPv6 EUI-64:"
      placeholder="Enter IPv6 EUI-64 address"
      clearable
      mb-4
    />

    <input-copyable
      v-if="macAddress"
      :value="macAddress"
      label="MAC address:"
      label-width="150px"
      label-align="right"
      label-position="left"
      readonly
      mb-2
    />
  </div>
</template>
