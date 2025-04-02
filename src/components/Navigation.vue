<script lang="ts" setup>
import { ref } from 'vue';
import { NavItems } from '../data';
import Button from './Button.vue';

const menu = ref(NavItems);
</script>

    <template>
        <nav class="">
            <RouterLink
                v-for="item in menu"
                :key="item.name"
                :to="item.link"
                class="text-accent hover:text-accent-dark text-lg font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out"
                >
            <Button  variant="secondary">
                {{ item.name }}
            </Button>
            </RouterLink>
        </nav>
    </template>

