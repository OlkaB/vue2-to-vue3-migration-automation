# Vue2 to Vue2 differences
[https://v3-migration.vuejs.org/breaking-changes/]

Tools: https://vue2-migration-helper.netlify.app/ [deprecated https://github.com/mubaidr/vue2-migration-helper]
Nice reading: https://docs.gitlab.com/ee/development/fe_guide/vue3_migration.html

## ✅ Slots (optional, as name="" is still valid)
From:                                               To:
<slot                                               <slot
  v-if="title || $slots['card__title']"              v-if="title || $slots['card__title']"
  name="card__title"                                 #card__title
>                                                   >

From:                                  To:
<template slot="slotName">      =>     <template #slotName>


## ✅ emits
- If:
  this.$emit('default-click', payload)
  this.$emit('update:buttons-config', payload)

-Add:
   emits: [
    'default-click',
    'option-click',
    'update:buttons-config'
  ],


## ✅ translations
From:                                          To:
vueI18n.t('global.copy')          =>           vueI18n.global.t('global.copy')
vueI18n.tc('global.product', 1)   =>           vueI18n.global.tc('global.product', 1)


## .native
From                         To
@click.native      =>        @click


## $listeners
From                                     To
this.$listeners[listenerName]    =>      this.$attrs.$listeners[listenerName]

## $props
From                             To
this.$props[propName]    =>      this.$attrs.$props[propName]

## $attrs now includes class and style attributes

## $scopedSlots
 property is removed and all slots are exposed via $slots as functions

## Lifecycle hooks
From                                  To
  beforeDestroy() {...}      =>       beforeUnmount() {...}
  destroyed                  =>       unmounted


## EventBus
?

## Plugins


## Directives

## v-model
First the property value has been renamed to modelValue

<ChildComponent v-model="pageTitle" />


ChildComponent needs to be rewritten like this:

props: {
  modelValue: String // previously was `value: String`
},

emits: ['update:modelValue'],

methods: {
  changePageTitle(title) {
    this.$emit('update:modelValue', title)
  }
}

.sync: see [https://v3-migration.vuejs.org/breaking-changes/v-model.html#migration-strategy]

## 🚧 attribute.sync
From:                                                                    To:
Parent:
   <UserName   :first-name.sync="first"  :last-name.sync="last" />   =>  <UserName   v-model:first-name="first"   v-model:last-name="last" />

Child - does not change apart from event names being added to emits:
props: {
  firstName: String,
  lastName: String
}
 emits: ['update:modelValue', 'update:syncA', 'update:syncB'],
 ...
this.$emit('update:firstName', 'first name')
this.$emit('update:lastName', 'last name')



## Vue instance methods :
$set / Vue.set, $delete / Vue.delete, $on, $off, $once, $destroy

example:

Before
this.$set(this.person, 'name', "John")
‍

After
this.personObject['name'] = "John"

## $children
removed

## <template> tags
with no special directives (v-if/else-if/else, v-for, or v-slot) are now treated as plain elements and will result in a native <template> element instead of rendering its inner content.

## :key usage changed
NEW: keys are no longer necessary on v-if/v-else/v-else-if branches, since Vue now automatically generates unique keys.
BREAKING: If you manually provide keys, then each branch must use a unique key. You can no longer intentionally use the same key to force branch reuse.
BREAKING: <template v-for> key should be placed on the <template> tag (rather than on its children).