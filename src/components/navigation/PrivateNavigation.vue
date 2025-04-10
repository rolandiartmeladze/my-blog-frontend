<script lang="ts" setup>
import { ref } from 'vue';
import { PrivateNavItems } from '../../navigationItems';
import Icons from '../Icons';

const menu = ref(PrivateNavItems);
</script>

<template>
    <nav class="fixed bg-secondary flex justify-evenly py-3 bottom-0 left-0 w-full lg:w-auto lg:hidden lg:max-w-20">
        <RouterLink v-for="item in menu" :key="item.name" :to="item.link" :class="{
            'border-b border-b-accent': true,
            'p-3 size-15 rounded-full border-none -mt-6 bg-primary': item.icon === 'plus',
        }">
            <Icons :name="item.icon" :class="{
                'text-accent size-12 pb-0': item.icon === 'plus',
                'size-9 pb-1': true
            }" />
        </RouterLink>
    </nav>
</template>
