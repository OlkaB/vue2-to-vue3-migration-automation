## attribute.sync
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


  // TODO: write proper explanation