import { ref, defineComponent, PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { SkillsSortOption } from '@/types';
import { skillsSortOptions } from '@/data';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxLabel,
  ListboxOption,
} from '@headlessui/vue';
import { IconoirProvider, Check, ArrowSeparateVertical } from '@iconoir/vue';

export default defineComponent({
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    ListboxLabel,
    IconoirProvider,
    Check,
    ArrowSeparateVertical,
  },
  props: {
    modelValue: { type: Object as PropType<SkillsSortOption>, required: true },
  },
  emits: ['update:modelValue'],
  setup(_, ctx) {
    const { t } = useI18n();
    const ah = ref(skillsSortOptions[0]);

    const updateModel = (newValue: SkillsSortOption) => {
      ctx.emit('update:modelValue', newValue);
    };

    return {
      t,
      skillsSortOptions,
      updateModel,
      ah,
    };
  },
});
