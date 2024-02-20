import { PropType, computed, defineComponent, reactive, ref, watch } from 'vue';
import { Skill, SkillsSortOption } from '@/types';
import { useI18n } from 'vue-i18n';
import { sortSkills } from '@/hooks/data';
import escapeStringRegexp from 'escape-string-regexp';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import CardGrid from '@/components/card-grid/CardGrid.vue';
import SkillCard from '@/components/skill-card/SkillCard.vue';
import SkillsSelectSort from '@/components/skills-select-sort/SkillsSelectSort.vue';
import { IconoirProvider, Box3dCenter } from '@iconoir/vue';
import { skillsSortOptions } from '@/data';

export default defineComponent({
  components: {
    IconoirProvider,
    Box3dCenter,
    SearchBar,
    SkillCard,
    CardGrid,
    SkillsSelectSort,
  },
  props: {
    skills: { type: Array as PropType<Skill[]>, required: true },
  },
  setup(props) {
    const { t } = useI18n();

    const search = ref('');
    const selectedSortOption = ref(skillsSortOptions[0]);
    const sortedSkills = ref(sortSkills(props.skills));

    const searchResults = computed(() => {
      if (search.value === '') {
        return sortedSkills.value;
      }

      const re = new RegExp(escapeStringRegexp(search.value), 'i');
      return sortedSkills.value.filter(
        (skill) =>
          skill.name.match(re) ||
          t(skill.label).match(re) ||
          t(skill.description).match(re)
      );
    });

    watch(selectedSortOption, (newValue: SkillsSortOption) => {
      sortedSkills.value = sortSkills(
        props.skills,
        newValue.id,
        newValue.direction
      );
    });

    return {
      search,
      selectedSortOption,
      searchResults,
      sortedSkills,
      t,
    };
  },
});
