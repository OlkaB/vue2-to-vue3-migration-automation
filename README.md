# [POC] vue2-to-vue3-migration-automation
Tool helping migrate vue2 to vue3.
Assumption: we migrate vue, js files => stores, mixins, tests (including comments)

# Please note
This is quickly/simply built tool to migrate basic Vue2 to Vue3 syntax [POC]. Should be evolved further with more type checks and tests.

# Use script:
`yarn migrate`

# Current state:
- $scopedSlots replaced with $slots
- adding 'emits' entry with emitted by component events names
- translations via translation instance replacement
- attribute.sync replaced with v-model:attribute
- $props and $listeners are now available via $attrs.$props and $attrs.$listeners
- removing .native event modifier
- replace old lifecycle hooks' names with new ones
