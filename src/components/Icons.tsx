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
  search: (attrs: any) =>
    h(
      'svg',
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        class: "bi bi-search",
        viewBox: "0 0 16 16",
        ...attrs,
      },
      [
        h('path', {
          d: 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0',
        }),
      ],
    ),
  home: (attrs: any) =>
    h('svg', {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      class: "bi bi-house-door",
      viewBox: "0 0 16 16",
      ...attrs,
    },
      [
        h('path', {
          d: 'M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z',
        }),

      ]),
  plus: (attrs: any) =>
    h('svg', {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      class: "bi bi-plus-circle",
      viewBox: "0 0 16 16",
      ...attrs,
    },
      [
        h('path', {
          d: 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16',
        }),
        h('path', {
          d: 'M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4',
        }),
      ]),
  notifi: (attrs: any) =>
    h('svg', {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      class: "bi bi-bell",
      viewBox: "0 0 16 16",
      ...attrs,
    },
      [
        h('path', {
          d: 'M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6',
        }),
      ]),
  avatar: (attrs: any) =>
    h('svg', {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      class: "bi bi-person",
      viewBox: "0 0 16 16",
      ...attrs,
    },
      [
        h('path', {
          d: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z',
        }),
      ]),
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
