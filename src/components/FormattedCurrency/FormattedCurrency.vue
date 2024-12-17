<script setup lang="ts">
import Tooltip from '../ui/tooltip/Tooltip.vue'
import TooltipContent from '../ui/tooltip/TooltipContent.vue'
import TooltipProvider from '../ui/tooltip/TooltipProvider.vue'
import TooltipTrigger from '../ui/tooltip/TooltipTrigger.vue'

const props = defineProps<{ currency: number; currencyType?: string; class?: string }>()

const formattedUsdValue = new Intl.NumberFormat('en-US').format(props.currency)
const roundedUsdValue = new Intl.NumberFormat('en-US').format(Math.round(props.currency))

const currencyType = props.currencyType || 'USD'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <div :class="props.class">{{ roundedUsdValue }} {{ currencyType }}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p class="text-[14px] leading-[21px]">{{ formattedUsdValue }} {{ currencyType }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
