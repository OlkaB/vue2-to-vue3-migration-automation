const MigrateableTranslations = [
  `export const ActionButtons = (federatedItemName) => ({
    [ToolbarActions.DOWNLOAD]: {
      label: vueI18n.t('global.download'),
      icon: IconDownload,
      id: ToolbarActions.DOWNLOAD
  }`,
  `title: {
    type: String,
    default: VueI18n.t('components.errorViews.title403')
  }`,
  `redirectText: {
    type: String,
    default: i18n.t('global.home').toLowerCase()
  },`,
  `props: {
    title: {
      type: String,
      default: vueI18n.tc('global.product', 2)
    }
  },`,
   `export const ActionButtons = (federatedItemName) => ({
    [ToolbarActions.COPY_ITEM]: {
      label: i18n.tc('global.copyItem', 1),
      icon: IconDownload,
      id: ToolbarActions.DOWNLOAD
  }`,
  `title: {
    type: String,
    default: VueI18n.tc('global.error', 1)
  }`
];

const NotMigrateableTranslations = [
  '',
  `methods: {
    onAccordionStateChange({ state }) {
      [this.isHelpVisible] = state;
    }
  }`,
  `data() {
    return {
      isOpen: false,
      settingsText: this.$t('components.dataTable.tableSettings')
    };
  },`,
  `loadingText() {
    return this.$t('global.pleaseWaitLoading', { itemName: this.$tc('global.option', 2).toLowerCase() });
  },`
];

const MigrateableFilesContent = [
  `export const ActionButtons = (federatedItemName) => ({
    [ToolbarActions.DOWNLOAD]: {
      label: vueI18n.t('global.download'),
      icon: IconDownload,
      id: ToolbarActions.DOWNLOAD
    },
    [ToolbarActions.FEDERATE]: {
      label: VueI18n.t('components.widget.federateItem', { itemName: federatedItemName }),
      icon: IconFederate,
      id: ToolbarActions.FEDERATE
    },
  });`,
  `export const ActionButtons = (federatedItemName) => ({
    [ToolbarActions.COPY_ITEM]: {
      label: i18n.tc('global.copyItem', 1),
      icon: IconDownload,
      id: ToolbarActions.DOWNLOAD
    },
    [ToolbarActions.ENLARGE]: {
      label: VueI18n.t('components.widget.largePreview'),
      icon: IconEnlarge,
      id: ToolbarActions.ENLARGE
    }
  });`,
  `loadingText() {
    return VueI18n.t('global.pleaseWaitLoading', { itemName: i18n.tc('global.option', 2).toLowerCase() });
  },`
];

module.exports = {
  MigrateableTranslations,
  NotMigrateableTranslations,
  MigrateableFilesContent
};
