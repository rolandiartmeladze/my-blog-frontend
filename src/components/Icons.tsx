import { defineComponent, h } from 'vue';

export type SvgIconProps = {
  name: keyof typeof icons;
} & Partial<SVGElement>;

const icons = {
  menu: (attrs: any) =>
    h(
      'svg',
      { viewBox: '0 0 24 24', fill: 'currentColor', height: '1em', width: '1em', ...attrs },
      [h('path', { d: 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' })]
    ),

  menuMotion: (attrs: any) =>
    h(
      'svg',
      { fill: 'none', viewBox: '0 0 24 24', height: '1em', width: '1em', ...attrs },
      [
        h('path', {
          fill: 'currentColor',
          d: 'M12 5a1 1 0 100 2h8a1 1 0 100-2h-8zM7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM3 18a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z',
        }),
      ]
    ),

  github: (attrs: any) =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'currentColor',
        height: '1em',
        width: '1em',
        ...attrs,
      },
      [
        h('path', {
          d: 'M12 2C6.48 2 2 6.48 2 12c0 4.4 2.9 8.12 6.9 9.46.5.09.68-.21.68-.46 0-.23-.01-.84-.01-1.65-2.82.61-3.42-1.36-3.42-1.36-.46-1.18-1.12-1.49-1.12-1.49-.91-.62.07-.61.07-.61 1.01 0 1.53 1.03 1.53 1.03.9 1.55 2.36 1.1 2.93.84.09-.64.35-1.1.63-1.35-2.04-.23-4.18-1.02-4.18-4.54 0-.99.35-1.81.92-2.45-.09-.23-.4-1.13.08-2.33 0 0 .77-.25 2.53.95.74-.21 1.53-.31 2.31-.31s1.57.1 2.31.31c1.76-1.2 2.53-.95 2.53-.95.48 1.2.18 2.1.08 2.33.57.64.92 1.46.92 2.45 0 3.53-2.14 4.31-4.18 4.54.34.29.63.87.63 1.64 0 1.18-.01 2.13-.01 2.41 0 .25.18.56.69.46C19.1 20.12 22 16.4 22 12c0-5.52-4.48-10-10-10z',
        }),
      ]
    ),

  gmail: (attrs: any) =>
    h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'currentColor',
        height: '1em',
        width: '1em',
        ...attrs,
      },
      [
        h('path', {
          d: 'M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z',
        }),
      ]
    ),
};

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String as () => keyof typeof icons,
      required: true,
    },
  },
  setup(props, { attrs }) {
    const IconComponent = icons[props.name];
    return () => IconComponent?.(attrs) || null;
  },
});
