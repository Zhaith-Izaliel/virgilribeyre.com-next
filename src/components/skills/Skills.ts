import { PropType, computed, defineComponent, ref } from 'vue';
import { Skill } from '@/types';
import { useI18n } from 'vue-i18n';
import VueMarkdown from 'vue-markdown-render';
import {
  Search,
  NavArrowDown,
  NavArrowUp,
  IconoirProvider,
  Box3dCenter,
} from '@iconoir/vue';

export default defineComponent({
  components: {
    VueMarkdown,
    IconoirProvider,
    Search,
    NavArrowDown,
    NavArrowUp,
    Box3dCenter,
  },
  props: {
    skills: { type: Array as PropType<Skill[]>, required: true },
    defaultMaxShown: { type: Number, default: () => 3 },
  },
  setup(props) {
    const { t } = useI18n();

    const state = {
      search: ref(''),
      showMore: ref(false),
    };

    const maxSkills = computed(() =>
      state.showMore.value ? props.skills.length : props.defaultMaxShown
    );

    const shownSkills = computed(() => {
      if (state.search.value === '') {
        return props.skills.slice(0, maxSkills.value);
      }
      const re = new RegExp(state.search.value);
      return props.skills.filter(
        (skill) => skill.name.match(re) || t(skill.label).match(re)
      );
    });

    const showMore = () => {
      state.showMore.value = !state.showMore.value;
    };

    const getSkillImg = (name: string) =>
      new URL(`/src/assets/skills/${name}.svg`, import.meta.url);

    const emptySkillCells = (level: number) => 6 - level;

    return {
      getSkillImg,
      emptySkillCells,
      state,
      shownSkills,
      showMore,
      t,
    };
  },
});
