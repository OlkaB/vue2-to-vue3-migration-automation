## emits
- If:
  this.$emit('default-click', payload)
  this.$emit('update:buttons-config', payload)

-Add:
   emits: [
    'default-click',
    'option-click',
    'update:buttons-config'
  ],

  // TODO: write proper explanation