const LIFECYCLE_HOOKS_REGEX = /\n\s{0,}(beforeDestroy|destroyed)\(\)\s{/;

const HOOKS_REPLACEMENTS = {
  beforeDestroy: 'beforeUnmount',
  destroyed: 'unmounted',
};

function migrateLifecycleHooks(fileContent) {
  if (typeof fileContent !== 'string') return fileContent;

  let fileContentModified = fileContent;
  if (LIFECYCLE_HOOKS_REGEX.test(fileContent)) {
    fileContentModified = replaceHooksSyntax(
      fileContent,
      LIFECYCLE_HOOKS_REGEX,
    );
  }
  return fileContentModified;
}

function replaceHooksSyntax(fileContent, regex) {
  return fileContent.replaceAll(new RegExp(regex, 'gm'), (match, group1) => match.replace(group1, HOOKS_REPLACEMENTS[group1]));
}

module.exports = {
  LIFECYCLE_HOOKS_REGEX,
  migrateLifecycleHooks,
};
