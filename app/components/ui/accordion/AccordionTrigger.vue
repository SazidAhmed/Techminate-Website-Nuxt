<script setup lang="ts">
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from "reka-ui"
import { useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-vue-next"

const props = defineProps<AccordionTriggerProps & { class?: string }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="forwardedProps"
      :class="cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        props.class,
      )"
    >
      <slot />
      <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
