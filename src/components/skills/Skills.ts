import { PropType, computed, defineComponent, ref } from 'vue';
import { Skill } from '@/types';
import { useI18n } from 'vue-i18n';
import VueMarkdown from 'vue-markdown-render';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import CardGrid from '@/components/card-grid/CardGrid.vue';
import Card from '@/components/card/Card.vue';
import { IconoirProvider, Box3dCenter } from '@iconoir/vue';

export default defineComponent({
  components: {
    VueMarkdown,
    IconoirProvider,
    Box3dCenter,
    SearchBar,
    Card,
    CardGrid,
  },
  props: {
    skills: { type: Array as PropType<Skill[]>, required: true },
  },
  setup(props) {
    const { t } = useI18n();

    const state = {
      search: ref(''),
    };

    const searchResults = computed(() => {
      if (state.search.value === '') {
        return props.skills;
      }
      const re = new RegExp(state.search.value);
      return props.skills.filter(
        (skill) => skill.name.match(re) || t(skill.label).match(re)
      );
    });

    const getSkillImg = (name: string) =>
      new URL(`/src/assets/skills/${name}.svg`, import.meta.url);

    const emptySkillCells = (level: number) => 6 - level;

    return {
      getSkillImg,
      emptySkillCells,
      state,
      searchResults,
      t,
    };
  },
});
