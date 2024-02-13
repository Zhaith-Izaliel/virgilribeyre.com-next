import { PropType, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import CardGrid from '@/components/card-grid/CardGrid.vue';
import ProjectCard from '@/components/project-card/ProjectCard.vue';
import { IconoirProvider, BookmarkBook } from '@iconoir/vue';
import { Project } from '@/types';

export default defineComponent({
  components: {
    CardGrid,
    ProjectCard,
    IconoirProvider,
    BookmarkBook,
  },
  props: {
    projects: { type: Array as PropType<Project[]>, required: true },
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
