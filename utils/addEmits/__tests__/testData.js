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

const FilesContentWithEmits = [
  `<script>
  import IconClose from '@carbon/icons-vue/es/close/16';

  export default {
    name: 'MLDraggablePanel',
    components: {
      CvIconButton,
      MLResizable
    },
    data() {
      return {
        IconClose
      };
    },
    methods: {
      closePanel() {
        this.$emit('close-panel', this.panelId);
      }
    }
  }
  </script>`,
  `<script>
  import IconClose from '@carbon/icons-vue/es/close/16';

  export default {
    name: 'MLDraggablePanel',
    components: {
      CvIconButton,
      MLResizable
    },
    data() {
      return {
        IconClose,
        isClosed: false
      };
    },
    watch: {
      isClosed() {
        this.$emit('close');
      }
    },
    methods: {
      closePanel() {
        this.$emit('update:is-closed', true);
      }
    }
  }
  </script>`
];

const FilesContentWithoutEmits = [
  `<script>
  import IconClose from '@carbon/icons-vue/es/close/16';

  export default {
    name: 'MLDraggablePanel',
    components: {
      CvIconButton,
      MLResizable
    },
    data() {
      return {
        IconClose,
        isClosed: false
      };
    },
    methods: {
      closePanel() {
        this.isClosed = true;
      }
    }
  }
  </script>`
];

module.exports = {
  CasesWithEmits,
  CasesWithoutEmits,
  FilesContentWithEmits,
  FilesContentWithoutEmits
};
