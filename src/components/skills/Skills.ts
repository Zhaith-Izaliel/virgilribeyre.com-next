import { PropType, defineComponent } from 'vue';
import { Skill } from '@/types';
import { useI18n } from 'vue-i18n';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  components: {
    VueMarkdown,
  },
  props: {
    skills: { type: Array as PropType<Skill[]>, required: true },
  },
  setup() {
    const { t } = useI18n();

    const getSkillImg = (name: string) =>
      new URL(`/src/assets/skills/${name}.svg`, import.meta.url);

    const emptySkillCells = (level: number) => 6 - level;

    return {
      getSkillImg,
      emptySkillCells,
      t,
    };
  },
});
