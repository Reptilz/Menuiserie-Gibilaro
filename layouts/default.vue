<template>
    <div class="defaultLayout">
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<style lang="scss">
.defaultLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

slot {
  flex-grow: 1; 
}


@media (max-width: 768px) {
  .defaultLayout {
    position: relative;
  }

  slot {
    margin-bottom: 200px;  
  }
}
</style>
