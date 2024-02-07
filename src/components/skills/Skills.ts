import { PropType, computed, defineComponent, ref } from 'vue';
import { Skill } from '@/types';
import { useI18n } from 'vue-i18n';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import CardGrid from '@/components/card-grid/CardGrid.vue';
import SkillCard from '@/components/skill-card/SkillCard.vue';
import { IconoirProvider, Box3dCenter } from '@iconoir/vue';

export default defineComponent({
  components: {
    IconoirProvider,
    Box3dCenter,
    SearchBar,
    SkillCard,
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

    return {
      state,
      searchResults,
      t,
    };
  },
});
