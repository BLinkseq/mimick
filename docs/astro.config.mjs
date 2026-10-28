// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUiTweaks from 'starlight-ui-tweaks'
import starlightScrollToTop from 'starlight-scroll-to-top'
import codeblocks from 'starlight-codeblocks';

export default defineConfig({
  site: 'https://blinkseq.github.io/mimick',
  base: '/mimick',
	integrations: [
    starlight({
      customCss: ['./src/style/global.css'],
      title: 'Mimick',
      logo: { src: '/src/assets/mimick_logo.png', replacesTitle: true },
      favicon: '/favicon.png',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/BLinkseq/mimick' }],
      lastUpdated: true,
      pagination: false,
      editLink: {
        baseUrl: 'https://github.com/blinkseq/mimick/edit/main/docs/',
      },
      sidebar: [
        { slug: 'install' },
        { slug: 'usage' },
        { slug: 'data_formats' },
        { slug: 'algorithm' },
      ],
      plugins: [
        codeblocks(),
        starlightUiTweaks({
          navbarLinks: [
            { label : 'Version: 3.1', href: "javascript:void(0);"},
            { label: "BLink-seq", href: "https://blinkseq.github.io"},
        ],
      }),
        starlightScrollToTop({
          showProgressRing: true,
          progressRingColor: '#b288f5',
          borderRadius: '50',
        }),
      ],
		}),
	],
});
