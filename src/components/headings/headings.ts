import { Component, Vue } from 'vue-property-decorator';
import WithRender from './headings.html';
import './headings.scss';

@WithRender
@Component
export default class Headings extends Vue {
}
