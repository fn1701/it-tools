import { Devices } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.ipv6-eui64-to-mac.title'),
  path: '/ipv6-eui64-to-mac',
  description: translate('tools.ipv6-eui64-to-mac.description'),
  keywords: ['ipv6', 'eui64', 'mac', 'converter'],
  component: () => import('./ipv6-eui64-to-mac.vue'),
  icon: Devices,
  createdAt: new Date(),
});
