const MigrateableStrings = [
  `},
  beforeDestroy() {
    window.removeEventListener('resize', this.trackWindowWidth);
  },`,
  `},
destroyed() {
window.removeEventListener('resize', this.onResize);
},`,
];

const NonMigrateableStrings = [
  `this.$on('cv:beforeDestroy', (srcComponent) => this.onCvBeforeDestroy(srcComponent));`,
  `},
  onCvBeforeDestroy(srcComponent) {
    const tabIndex = this.tabs.findIndex((item) => item.uid === srcComponent.uid);
    if (tabIndex === -1) return;
`,
  `someValue.destroyed() {`,
  `someValue.beforeDestroy() {`,
  `if(false) beforeDestroy()`,
  'beforeDestroy.someValue',
  `detroyed() {
    window.removeEventListener('resize', this.onResize);
    },`,
  `beforeDestroyy() {
      window.removeEventListener('resize', this.onResize);
      },`,
];

module.exports = {
  MigrateableStrings,
  NonMigrateableStrings,
};
