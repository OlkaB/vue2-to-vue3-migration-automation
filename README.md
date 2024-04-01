# [POC] vue2-to-vue3-migration-automation
Tool helping migrate vue2 to vue3.
Assumption: we migrate vue, js files => stores, mixins, tests (including comments)

# Please note
This is quickly/simply built tool to migrate basic Vue2 to Vue3 syntax. Should be evolved further with more type checks and tests.
Up to now [04.2024] served us well with few Vue2 repo being already migrated, but we always keep an eye on automatically implemented changes.

# Use script:
`yarn migrate` - it will call `index.js` file, where you can define which scripts you want to apply and path to files you want to migrate

# Current state:
- $scopedSlots replaced with $slots
- adding 'emits' entry with emitted by component events names
- translations via translation instance replacement
- attribute.sync replaced with v-model:attribute
- $props and $listeners are now available via $attrs.$props and $attrs.$listeners
- removing .native event modifier
- replace old lifecycle hooks' names with new ones
- replace _uid with new Vue3's $.uid
- replace Vuelidate `$v` syntax with `v$` one

