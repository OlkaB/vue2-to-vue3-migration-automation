## Slots (optional, as name="" is still valid)
From:                                               To:
<slot                                               <slot
  v-if="title || $slots['card__title']"              v-if="title || $slots['card__title']"
  name="card__title"                                 #card__title
>                                                   >

From:                                  To:
<template slot="slotName">      =>     <template #slotName>


  // TODO: write proper explanation