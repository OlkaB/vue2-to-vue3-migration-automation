const MigrateableProps = [
  `<CvTextInput
  ref="inputWrapper"
  v-model="inputValue"
  v-bind="$props"
  @blur="$emit('blur')"
  @focus="$emit('focus')"
/>`,
  `methods: {
  onRemove() {
    this.$emit('remove', this.$props);
  }
},`,
  `watch: {
  $props: {
    deep: true,
    handler() {
      const newConfig = this.getSliderConfig();
      if (isEqual(newConfig, this.config)) return;
      this.config = newConfig;
    }
  },`,
  `computed: {
    commonPropsToBind() {
      return omit(this.$props, ParameterSpecificProps);
    }
  }`,
  'const defaultLabelText = wrapper.vm.$props.label;',
];

const MigrateableListeners = [
  `<div
  data-tabs
  :class="cv-tab"
  role="navigation"
  v-bind="$attrs"
  v-on="$listeners"
  @keydown.right.prevent.stop="onRight"
  @keydown.left.prevent.stop="onLeft"
>`,
  `hasListener() {
  return (listener) => typeof this.$listeners[listener] === 'function';
},`,
  `inputListeners() {
  return {
    ...this.$listeners,
    change: (event) => this.onChange(event)
  };
},`,
  `onTertiaryClick(ev) {
  /** see cv-modal events */
  this.$emit('tertiary-click');

  if (!this.$listeners['tertiary-click']) {
    this.maybeHide(ev, 'tertiary-click');
  }
},`,
];

const NonMigrateableProps = [
  `<CvTextInput
  ref="inputWrapper"
  v-model="inputValue"
  v-bind="$prop"
  @blur="$emit('blur')"
  v-bind="attr.$prop"
  @focus="$emit('focus')"
/>`,
  `methods: {
  onRemove() {
    this.$emit('remove', this.props);
  }
},`,
  `methods: {
onRemove() {
  this.$emit('remove', this.$attrs.$props);
}
},`,
  `watch: {
  $propss: {
    deep: true,
    handler() {
      const newConfig = this.getSliderConfig();
      if (isEqual(newConfig, this.config)) return;
      this.config = newConfig;
    }
  },`,
  `computed: {
    commonPropsToBind() {
      return omit($.props, ParameterSpecificProps);
    }
  }`,
  `<CvTextInput
  ref="inputWrapper"
  v-model="inputValue"
  v-bind="$attrs.$prop">`,
  'const defaultLabelText = wrapper.vm.$prop.label;',
];

const NonMigrateableListeners = [
  `<div
  data-tabs
  :class="cv-tab"
  role="navigation"
  v-bind="$attrs"
  v-on="$listener"
  @keydown.right.prevent.stop="onRight"
  @keydown.left.prevent.stop="onLeft"
>`,
  `inputListeners() {
  return {
    ...$.listeners,
    change: (event) => this.onChange(event)
  };
},`, `<div
role="navigation"
v-bind="$attrs.$listeners"
>`,
  `onTertiaryClick(ev) {
  /** see cv-modal events */
  this.$emit('tertiary-click');

  if (!this.$listenerss['tertiary-click']) {
    this.maybeHide(ev, 'tertiary-click');
  }
},`,
];

module.exports = {
  MigrateableProps,
  MigrateableListeners,
  NonMigrateableProps,
  NonMigrateableListeners,
};
