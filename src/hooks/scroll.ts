import { debounce } from 'lodash';
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';

const scrolled = ref(false);

/**
 * Updates `scrolled` if the window is scrolled
 */
function handleScroll() {
  if (window.scrollY > 0) {
    scrolled.value = true;
    return;
  }
  scrolled.value = false;
}

const debouncedHandleScroll = debounce(handleScroll, 10);

/**
 * Defines a hook for BeforeMount to listen to Window scroll
 */
function beforeMountHook() {
  window.addEventListener('scroll', debouncedHandleScroll);
}

/**
 * Defines a hook for BeforeUnmount to remove the listener made by beforeMountHook
 */
function beforeUnmountHook() {
  window.removeEventListener('scroll', debouncedHandleScroll);
}

/**
 * Setup the hooks to handle window scrolling events, to use them in a component
 */
function setupHooks() {
  onBeforeMount(beforeMountHook);
  onBeforeUnmount(beforeUnmountHook);
}

/**
 * Exports the hook objects
 * @returns the hook object
 */
export default function useScrolled() {
  return {
    setupHooks,
    scrolled,
  };
}
