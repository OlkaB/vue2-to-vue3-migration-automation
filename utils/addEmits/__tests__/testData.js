const CasesWithEmits = [
  `if (!this.multiple && filesListAsArray.length > 1) {
    const fileData = this.prepareFileData(filesListAsArray[0]);
    this.internalFiles = [fileData];
    this.$emit('multiple-file-upload', filesListAsArray);
    return;
  }`,
  `internalFiles: {
    get() {
      const filesDeepCopy = typeof this.files === 'object' && JSON.parse(JSON.stringify(this.files))
        .map((fileData, index) => {
          fileData.file.name = this.files[index].file.name;
          return fileData;
        });
      return filesDeepCopy || [];
    },
    set(value) {
      this.$emit('change', value);
    }
  }`,
  `methods: {
    onAccordionStateChange({ state }) {
      [this.isHelpVisible] = state;
      this.$emit('accordion-toggled', state);
    }
  }`,
  `query: {
    get() {
      return this.searchQuery;
    },
    set(query) {
      this.$emit('update:search-query', query);
    }
  }`,
];

const CasesWithoutEmits = [
  '',
  `methods: {
    onAccordionStateChange({ state }) {
      [this.isHelpVisible] = state;
    }
  }`,
  `query: {
    get() {
      return this.searchQuery;
    },
    set(query) {
      this.emit('update:search-query', query);
    }
  }`
];

module.exports = {
  CasesWithEmits,
  CasesWithoutEmits,
};
