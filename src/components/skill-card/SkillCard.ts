import { Skill } from '@/types';
import { PropType, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import VueMarkdown from 'vue-markdown-render';

export default defineComponent({
  components: {
    VueMarkdown,
  },
  props: {
    skill: { type: Object as PropType<Skill>, required: true },
  },
  setup() {
    const { t } = useI18n();

    const getSkillImg = (name: string) =>
      new URL(`/src/assets/skills/${name}.svg`, import.meta.url).toString();

    const emptySkillCells = (level: number) => 6 - level;

    return {
      t,
      getSkillImg,
      emptySkillCells,
    };
  },
});
