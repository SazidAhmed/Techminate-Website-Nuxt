<script setup lang="ts">
import Card from './ui/card/Card.vue'
import CardContent from './ui/card/CardContent.vue'
import { Rocket, Clock, Users, Headphones, Sparkles, Target } from 'lucide-vue-next'

const stats = [
  { number: '150+', label: 'Projects Delivered', description: 'Successful launches across industries' },
  { number: '98%', label: 'Client Satisfaction', description: 'Based on post-project surveys' },
  { number: '12+', label: 'Years Experience', description: 'Building digital products since 2014' },
  { number: '45+', label: 'Team Members', description: 'Designers, developers, and strategists' }
]

const values = [
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Agile methodology ensures rapid iterations and quick time-to-market without compromising quality.'
  },
  {
    icon: Sparkles,
    title: 'Quality First',
    description: 'Rigorous testing and code review processes guarantee reliable, scalable solutions.'
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We work as an extension of your team, maintaining transparent communication throughout.'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Every feature we build is aligned with your business goals and user needs.'
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Our partnership continues after launch with maintenance, updates, and scaling support.'
  },
  {
    icon: Clock,
    title: 'Time Zone Friendly',
    description: 'Distributed team across time zones ensures continuous progress on your project.'
  }
]
</script>

<template>
  <section class="py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
        <Card v-for="stat in stats" :key="stat.label" class="text-center border bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm">
          <CardContent class="pt-6">
            <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">{{ stat.number }}</div>
            <div class="font-semibold mb-1">{{ stat.label }}</div>
            <div class="text-sm text-muted-foreground">{{ stat.description }}</div>
          </CardContent>
        </Card>
      </div>

      <!-- Values -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-sm font-medium text-primary">Why Choose Us</span>
        <h2 class="text-3xl sm:text-4xl font-bold mt-4 mb-6">
          Built Different, Built Better
        </h2>
        <p class="text-lg text-muted-foreground">
          Our values drive every decision we make and every line of code we write.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="value in values" :key="value.title" class="group">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <component :is="value.icon" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ value.title }}</h3>
          <p class="text-sm text-muted-foreground leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
