module.exports = {
  multipass: true,
  // js2svg: {
  //   indent: 2,
  //   pretty: true,
  // },
  plugins: [
    'preset-default',
    'removeDimensions',
    'convertStyleToAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['path:(fill|stroke)', 'fill'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
          },
          {
            width: '2em',
          },
          {
            height: '2em',
          },
        ],
      },
    },
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
    {
      name: 'convertPathData',
      params: {
        floatPrecision: 1,
      },
    },
  ],
};

// electronics-lg.svg:
// Done in 34 ms!
// 5.091 KiB - 46.3% = 2.733 KiB

// fabric-lg.svg:
// Done in 93 ms!
// 98.732 KiB - 64.6% = 34.984 KiB

// metal-lg.svg:
// Done in 15 ms!
// 8.488 KiB - 31.2% = 5.837 KiB

// printing-lg.svg:
// Done in 10 ms!
// 10.504 KiB - 34.3% = 6.899 KiB

// wood-lg.svg:
// Done in 11 ms!
// 18.173 KiB - 14.3% = 15.574 KiB

// fabric.svg:
// Done in 54 ms!
// 22.645 KiB - 57.9% = 9.527 KiB

// wood.svg:
// Done in 12 ms!
// 11.755 KiB - 20.7% = 9.321 KiB
