# [POC] vue2-to-vue3-migration-automation
Tool helping migrate vue2 to vue3.

# Please note
This is quickly/simply built tool to migrate basic Vue2 to Vue3 syntax. Should be evolved further with more type checks and tests.

# Use script:
`yarn migrate`

# Current state:
- simple slot syntax replacement
- adding 'emits' entry with emitted by component events names
- trnaslations via translation instance replacement
- attribute.sync replaced with v-model:attribute
