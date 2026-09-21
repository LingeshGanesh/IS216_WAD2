<script setup>
    import { RouterLink } from 'vue-router'

    // Menu items passed from the parent.
    // Each item should look like: { label: 'Temperature', to: '/' }
    defineProps(['menuitems'])
</script>

<template>
    <!-- Navigation bar using Bootstrap classes -->
    <nav class="navbar navbar-dark navbar-expand-sm bg-dark">
        <div class="container-fluid">
            <!-- Toggler button for small screen collapsible menu -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sgWeatherNavbar"
                aria-controls="sgWeatherNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapsible menu section -->
            <div class="collapse navbar-collapse" id="sgWeatherNavbar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <!-- Generate a <li> for each menu item passed via props -->
                    <li class="nav-item" v-for="item in menuitems" :key="item.to">

                        <!-- RouterLink navigates to item.to.
                             Vue Router adds the "active" class when the current route matches. -->
                        <RouterLink
                            :to="item.to"
                            class="nav-link"
                            active-class="active"
                            aria-current="page">
                            {{ item.label }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>