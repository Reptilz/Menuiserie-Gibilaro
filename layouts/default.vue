<template>
    <div class="defaultLayout">
      <div class="content">
        <Header />
        <slot />
      </div>
      <Footer />
    </div>
  </template>
  
  <style lang="scss">
  .defaultLayout {
    display: grid;
    grid-template-rows: 1fr auto; 
    min-height: 100vh; 
  }
  
  .content {
    grid-row: 1;
  }
  </style>
  