<script setup>
// imports
import { onClickOutside } from '@vueuse/core'

// mobile nav
const showMobileNav = ref(false)

// click outside to close
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)
onClickOutside(
  navbarMenuRef,
  () => {
    showMobileNav.value = false
  },
  { ignore: [navbarBurgerRef] }
)
</script>

<template>
  <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          ref="navbarBurgerRef"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': showMobileNav }"
          @click.prevent="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <router-link
            @click="showMobileNav = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
            >Notes</router-link
          >
          <router-link @click="showMobileNav = false" to="/stats" class="navbar-item"
            >Stats</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
